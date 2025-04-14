import Image from 'next/image';
import React from 'react';
import { FaApple } from 'react-icons/fa';
import { FaArrowRightLong } from 'react-icons/fa6';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import { LiaLongArrowAltRightSolid } from 'react-icons/lia';

function FoodSaver() {
    return (
        <section className='foodSaver_section'>
            <article>
                <p className='recommendation'>Our Recommendation</p>
                <h2>Get to know Our second App</h2>
                <h3>Food Saver</h3>
                <p className='subHeading'>
                    Track Your Food, Reduce Waste, Stay Healthy
                </p>
                <div className='buttons-wrapper'>
                    <button
                        className='app-btn'
                        onClick={() =>
                            window.open(
                                'https://apps.apple.com/pl/app/',
                                '_blank'
                            )
                        }
                    >
                        <FaApple className='icon' /> Get on the
                        <span>App Store</span>
                    </button>

                    <button
                        className='page-btn'
                        onClick={() =>
                            window.open(
                                'https://inspirer10.github.io/expiration-reminder/',
                                '_blank'
                            )
                        }
                    >
                        Visit page
                        <LiaLongArrowAltRightSolid className='icon' />
                    </button>
                </div>
            </article>

            {/* <Image
                className='app-image'
                src={'/foodSaver.jpg'}
                height={1500}
                width={1500}
                alt='Food Saver App'
            /> */}

            <aside className='food-emojis-wrapper'>
                <div className='emoji'>🥩</div>
                <div className='emoji'>🥝</div>
                <div className='emoji'>🍞</div>
                <div className='emoji'>🥕</div>
                <div className='emoji'>🧃</div>
            </aside>
        </section>
    );
}

export default FoodSaver;
