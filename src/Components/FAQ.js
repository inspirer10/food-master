import React from 'react';
import { motion } from 'framer-motion';

function FAQ() {
    const faqData = [
        {
            id: '01',
            question: 'How do I save my favorite recipes?',
            answer: 'Click the heart icon on any recipe card or detail page. All saved recipes will appear in your Favorites section, accessible from the main menu.',
        },
        {
            id: '02',
            question: 'Can I adjust serving sizes for recipes?',
            answer: 'Yes! On each recipe page, use the serving size adjuster that automatically recalculates ingredient quantities based on your needs.',
        },
        {
            id: '03',
            question: 'How accurate is the nutritional information?',
            answer: 'Our nutritional data is calculated using a comprehensive food database. While we strive for accuracy, slight variations may occur based on specific brands and measurements.',
        },
        {
            id: '04',
            question: 'Can I submit my own recipes to Food Master?',
            answer: "Absolutely! Navigate to the 'Submit Recipe' section in your profile, fill out the details and submit for review.",
        },
        {
            id: '05',
            question: 'Are there options for dietary restrictions?',
            answer: 'Yes, Food Master offers filtering for various dietary needs including gluten-free, dairy-free, vegetarian, vegan, keto, and more.',
        },
    ];

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

    return (
        <section className='faq_section' id='faq'>
            <motion.h2
                variants={fadeInUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                Any questions?
            </motion.h2>
            <motion.p
                className='subHeading'
                variants={fadeInUp}
                initial='hidden'
                whileInView='visible'
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
                Understanding Food Master - Questions Our Users Commonly Ask
            </motion.p>

            {faqData.map(({ id, question, answer }, index) => (
                <motion.div
                    className='faq-wrapper'
                    key={id}
                    variants={fadeInUp}
                    initial='hidden'
                    whileInView='visible'
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{
                        duration: 0.6,
                        delay: 0.4 + index * 0.125,
                        ease: 'easeOut',
                    }}
                >
                    <h5 className='number'>{id}</h5>
                    <h6 className='question'>{question}</h6>
                    <p className='answer'>{answer}</p>
                </motion.div>
            ))}
        </section>
    );
}

export default FAQ;
