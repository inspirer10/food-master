import React from 'react';

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

    return (
        <section className='faq_section'>
            <h2>Any questions?</h2>
            <p className='subHeading'>
                Understanding Food Master - Questions Our Users Commonly Ask
            </p>

            {faqData.map(({ id, question, answer }) => (
                <div className='faq-wrapper' key={id}>
                    <h5 className='number'>{id}</h5>
                    <h6 className='question'>{question}</h6>
                    <p className='answer'>{answer}</p>
                </div>
            ))}
        </section>
    );
}

export default FAQ;
