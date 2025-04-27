import React from 'react';

function SingleRecipe({
    name,
    type,
    kcal,
    proteins,
    carbons,
    fats,
    ingredients,
    difficulty,
    tags,
}) {
    return (
        <section className='single-recipe_section'>
            <h2>{name}</h2>
            <p>{type}</p>
            <p>{difficulty}</p>
            <p>{tags}</p>
            <p>{ingredients}</p>
        </section>
    );
}

export default SingleRecipe;
