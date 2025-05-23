// data/recipesData.js
export const recipesData = [
    {
        id: 1,
        name: 'Scrambled Eggs and Bacon',
        thumbnail: '/eggs-and-bacon2.jpg',
        image2: '/eggs-and-bacon.jpg',
        type: 'Breakfast',
        time: 15,
        kcal: 450,
        proteins: 25,
        carbons: 5,
        fats: 35,
        ingredients: [
            '4 eggs',
            '4 slices of bacon',
            '2 tablespoons of milk',
            'Salt and pepper to taste',
            'Chives for garnish',
        ],
        instructions: [
            'Fry the bacon in a pan until crispy. Set aside.',
            'In a bowl, whisk the eggs with milk, salt, and pepper.',
            'In the same pan, using the bacon fat, pour in the eggs and stir until they set.',
            'Serve with bacon and sprinkle with chives.',
        ],
        difficulty: 'Easy',
        servings: 2,
        tags: ['protein', 'quick', 'keto'],
    },
    {
        id: 2,
        name: 'Avocado Toast',
        thumbnail: '/avocado-toast2.jpg',
        image2: '/avocado-toast.jpg',
        type: 'Breakfast',
        time: 10,
        kcal: 320,
        proteins: 8,
        carbons: 30,
        fats: 18,
        ingredients: [
            '2 slices of whole grain bread',
            '1 ripe avocado',
            'Juice of half a lemon',
            'Sea salt',
            'Chili flakes (optional)',
            '2 eggs (optional)',
        ],
        instructions: [
            'Toast the bread.',
            'Cut the avocado in half, remove the pit and scoop out the flesh.',
            'Mash with a fork, add lemon juice and salt.',
            'Spread the paste on the toast.',
            'You can decorate with chili flakes or add a fried egg on top.',
        ],
        difficulty: 'Easy',
        servings: 2,
        tags: ['vegetarian', 'healthy', 'quick'],
    },
    {
        id: 3,
        name: 'Greek Yogurt with Berries',
        thumbnail: '/greek-yogurt.jpg',
        image2: '/greek-yogurt2.jpg',
        type: 'Snack',
        time: 5,
        kcal: 180,
        proteins: 15,
        carbons: 20,
        fats: 5,
        ingredients: [
            '200g Greek yogurt',
            '100g mixed berries (raspberries, blueberries, strawberries)',
            '1 tablespoon of honey',
            '1 tablespoon of walnuts (chopped)',
        ],
        instructions: [
            'Place the Greek yogurt in a bowl.',
            'Top with berries.',
            'Drizzle with honey and sprinkle with nuts.',
        ],
        difficulty: 'Very easy',
        servings: 1,
        tags: ['vegetarian', 'quick', 'dessert'],
    },
    {
        id: 4,
        name: 'Chicken Caesar Salad',
        thumbnail: '/caesar-salad.jpg',
        image2: '/caesar-salad2.jpg',
        type: 'Lunch',
        time: 20,
        kcal: 380,
        proteins: 30,
        carbons: 12,
        fats: 22,
        ingredients: [
            '200g chicken breast',
            '1 head of romaine lettuce',
            '30g parmesan cheese',
            '2 tablespoons of Caesar dressing',
            'Garlic croutons',
            'Salt and pepper to taste',
        ],
        instructions: [
            'Season the chicken with salt and pepper, grill for 6-8 minutes on each side.',
            'Tear the lettuce into smaller pieces, transfer to a bowl.',
            'Cut the chicken into strips.',
            'Add the chicken, croutons, and grated parmesan to the lettuce.',
            'Pour over the Caesar dressing and mix.',
        ],
        difficulty: 'Medium',
        servings: 2,
        tags: ['protein', 'salad', 'low-carb'],
    },
    {
        id: 5,
        name: 'Beef Stir Fry',
        thumbnail: '/beef-stir-fry.jpg',
        image2: '/beef-stir-fry2.jpg',
        type: 'Dinner',
        time: 30,
        kcal: 520,
        proteins: 35,
        carbons: 40,
        fats: 20,
        ingredients: [
            '300g beef tenderloin',
            '1 red bell pepper',
            '1 yellow bell pepper',
            '1 onion',
            '2 cloves of garlic',
            '3 tablespoons of soy sauce',
            '1 tablespoon of oil',
            '200g rice',
        ],
        instructions: [
            'Cut the beef into thin strips.',
            'Cut the vegetables into strips.',
            'In a hot pan with oil, sauté the garlic and onion.',
            'Add the beef and cook for 2-3 minutes.',
            'Add the bell peppers and cook for another 3-4 minutes.',
            'Add soy sauce and mix.',
            'Serve with cooked rice.',
        ],
        difficulty: 'Medium',
        servings: 2,
        tags: ['protein', 'asian', 'spicy'],
    },
    {
        id: 6,
        name: 'Strawberry Banana Smoothie',
        thumbnail: '/strawberry-smoothie.jpg',
        image2: '/strawberry-smoothie2.jpg',
        type: 'Drink',
        time: 5,
        kcal: 200,
        proteins: 5,
        carbons: 40,
        fats: 2,
        ingredients: [
            '1 banana',
            '200g strawberries',
            '200ml almond milk',
            '1 tablespoon of honey',
            'Ice (optional)',
        ],
        instructions: [
            'Put all ingredients into a blender.',
            'Blend until smooth.',
            'Serve immediately.',
        ],
        difficulty: 'Very easy',
        servings: 1,
        tags: ['vegetarian', 'quick', 'sweet'],
    },
    {
        id: 7,
        name: 'Tuna Sandwich',
        thumbnail: '/tuna-sandwich.jpg',
        image2: '/tuna-sandwich2.jpg',
        type: 'Lunch',
        time: 10,
        kcal: 330,
        proteins: 22,
        carbons: 30,
        fats: 12,
        ingredients: [
            '2 slices of whole grain bread',
            '100g tuna in water',
            '1 tablespoon of mayonnaise',
            '1/4 red onion',
            'A few slices of cucumber',
            'Lettuce leaves',
            'Salt and pepper to taste',
        ],
        instructions: [
            'Drain the tuna and mash with a fork.',
            'Mix with chopped onion and mayonnaise.',
            'Season with salt and pepper.',
            'On one slice of bread, place lettuce leaves, then the tuna paste, and cucumber slices.',
            'Cover with the second slice of bread and cut the sandwich in half.',
        ],
        difficulty: 'Easy',
        servings: 1,
        tags: ['protein', 'quick', 'seafood'],
    },
    {
        id: 8,
        name: 'Spaghetti Bolognese',
        thumbnail: '/spaghetti.jpg',
        image2: '/spaghetti2.jpg',
        type: 'Dinner',
        time: 40,
        kcal: 650,
        proteins: 28,
        carbons: 80,
        fats: 25,
        ingredients: [
            '400g ground beef',
            '1 onion',
            '2 cloves of garlic',
            '400g canned tomatoes',
            '2 tablespoons of tomato paste',
            '1 carrot',
            '1 stalk of celery',
            '300g spaghetti pasta',
            'Parmesan cheese for sprinkling',
            'Salt, pepper, oregano',
        ],
        instructions: [
            'Finely chop the onion and garlic.',
            'Grate the carrot and celery.',
            'Sauté the onion and garlic in olive oil.',
            'Add the meat and cook until browned.',
            'Add the carrot and celery, cook for 2-3 minutes.',
            'Add tomatoes, tomato paste, and seasonings.',
            'Simmer on low heat for 20-30 minutes.',
            'Meanwhile, cook the pasta al dente.',
            'Drain the pasta and serve with the sauce, sprinkled with parmesan.',
        ],
        difficulty: 'Medium',
        servings: 4,
        tags: ['italian', 'classic', 'family'],
    },
    {
        id: 9,
        name: 'Apple with Peanut Butter',
        thumbnail: '/apple-peanut-butter.jpg',
        image2: '/apple-peanut-butter2.jpg',
        type: 'Snack',
        time: 3,
        kcal: 220,
        proteins: 7,
        carbons: 25,
        fats: 12,
        ingredients: ['1 apple', '2 tablespoons of peanut butter'],
        instructions: [
            'Wash and slice the apple.',
            'Serve the peanut butter in a small bowl next to the apple slices or spread it directly on the slices.',
        ],
        difficulty: 'Very easy',
        servings: 1,
        tags: ['vegetarian', 'quick', 'kids-friendly'],
    },
    {
        id: 10,
        name: 'Green Tea Latte',
        thumbnail: '/green-tea-latte2.jpg',
        image2: '/green-tea-latte.jpg',
        type: 'Drink',
        time: 8,
        kcal: 180,
        proteins: 3,
        carbons: 25,
        fats: 8,
        ingredients: [
            '1 teaspoon of matcha (green tea powder)',
            '200ml milk',
            '1 tablespoon of honey or maple syrup',
            'Ice (optional for iced version)',
        ],
        instructions: [
            'In a small bowl, mix matcha with 2 tablespoons of hot water until a smooth paste forms.',
            'Heat the milk (do not bring to a boil).',
            'Add honey or maple syrup to the matcha paste and mix.',
            'Pour in the hot milk while stirring.',
            'For the iced version, cool the drink and serve with ice.',
        ],
        difficulty: 'Easy',
        servings: 1,
        tags: ['vegetarian', 'caffeinated', 'asian'],
    },
    {
        id: 11,
        name: 'Veggie Omelette',
        thumbnail: '/veggie-omelette.jpg',
        image2: '/veggie-omelette2.jpg',
        type: 'Breakfast',
        time: 15,
        kcal: 300,
        proteins: 20,
        carbons: 8,
        fats: 22,
        ingredients: [
            '3 eggs',
            '1/4 red bell pepper',
            '1/4 onion',
            '50g spinach',
            '30g feta cheese',
            '1 tablespoon of milk',
            'Salt and pepper to taste',
            '1 tablespoon of olive oil',
        ],
        instructions: [
            'Dice the bell pepper and onion.',
            'Heat olive oil in a pan, sauté the onion and bell pepper for 2-3 minutes.',
            'Add spinach and cook until wilted.',
            'In a bowl, whisk eggs with milk, salt, and pepper.',
            'Pour the egg mixture into the pan with vegetables.',
            'When the omelette starts to set, sprinkle with crumbled feta.',
            'Reduce heat and cover the pan to allow the cheese to melt and the omelette to finish cooking.',
        ],
        difficulty: 'Medium',
        servings: 1,
        tags: ['vegetarian', 'protein', 'low-carb'],
    },
    {
        id: 12,
        name: 'Grilled Salmon with Asparagus',
        thumbnail: '/grilled-salmon.jpg',
        image2: '/grilled-salmon2.jpg',
        type: 'Dinner',
        time: 25,
        kcal: 420,
        proteins: 40,
        carbons: 10,
        fats: 24,
        ingredients: [
            '2 salmon fillets (150g each)',
            '1 bunch of asparagus',
            '1 lemon',
            '2 cloves of garlic',
            '2 tablespoons of olive oil',
            'Salt and pepper to taste',
            'Dill for garnish',
        ],
        instructions: [
            'Preheat the oven to 200°C.',
            'Wash the asparagus and snap off the tough ends.',
            'Place the salmon fillets and asparagus on a baking sheet lined with parchment paper.',
            'Drizzle with olive oil, sprinkle with salt, pepper, and chopped garlic.',
            'Bake for about 15-20 minutes, until the salmon is cooked and the asparagus is tender.',
            'Before serving, drizzle with lemon juice and sprinkle with dill.',
        ],
        difficulty: 'Medium',
        servings: 2,
        tags: ['fish', 'healthy', 'omega-3'],
    },
    {
        id: 13,
        name: 'Chicken curry',
        thumbnail: '/chicken-curry.jpg',
        image2: '/chicken-curry2.jpg',
        type: 'Dinner',
        time: 45,
        kcal: 550,
        proteins: 32,
        carbons: 45,
        fats: 28,
        ingredients: [
            '500g chicken breast',
            '1 onion',
            '200ml coconut milk',
            '2 tablespoons of curry powder',
            '1 teaspoon of turmeric',
            '1 teaspoon of cumin',
            '2 cloves of garlic',
            '1 cm of ginger',
            '2 tablespoons of oil',
            '200g basmati rice',
            'Fresh cilantro for garnish',
        ],
        instructions: [
            'Cut the chicken into cubes, the onion into slices, and finely chop the garlic and ginger.',
            'Heat oil in a pan, sauté the onion, garlic, and ginger.',
            'Add the spices and cook, stirring, for a minute.',
            'Add the chicken and cook until browned.',
            'Pour in the coconut milk, cover, and simmer on low heat for 20 minutes.',
            'Meanwhile, cook the rice according to the package instructions.',
            'Serve the curry with rice, garnished with fresh cilantro.',
        ],
        difficulty: 'Medium',
        servings: 4,
        tags: ['asian', 'spicy', 'comfort-food'],
    },
    {
        id: 14,
        name: 'Vegetable Soup',
        thumbnail: '/vegetable-soup.jpg',
        image2: '/vegetable-soup2.jpg',
        type: 'Lunch',
        time: 60,
        kcal: 180,
        proteins: 5,
        carbons: 30,
        fats: 4,
        ingredients: [
            '2 carrots',
            '1 parsley root',
            '1/4 celery root',
            '1 leek',
            '2 potatoes',
            '2 liters of vegetable broth',
            '1 can of diced tomatoes',
            '1 zucchini',
            '100g green beans',
            'Salt, pepper',
            'Fresh herbs (parsley, dill)',
        ],
        instructions: [
            'Wash, peel, and dice the vegetables.',
            'Bring the broth to a boil in a large pot.',
            'Add carrots, parsley root, celery, and leek.',
            'Cook on medium heat for about 15 minutes.',
            'Add potatoes, tomatoes, zucchini, and green beans.',
            'Cook for another 15-20 minutes, until all vegetables are tender.',
            'Season with salt and pepper.',
            'Sprinkle with chopped fresh herbs before serving.',
        ],
        difficulty: 'Easy',
        servings: 6,
        tags: ['vegetarian', 'healthy', 'winter'],
    },
    // Dodane nowe przepisy (10+)
    {
        id: 15,
        name: 'Mediterranean Quinoa Bowl',
        thumbnail: '/quinoa-bowl.jpg',
        image2: '/quinoa-bowl2.jpg',
        type: 'Lunch',
        time: 25,
        kcal: 410,
        proteins: 15,
        carbons: 55,
        fats: 16,
        ingredients: [
            '150g quinoa',
            '1 cucumber',
            '10 cherry tomatoes',
            '1 red onion',
            '100g feta cheese',
            '50g kalamata olives',
            '2 tablespoons of olive oil',
            '1 lemon',
            'Fresh mint leaves',
            'Salt and pepper to taste',
        ],
        instructions: [
            'Cook quinoa according to package instructions, then cool.',
            'Dice cucumber, halve cherry tomatoes, and thinly slice red onion.',
            'Crumble feta cheese.',
            'In a large bowl, combine quinoa with all vegetables and olives.',
            'In a small bowl, whisk olive oil with lemon juice, salt, and pepper.',
            'Pour the dressing over the salad and toss gently.',
            'Sprinkle with crumbled feta and fresh mint leaves before serving.',
        ],
        difficulty: 'Easy',
        servings: 2,
        tags: ['vegetarian', 'mediterranean', 'meal-prep'],
    },
    {
        id: 16,
        name: 'Sweet Potato Fries',
        thumbnail: '/sweet-potato-fries.jpg',
        image2: '/sweet-potato-fries2.jpg',
        type: 'Snack',
        time: 35,
        kcal: 220,
        proteins: 3,
        carbons: 40,
        fats: 5,
        ingredients: [
            '2 large sweet potatoes',
            '1 tablespoon of olive oil',
            '1 teaspoon of paprika',
            '1/2 teaspoon of garlic powder',
            'Salt to taste',
            '1 tablespoon of fresh rosemary (chopped)',
        ],
        instructions: [
            'Preheat the oven to a hot temperature (220°C).',
            'Wash and peel the sweet potatoes.',
            'Cut them into even sticks.',
            'In a bowl, mix olive oil with spices.',
            'Add the sweet potato sticks and toss to coat evenly.',
            'Spread on a baking sheet in a single layer.',
            'Bake for 25-30 minutes, turning halfway through.',
            'Sprinkle with fresh rosemary before serving.',
        ],
        difficulty: 'Easy',
        servings: 2,
        tags: ['vegetarian', 'healthy', 'baked'],
    },
    {
        id: 17,
        name: 'Black Bean Burgers',
        thumbnail: '/black-bean-burger.jpg',
        image2: '/black-bean-burger2.jpg',
        type: 'Dinner',
        time: 40,
        kcal: 320,
        proteins: 15,
        carbons: 45,
        fats: 10,
        ingredients: [
            '400g canned black beans (drained and rinsed)',
            '1 small onion',
            '1 red bell pepper',
            '2 cloves of garlic',
            '1 egg',
            '50g breadcrumbs',
            '1 teaspoon of cumin',
            '1 teaspoon of paprika',
            'Salt and pepper to taste',
            '4 burger buns',
            'Toppings: lettuce, tomato, avocado',
        ],
        instructions: [
            'Finely chop onion, bell pepper, and garlic.',
            'In a pan, sauté the vegetables until soft.',
            'In a large bowl, mash the black beans with a fork.',
            'Add sautéed vegetables, egg, breadcrumbs, and spices, mix well.',
            'Form 4 patties with the mixture.',
            'Heat some oil in a pan and cook the patties for about 4 minutes on each side.',
            'Serve on burger buns with your favorite toppings.',
        ],
        difficulty: 'Medium',
        servings: 4,
        tags: ['vegetarian', 'protein', 'mexican'],
    },
    {
        id: 18,
        name: 'Lemon Garlic Butter Shrimp Pasta',
        thumbnail: '/shrimp-pasta.jpg',
        image2: '/shrimp-pasta2.jpg',
        type: 'Dinner',
        time: 20,
        kcal: 480,
        proteins: 25,
        carbons: 60,
        fats: 16,
        ingredients: [
            '300g shrimp (peeled and deveined)',
            '250g spaghetti or linguine',
            '4 tablespoons of butter',
            '4 cloves of garlic (minced)',
            'Juice and zest of 1 lemon',
            '2 tablespoons of fresh parsley (chopped)',
            'Salt and pepper to taste',
            'Red pepper flakes (optional)',
        ],
        instructions: [
            'Cook pasta according to package instructions until al dente.',
            'In a large pan, melt 2 tablespoons of butter over medium heat.',
            'Add garlic and sauté for 30 seconds.',
            'Add shrimp, cook for 2 minutes per side until pink and opaque.',
            'Add remaining butter, lemon juice, and zest.',
            'Drain pasta and add to the pan, toss to coat.',
            'Season with salt, pepper, and red pepper flakes if desired.',
            'Garnish with fresh parsley before serving.',
        ],
        difficulty: 'Easy',
        servings: 3,
        tags: ['seafood', 'italian', 'quick'],
    },
    {
        id: 19,
        name: 'Mango Chia Pudding',
        thumbnail: '/mango-chia.jpg',
        image2: '/mango-chia2.jpg',
        type: 'Breakfast',
        time: 10,
        kcal: 280,
        proteins: 8,
        carbons: 35,
        fats: 12,
        ingredients: [
            '4 tablespoons of chia seeds',
            '250ml coconut milk',
            '1 ripe mango',
            '1 tablespoon of honey or maple syrup',
            '1/2 teaspoon of vanilla extract',
            'Shredded coconut for topping',
            'Mint leaves for garnish',
        ],
        instructions: [
            'In a bowl, mix chia seeds with coconut milk, honey, and vanilla extract.',
            'Stir well and refrigerate for at least 4 hours or overnight.',
            'Peel and dice the mango.',
            'Serve the chia pudding in jars or bowls, topped with diced mango.',
            'Sprinkle with shredded coconut and garnish with mint leaves.',
        ],
        difficulty: 'Very easy',
        servings: 2,
        tags: ['vegan', 'no-cook', 'make-ahead'],
    },
    {
        id: 20,
        name: 'Caprese Stuffed Chicken Breast',
        thumbnail: '/caprese-chicken.jpg',
        image2: '/caprese-chicken2.jpg',
        type: 'Dinner',
        time: 35,
        kcal: 420,
        proteins: 45,
        carbons: 5,
        fats: 22,
        ingredients: [
            '4 chicken breasts',
            '100g mozzarella cheese',
            '2 large tomatoes',
            'Fresh basil leaves',
            '2 tablespoons of olive oil',
            '1 teaspoon of dried oregano',
            '2 cloves of garlic (minced)',
            'Balsamic glaze for drizzling',
            'Salt and pepper to taste',
        ],
        instructions: [
            'Preheat the oven to 180°C.',
            'Cut a pocket into each chicken breast.',
            'Season the chicken with salt, pepper, and dried oregano.',
            'Slice tomatoes and mozzarella.',
            'Stuff each chicken breast with tomato slices, mozzarella, and basil leaves.',
            'Secure with toothpicks if necessary.',
            'In an oven-safe pan, heat olive oil and sear chicken for 3-4 minutes per side.',
            'Add minced garlic to the pan for the last minute.',
            'Transfer to the oven and bake for 15-20 minutes until chicken is cooked through.',
            'Drizzle with balsamic glaze before serving.',
        ],
        difficulty: 'Medium',
        servings: 4,
        tags: ['protein', 'italian', 'low-carb'],
    },
    {
        id: 21,
        name: 'Rainbow Buddha Bowl',
        thumbnail: '/buddha-bowl.jpg',
        image2: '/buddha-bowl2.jpg',
        type: 'Lunch',
        time: 30,
        kcal: 450,
        proteins: 15,
        carbons: 65,
        fats: 16,
        ingredients: [
            '100g brown rice or quinoa',
            '1 sweet potato',
            '1 avocado',
            '1 carrot',
            '1 cucumber',
            '1 cup of shredded red cabbage',
            '1 cup of chickpeas (canned, drained)',
            '2 tablespoons of olive oil',
            '1 teaspoon of cumin',
            'Tahini dressing: 2 tablespoons of tahini, lemon juice, water, salt',
            'Sesame seeds for garnish',
        ],
        instructions: [
            'Cook rice or quinoa according to package instructions.',
            'Preheat the oven to 200°C.',
            'Peel and dice sweet potato, toss with olive oil, cumin, salt, and pepper.',
            'Roast sweet potato for 20-25 minutes until tender.',
            'Prepare vegetables: slice avocado, grate carrot, dice cucumber, shred cabbage.',
            'Make tahini dressing by mixing all ingredients until smooth.',
            'Assemble the bowl: start with a base of grain, arrange vegetables and chickpeas on top.',
            'Drizzle with tahini dressing and sprinkle with sesame seeds.',
        ],
        difficulty: 'Easy',
        servings: 2,
        tags: ['vegan', 'colorful', 'nutrient-dense'],
    },
    {
        id: 22,
        name: 'Chocolate Protein Banana Bread',
        thumbnail: '/protein-banana-bread.jpg',
        image2: '/protein-banana-bread2.jpg',
        type: 'Snack',
        time: 65,
        kcal: 220,
        proteins: 12,
        carbons: 25,
        fats: 8,
        ingredients: [
            '3 ripe bananas',
            '3 eggs',
            '80g chocolate protein powder',
            '100g almond flour',
            '30g cocoa powder',
            '1 teaspoon of baking powder',
            '1 teaspoon of vanilla extract',
            '2 tablespoons of maple syrup',
            '50g dark chocolate chips',
            'Pinch of salt',
        ],
        instructions: [
            'Preheat the oven to 180°C and line a loaf pan with parchment paper.',
            'In a bowl, mash the bananas until smooth.',
            'Add eggs, maple syrup, and vanilla, whisk well.',
            'In another bowl, mix protein powder, almond flour, cocoa powder, baking powder, and salt.',
            'Combine wet and dry ingredients, fold in chocolate chips.',
            'Pour batter into the loaf pan.',
            'Bake for 50-55 minutes, until a toothpick comes out clean.',
            'Let cool before slicing.',
        ],
        difficulty: 'Medium',
        servings: 8,
        tags: ['protein', 'dessert', 'gluten-free'],
    },
    {
        id: 23,
        name: 'Mushroom Risotto',
        thumbnail: '/mushroom-risotto.jpg',
        image2: '/mushroom-risotto2.jpg',
        type: 'Dinner',
        time: 40,
        kcal: 480,
        proteins: 12,
        carbons: 70,
        fats: 14,
        ingredients: [
            '300g arborio rice',
            '400g mixed mushrooms',
            '1 onion',
            '2 cloves of garlic',
            '150ml white wine',
            '1 liter of vegetable broth',
            '50g parmesan cheese',
            '2 tablespoons of butter',
            '2 tablespoons of olive oil',
            'Fresh thyme',
            'Salt and pepper to taste',
        ],
        instructions: [
            'Clean and slice mushrooms.',
            'In a pan, sauté half of the mushrooms in 1 tablespoon of butter until golden. Set aside.',
            'In a large pot, heat olive oil and sauté finely chopped onion and garlic.',
            'Add remaining mushrooms and cook for 2-3 minutes.',
            'Add rice and stir for 1-2 minutes until translucent.',
            'Pour in wine and cook until absorbed.',
            'Gradually add hot broth, 1 ladle at a time, stirring continuously.',
            'Continue adding broth and stirring until rice is creamy and al dente (about 20-25 minutes).',
            'Remove from heat, stir in parmesan and remaining butter.',
            'Top with sautéed mushrooms and fresh thyme.',
        ],
        difficulty: 'Medium',
        servings: 4,
        tags: ['vegetarian', 'italian', 'comfort-food'],
    },
    {
        id: 24,
        name: 'Pineapple Coconut Smoothie',
        thumbnail: '/pineapple-smoothie2.jpg',
        image2: '/pineapple-smoothie.jpg',
        type: 'Drink',
        time: 5,
        kcal: 240,
        proteins: 3,
        carbons: 35,
        fats: 10,
        ingredients: [
            '200g fresh pineapple chunks',
            '200ml coconut milk',
            '1 frozen banana',
            '1 tablespoon of honey',
            '1 tablespoon of chia seeds',
            'Ice cubes',
            'Pineapple slice and mint for garnish',
        ],
        instructions: [
            'Place all ingredients in a blender.',
            'Blend until smooth and creamy.',
            'If too thick, add a little water or coconut water.',
            'Pour into glasses and garnish with a pineapple slice and mint leaf.',
        ],
        difficulty: 'Very easy',
        servings: 2,
        tags: ['vegan', 'tropical', 'refreshing'],
    },
    {
        id: 25,
        name: 'Zucchini Noodles with Pesto',
        thumbnail: '/zucchini-pesto.jpg',
        image2: '/zucchini-pesto2.jpg',
        type: 'Lunch',
        time: 15,
        kcal: 320,
        proteins: 10,
        carbons: 12,
        fats: 26,
        ingredients: [
            '3 medium zucchini',
            '2 tablespoons of pine nuts',
            '2 cloves of garlic',
            '50g fresh basil leaves',
            '30g parmesan cheese',
            '3 tablespoons of olive oil',
            '1 tablespoon of lemon juice',
            'Salt and pepper to taste',
            'Cherry tomatoes for garnish',
        ],
        instructions: [
            'Using a spiralizer, turn the zucchini into noodles (zoodles).',
            'For the pesto, blend pine nuts, garlic, basil, parmesan, olive oil, and lemon juice until smooth.',
            'In a pan, heat a little olive oil and lightly sauté the zoodles for 2-3 minutes.',
            'Toss the zoodles with the fresh pesto.',
            'Season with salt and pepper.',
            'Garnish with halved cherry tomatoes and extra parmesan if desired.',
        ],
        difficulty: 'Easy',
        servings: 2,
        tags: ['low-carb', 'vegetarian', 'quick'],
    },
    {
        id: 26,
        name: 'Blueberry Overnight Oats',
        thumbnail: '/overnight-oats.jpg',
        image2: '/overnight-oats2.jpg',
        type: 'Breakfast',
        time: 5,
        kcal: 350,
        proteins: 12,
        carbons: 55,
        fats: 8,
        ingredients: [
            '100g rolled oats',
            '250ml almond milk',
            '2 tablespoons of Greek yogurt',
            '1 tablespoon of chia seeds',
            '1 tablespoon of maple syrup',
            '100g fresh blueberries',
            '1/2 teaspoon of vanilla extract',
            'Sliced almonds for topping',
        ],
        instructions: [
            'In a jar or container, combine oats, almond milk, Greek yogurt, chia seeds, maple syrup, and vanilla extract.',
            'Stir well, then fold in most of the blueberries.',
            'Cover and refrigerate overnight or for at least 6 hours.',
            'Before serving, top with remaining blueberries and sliced almonds.',
        ],
        difficulty: 'Very easy',
        servings: 2,
        tags: ['meal-prep', 'vegetarian', 'no-cook'],
    },
    {
        id: 27,
        name: 'Thai Coconut Curry Soup',
        thumbnail: '/thai-soup.jpg',
        image2: '/thai-soup2.jpg',
        type: 'Lunch',
        time: 30,
        kcal: 410,
        proteins: 18,
        carbons: 22,
        fats: 30,
        ingredients: [
            '400ml coconut milk',
            '500ml vegetable or chicken broth',
            '200g tofu or chicken (cubed)',
            '100g mushrooms',
            '1 red bell pepper',
            '1 tablespoon of Thai red curry paste',
            '1 tablespoon of fish sauce (or soy sauce for vegetarian)',
            '1 lime',
            '2 tablespoons of fresh cilantro',
            '1 tablespoon of ginger (grated)',
            '2 cloves of garlic (minced)',
        ],
        instructions: [
            'In a pot, sauté garlic and ginger in a little oil.',
            'Add curry paste and cook for 1 minute until fragrant.',
            'Pour in coconut milk and broth, bring to a simmer.',
            'Add tofu/chicken, mushrooms, and bell pepper.',
            'Simmer until protein is cooked and vegetables are tender.',
            'Add fish sauce or soy sauce.',
            'Before serving, squeeze in lime juice and garnish with fresh cilantro.',
        ],
        difficulty: 'Medium',
        servings: 3,
        tags: ['asian', 'spicy', 'soup'],
    },
    {
        id: 28,
        name: 'Stuffed Bell Peppers',
        thumbnail: '/stuffed-peppers.jpg',
        image2: '/stuffed-peppers2.jpg',
        type: 'Dinner',
        time: 50,
        kcal: 390,
        proteins: 20,
        carbons: 45,
        fats: 14,
        ingredients: [
            '4 large bell peppers',
            '200g ground beef or turkey',
            '100g rice',
            '1 onion',
            '2 cloves of garlic',
            '400g canned tomatoes',
            '1 tablespoon of Italian herbs',
            '50g cheese (grated)',
            '2 tablespoons of olive oil',
            'Salt and pepper to taste',
        ],
        instructions: [
            'Preheat the oven to 180°C.',
            'Cut the tops off the bell peppers and remove seeds.',
            'Cook rice according to package instructions.',
            'In a pan, sauté chopped onion and garlic in olive oil.',
            'Add ground meat and cook until browned.',
            'Stir in tomatoes and Italian herbs, simmer for 5 minutes.',
            'Mix in cooked rice, season with salt and pepper.',
            'Fill peppers with the mixture and place in a baking dish.',
            'Top with grated cheese.',
            'Bake for 25-30 minutes until peppers are tender and cheese is melted.',
        ],
        difficulty: 'Medium',
        servings: 4,
        tags: ['family', 'baked', 'meal-prep'],
    },
    {
        id: 29,
        name: 'Homemade Granola',
        thumbnail: '/homemade-granola.jpg',
        image2: '/homemade-granola2.jpg',
        type: 'Breakfast',
        time: 35,
        kcal: 280,
        proteins: 6,
        carbons: 35,
        fats: 14,
        ingredients: [
            '300g rolled oats',
            '100g mixed nuts (almonds, walnuts, pecans)',
            '50g coconut flakes',
            '50g pumpkin seeds',
            '50g honey or maple syrup',
            '3 tablespoons of coconut oil',
            '1 teaspoon of cinnamon',
            '1 teaspoon of vanilla extract',
            'Pinch of salt',
            '100g dried fruits (cranberries, raisins, apricots)',
        ],
        instructions: [
            'Preheat the oven to 150°C and line a baking sheet with parchment paper.',
            'In a large bowl, combine oats, nuts, coconut flakes, and seeds.',
            'In a small pot, warm honey/maple syrup and coconut oil.',
            'Add vanilla and cinnamon to the warm mixture.',
            'Pour over the dry ingredients and mix well.',
            'Spread evenly on the baking sheet.',
            'Bake for 25 minutes, stirring halfway through.',
            'Let cool completely, then mix in dried fruits.',
            'Store in an airtight container.',
        ],
        difficulty: 'Easy',
        servings: 10,
        tags: ['vegetarian', 'breakfast', 'meal-prep'],
    },
    {
        id: 30,
        name: 'Cauliflower Pizza Crust',
        thumbnail: '/cauliflower-pizza.jpg',
        image2: '/cauliflower-pizza2.jpg',
        type: 'Dinner',
        time: 45,
        kcal: 280,
        proteins: 15,
        carbons: 8,
        fats: 22,
        ingredients: [
            '1 medium cauliflower head',
            '1 egg',
            '50g mozzarella cheese (grated)',
            '20g parmesan cheese (grated)',
            '1 teaspoon of Italian herbs',
            'Salt and pepper to taste',
            'Toppings: tomato sauce, cheese, vegetables of choice',
        ],
        instructions: [
            'Preheat the oven to 220°C and line a baking sheet with parchment paper.',
            'Cut cauliflower into florets and pulse in a food processor until rice-like.',
            'Microwave for 5 minutes, then let cool.',
            'Transfer to a clean kitchen towel and squeeze out as much water as possible.',
            'In a bowl, mix cauliflower rice with egg, cheeses, herbs, salt, and pepper.',
            'Form the mixture into a pizza crust shape on the baking sheet.',
            'Bake for 15-20 minutes until golden.',
            'Remove from oven, add toppings, and bake for another 10 minutes.',
        ],
        difficulty: 'Medium',
        servings: 2,
        tags: ['low-carb', 'gluten-free', 'vegetarian'],
    },
];
