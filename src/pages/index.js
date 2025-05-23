import { useEffect } from 'react';
import Head from 'next/head';
import Lenis from 'lenis';

import Header from '@/Components/Header';
import Introduction from '@/Components/Introduction';
import RecipesList from '@/Components/RecipesList';
import Testimonials from '@/Components/Testimonials';
import FoodSaver from '@/Components/FoodSaver';
import Footer from '@/Components/Footer';
import FAQ from '@/Components/FAQ';
import ExploreCuisineType from '@/Components/ExploreCuisineType';

export default function Home() {
    useEffect(() => {
        const lenis = new Lenis();

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
    }, []);

    return (
        <>
            <Head>
                <title>Food Master | Najlepsze przepisy</title>
                <meta name='description' content='Food Master | Best Recipes' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Header />
            <Introduction />
            <RecipesList />
            <Testimonials />
            <ExploreCuisineType />
            <FoodSaver />
            <FAQ />
            <Footer />
        </>
    );
}
