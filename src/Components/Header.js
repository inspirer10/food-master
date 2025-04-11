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
                    <a>Recipes</a>
                    <a>Testimonials</a>
                    <a>FAQ</a>
                </div>
                <button>Get Started</button>
            </nav>
        </header>
    );
}

export default Header;
