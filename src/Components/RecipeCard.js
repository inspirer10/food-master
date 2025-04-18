import React, { useRef } from 'react';
import Image from 'next/image';
import { MdAccessTime } from 'react-icons/md';
import { IoFlameSharp } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';
import { ImCheckmark } from 'react-icons/im';

function RecipeCard({
    name,
    image,
    type,
    time,
    kcal,
    proteins,
    carbons,
    fats,
}) {
    const inputRef = useRef(null);

    const handleAddFavorite = () => {
        //add item to dataBase
        console.log(name + ' added to favorite list');
        inputRef.current.classList.add('active');
        //display toast with confirmation

        setTimeout(() => {
            inputRef.current.classList.remove('active');
        }, 2500);
    };

    return (
        <div
            className='recipe_card'
            //style={{ backgroundImage: `url(${image})` }}
        >
            <Image
                className='recipe-thumbnail'
                src={image}
                height={400}
                width={400}
                alt='recipe thumbnail'
            />

            <div className='favorite-wrapper' onClick={handleAddFavorite}>
                <FaRegHeart className='fav-icon' />
            </div>

            <div className='categories-wrapper'>
                <p>
                    <MdAccessTime className='time-icon' />
                    {time} min
                </p>
                <p>{type}</p>
            </div>

            <div className='details-container'>
                <p className='recipe-name'>{name}</p>

                <div className='details-wrapper'>
                    <p className='calories'>
                        <IoFlameSharp className='kcal-icon' /> {kcal} cal
                    </p>

                    <span>{proteins}P</span>
                    <span>{fats}F</span>
                    <span>{carbons}C</span>
                </div>
            </div>

            <div className='toast' ref={inputRef}>
                <ImCheckmark className='icon' />
                <div>
                    <h6>Success !</h6>
                    <p>Added to Favorite List</p>
                </div>
            </div>
        </div>
    );
}

export default RecipeCard;
