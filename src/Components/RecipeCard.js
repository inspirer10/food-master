import React from 'react';
import Image from 'next/image';
import { MdAccessTime } from 'react-icons/md';
import { IoFlameSharp } from 'react-icons/io5';
import { FaRegHeart } from 'react-icons/fa';

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
    return (
        <div
            className='recipe_card'
            //style={{ backgroundImage: `url(${image})` }}
        >
            <Image
                className='recipe-thumbnail'
                src={image}
                fill
                alt='recipe thumbnail'
            />

            <div className='favorite-wrapper'>
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
        </div>
    );
}

export default RecipeCard;
