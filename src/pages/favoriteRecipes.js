import FavoritesRecipesList from '@/Components/FavoritesRecipesList';
import Footer from '@/Components/Footer';
import Header from '@/Components/Header';
import Head from 'next/head';
import React from 'react';

function favoriteRecipes() {
    return (
        <>
            <Head>
                <title>Ulubione przepisy | Food Master</title>
                <meta
                    name='description'
                    content='Przeglądaj swoje ulubione przepisy'
                />
            </Head>
            <Header />
            <FavoritesRecipesList />
            <Footer />
        </>
    );
}

export default favoriteRecipes;
