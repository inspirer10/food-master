import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import AllRecipesList from '@/Components/AllRecipesList';
import Head from 'next/head';

function allRecipes() {
    return (
        <>
            <Head>
                <title>Lista przepisów | Food Master</title>
                <meta
                    name='description'
                    content='Przeglądaj wszystkie nasze przepisy'
                />
            </Head>
            <Header />
            <AllRecipesList />
            <Footer />
        </>
    );
}

export default allRecipes;
