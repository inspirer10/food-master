import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';
import { FiGrid, FiSearch } from 'react-icons/fi';
//import { recipesData } from '/data/recipesData.js';

function FavoritesRecipesList() {
    const categoriesData = [
        { name: 'All' },
        { name: 'Breakfast' },
        { name: 'Dinner' },
        { name: 'Lunch' },
        { name: 'Snack' },
        { name: 'Drink' },
    ];
    const [favoriteRecipes, setFavoriteRecipes] = useState([]);
    const [filteredRecipes, setFilteredRecipes] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [previousSearchedCat, setPreviousSearchedCat] = useState('All');

    // Load favorites from localStorage on component mount
    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        const reversedFavorites = [...favorites].reverse();
        setFavoriteRecipes(reversedFavorites);
        setFilteredRecipes(reversedFavorites);
    }, []);

    const handleInputChange = (e) => {
        const newSearchValue = e.target.value;
        setSearchValue(newSearchValue);

        const filteredResults = favoriteRecipes.filter((item) =>
            item.name.toLowerCase().includes(newSearchValue.toLowerCase())
        );

        setFilteredRecipes(filteredResults);
        setPreviousSearchedCat('All');
    };

    const handleCategoryChoice = (categoryName) => {
        const filteredRecipes = favoriteRecipes.filter((item) =>
            item.type.includes(categoryName)
        );

        if (categoryName === previousSearchedCat || categoryName === 'All') {
            setFilteredRecipes(favoriteRecipes);
            setPreviousSearchedCat('All');
        } else {
            setFilteredRecipes(filteredRecipes);
            setPreviousSearchedCat(categoryName);
        }
    };
    return (
        <section className='recipes-list_section'>
            {favoriteRecipes.length === 0 && (
                <h2 className='empty-state'>
                    You need to find your favorite Recipe!
                </h2>
            )}

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
                        {filteredRecipes.map(({ id, name }) => (
                            <option key={id} value={name} />
                        ))}
                    </datalist>
                </label>
            </div>

            <div className='filteredCategories-wrapper'>
                {categoriesData.map(({ name }, index) => (
                    <p
                        key={index}
                        onClick={() => handleCategoryChoice(`${name}`)}
                        className={
                            previousSearchedCat === name ? 'active' : null
                        }
                    >
                        #{name}
                    </p>
                ))}
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
                        difficulty,
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
                            difficulty={difficulty}
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

export default FavoritesRecipesList;
