import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { BiSolidFoodMenu, BiFoodTag } from 'react-icons/bi';

function Header() {
    const router = useRouter();
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    const handleSectionRouting = (e, section) => {
        e.preventDefault();

        // Jeśli jesteśmy już na stronie głównej, przewiń do sekcji FAQ
        if (router.pathname === '/') {
            document
                .getElementById(`${section}`)
                ?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // W przeciwnym razie, przekieruj na stronę główną z fragmentem FAQ
            router.push(`/#${section}`);
        }
    };

    return (
        <header className={isVisible ? 'visible' : 'hidden'}>
            <nav>
                <Link className='name' href='/'>
                    <BiSolidFoodMenu className='icon' /> Food Master
                </Link>
                <div className='links-wrapper'>
                    <Link href='/'>Home</Link>

                    <a
                        href='#recipesList'
                        onClick={(e) => handleSectionRouting(e, 'recipesList')}
                    >
                        Top Recipes
                    </a>
                    <a
                        href='#whyUs'
                        onClick={(e) => handleSectionRouting(e, 'whyUs')}
                    >
                        Why Us?
                    </a>
                    <Link href='/favoriteRecipes'>Favorites</Link>
                    <a
                        href='#faq'
                        onClick={(e) => handleSectionRouting(e, 'faq')}
                    >
                        FAQ
                    </a>
                </div>

                <div className='buttons-wrapper'>
                    <button className='contact-btn'>Get in Touch</button>
                    <button className='started-btn'>Get Started</button>
                </div>
            </nav>
        </header>
    );
}

export default Header;
