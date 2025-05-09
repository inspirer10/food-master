import React from 'react';

function ExploreCuisineType() {
    return (
        <section className='explore-cuisineType_section'>
            <h2>Explore by Cuisine Type</h2>
            <p className='subHeading'>
                Discover new flavors and cooking techniques with our diverse
                selection of cuisine types
            </p>

            <article className='images-wrapper'>
                <div
                    style={{ backgroundImage: 'url(/italian.jpg)' }}
                    className='cusisineType-thumbnail'
                >
                    <p>Italian</p>
                </div>

                <div
                    style={{ backgroundImage: 'url(/german.jpg)' }}
                    className='cusisineType-thumbnail'
                >
                    <p>German</p>
                </div>

                <div
                    style={{ backgroundImage: 'url(/polish.jpg)' }}
                    className='cusisineType-thumbnail'
                >
                    <p>Polish</p>
                </div>

                <div
                    style={{ backgroundImage: 'url(/french.jpg)' }}
                    className='cusisineType-thumbnail'
                >
                    <p>French</p>
                </div>
            </article>
        </section>
    );
}

export default ExploreCuisineType;
