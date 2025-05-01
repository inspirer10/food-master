import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import SingleRecipeDetails from '@/Components/SingleRecipeDetails';
import RecommendedRecipes from '@/Components/RecommendedRecipes';

import { useRouter } from 'next/router';
import { recipesData } from '/data/recipesData.js';

function RecipeDetails() {
    const router = useRouter();
    // Dodaj warunek na brak ID(name) podczas pierwszego renderowania
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

    //const {type, kcal, proteins, carbons, fats, ingredients, difficulty, tags} = recipe;

    /*const [recipeData, setRecipeData] = useState(null);
    useEffect(() => {
        //setRecipeData(recipe);
    }, []); */

    return (
        <>
            <Head>
                <title>{name ? `${name} | Food Master}` : 'Food Master'}</title>
                <meta
                    name='description'
                    content='Przeglądaj wszystkie nasze przepisy'
                />
            </Head>
            <Header />
            {recipe ? (
                <SingleRecipeDetails
                    name={name}
                    image={recipe.image}
                    //^^ thumbnail={recipe.thumbnail}
                    mainImage={recipe.mainImage}
                    type={recipe.type}
                    time={recipe.time}
                    kcal={recipe.kcal}
                    proteins={recipe.proteins}
                    carbons={recipe.carbons}
                    fats={recipe.fats}
                    servings={recipe.servings}
                    ingredients={recipe.ingredients}
                    difficulty={recipe.difficulty}
                    tags={recipe.tags}
                    instructions={recipe.instructions}
                />
            ) : null}

            <RecommendedRecipes />
            <Footer />
        </>
    );
}

export default RecipeDetails;
