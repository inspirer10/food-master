import React from 'react';

import { FaFacebook, FaTiktok } from 'react-icons/fa';
import { GrYoutube, GrInstagram } from 'react-icons/gr';

function Footer() {
    return (
        <footer>
            <div className='footer_content'>
                <div className='links-wrapper'>
                    <h6>Recipes</h6>
                    <p>
                        <a href='/breakfast'>Breakfast</a>
                    </p>
                    <p>
                        <a href='/lunch'>Lunch</a>
                    </p>
                    <p>
                        <a href='/dinner'>Dinner</a>
                    </p>
                    <p>
                        <a href='/snacks'>Snacks</a>
                    </p>
                </div>
                <div className='links-wrapper'>
                    <h6>User Account</h6>
                    <p>
                        <a href='/profile'>My Profile</a>
                    </p>
                    <p>
                        <a href='/favorites'>Saved Recipes</a>
                    </p>
                    <p>
                        <a href='/planner'>Meal Planner</a>
                    </p>
                    <p>
                        <a href='/settings'>Settings</a>
                    </p>
                </div>
                <div className='links-wrapper'>
                    <h6>About Us</h6>
                    <p>
                        <a href='/about'>Our Story</a>
                    </p>
                    <p>
                        <a href='/team'>FAQ</a>
                    </p>
                    <p>
                        <a href='/blog'>Blog</a>
                    </p>
                    <p>
                        <a href='/careers'>Careers</a>
                    </p>
                </div>
                <div className='links-wrapper'>
                    <h6>Social Media</h6>

                    <div className='icons-wrapper'>
                        <GrInstagram className='icon' />

                        <FaFacebook className='icon' />

                        <FaTiktok className='icon' />

                        <GrYoutube className='icon' />
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
