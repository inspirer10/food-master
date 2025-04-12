import React from 'react';
import { BiSolidFoodMenu, BiFoodTag } from 'react-icons/bi';

function Header() {
    return (
        <header>
            <nav>
                <p className='name'>
                    <BiSolidFoodMenu className='icon' /> Food Master
                </p>
                <div className='links-wrapper'>
                    <a>Home</a>
                    <a>Recipes</a>
                    <a>Why Us?</a>
                    <a>Favorites</a>
                    <a>FAQ</a>
                </div>

                <div className='buttons-wrapper'>
                    <button className='contact-btn'>Get in Touch</button>
                    <button className='-btn'>Get Started</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
