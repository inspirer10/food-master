import React from 'react';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import AllRecipesList from '@/Components/AllRecipesList';
import Head from 'next/head';

function recipesList() {
    return (
        <>
            <Head>
                <title>Lista przepisów | Food Master</title>
                <meta
                    name='description'
                    content='Przeglądaj nasze ulubione przepisy'
                />
            </Head>
            <Header />
            <AllRecipesList />
            <Footer />
        </>
    );
}

export default recipesList;
