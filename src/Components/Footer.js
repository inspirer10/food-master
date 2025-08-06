import Link from 'next/link';
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
                        <Link href='/breakfast'>Breakfast</Link>
                    </p>
                    <p>
                        <Link href='/lunch'>Lunch</Link>
                    </p>
                    <p>
                        <Link href='/dinner'>Dinner</Link>
                    </p>
                    <p>
                        <Link href='/snacks'>Snacks</Link>
                    </p>
                </div>
                <div className='links-wrapper'>
                    <h6>User Account</h6>
                    <p>
                        <Link href='/profile'>My Profile</Link>
                    </p>
                    <p>
                        <Link href='/favorites'>Saved Recipes</Link>
                    </p>
                    <p>
                        <Link href='/planner'>Meal Planner</Link>
                    </p>
                    <p>
                        <Link href='/settings'>Settings</Link>
                    </p>
                </div>
                <div className='links-wrapper'>
                    <h6>About Us</h6>
                    <p>
                        <Link href='/about'>Our Story</Link>
                    </p>
                    <p>
                        <Link href='/team'>FAQ</Link>
                    </p>
                    <p>
                        <Link href='/blog'>Blog</Link>
                    </p>
                    <p>
                        <Link href='/careers'>Careers</Link>
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
