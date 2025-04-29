import Image from 'next/image';
import React, { useState } from 'react';

function SingleRecipeDetails({
    name,
    image,
    type,
    time,
    kcal,
    proteins,
    carbons,
    fats,
    ingredients,
    difficulty,
    tags,
    instructions,
}) {
    const [activeStates, setActiveStates] = useState(
        new Array(ingredients.length).fill(false)
    );

    const toggleActive = (index) => {
        setActiveStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? !state : state))
        );
    };

    return (
        <section className='single-recipe_section'>
            <div className='upper_wrapper'>
                <main>
                    <div className='tags-wrapper'>
                        {tags.map((tag, index) => (
                            <p key={index} className='recipe-tag'>
                                #{tag}
                            </p>
                        ))}
                    </div>

                    <h2 className='recipe-name'>{name}</h2>
                    <div className='basic-info_wrapper'>
                        <p className='recipe-difficulty'>{difficulty}</p>
                        <p>{time} min</p>
                        <p className='recipe-type'>{type}</p>
                    </div>

                    <h3 className='ingredients-heading'>
                        Essential Ingredients:
                    </h3>
                    <ul className='ingredients-wrapper'>
                        {ingredients.map((ingredient, index) => (
                            <li
                                key={index}
                                onClick={() => toggleActive(index)}
                                className={
                                    activeStates[index] ? 'active' : null
                                }
                            >
                                {ingredient},
                            </li>
                        ))}
                    </ul>
                </main>

                <aside>
                    <div className='image-wrapper'>
                        <Image
                            src={image}
                            alt='recipe thumbnail'
                            height={500}
                            width={500}
                        />
                    </div>
                </aside>
            </div>

            <article>
                <p>FOOD PREPARATION</p>

                <div>
                    {instructions.map((step, index) => (
                        <p key={index}>{step}</p>
                    ))}
                </div>
            </article>
        </section>
    );
}

export default SingleRecipeDetails;
