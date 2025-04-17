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
                    <a
                        onClick={() =>
                            window.scrollTo({ top: 0, behavior: 'smooth' })
                        }
                    >
                        Home
                    </a>
                    <a href='#recipesList'>Recipes</a>
                    <a href='#whyUs'>Why Us?</a>
                    <a href='/favoriteRecipes'>Favorites</a>
                    <a href='#faq'>FAQ</a>
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
