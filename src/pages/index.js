import Header from '@/Components/Header';
import Introduction from '@/Components/Introduction';
import RecipesList from '@/Components/RecipesList';
import Head from 'next/head';

export default function Home() {
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
            <h2>Team - people behind</h2>
            <h2>Testimonials</h2>
            <h2>FAQ</h2>
            <h2>Footer</h2>
        </>
    );
}
