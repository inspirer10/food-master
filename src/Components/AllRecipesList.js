import React, { useState } from 'react';
import { FiGrid, FiSearch } from 'react-icons/fi';
import RecipeCard from './RecipeCard';

const allRecipesData = [
    {
        id: 1,
        name: 'Scrambled Eggs and Bacon',
        image: '/eggs-and-bacon.jpg',
        type: 'breakfast',
        time: 15,
        kcal: 450,
        proteins: 25,
        carbons: 5,
        fats: 35,
    },
    {
        id: 2,
        name: 'Avocado Toast',
        image: '/avocado-toast2.jpg',
        type: 'breakfast',
        time: 10,
        kcal: 320,
        proteins: 8,
        carbons: 30,
        fats: 18,
    },
    {
        id: 3,
        name: 'Greek Yogurt with Berries',
        image: '/greek-yogurt.jpg',
        type: 'snack',
        time: 5,
        kcal: 180,
        proteins: 15,
        carbons: 20,
        fats: 5,
    },
    {
        id: 4,
        name: 'Chicken Caesar Salad',
        image: '/caesar-salad.jpg',
        type: 'lunch',
        time: 20,
        kcal: 380,
        proteins: 30,
        carbons: 12,
        fats: 22,
    },
    {
        id: 5,
        name: 'Beef Stir Fry',
        image: '/beef-stir-fry.jpg',
        type: 'dinner',
        time: 30,
        kcal: 520,
        proteins: 35,
        carbons: 40,
        fats: 20,
    },
    {
        id: 6,
        name: 'Strawberry Banana Smoothie',
        image: '/strawberry-smoothie2.jpg',
        type: 'drink',
        time: 5,
        kcal: 200,
        proteins: 5,
        carbons: 40,
        fats: 2,
    },
    {
        id: 7,
        name: 'Tuna Sandwich',
        image: '/tuna-sandwich.jpg',
        type: 'lunch',
        time: 10,
        kcal: 330,
        proteins: 22,
        carbons: 30,
        fats: 12,
    },
    {
        id: 8,
        name: 'Spaghetti Bolognese',
        image: '/spaghetti.jpg',
        type: 'dinner',
        time: 40,
        kcal: 650,
        proteins: 28,
        carbons: 80,
        fats: 25,
    },
    {
        id: 9,
        name: 'Apple with Peanut Butter',
        image: '/apple-peanut-butter.jpg',
        type: 'snack',
        time: 3,
        kcal: 220,
        proteins: 7,
        carbons: 25,
        fats: 12,
    },
    {
        id: 10,
        name: 'Green Tea Latte',
        image: '/green-tea-latte2.jpg',
        type: 'drink',
        time: 8,
        kcal: 180,
        proteins: 3,
        carbons: 25,
        fats: 8,
    },
    {
        id: 11,
        name: 'Veggie Omelette',
        image: '/veggie-omelette.jpg',
        type: 'breakfast',
        time: 15,
        kcal: 300,
        proteins: 20,
        carbons: 8,
        fats: 22,
    },
    {
        id: 12,
        name: 'Grilled Salmon with Asparagus',
        image: '/grilled-salmon.jpg',
        type: 'dinner',
        time: 25,
        kcal: 420,
        proteins: 40,
        carbons: 10,
        fats: 24,
    },
];

function AllRecipesList() {
    const [filteredRecipes, setFilteredRecipes] = useState(allRecipesData);
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (e) => {
        const newSearchValue = e.target.value;
        setSearchValue(newSearchValue);

        const filteredResults = allRecipesData.filter((item) =>
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
                        {allRecipesData.map(({ id, name }) => (
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
