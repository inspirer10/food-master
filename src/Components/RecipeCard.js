import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { MdAccessTime } from 'react-icons/md';
import { IoFlameSharp } from 'react-icons/io5';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';
import Link from 'next/link';

function RecipeCard({
    id,
    name,
    thumbnail,
    image2,
    type,
    time,
    kcal,
    proteins,
    carbons,
    fats,
}) {
    const [isFavorite, setIsFavorite] = useState(false);
    const addToastRef = useRef(null);
    const removeToastRef = useRef(null);

    /* const handleAddFavorite = (e) => {
        e.preventDefault();
        //add item to dataBase
        console.log(name + ' added to favorite list');
        toastRef.current.classList.add('active');
        //display toast with confirmation

        setTimeout(() => {
            toastRef.current.classList.remove('active');
        }, 2500);
    }; */

    useEffect(() => {
        // Check if recipe is in favorites on component mount
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        setIsFavorite(favorites.some((fav) => fav.id === id));
    }, [id]);

    const handleAddFavorite = (e) => {
        e.preventDefault(); // Prevent link navigation

        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');

        if (isFavorite) {
            // Remove from favorites
            const newFavorites = favorites.filter((fav) => fav.id !== id);
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            setIsFavorite(false);
            console.log(name + ' removed from favorite list');
            // Show remove toast
            removeToastRef.current.classList.add('active');
            setTimeout(() => {
                removeToastRef.current.classList.remove('active');
            }, 2000);
        } else {
            // Add to favorites
            const newFavorite = {
                id,
                name,
                thumbnail,
                type,
                time,
                kcal,
            };

            localStorage.setItem(
                'favorites',
                JSON.stringify([...favorites, newFavorite])
            );
            setIsFavorite(true);
            console.log(name + ' added to favorite list');
            // Show add toast

            addToastRef.current.classList.add('active');
            setTimeout(() => {
                addToastRef.current.classList.remove('active');
            }, 2000);
        }
    };

    return (
        <div
            className='recipe_card'
            //style={{ backgroundImage: `url(${image})` }}
        >
            <Link href={`/recipe/${name}`} style={{ display: 'contents' }}>
                <Image
                    className='recipe-thumbnail'
                    src={thumbnail}
                    height={400}
                    width={400}
                    alt='recipe thumbnail'
                    loading='lazy'
                    //placeholder='blur'
                    //blurDataURL={thumbnail}
                />
            </Link>

            <div
                className='favorite-wrapper'
                onClick={(e) => handleAddFavorite(e)}
            >
                {isFavorite ? (
                    <FaHeart
                        className='fav-icon active'
                        style={{ color: '#d32f2f' }}
                    />
                ) : (
                    <FaRegHeart className='fav-icon' />
                )}
            </div>

            <div className='categories-wrapper'>
                <p>
                    <MdAccessTime className='time-icon' />
                    {time} min
                </p>
                <p>{type}</p>
            </div>

            <div className='details-container'>
                <Link href={`/recipe/${name}`} className='recipe-name'>
                    {name}
                </Link>

                <div className='details-wrapper'>
                    <p className='calories'>
                        <IoFlameSharp className='kcal-icon' /> {kcal} cal
                    </p>

                    <span>{proteins}P</span>
                    <span>{fats}F</span>
                    <span>{carbons}C</span>
                </div>
            </div>

            <div className='toast'>
                <ImCheckmark className='icon' />
                <div>
                    <h6>Success !</h6>
                    <p>Added to Favorite List</p>
                </div>
            </div>

            {/* Success Toast */}
            <div className='toast success' ref={addToastRef}>
                <ImCheckmark className='icon' />
                <div className='toast-content'>
                    <h6>Added to Favorites!</h6>
                    <p>
                        <span>{name}</span> has been added
                    </p>
                </div>
            </div>

            {/* Remove Toast */}
            <div className='toast remove' ref={removeToastRef}>
                <FaRegHeart className='icon' />
                <div className='toast-content'>
                    <h6>Removed from Favorites</h6>
                    <p>
                        <span>{name}</span> has been removed
                    </p>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
