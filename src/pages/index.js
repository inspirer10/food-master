import Header from '@/Components/Header';
import Introduction from '@/Components/Introduction';
import RecipesList from '@/Components/RecipesList';
import Head from 'next/head';
import { useEffect } from 'react';
import Lenis from 'lenis';
import Testimonials from '@/Components/Testimonials';
import FoodSaver from '@/Components/FoodSaver';
import Footer from '@/Components/Footer';
import FAQ from '@/Components/FAQ';

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
                <title>Food Master</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
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
            <FoodSaver />

            <h2 style={{ textAlign: 'center' }}>Team - people behind</h2>

            <FAQ />
            <Footer />
        </>
    );
}
