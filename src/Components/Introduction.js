import React from 'react';
import { backIn, motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa6';
import { IoRestaurant } from 'react-icons/io5';

import Image from 'next/image';
import Link from 'next/link';

function Introduction() {
    const fadeInUp = {
        hidden: {
            opacity: 0,
            y: 20,
        },
        visible: {
            opacity: 1,
            y: 0,
        },
    };

    const statsData = [
        {
            number: '700+',
            numberType: 'Recipes',
            description: 'Diverse dishes for every taste and occasion',
        },
        {
            number: '100 000+',
            numberType: 'Users',
            description: 'Trusted by home cooks everywhere',
        },
        {
            number: '5',
            numberType: 'Categories',
            description: 'Breakfast, lunch, dinner, snacks & drinks',
        },
        {
            number: '4.88',
            highlighted: true,
            numberType: 'Stars',
            description: 'Average rating from satisfied users',
        },
    ];

    return (
        <>
            <section className='introduction_section'>
                <motion.div
                    className='preHeading'
                    variants={fadeInUp}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-50px' }}
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
                    variants={fadeInUp}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-50px' }}
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
                    variants={fadeInUp}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-50px' }}
                >
                    Simplifying healthy eating with delicious meal ideas
                </motion.p>

                <motion.button
                    variants={fadeInUp}
                    initial='hidden'
                    whileInView='visible'
                    transition={{ duration: 0.6, delay: 0.6, ease: 'easeOut' }}
                    viewport={{ once: true, margin: '-50px' }}
                    whileHover={{
                        color: '#003200',
                        backgroundColor: '#90ee90',
                        transition: {
                            duration: 0.2,
                            ease: 'easeInOut',
                        },
                    }}
                    animate={{
                        color: '#FFF',
                        backgroundColor: 'rgb(0, 60, 0)',
                        transition: { duration: 0.2, ease: 'easeInOut' },
                    }}
                >
                    <Link href='/allRecipes'>
                        Your Free Master Recipes
                        <motiondiv className='arrow-wrapper'>
                            <FaArrowRight className='arrow-icon' />
                        </motiondiv>
                    </Link>
                </motion.button>
            </section>

            <article className='app-stats-container'>
                {statsData.map(
                    (
                        { number, numberType, description, highlighted },
                        index
                    ) => (
                        <motion.div
                            key={index}
                            className='stat-wrapper'
                            variants={fadeInUp}
                            initial='hidden'
                            whileInView='visible'
                            transition={{
                                duration: 0.6,
                                delay: 0.8 + index * 0.2,
                                ease: 'easeOut',
                            }}
                            viewport={{ once: true, margin: '-50px' }}
                        >
                            <motion.h2
                                variants={fadeInUp}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 0.9 + index * 0.2,
                                    ease: 'easeOut',
                                }}
                            >
                                {highlighted ? <span>{number}</span> : number}
                                <br /> {numberType}
                            </motion.h2>
                            <motion.p
                                variants={fadeInUp}
                                initial='hidden'
                                whileInView='visible'
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: 1.0 + index * 0.2,
                                    ease: 'easeOut',
                                }}
                            >
                                {description}
                            </motion.p>
                        </motion.div>
                    )
                )}
            </article>
        </>
    );
}

export default Introduction;
