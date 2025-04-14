import React from 'react';
import { BsClockHistory, BsTransparency } from 'react-icons/bs';
import { MdOutlineFiberSmartRecord } from 'react-icons/md';
import { GrMoney } from 'react-icons/gr';
import { FaQuoteLeft } from 'react-icons/fa';
import Image from 'next/image';

import { FaWeightScale } from 'react-icons/fa6';
import { GiWeightLiftingUp } from 'react-icons/gi';
import { LuLeafyGreen } from 'react-icons/lu';
import { TbHealthRecognition } from 'react-icons/tb';
import { FaBowlFood } from 'react-icons/fa6';

function Testimonials() {
    const benefitsData = [
        {
            id: 1,
            title: 'Nutritional Transparency',
            description:
                'Your health is prioritized with detailed nutritional information for every recipe.',
            icon: <BsTransparency />,
        },
        {
            id: 2,
            title: 'Time-Saving Solutions',
            description:
                'Prepare quality meals efficiently with our time-optimized recipes and meal planning tools.',
            icon: <BsClockHistory />,
        },
        {
            id: 3,
            title: 'Budget-Friendly Options',
            description:
                'Benefit from cost-effective recipes and smart shopping lists that reduce food waste.',
            icon: <GrMoney />,
        },
        {
            id: 4,
            title: 'Intuitive Interface',
            description:
                "An elegant, user-friendly design that's easy to navigate, even for cooking beginners.",
            icon: <MdOutlineFiberSmartRecord />,
        },
    ];

    const usersTestimonials = [
        {
            id: 1,
            quote: 'Food Master transformed how I cook at home. The detailed nutritional information helps me maintain a balanced diet while enjoying delicious meals.',
            name: 'Emma',
            country: 'United States',
            image: '/testimonials_person2.jpg',
        },
        {
            id: 2,
            quote: 'As a busy parent, the time-saving recipes have been a lifesaver. I can now prepare healthy meals for my family in under 30 minutes!',
            name: 'Thomas',
            country: 'Germany',
            image: '/testimonials_person1.jpg',
        },
        {
            id: 3,
            quote: 'The budget-friendly meal plans helped me reduce my grocery spending by 30% while still eating varied and nutritious meals. Incredible value!',
            name: 'Sophia',
            country: 'Canada',
            image: '/testimonials_person3.jpg',
        },
        /*
        {
            id: 4,
            quote: 'I never knew cooking could be this simple. The interface makes finding and following recipes so intuitive, even for a kitchen novice like me.',
            name: 'Marcin Kowalski',
            country: 'Poland',
            userImage: 'marcin-kowalski.jpg',
        },
        {
            id: 5,
            quote: "The diverse recipe collection introduced my family to global cuisines we never tried before. My kids now look forward to our 'world food nights'!",
            name: 'Isabella Rossi',
            country: 'Italy',
            userImage: 'isabella-rossi.jpg',
        },
        {
            id: 6,
            quote: "As someone with dietary restrictions, finding suitable recipes used to be challenging. Food Master's filtering options make it effortless to find delicious gluten-free meals.",
            name: 'James Taylor',
            country: 'United Kingdom',
            userImage: 'james-taylor.jpg',
        }, */
    ];
    return (
        <section className='testimonials_section'>
            <h2>Why Choose Food Master?</h2>
            <p className='subHeading'>
                Benefits designed to provide a seamless, delicious, and
                accessible cooking experience for all users
            </p>

            <article className='benefits-container'>
                {benefitsData.map(({ id, title, description, icon }) => (
                    <div className='card' key={id}>
                        <span>{icon}</span>
                        <h5>{title}</h5>
                        <p className='text'>{description}</p>
                    </div>
                ))}
            </article>

            <h3 className='additional-benefits-header'>Food Master...</h3>
            <article className='additional-benefits-container'>
                <div>
                    <p>
                        For <span>Weight Loss</span>
                    </p>
                    <GiWeightLiftingUp className='icon' />
                </div>
                <div>
                    <p>
                        For <span>Better Diet</span>
                    </p>

                    <FaBowlFood className='icon' />
                </div>
                <div>
                    <p>
                        For <span>Green Meals</span>
                    </p>

                    <LuLeafyGreen className='icon' />
                </div>
                <div>
                    <p>
                        For <span>Healthy Life</span>
                    </p>

                    <TbHealthRecognition className='icon' />
                </div>
            </article>

            <article className='happy-users-container'>
                <h3>See what users think about us!</h3>
                <p className='subHeading'>
                    Clients experience from all around the globe
                </p>

                <div className='cards-wrapper'>
                    {usersTestimonials.map(
                        ({ id, quote, name, country, image }) => (
                            <div className='card' key={id}>
                                <Image
                                    className='image'
                                    src={image}
                                    alt={name + 'thumbnail'}
                                    fill
                                />
                                <div className='blur-overlay' />

                                <div className='text-content'>
                                    <FaQuoteLeft className='icon' />
                                    <p className='quote'>{quote}</p>
                                    <p className='user'>
                                        &mdash; {name}, {country}
                                    </p>
                                </div>
                            </div>
                        )
                    )}
                </div>
            </article>
        </section>
    );
}

export default Testimonials;
