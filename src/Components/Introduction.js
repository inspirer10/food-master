import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { IoRestaurant } from 'react-icons/io5';

import Image from 'next/image';

function Introduction() {
    return (
        <>
            <section className='introduction_section'>
                <motion.div
                    className='preHeading'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.75, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                >
                    <p>
                        Explore great meals just for you <IoRestaurant />
                    </p>

                    <div className='images_wrapper'>
                        <Image
                            className='image'
                            //src='/green-tea-latte2.jpg'
                            src='/polish.jpg'
                            alt='meal thumbnail'
                            width={500}
                            height={500}
                        />
                        <Image
                            className='image'
                            // src='/testimonials_person1.jpg'
                            src='/italian.jpg'
                            alt='meal thumbnail'
                            width={250}
                            height={250}
                        />
                        <Image
                            className='image'
                            // src='/green-tea-latte2.jpg'
                            src='/french.jpg'
                            alt='meal thumbnail'
                            width={250}
                            height={250}
                        />
                    </div>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.25, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                >
                    Find <span className='colored-span'>perfect recipes</span>{' '}
                    for
                    <span className='serif-span'>
                        {' '}
                        breakfast, lunch, dinner
                    </span>{' '}
                    and more
                </motion.h2>

                <motion.p
                    className='subHeading'
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1.5, ease: 'easeInOut' }}
                    viewport={{ once: true }}
                >
                    Simplifying healthy eating with delicious meal ideas
                </motion.p>

                <button>
                    <a href='/recipesList'>
                        Your Free Master Recipes
                        <div className='arrow-wrapper'>
                            <FaArrowRight className='arrow-icon' />
                        </div>
                    </a>
                </button>
            </section>

            <article className='app-stats-container'>
                <div className='stat-wrapper'>
                    <h2>
                        700+
                        <br />
                        Recipes
                    </h2>
                    <p>Diverse dishes for every taste and occasion</p>
                </div>

                <div className='stat-wrapper'>
                    <h2>
                        100 000+
                        <br />
                        Users
                    </h2>
                    <p>Trusted by home cooks everywhere</p>
                </div>

                <div className='stat-wrapper'>
                    <h2>
                        5<br />
                        Categories
                    </h2>
                    <p>Breakfast, lunch, dinner, snacks & drinks</p>
                </div>

                <div className='stat-wrapper'>
                    <h2>
                        <span>4.88</span>
                        <br />
                        Stars
                    </h2>
                    <p>Average rating from satisfied users</p>
                </div>
            </article>
        </>
    );
}

export default Introduction;
