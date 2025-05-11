import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';
import { recipesData } from '/data/recipesData.js';
function RecommendedRecipes() {
    const [randomRecipes, setRandomRecipes] = useState([]);

    useEffect(() => {
        // Function to get 3 random recipes
        const getRandomRecipes = () => {
            const shuffled = [...recipesData].sort(() => 0.5 - Math.random());
            return shuffled.slice(0, 3);
        };

        setRandomRecipes(getRandomRecipes());
    }, []);

    return (
        <section className='recommendedRecipes_section'>
            <h2>RECOMENDED RECIPES</h2>
            <p className='subHeading'>Special meals just for you</p>

            <div className='recipes-container'>
                {randomRecipes.map(
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
            </div>
        </section>
    );
}

export default RecommendedRecipes;
