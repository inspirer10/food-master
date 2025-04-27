import React, { useState } from 'react';
import { FiGrid, FiSearch } from 'react-icons/fi';
import RecipeCard from './RecipeCard';

import { recipesData } from '/data/recipesData.js';

function AllRecipesList() {
    const [filteredRecipes, setFilteredRecipes] = useState(recipesData);
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        const newSearchValue = e.target.value;
        setSearchValue(newSearchValue);

        const filteredResults = recipesData.filter((item) =>
            item.name.toLowerCase().includes(newSearchValue.toLowerCase())
        );

        setFilteredRecipes(filteredResults);
    };
    return (
        <section className='recipes-list_section'>
            <div className='heading-wrapper'>
                <h2>
                    <FiGrid className='icon' /> Our amazing recipes
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
                        {recipesData.map(({ id, name }) => (
                            <option key={id} value={name} />
                        ))}
                    </datalist>
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
                        image,
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
                            image={image}
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
        </section>
    );
}

export default AllRecipesList;
