import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import { MdOutlineViewModule } from 'react-icons/md';
import { FiGrid, FiSearch } from 'react-icons/fi';
import { HiOutlineArrowLongRight } from 'react-icons/hi2';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import Link from 'next/link';

import { recipesData } from '/data/recipesData.js';

const topRecipes = recipesData.filter((recipe) => recipe.id <= 12);

function RecipesList() {
    // const [allRecipes, setAllRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState(topRecipes);
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        const newSearchValue = e.target.value;
        setSearchValue(newSearchValue);

        const filteredResults = topRecipes.filter((item) =>
            item.name.toLowerCase().includes(newSearchValue.toLowerCase())
        );

        setFilteredRecipes(filteredResults);
    };

    return (
        <section className='recipes-list_section' id='recipesList'>
            <h2 className='heading'>Food Master</h2>
            <p className='subHeading'>
                Cook Like a Pro with Our <span>Easy</span> and{' '}
                <span>Tasty</span> Recipes
            </p>

            <div className='heading-wrapper'>
                <h2>
                    <FiGrid className='icon' /> Recipes popular today
                </h2>

                <label>
                    <span className='search-icon'>
                        <FiSearch />
                    </span>
                    <input
                        list='recipes-suggestions'
                        id='search'
                        type='text'
                        placeholder='Spaghetti'
                        onChange={handleInputChange}
                        value={searchValue}
                    />

                    <datalist id='recipes-suggestions'>
                        <option value='Avocado' />
                        <option value='Salmon ' />
                        <option value='Chicken' />
                        <option value='Omelette' />
                        <option value='Eggs' />
                    </datalist>

                    {/*
                    <datalist id='recipes-suggestions'>
                        {topRecipes.map(({ id, name }) => (
                            <option key={id} value={name} />
                        ))}
                    </datalist>
                    */}
                </label>
            </div>

            <article className='recipes-container'>
                {filteredRecipes.length === 0 && (
                    <p className='empty-state'>No recipe found...</p>
                )}

                {filteredRecipes.map(
                    ({
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
                    }) => (
                        <RecipeCard
                            key={id}
                            id={id}
                            name={name}
                            thumbnail={thumbnail}
                            image2={image2}
                            type={type}
                            time={time}
                            kcal={kcal}
                            proteins={proteins}
                            carbons={carbons}
                            fats={fats}
                        />
                    )
                )}
            </article>

            <Link className='more_recipes' href='/allRecipes'>
                and many more <FaArrowRightFromBracket className='icon' />
            </Link>
        </section>
    );
}

export default RecipesList;
