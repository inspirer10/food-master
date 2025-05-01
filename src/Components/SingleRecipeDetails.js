import Image from 'next/image';
import React, { useState } from 'react';
import { SiTicktick } from 'react-icons/si';
import { GoPeople } from 'react-icons/go';
import { BsPeopleFill } from 'react-icons/bs';

function SingleRecipeDetails({
    name,
    image,
    type,
    time,
    kcal,
    proteins,
    carbons,
    fats,
    servings,
    ingredients,
    difficulty,
    tags,
    instructions,
}) {
    const [activeStates, setActiveStates] = useState(
        new Array(ingredients.length).fill(false)
    );

    const [doneStates, setDoneStates] = useState(
        new Array(instructions.length).fill(false)
    );

    const toggleActive = (index) => {
        setActiveStates((prevStates) =>
            prevStates.map((state, i) => (i === index ? !state : state))
        );
    };

    const toggleDone = (index) => {
        setDoneStates((prevStates) =>
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
                        <p>
                            for {servings} <BsPeopleFill className='icon' />
                        </p>
                    </div>

                    <div className='detailed-info_wrapper'>
                        <p>
                            {kcal} <span>kcal</span>
                        </p>
                        <p>
                            {proteins} <span>proteins</span>
                        </p>
                        <p>
                            {carbons} <span>carbons</span>
                        </p>
                        <p>
                            {fats} <span>fats</span>
                        </p>
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
                <h2 className='preparation_heading'>FOOD PREPARATION</h2>
                <p className='subHeading'>
                    List of steps you need to follow to prepare this delicious
                    meal
                </p>

                <div className='steps-wrapper'>
                    {instructions.map((step, index) => (
                        <p
                            key={index}
                            onClick={() => toggleDone(index)}
                            className={doneStates[index] ? 'done step' : 'step'}
                        >
                            <span>0{index + 1}. </span>
                            {step}
                            <SiTicktick
                                className={
                                    doneStates[index] ? 'done icon' : 'icon'
                                }
                            />
                        </p>
                    ))}
                </div>
            </article>

            <Image
                src={image}
                height={500}
                width={500}
                alt=''
                style={{ objectFit: 'cover', overflow: 'visible' }}
            />
        </section>
    );
}

export default SingleRecipeDetails;
