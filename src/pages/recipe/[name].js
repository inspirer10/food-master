import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

import { recipesData } from '/data/recipesData.js';

function RecipeDetails() {
    const router = useRouter();

    // Dodaj warunek na brak ID podczas pierwszego renderowania
    /*  if (router.isFallback || !router.query.name) {
        return (
            <>
                <Header />
                <main className=''>
                    <h2>Ładowanie...</h2>
                </main>
                <Footer />
            </>
        );
    } */

    const { name } = router.query;

    // Znajdź przepis o podanym ID
    const decodedName = decodeURIComponent(name);
    const recipe = recipesData.find((recipe) => recipe.name === decodedName);

    return (
        <>
            <Head>
                <title>{name} | Food Master</title>
                <meta
                    name='description'
                    content='Przeglądaj wszystkie nasze przepisy'
                />
            </Head>
            <Header />
            <br /> <br /> <br /> <br />
            <h1>recipe[{name}]</h1> <br /> <br />
            <p>recipe[{recipe.instructions}]</p>
            <Footer />
        </>
    );
}

export default RecipeDetails;
