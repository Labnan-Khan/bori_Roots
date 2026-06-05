import React, { useEffect, useState } from 'react'
import './recipe.css'
import { HiMiniRectangleGroup } from 'react-icons/hi2'
import { IoIosSunny } from 'react-icons/io'
import { MdLunchDining } from 'react-icons/md'
import { GiCampCookingPot, GiCook, GiHotMeal, GiMeal, GiSandsOfTime } from 'react-icons/gi'
import { LuSalad } from 'react-icons/lu'
import { TbSaladFilled, TbSoupFilled } from 'react-icons/tb'
import { FaStar } from 'react-icons/fa'
import { TiArrowLeftThick } from 'react-icons/ti'
import img1 from './Gemini_Generated_Image_eq1j2deq1j2deq1j.png'
import img2 from '../../assets/Beef_NihariImg.png'
import recipePageBgImg1 from './recipeheroBgImg1.png'
import recipePageBgImg2 from './recipeheroBgImg2.png'
import recipePageBgImg3 from './recipeheroBgImg3.png'


import { RiGroupLine } from 'react-icons/ri'
function Recipe() {

    const recipeItems = {
    'South Asian':[
                                {cardImg: img1, cardHeading: "Spicy Chicken Karahi",
                                rating:[4.8, 80], calories:'350', cookingLevel:"Medium", perfectWith:["Naan", "Roti", "Salad"],
                                cookingTime: "40", ingredients: ["1 kg chicken", "5 tomatoes", "4-5 green chilies", "1 tbsp ginger-garlic paste", "Red chili, turmeric, salt", "1/2 cup BORI ROOTS Balochi Spice Infused Oil"],
                                numberOfPeople:"4", steps:[" Heat spice-infused oil, brown chicken.","Add tomatoes and spices.","Cook until masala thickens.","Add chilies and ginger.","Drizzle more infused oil before serving."],
                                cardParagraph: "Aromatic and spicy Pakistani chicken karahi made with BORI ROOTS Balochi Spice Infused Olive Oil. Rich, flavorful, and authentically spiced."},

                                {cardImg: img1, cardHeading: "Beef Nihari",
                                rating:[4.9, 120], calories:'480', cookingLevel:"Hard", perfectWith:["Naan", "Khamiri Roti", "Lemon"],
                                cookingTime: "180", ingredients: ["1 kg beef shank", "3 tbsp nihari masala", "2 tbsp wheat flour", "1 tbsp ginger-garlic paste", "1/2 cup ghee", "Salt to taste", "Fresh ginger, green chilies for garnish"],
                                numberOfPeople:"", steps:["Heat ghee and fry ginger-garlic paste.","Add beef and nihari masala, brown well.","Add water and slow cook for 2.5 hours.","Mix flour with water and add to thicken.","Garnish with ginger, chilies and fresh coriander."],
                                cardParagraph: "A slow-cooked, deeply aromatic Pakistani beef stew that has warmed mornings for centuries. Meltingly tender with a rich, spiced broth."},

                                {cardImg: img1, cardHeading: "Mutton Dum Biryani",
                                rating:[4.9, 210], calories:'520', cookingLevel:"Hard", perfectWith:["Raita","Salad","Chutney"],
                                cookingTime: "90", ingredients: ["1 kg mutton", " 3 cups basmati rice", " 2 onions (fried golden)", "1 cup yogurt", "Whole spices (cloves, cardamom, bay leaves)", "Saffron soaked in milk", "1/2 cup ghee", "Biryani masala"],
                                numberOfPeople:"", steps:["Marinate mutton in yogurt, spices and fried onion for 2 hours.","Parboil rice with whole spices to 70%.","Layer rice and mutton alternately in heavy pot.","Pour saffron milk and ghee on top.","Seal with dough or foil, cook on dum for 40 min."],
                                cardParagraph: "The crown jewel of subcontinental cuisine. Fragrant basmati rice layered with tender mutton, saffron and caramelized onions."},

                                {cardImg: img1, cardHeading: "Dal Makhani",
                                rating:[4.7, 95], calories:'290', cookingLevel:"Medium", perfectWith:["Naan","Rice","Papadom"],
                                cookingTime: "60", ingredients: ["1 cup black lentils (urad dal)", "1/4 cup kidney beans", "2 tomatoes pureed", "1 tbsp butter", "1 cup cream", "Cumin, garam masala, red chili", "Ginger-garlic paste"],
                                numberOfPeople:"4", steps:["Soak lentils and beans overnight, pressure cook.","Saute ginger-garlic in butter, add tomato puree.","Add spices and cook masala until oil separates.","Add lentils and simmer for 30 min.","Finish with cream and butter."],
                                cardParagraph: "Velvety slow-cooked black lentils enriched with butter and cream. A restaurant classic that belongs on every home table."},

                                {cardImg: img1, cardHeading: "Chicken Tikka Masala",
                                rating:[4.8, 175], calories:'380', cookingLevel:"Medium", perfectWith:["Naan","Basmati Rice","Raita"],
                                cookingTime: "50", ingredients: ["800g chicken breast", "1 cup yogurt", "Tikka masala spice blend", "400g crushed tomatoes", "1 cup heavy cream", " 2 onions", "Ginger-garlic paste", "Fresh coriander"],
                                numberOfPeople:"4", steps:["Marinate chicken in yogurt and tikka spices for 2 hours.","Grill or broil chicken until charred.","Saute onions, add ginger-garlic and tomatoes.","Add spices and simmer 15 min.","Add chicken and cream, cook 10 more min."],
                                cardParagraph: "Smoky grilled chicken pieces swimming in a luscious, spiced tomato-cream sauce. A global icon of South Asian flavors."},

                                {cardImg: img1, cardHeading: "Haleem",
                                rating:[4.9, 145], calories:'420', cookingLevel:"Hard", perfectWith:["Naan","Lemon","Fried Onions"],
                                cookingTime: "240", ingredients: ["500g beef or mutton", "Mixed lentils (chana, masoor, moong)", "Broken wheat", "Haleem masala", "Fried onions", "Fresh ginger, green chilies", " Ghee", " Lemon"],
                                numberOfPeople:"8", steps:["Cook meat until very tender, shred.","Cook lentils and wheat separately.","Combine everything and mash/blend coarsely.","Add haleem masala, simmer for 45 min.","Top with fried onions, ginger, chilies and lemon."],
                                cardParagraph: "Pakistan's most beloved slow-cooked porridge of meat and lentils. Hours of patience produce something transcendently comforting."},

                                {cardImg: img1, cardHeading: "Seekh Kebab",
                                rating:[4.6, 102], calories:'260', cookingLevel:"Easy", perfectWith:["Naan","Mint Chutney","Salad"],
                                cookingTime: "30", ingredients: ["500g minced beef or mutton", "1 onion (grated)", "Green chilies", "Fresh coriander and mint", "Cumin, garam masala, red chili", "Ginger-garlic paste", "1 egg"],
                                numberOfPeople:"4", steps:["Combine all ingredients and knead well.","Refrigerate mixture for 30 min.","Mold onto skewers in long sausage shapes.","Grill on charcoal or oven at high heat."," Serve with chutney and sliced onions."],
                                cardParagraph: "Spiced minced meat molded onto skewers and kissed by charcoal flame. One of the great street foods of the subcontinent."},

                                {cardImg: img1, cardHeading: "Butter Chicken (Murgh Makhani)",
                                rating:[4.8, 175], calories:'420', cookingLevel:"Medium", perfectWith:["Garlic Naan", "Basmati Rice","Lassi"],
                                cookingTime: "60", ingredients: ["800g chicken (marinated in yogurt and spices)", " Tomatoes", "Butter", "Heavy cream", "Kashmiri red chili", "Cardamom, cinnamon, cloves", "Kasuri methi", "Ginger-garlic paste"],
                                numberOfPeople:"4", steps:["Grill or broil marinated chicken until charred.","Make tomato sauce with butter and spices.","Blend sauce until smooth.","Add chicken to sauce, simmer.","Finish with cream and crushed kasuri methi."],
                                cardParagraph: "Arguably the world's most popular Indian dish. A velvety, butter-rich tomato sauce of extraordinary depth, wrapping smoky tandoori chicken in absolute luxury."},

                                {cardImg: img1, cardHeading: "Tandoori Chicken",
                                rating:[4.7, 200], calories:'320', cookingLevel:"Easy", perfectWith:["Naan","Mint Chutney","Onion Rice"],
                                cookingTime: "50", ingredients: ["1 kg chicken (bone-in)", "Yogurt", "Kashmiri red chili powder", "Ginger-garlic paste", "Cumin, coriander, garam masala", "Lemon juice", "• Mustard oil", "Salt"],
                                numberOfPeople:"4", steps:["Score chicken deeply and marinate in yogurt-spice mixture.","Marinate minimum 6 hours, overnight best.","Cook at maximum oven heat or under broiler.","Cook until charred in places, 30-35 min.","Serve with raw onion rings, lemon and mint chutney."],
                                cardParagraph: "The dish that put India on the global food map. Yogurt-marinated chicken charred in a screaming hot oven - smoky, crimson, and deeply aromatic."},

                                {cardImg: img1, cardHeading: "Masala Dosa",
                                rating:[4.9, 105], calories:'350', cookingLevel:"Medium", perfectWith:["Coconut Chutney","Sambar","Filter Coffee"],
                                cookingTime: "30", ingredients: ["Dosa batter (fermented rice and urad dal)", "Potato filling: potatoes, mustard seeds, curry leaves, onion, turmeric", "Ghee or oil", "Coconut chutney", "Sambar"],
                                numberOfPeople:"4", steps:["Ferment batter overnight.","Heat iron griddle, spread batter thin in circle."," Drizzle ghee and cook until golden and crispy.","Add potato filling, fold.","Serve with coconut chutney and sambar."],
                                cardParagraph: "South India's greatest export. A paper-thin, crackling crispy crepe filled with spiced potato - the breakfast that has conquered the world."},
                                
                                                ],
    'Middle Eastern':[
                                {
    id: 11,
    cardImg: "greek-moussaka.jpg",
    cardHeading: "Greek Moussaka",
    rating: [4.8, 112],
    calories: "450",
    cookingTime: "90",
    ingredients: [
      "2 large eggplants",
      "500g ground lamb",
      "2 onions",
      "400g crushed tomatoes",
      "Cinnamon, allspice, nutmeg",
      "BÃ©chamel sauce (butter, flour, milk)",
      "Parmesan cheese"
    ],
    steps: [
      "Slice and salt eggplant, fry until golden.",
      "Cook lamb with onions, tomatoes and spices.",
      "Layer eggplant then meat in baking dish.",
      "Prepare bÃ©chamel and pour over top.",
      "Bake at 180Â°C for 40 min until golden."
    ],
    cardParagraph: "Greece's greatest casserole â€” layers of silky eggplant, spiced lamb and creamy bÃ©chamel baked to golden perfection.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Greek Salad", "Red Wine", "Crusty Bread"],
    cuisine: "Greek"
  },
  {
    id: 12,
    cardImg: "shakshuka.jpg",
    cardHeading: "Shakshuka",
    rating: [4.7, 89],
    calories: "280",
    cookingTime: "25",
    ingredients: [
      "6 eggs",
      "400g crushed tomatoes",
      "1 red bell pepper",
      "2 onions",
      "Cumin, paprika, cayenne",
      "Garlic",
      "Fresh parsley",
      "Olive oil"
    ],
    steps: [
      "SautÃ© onions and peppers in olive oil.",
      "Add garlic and spices, cook 2 min.",
      "Pour in tomatoes, simmer 10 min.",
      "Make wells and crack eggs into sauce.",
      "Cover and cook until whites are set. Garnish with parsley."
    ],
    cardParagraph: "Eggs poached in a spiced, vibrant tomato sauce. A North African and Middle Eastern morning ritual that works at any hour.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Crusty Bread", "Feta Cheese", "Olives"],
    cuisine: "Mediterranean"
  },
  {
    id: 13,
    cardImg: "hummus.jpg",
    cardHeading: "Classic Hummus",
    rating: [4.7, 200],
    calories: "180",
    cookingTime: "15",
    ingredients: [
      "2 cans chickpeas",
      "4 tbsp tahini",
      "2 lemons (juice)",
      "3 garlic cloves",
      "Ice cold water",
      "Olive oil",
      "Salt, cumin",
      "Paprika for garnish"
    ],
    steps: [
      "Blend chickpeas with tahini and lemon juice.",
      "Add garlic, salt and cumin.",
      "Drizzle in cold water while blending until super smooth.",
      "Taste and adjust seasoning.",
      "Serve with olive oil, paprika and whole chickpeas."
    ],
    cardParagraph: "The ancient dip that has conquered the world. Silky smooth, lemony, and impossibly easy to make at home â€” far better than store-bought.",
    numberOfPeople: 6,
    cookingLevel: "Easy",
    perfectWith: ["Pita Bread", "Falafel", "Veggies"],
    cuisine: "Lebanese"
  },
  {
    id: 14,
    cardImg: "lamb-kofta.jpg",
    cardHeading: "Lamb Kofta with Tzatziki",
    rating: [4.8, 91],
    calories: "340",
    cookingTime: "35",
    ingredients: [
      "500g ground lamb",
      "1 onion (grated)",
      "Parsley, mint",
      "Cumin, paprika, coriander",
      "Greek yogurt, cucumber, dill (for tzatziki)",
      "Garlic",
      "Lemon"
    ],
    steps: [
      "Mix lamb with grated onion, herbs and spices.",
      "Shape into oval patties or cylinders.",
      "Grill on high heat for 4 min per side.",
      "Make tzatziki: yogurt, cucumber, dill, garlic, lemon.",
      "Serve kofta with tzatziki and warm pita."
    ],
    cardParagraph: "Herb-laden spiced lamb patties grilled to juicy perfection, paired with cool, tangy tzatziki. The Mediterranean's favorite street food.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Pita Bread", "Salad", "Tzatziki"],
    cuisine: "Greek"
  },
  {
    id: 15,
    cardImg: "pasta-alla-norma.jpg",
    cardHeading: "Pasta alla Norma",
    rating: [4.6, 77],
    calories: "390",
    cookingTime: "40",
    ingredients: [
      "400g rigatoni",
      "2 large eggplants",
      "400g crushed tomatoes",
      "4 garlic cloves",
      "Fresh basil",
      "Ricotta salata",
      "Olive oil",
      "Salt, red pepper flakes"
    ],
    steps: [
      "Cube and fry eggplant in olive oil until golden.",
      "SautÃ© garlic, add tomatoes, simmer 20 min.",
      "Cook pasta al dente.",
      "Combine pasta with sauce and eggplant.",
      "Top with torn basil and grated ricotta salata."
    ],
    cardParagraph: "Sicily's operatic pasta. Fried eggplant and sweet tomato sauce crowned with salty ricotta â€” a simple recipe that hits every note perfectly.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["White Wine", "Salad", "Garlic Bread"],
    cuisine: "Italian"
  },
  {
    id: 16,
    cardImg: "tabbouleh.jpg",
    cardHeading: "Lebanese Tabbouleh",
    rating: [4.6, 66],
    calories: "150",
    cookingTime: "20",
    ingredients: [
      "2 cups fresh parsley",
      "Â½ cup fine bulgur wheat",
      "3 tomatoes (diced)",
      "4 spring onions",
      "Fresh mint leaves",
      "Lemon juice",
      "Olive oil",
      "Salt and pepper"
    ],
    steps: [
      "Soak bulgur in lemon juice for 20 min.",
      "Finely chop parsley, mint, tomatoes and spring onions.",
      "Combine everything in a bowl.",
      "Dress with olive oil and more lemon juice.",
      "Season and serve immediately."
    ],
    cardParagraph: "The freshest salad in existence. An explosion of parsley, mint and lemon â€” Lebanon's contribution to the world of green things.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Hummus", "Pita", "Grilled Meat"],
    cuisine: "Lebanese"
  },
  {
    id: 17,
    cardImg: "moroccan-tagine.jpg",
    cardHeading: "Moroccan Lamb Tagine",
    rating: [4.9, 107],
    calories: "440",
    cookingTime: "120",
    ingredients: [
      "1 kg lamb shoulder",
      "2 onions",
      "Preserved lemon",
      "Green olives",
      "Ras el hanout spice blend",
      "Saffron",
      "Fresh coriander",
      "Olive oil"
    ],
    steps: [
      "Brown lamb in olive oil.",
      "Add onions, ras el hanout and saffron.",
      "Add water and slow cook for 1.5 hours.",
      "Add preserved lemon and olives.",
      "Finish with coriander and serve with couscous."
    ],
    cardParagraph: "Morocco's signature slow-braise. Lamb falls apart in a warmly spiced broth perfumed with saffron, preserved lemon and briny olives.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Couscous", "Flatbread", "Mint Tea"],
    cuisine: "Moroccan"
  },
  {
    id: 18,
    cardImg: "falafel.jpg",
    cardHeading: "Crispy Falafel",
    rating: [4.7, 145],
    calories: "220",
    cookingTime: "30",
    ingredients: [
      "2 cups dried chickpeas (soaked)",
      "1 onion",
      "Garlic, parsley, coriander",
      "Cumin, coriander powder",
      "Baking soda",
      "Salt",
      "Oil for frying"
    ],
    steps: [
      "Blend chickpeas (not canned) with herbs and spices.",
      "Add baking soda, refrigerate 1 hour.",
      "Shape into small patties or balls.",
      "Deep fry at 175Â°C until dark golden, about 4 min.",
      "Serve in pita with salad and tahini sauce."
    ],
    cardParagraph: "Crisp on the outside, vivid green and herby within. Real falafel â€” made from soaked raw chickpeas â€” is in a different universe from anything premade.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Pita", "Tahini", "Pickles"],
    cuisine: "Lebanese"
  },
  {
    id: 19,
    cardImg: "spanish-paella.jpg",
    cardHeading: "Spanish Seafood Paella",
    rating: [4.9, 168],
    calories: "490",
    cookingTime: "60",
    ingredients: [
      "2 cups bomba or arborio rice",
      "500g mixed seafood (shrimp, mussels, squid)",
      "Saffron threads",
      "1 red bell pepper",
      "Smoked paprika",
      "Fish or chicken stock",
      "Garlic, tomato, olive oil"
    ],
    steps: [
      "Heat olive oil, sautÃ© pepper and garlic.",
      "Add tomato and paprika, cook down.",
      "Add rice and toast 2 min.",
      "Pour in saffron-infused stock.",
      "Add seafood on top, cook without stirring until socarrat forms."
    ],
    cardParagraph: "Spain's most iconic dish. Golden saffron rice studded with fresh seafood and crowned with a crispy bottom crust called socarrat.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Lemon Wedges", "Aioli", "White Wine"],
    cuisine: "Spanish"
  },
  {
    id: 20,
    cardImg: "turkish-lahmacun.jpg",
    cardHeading: "Turkish Lahmacun",
    rating: [4.8, 90],
    calories: "310",
    cookingTime: "40",
    ingredients: [
      "Pizza dough (thin)",
      "300g ground lamb or beef",
      "2 tomatoes (grated)",
      "1 onion (grated)",
      "Green pepper",
      "Parsley",
      "Red pepper paste",
      "Cumin, paprika"
    ],
    steps: [
      "Mix meat with grated vegetables and spices.",
      "Roll dough very thin.",
      "Spread meat mixture over dough.",
      "Bake at maximum oven heat for 8â€“10 min.",
      "Serve with lemon, parsley and roll up to eat."
    ],
    cardParagraph: "Turkey's answer to pizza â€” razor-thin flatbread topped with spiced minced meat, rolled up with herbs and a squeeze of lemon.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Lemon", "Parsley", "Ayran"],
    cuisine: "Turkish"
  }
                        ],
    
    'East Asian':[

        {
    id: 26,
    cardImg: "korean-bibimbap.jpg",
    cardHeading: "Korean Bibimbap",
    rating: [4.8, 155],
    calories: "430",
    cookingTime: "45",
    ingredients: [
      "2 cups cooked rice",
      "Beef bulgogi (thinly sliced marinated beef)",
      "Spinach, bean sprouts, carrots, mushrooms",
      "Fried egg",
      "Gochujang (red chili paste)",
      "Sesame oil",
      "Soy sauce, garlic"
    ],
    steps: [
      "SautÃ© each vegetable separately with garlic.",
      "Marinate and cook beef in soy, sesame, sugar.",
      "Put rice in hot stone bowl or regular bowl.",
      "Arrange vegetables and beef around the bowl.",
      "Top with fried egg and gochujang, mix before eating."
    ],
    cardParagraph: "Korea's beautiful bowl of contrast and harmony. Mixed rice with vibrant vegetables, spiced beef and a runny egg â€” eat it with a generous swirl of gochujang.",
    numberOfPeople: 2,
    cookingLevel: "Medium",
    perfectWith: ["Kimchi", "Doenjang Jjigae", "Barley Tea"],
    cuisine: "Korean"
  },
  {
    id: 27,
    cardImg: "japanese-ramen.jpg",
    cardHeading: "Tonkotsu Ramen",
    rating: [4.9, 220],
    calories: "560",
    cookingTime: "300",
    ingredients: [
      "Pork bones (for broth)",
      "Ramen noodles",
      "Chashu pork belly",
      "Soy sauce tare",
      "Soft boiled marinated eggs",
      "Nori, bamboo shoots, corn",
      "Green onions",
      "Sesame oil"
    ],
    steps: [
      "Boil pork bones aggressively for 4â€“6 hours until broth is milky white.",
      "Prepare chashu: braise pork belly in soy, mirin, sake.",
      "Make marinated soft-boiled eggs.",
      "Cook noodles, place in bowl with tare.",
      "Pour hot broth, add chashu, egg and toppings."
    ],
    cardParagraph: "Japan's most obsessive bowl. Creamy pork bone broth that takes all day â€” absolutely worth every hour for that first soul-warming sip.",
    numberOfPeople: 4,
    cookingLevel: "Hard",
    perfectWith: ["Gyoza", "Karaage", "Beer"],
    cuisine: "Japanese"
  },
  {
    id: 28,
    cardImg: "chinese-kung-pao.jpg",
    cardHeading: "Kung Pao Chicken",
    rating: [4.7, 140],
    calories: "350",
    cookingTime: "25",
    ingredients: [
      "500g chicken breast (diced)",
      "Dried red chilies",
      "Roasted peanuts",
      "Sichuan peppercorns",
      "Soy sauce, rice vinegar",
      "Sugar, cornstarch",
      "Garlic, ginger",
      "Green onions"
    ],
    steps: [
      "Marinate chicken in soy sauce and cornstarch.",
      "Stir-fry chilies and Sichuan peppercorns in hot wok.",
      "Add chicken and cook until golden.",
      "Add sauce (soy, vinegar, sugar) and toss.",
      "Finish with peanuts and green onions."
    ],
    cardParagraph: "Sichuan's greatest export. Tender chicken with the numbing tingle of Sichuan peppercorns, fruity heat of dried chilies, and crunchy peanuts.",
    numberOfPeople: 3,
    cookingLevel: "Medium",
    perfectWith: ["Steamed Rice", "Egg Fried Rice", "Spring Rolls"],
    cuisine: "Chinese"
  },
  {
    id: 29,
    cardImg: "thai-green-curry.jpg",
    cardHeading: "Thai Green Curry",
    rating: [4.8, 175],
    calories: "410",
    cookingTime: "30",
    ingredients: [
      "500g chicken or tofu",
      "3 tbsp green curry paste",
      "400ml coconut milk",
      "Thai eggplant",
      "Fish sauce",
      "Palm sugar",
      "Thai basil",
      "Kaffir lime leaves"
    ],
    steps: [
      "Fry green curry paste in coconut cream until fragrant.",
      "Add chicken and cook through.",
      "Pour in coconut milk, add eggplant.",
      "Season with fish sauce and palm sugar.",
      "Finish with Thai basil and kaffir lime leaves."
    ],
    cardParagraph: "Thailand's most aromatic curry. Coconut milk carries waves of lemongrass, galangal and green chilies around tender chicken in a bath of pure fragrance.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Jasmine Rice", "Roti Canai", "Cucumber Salad"],
    cuisine: "Thai"
  },
  {
    id: 30,
    cardImg: "vietnamese-pho.jpg",
    cardHeading: "Vietnamese Beef Pho",
    rating: [4.9, 188],
    calories: "390",
    cookingTime: "180",
    ingredients: [
      "Beef bones and brisket",
      "Rice noodles",
      "Star anise, cinnamon, cloves",
      "Charred ginger and onion",
      "Fish sauce",
      "Thinly sliced raw beef",
      "Bean sprouts, basil, lime",
      "Hoisin and Sriracha"
    ],
    steps: [
      "Char ginger and onion over flame.",
      "Simmer bones with spices for 3 hours.",
      "Strain broth, season with fish sauce.",
      "Cook noodles, place in bowl.",
      "Ladle hot broth over raw beef to cook, add garnishes."
    ],
    cardParagraph: "Vietnam's soul in a bowl. A crystal-clear star anise broth built over hours, poured over silken rice noodles and paper-thin raw beef slices.",
    numberOfPeople: 4,
    cookingLevel: "Hard",
    perfectWith: ["Hoisin Sauce", "Sriracha", "Lime"],
    cuisine: "Vietnamese"
  }


    ],

    'Southeast Asian':[
        {
    id: 51,
    cardImg: "malaysian-rendang.jpg",
    cardHeading: "Malaysian Beef Rendang",
    rating: [4.9, 145],
    calories: "460",
    cookingTime: "150",
    ingredients: [
      "1 kg beef (short rib or chuck)",
      "400ml coconut milk",
      "Lemongrass, galangal, ginger",
      "Kaffir lime leaves",
      "Toasted coconut (kerisik)",
      "Chilies, turmeric",
      "Shallots, garlic"
    ],
    steps: [
      "Blend shallots, garlic, ginger, galangal and chilies.",
      "Fry paste until fragrant.",
      "Add beef and coconut milk.",
      "Simmer until liquid reduces completely â€” can take 2 hours.",
      "Add kerisik and kaffir lime, continue until beef is dark and dry-fried."
    ],
    cardParagraph: "Malaysia and Indonesia's greatest achievement. Beef slow-cooked until the coconut milk has completely absorbed, leaving intensely flavored, caramelized, tender meat.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Nasi Lemak", "Ketupat", "Acar"],
    cuisine: "Malaysian"
  },
  {
    id: 52,
    cardImg: "singaporean-chili-crab.jpg",
    cardHeading: "Singapore Chili Crab",
    rating: [4.9, 122],
    calories: "390",
    cookingTime: "40",
    ingredients: [
      "2 large mud crabs",
      "Tomato sauce, chili sauce",
      "Eggs (beaten, for sauce)",
      "Garlic, ginger, shallots",
      "Sambal chili paste",
      "Cornstarch",
      "Spring onions"
    ],
    steps: [
      "Clean and cut crab.",
      "Fry aromatics in oil.",
      "Add chili paste, cook until fragrant.",
      "Add crab and toss well.",
      "Add tomato and chili sauce, drizzle beaten egg into sauce."
    ],
    cardParagraph: "Singapore's national obsession. Crab in a sweet-spicy-eggy tomato gravy â€” a sauce so good you'll order extra mantou buns just to mop it up.",
    numberOfPeople: 4,
    cookingLevel: "Hard",
    perfectWith: ["Mantou Buns", "Tiger Beer", "Rice"],
    cuisine: "Singaporean"
  },
  {
    id: 53,
    cardImg: "pad-thai.jpg",
    cardHeading: "Pad Thai",
    rating: [4.8, 210],
    calories: "440",
    cookingTime: "20",
    ingredients: [
      "200g flat rice noodles",
      "200g shrimp or chicken",
      "3 tbsp tamarind paste",
      "Fish sauce, palm sugar",
      "Eggs",
      "Bean sprouts, green onions",
      "Tofu",
      "Crushed peanuts, lime"
    ],
    steps: [
      "Soak noodles in cold water 30 min.",
      "Make sauce: tamarind, fish sauce, sugar.",
      "Stir-fry protein in hot wok.",
      "Add noodles and sauce, toss on high heat.",
      "Push aside, scramble eggs, add bean sprouts. Serve with peanuts and lime."
    ],
    cardParagraph: "Thailand's greatest noodle dish. Sweet, sour, salty and funky â€” a wok-charred masterpiece finished with crunchy peanuts and a lime squeeze.",
    numberOfPeople: 2,
    cookingLevel: "Medium",
    perfectWith: ["Tom Yum Soup", "Thai Iced Tea", "Spring Rolls"],
    cuisine: "Thai"
  },
  {
    id: 54,
    cardImg: "indonesian-nasi-goreng.jpg",
    cardHeading: "Indonesian Nasi Goreng",
    rating: [4.8, 175],
    calories: "410",
    cookingTime: "20",
    ingredients: [
      "3 cups cooked day-old rice",
      "Kecap manis (sweet soy sauce)",
      "Shrimp paste (belacan)",
      "Eggs",
      "Shallots, garlic, chilies",
      "Chicken or shrimp",
      "Prawn crackers",
      "Cucumber, tomato"
    ],
    steps: [
      "Fry shallots, garlic and chili in hot wok.",
      "Add shrimp paste, fry.",
      "Add protein and cook through.",
      "Add cold rice, break up lumps.",
      "Add kecap manis, fry egg on side, garnish and serve."
    ],
    cardParagraph: "Indonesia's iconic fried rice, fragrant with shrimp paste and sweet soy. A fried egg on top and prawn crackers on the side â€” the greatest rice dish ever?",
    numberOfPeople: 2,
    cookingLevel: "Easy",
    perfectWith: ["Prawn Crackers", "Acar", "Iced Tea"],
    cuisine: "Indonesian"
  },
  {
    id: 55,
    cardImg: "filipino-adobo.jpg",
    cardHeading: "Filipino Chicken Adobo",
    rating: [4.8, 160],
    calories: "380",
    cookingTime: "50",
    ingredients: [
      "1 kg chicken pieces",
      "Â½ cup soy sauce",
      "Â½ cup white vinegar",
      "Garlic (lots)",
      "Bay leaves",
      "Black peppercorns",
      "Sugar",
      "Oil"
    ],
    steps: [
      "Marinate chicken in soy sauce, vinegar and garlic.",
      "Brown chicken in oil.",
      "Pour in marinade and add bay leaves and peppercorns.",
      "Simmer uncovered until sauce reduces.",
      "Return chicken to pan to caramelize in sauce."
    ],
    cardParagraph: "The unofficial national dish of the Philippines. Chicken braised in vinegar and soy until tender and lacquered in a savory, slightly tangy glaze. Deeply addictive.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Steamed Rice", "Atchara (Pickles)", "Ensalada"],
    cuisine: "Filipino"
  }

    ],

    'Caribbean':[
            {
    id: 21,
    cardImg: "jamaican-jerk-chicken.jpg",
    cardHeading: "Jamaican Jerk Chicken",
    rating: [4.9, 195],
    calories: "380",
    cookingTime: "60",
    ingredients: [
      "1 kg chicken pieces",
      "Scotch bonnet peppers",
      "Allspice (pimento)",
      "Thyme, garlic, ginger",
      "Soy sauce, brown sugar",
      "Cinnamon, nutmeg",
      "Green onions",
      "Lime juice"
    ],
    steps: [
      "Blend all jerk marinade ingredients.",
      "Coat chicken deeply and marinate overnight.",
      "Grill over charcoal on low-medium heat.",
      "Cook slow, turning often, 45â€“50 min.",
      "Serve with rice and peas and festival bread."
    ],
    cardParagraph: "Jamaica's fiery, smoky grilled chicken â€” marinated in a complex blend of scotch bonnet and allspice. Addictive beyond reason.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Rice & Peas", "Festival", "Coleslaw"],
    cuisine: "Jamaican"
  },
  {
    id: 22,
    cardImg: "caribbean-goat-curry.jpg",
    cardHeading: "Caribbean Goat Curry",
    rating: [4.8, 88],
    calories: "420",
    cookingTime: "120",
    ingredients: [
      "1 kg goat meat",
      "Caribbean curry powder",
      "Scotch bonnet pepper",
      "Thyme, garlic, ginger",
      "2 onions",
      "Potato",
      "Coconut milk",
      "Green onions"
    ],
    steps: [
      "Marinate goat in curry powder, garlic and thyme overnight.",
      "Brown in oil with onions.",
      "Add water and scotch bonnet, slow cook 1.5 hours.",
      "Add potato and coconut milk.",
      "Simmer until thick and meat is tender."
    ],
    cardParagraph: "A rich, intoxicating goat curry with deep Caribbean soul. The slow cooking transforms tough goat into something transcendently tender.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Roti", "Rice", "Plantain"],
    cuisine: "Jamaican"
  },
  {
    id: 23,
    cardImg: "trinidadian-doubles.jpg",
    cardHeading: "Trinidadian Doubles",
    rating: [4.8, 79],
    calories: "350",
    cookingTime: "60",
    ingredients: [
      "Bara (fried flatbread): flour, yeast, turmeric",
      "2 cans chickpeas",
      "Curry powder, cumin",
      "Chadon beni (shadow beni herb)",
      "Scotch bonnet pepper",
      "Tamarind sauce",
      "Cucumber chutney"
    ],
    steps: [
      "Make bara dough with flour, yeast, turmeric, rest 1 hour.",
      "Fry bara into small soft discs.",
      "Cook chickpeas with curry powder, cumin, and shadow beni.",
      "Pile channa onto bara.",
      "Top with tamarind, pepper sauce and cucumber chutney."
    ],
    cardParagraph: "Trinidad's iconic street breakfast. Two soft fried bara stuffed with curried chickpeas and a cascade of chutneys. Nothing else like it on earth.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Pepper Sauce", "Tamarind", "Shadow Beni Chutney"],
    cuisine: "Trinidadian"
  },
  {
    id: 24,
    cardImg: "cuban-ropa-vieja.jpg",
    cardHeading: "Cuban Ropa Vieja",
    rating: [4.8, 82],
    calories: "360",
    cookingTime: "120",
    ingredients: [
      "700g flank steak",
      "1 red bell pepper",
      "1 green bell pepper",
      "400g crushed tomatoes",
      "Garlic, onion",
      "Cumin, oregano",
      "Olives, capers",
      "Olive oil"
    ],
    steps: [
      "Boil flank steak until tender, about 1 hour.",
      "Shred beef into thin strips.",
      "SautÃ© peppers, onion and garlic.",
      "Add tomatoes, cumin, oregano and olives.",
      "Add shredded beef and simmer 20 min."
    ],
    cardParagraph: "Cuba's national dish. Slow-cooked beef shredded like 'old clothes' and braised in a sweet-tangy pepper and tomato sofrito.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Black Beans", "White Rice", "Plantain"],
    cuisine: "Cuban"
  },
  {
    id: 25,
    cardImg: "barbadian-flying-fish.jpg",
    cardHeading: "Barbadian Flying Fish",
    rating: [4.7, 65],
    calories: "300",
    cookingTime: "30",
    ingredients: [
      "4 flying fish fillets",
      "Lime juice",
      "Seasoning pepper, garlic",
      "Onion, thyme",
      "Breadcrumbs",
      "Egg for coating",
      "Bajan seasoning",
      "Oil for frying"
    ],
    steps: [
      "Marinate fish in lime, Bajan seasoning and garlic.",
      "Dip in egg then breadcrumbs.",
      "Fry until golden brown.",
      "Serve with cou-cou (cornmeal and okra).",
      "Add fried onion gravy on top."
    ],
    cardParagraph: "Barbados's national dish and soul. Crisp, seasoned flying fish over creamy cou-cou â€” a plate that tells the whole island's story.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Cou-Cou", "Gravy", "Coleslaw"],
    cuisine: "Barbadian"
  }
    ],

    'African':[
        {
    id: 31,
    cardImg: "ethiopian-injera-doro-wat.jpg",
    cardHeading: "Doro Wat with Injera",
    rating: [4.9, 98],
    calories: "470",
    cookingTime: "90",
    ingredients: [
      "1 whole chicken (cut up)",
      "4 red onions (finely chopped)",
      "Berbere spice blend",
      "Niter kibbeh (spiced butter)",
      "Eggs (hard boiled)",
      "Garlic, ginger",
      "Injera flatbread"
    ],
    steps: [
      "Sweat dry onions until caramelized, no oil.",
      "Add niter kibbeh, garlic, ginger.",
      "Add berbere and cook until dark and fragrant.",
      "Add chicken, cook in the spiced onion base.",
      "Add eggs, simmer, serve on injera."
    ],
    cardParagraph: "Ethiopia's celebratory dish. Deeply spiced chicken stew in a crimson berbere sauce, served on spongy injera that doubles as both plate and utensil.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Injera", "Ayib (Cheese)", "Lentils"],
    cuisine: "Ethiopian"
  },
  {
    id: 32,
    cardImg: "nigerian-jollof-rice.jpg",
    cardHeading: "Nigerian Jollof Rice",
    rating: [4.9, 210],
    calories: "400",
    cookingTime: "75",
    ingredients: [
      "3 cups long grain rice",
      "400g crushed tomatoes",
      "2 red bell peppers",
      "Scotch bonnet peppers",
      "Chicken stock",
      "Tomato paste",
      "Onion, garlic",
      "Bay leaves, thyme, curry powder"
    ],
    steps: [
      "Blend tomatoes, peppers and onion.",
      "Fry tomato paste then add blended pepper.",
      "Cook down until oil rises, 30 min.",
      "Add rice and stock, stir once.",
      "Cook covered until rice is done and smoky."
    ],
    cardParagraph: "The dish that started a continental rivalry. West Africa's legendary one-pot rice, smoky, tomato-red and deeply flavorful. Nigeria's version wins.",
    numberOfPeople: 6,
    cookingLevel: "Medium",
    perfectWith: ["Fried Chicken", "Plantain", "Coleslaw"],
    cuisine: "Nigerian"
  },
  {
    id: 33,
    cardImg: "moroccan-harira.jpg",
    cardHeading: "Moroccan Harira Soup",
    rating: [4.7, 72],
    calories: "280",
    cookingTime: "60",
    ingredients: [
      "Lamb pieces",
      "Lentils, chickpeas",
      "Vermicelli noodles",
      "Tomatoes",
      "Celery, parsley, coriander",
      "Lemon",
      "Saffron",
      "Ras el hanout"
    ],
    steps: [
      "Brown lamb with onion and spices.",
      "Add tomatoes, lentils and water, simmer.",
      "Add chickpeas and cook until tender.",
      "Add vermicelli, parsley, coriander.",
      "Finish with lemon juice."
    ],
    cardParagraph: "Morocco's nourishing national soup, traditionally served to break the Ramadan fast. Hearty with legumes, fragrant with saffron, and brightened with lemon.",
    numberOfPeople: 6,
    cookingLevel: "Medium",
    perfectWith: ["Dates", "Chebakia", "Flatbread"],
    cuisine: "Moroccan"
  },
  {
    id: 34,
    cardImg: "south-african-bobotie.jpg",
    cardHeading: "South African Bobotie",
    rating: [4.7, 68],
    calories: "390",
    cookingTime: "70",
    ingredients: [
      "500g ground beef or lamb",
      "2 onions",
      "Curry powder, turmeric",
      "Apricot jam or chutney",
      "Dried apricots, raisins",
      "Bay leaves",
      "Eggs + milk (for custard top)",
      "White bread (soaked)"
    ],
    steps: [
      "SautÃ© onions, add curry and meat.",
      "Add chutney, raisins and soaked bread.",
      "Place in baking dish with bay leaves on top.",
      "Pour egg-milk custard over top.",
      "Bake at 180Â°C until custard is set."
    ],
    cardParagraph: "South Africa's Cape Malay treasure. Spiced meat baked under a golden egg custard with sweet fruit accents â€” where Africa meets Asia meets colonial history.",
    numberOfPeople: 6,
    cookingLevel: "Medium",
    perfectWith: ["Yellow Rice", "Chutney", "Banana"],
    cuisine: "South African"
  }    
    ],

    'Latin American':[
            {
    id: 35,
    cardImg: "mexican-mole-negro.jpg",
    cardHeading: "Oaxacan Mole Negro",
    rating: [4.9, 88],
    calories: "490",
    cookingTime: "180",
    ingredients: [
      "Chicken pieces",
      "Mulato, ancho, chipotle chilies",
      "Plantain, raisins",
      "Mexican chocolate",
      "Tomatoes, tomatillos",
      "Sesame seeds, pumpkin seeds",
      "Cinnamon, cloves, cumin",
      "Tortillas (charred)"
    ],
    steps: [
      "Toast and rehydrate dried chilies.",
      "Fry tomatoes, tomatillos, plantain.",
      "Blend everything in batches.",
      "Fry mole paste in oil until very dark.",
      "Add broth gradually, add chocolate, simmer 1 hour, add chicken."
    ],
    cardParagraph: "The pinnacle of Mexican cuisine. A sauce with 30+ ingredients and centuries of history â€” dark, smoky, complex, and unlike anything else on earth.",
    numberOfPeople: 8,
    cookingLevel: "Hard",
    perfectWith: ["White Rice", "Tortillas", "Black Beans"],
    cuisine: "Mexican"
  },
  {
    id: 36,
    cardImg: "peruvian-ceviche.jpg",
    cardHeading: "Peruvian Ceviche",
    rating: [4.9, 133],
    calories: "220",
    cookingTime: "20",
    ingredients: [
      "500g fresh white fish (sea bass or flounder)",
      "Â½ cup lime juice",
      "1 red onion (thinly sliced)",
      "AjÃ­ amarillo paste",
      "Fresh coriander",
      "Salt",
      "Sweet potato (boiled)",
      "Cancha corn"
    ],
    steps: [
      "Cube fish into 2cm pieces.",
      "Season with salt, add lime juice and ajÃ­ amarillo.",
      "Let cure for 3â€“10 min.",
      "Add onion slices and coriander.",
      "Serve immediately with sweet potato and cancha."
    ],
    cardParagraph: "Peru's greatest gift to the culinary world. Raw fish cured in tiger's milk of lime and yellow chili â€” electric, acidic, and devastatingly fresh.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Sweet Potato", "Cancha", "Leche de Tigre shot"],
    cuisine: "Peruvian"
  },
  {
    id: 37,
    cardImg: "argentinian-asado.jpg",
    cardHeading: "Argentinian Asado",
    rating: [4.9, 199],
    calories: "580",
    cookingTime: "120",
    ingredients: [
      "Beef short ribs",
      "Chorizo and morcilla (blood sausage)",
      "Coarse salt",
      "Chimichurri: parsley, garlic, oregano, red wine vinegar, olive oil",
      "Provoleta cheese",
      "Charcoal"
    ],
    steps: [
      "Light charcoal and let burn to white ash.",
      "Season meat only with coarse salt.",
      "Grill low and slow, ribs bone-side down first.",
      "Make chimichurri, let rest.",
      "Serve all meats with chimichurri and provoleta."
    ],
    cardParagraph: "Argentina's sacred ritual of fire and beef. Slow-cooked over white-hot coals with nothing but salt â€” a philosophy of restraint that produces transcendent results.",
    numberOfPeople: 6,
    cookingLevel: "Medium",
    perfectWith: ["Chimichurri", "Provoleta", "Red Wine"],
    cuisine: "Argentinian"
  },
  {
    id: 38,
    cardImg: "brazilian-feijoada.jpg",
    cardHeading: "Brazilian Feijoada",
    rating: [4.8, 105],
    calories: "520",
    cookingTime: "150",
    ingredients: [
      "500g black beans",
      "Pork ribs, smoked sausage",
      "Bacon, salted pork",
      "2 onions, garlic",
      "Bay leaves",
      "Orange (to garnish broth)",
      "Farofa (toasted cassava flour)",
      "Collard greens"
    ],
    steps: [
      "Soak beans overnight.",
      "Brown all meats, add onion and garlic.",
      "Add beans and water, slow cook 2 hours.",
      "Season with bay leaves and orange zest.",
      "Serve with rice, farofa, greens and orange slices."
    ],
    cardParagraph: "Brazil's soul food in a pot. A thick black bean stew with every part of the pig, served Saturday afternoons with the whole family gathered close.",
    numberOfPeople: 8,
    cookingLevel: "Hard",
    perfectWith: ["White Rice", "Farofa", "Collard Greens"],
    cuisine: "Brazilian"
  },
  {
    id: 39,
    cardImg: "colombian-bandeja-paisa.jpg",
    cardHeading: "Bandeja Paisa",
    rating: [4.8, 86],
    calories: "780",
    cookingTime: "90",
    ingredients: [
      "Ground beef",
      "Red beans",
      "White rice",
      "ChicharrÃ³n (pork cracklings)",
      "Chorizo",
      "Fried egg",
      "Plantain",
      "Avocado, arepa"
    ],
    steps: [
      "Cook red beans with hogao (tomato-onion sauce).",
      "Cook seasoned ground beef.",
      "Fry chorizo and chicharrÃ³n.",
      "Fry plantain slices golden.",
      "Plate everything together with arepa, egg and avocado."
    ],
    cardParagraph: "Colombia's legendary platter â€” an overwhelming feast of beans, rice, beef, pork, egg and plantain on one tray. The mountains of Antioquia on a plate.",
    numberOfPeople: 2,
    cookingLevel: "Hard",
    perfectWith: ["Agua Panela", "Mazamorra", "Coffee"],
    cuisine: "Colombian"
  },
  {
    id: 40,
    cardImg: "mexican-tacos-al-pastor.jpg",
    cardHeading: "Tacos Al Pastor",
    rating: [4.9, 245],
    calories: "380",
    cookingTime: "60",
    ingredients: [
      "700g pork shoulder",
      "Guajillo and ancho chilies",
      "Achiote paste",
      "Pineapple",
      "Onion, garlic",
      "Corn tortillas",
      "Coriander, white onion",
      "Salsa verde"
    ],
    steps: [
      "Blend rehydrated chilies with achiote, garlic and vinegar.",
      "Marinate pork slices overnight.",
      "Stack on spit or roast flat in oven.",
      "Slice thinly with pineapple chunks.",
      "Serve on warm tortillas with coriander, onion and salsa."
    ],
    cardParagraph: "Mexico City's greatest street food. Lebanese immigrants brought the spit-roast technique; Mexico added achiote, chilies and pineapple. The world won.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Salsa Verde", "Lime", "Agua Fresca"],
    cuisine: "Mexican"
  }
    ],

    'European & American':[
           {
    id: 41,
    cardImg: "french-beef-bourguignon.jpg",
    cardHeading: "Beef Bourguignon",
    rating: [4.9, 125],
    calories: "490",
    cookingTime: "180",
    ingredients: [
      "1 kg beef chuck",
      "1 bottle red Burgundy wine",
      "Bacon lardons",
      "Pearl onions, mushrooms, carrots",
      "Beef stock",
      "Thyme, bay leaves",
      "Butter, flour",
      "Garlic"
    ],
    steps: [
      "Brown beef in batches, set aside.",
      "Fry lardons, add vegetables.",
      "Return beef, add wine and stock.",
      "Braise in oven at 160Â°C for 2.5 hours.",
      "Add mushrooms last 30 min, finish with butter."
    ],
    cardParagraph: "Julia Child's gift to home cooks everywhere. Wine-braised beef that transforms humble chuck into a rich, glossy stew of absolute elegance.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Mashed Potato", "Crusty Bread", "Red Wine"],
    cuisine: "French"
  },
  {
    id: 42,
    cardImg: "italian-carbonara.jpg",
    cardHeading: "Spaghetti Carbonara",
    rating: [4.9, 230],
    calories: "520",
    cookingTime: "20",
    ingredients: [
      "400g spaghetti",
      "200g guanciale or pancetta",
      "4 egg yolks + 1 whole egg",
      "100g Pecorino Romano",
      "50g Parmesan",
      "Black pepper",
      "Pasta water"
    ],
    steps: [
      "Cook spaghetti al dente, reserve pasta water.",
      "Render guanciale until crispy.",
      "Whisk eggs with cheese and black pepper.",
      "Toss hot pasta with guanciale off heat.",
      "Add egg mixture, splash of pasta water, toss until creamy."
    ],
    cardParagraph: "Rome's perfect pasta â€” four ingredients, zero cream, total mastery required. Hot pasta meets egg and cheese into a sauce that's somehow luxurious and light at once.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["White Wine", "Salad", "Bruschetta"],
    cuisine: "Italian"
  },
  {
    id: 43,
    cardImg: "spanish-gazpacho.jpg",
    cardHeading: "Andalusian Gazpacho",
    rating: [4.7, 88],
    calories: "140",
    cookingTime: "15",
    ingredients: [
      "6 ripe tomatoes",
      "1 cucumber",
      "1 green bell pepper",
      "2 garlic cloves",
      "Sherry vinegar",
      "Good olive oil",
      "Day-old bread",
      "Salt, cumin"
    ],
    steps: [
      "Soak bread in water, squeeze out.",
      "Blend all vegetables with garlic.",
      "Add bread, vinegar, olive oil and blend smooth.",
      "Season well and chill for at least 2 hours.",
      "Serve cold with garnishes of diced vegetable."
    ],
    cardParagraph: "Andalusia in a bowl. A chilled liquid salad that captures the height of summer tomatoes â€” cool, acidic, deeply savory, and deeply Spanish.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["JamÃ³n IbÃ©rico", "Crusty Bread", "Fino Sherry"],
    cuisine: "Spanish"
  },
  {
    id: 44,
    cardImg: "hungarian-goulash.jpg",
    cardHeading: "Hungarian Goulash",
    rating: [4.8, 91],
    calories: "420",
    cookingTime: "120",
    ingredients: [
      "800g beef chuck",
      "3 tbsp sweet paprika",
      "2 large onions",
      "Green and red peppers",
      "Caraway seeds",
      "Potatoes",
      "Beef stock",
      "Lard or oil"
    ],
    steps: [
      "Cook onions in lard until soft.",
      "Remove from heat, stir in paprika.",
      "Add beef, peppers and caraway.",
      "Add stock and braise 1.5 hours.",
      "Add potatoes, cook until tender."
    ],
    cardParagraph: "Hungary's most famous export after Liszt. A paprika-red beef stew that warms from the inside â€” rustic, honest, and staggeringly good.",
    numberOfPeople: 6,
    cookingLevel: "Medium",
    perfectWith: ["Egg Noodles", "Sour Cream", "Crusty Bread"],
    cuisine: "Hungarian"
  },
  {
    id: 45,
    cardImg: "british-fish-chips.jpg",
    cardHeading: "Classic British Fish & Chips",
    rating: [4.7, 145],
    calories: "580",
    cookingTime: "40",
    ingredients: [
      "4 cod or haddock fillets",
      "Beer batter: flour, beer, baking powder",
      "Potatoes (Maris Piper)",
      "Salt, malt vinegar",
      "Mushy peas",
      "Tartare sauce"
    ],
    steps: [
      "Cut potatoes into thick chips, double fry (130Â°C then 180Â°C).",
      "Make batter with cold beer.",
      "Coat fish in flour then batter.",
      "Fry fish at 180Â°C until golden and crisp.",
      "Serve with mushy peas, tartare sauce and malt vinegar."
    ],
    cardParagraph: "Britain's national treasure wrapped in newspaper. Properly battered fish with proper double-fried chips. Simple food elevated to a cultural institution.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Mushy Peas", "Tartare Sauce", "Malt Vinegar"],
    cuisine: "British"
  } 
    ],

    'World Famouse':[
            {
    id: 61,
    cardImg: "japanese-katsu-curry.jpg",
    cardHeading: "Japanese Katsu Curry",
    rating: [4.8, 170],
    calories: "550",
    cookingTime: "45",
    ingredients: [
      "2 chicken breasts",
      "Panko breadcrumbs",
      "Eggs, flour",
      "Japanese curry roux blocks",
      "Onion, carrot, potato",
      "Apple (for sweetness)",
      "Steamed Japanese rice"
    ],
    steps: [
      "Pound chicken flat, coat in flour, egg, panko.",
      "Deep fry at 170Â°C until golden.",
      "Make curry: onion, carrot, potato in stock.",
      "Add curry roux blocks and grated apple.",
      "Slice katsu over rice, pour curry alongside."
    ],
    cardParagraph: "Japan's ultimate comfort food. A crispy panko-crumbed chicken cutlet beside mild, sweet Japanese curry â€” a dish every Japanese person has deep emotional attachment to.",
    numberOfPeople: 2,
    cookingLevel: "Medium",
    perfectWith: ["Pickled Radish", "Miso Soup", "Cabbage Salad"],
    cuisine: "Japanese"
  },
  {
    id: 62,
    cardImg: "korean-kimchi-jjigae.jpg",
    cardHeading: "Kimchi Jjigae",
    rating: [4.8, 148],
    calories: "310",
    cookingTime: "30",
    ingredients: [
      "2 cups well-fermented kimchi",
      "200g pork belly",
      "Tofu (soft)",
      "Gochugaru (red pepper flakes)",
      "Sesame oil",
      "Soy sauce",
      "Anchovy stock",
      "Green onions"
    ],
    steps: [
      "Fry pork belly until golden.",
      "Add kimchi and fry together.",
      "Pour in anchovy stock.",
      "Add gochugaru and soy, simmer 15 min.",
      "Add tofu gently, finish with sesame oil and green onion."
    ],
    cardParagraph: "Korea's most comforting stew. Deeply sour kimchi braised with fatty pork belly and silken tofu in a fiery red broth â€” the perfect cold-weather remedy.",
    numberOfPeople: 2,
    cookingLevel: "Easy",
    perfectWith: ["Steamed Rice", "Banchan", "Soju"],
    cuisine: "Korean"
  },
  {
    id: 63,
    cardImg: "butter-chicken.jpg",
    cardHeading: "Butter Chicken (Murgh Makhani)",
    rating: [4.9, 290],
    calories: "420",
    cookingTime: "60",
    ingredients: [
      "800g chicken (marinated in yogurt & spices)",
      "Tomatoes",
      "Butter",
      "Heavy cream",
      "Kashmiri red chili (for color)",
      "Cardamom, cinnamon, cloves",
      "Kasuri methi (dried fenugreek)",
      "Ginger-garlic paste"
    ],
    steps: [
      "Grill or broil marinated chicken until charred.",
      "Make tomato sauce with butter and spices.",
      "Blend sauce until smooth.",
      "Add chicken to sauce, simmer.",
      "Finish with cream and crushed kasuri methi."
    ],
    cardParagraph: "Arguably the world's most popular Indian dish. A velvety, butter-rich tomato sauce of extraordinary depth, wrapping smoky tandoori chicken in absolute luxury.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Garlic Naan", "Basmati Rice", "Lassi"],
    cuisine: "Indian"
  },
  {
    id: 64,
    cardImg: "japanese-gyoza.jpg",
    cardHeading: "Japanese Gyoza",
    rating: [4.8, 190],
    calories: "280",
    cookingTime: "40",
    ingredients: [
      "Gyoza wrappers",
      "300g ground pork",
      "Napa cabbage (salted, squeezed)",
      "Garlic, ginger",
      "Soy sauce, sesame oil",
      "Chives",
      "Dipping sauce: soy + rice vinegar + chili oil"
    ],
    steps: [
      "Mix pork with cabbage, garlic, ginger, soy, sesame.",
      "Place filling in wrappers, fold and pleat.",
      "Fry flat-side down in oil until golden.",
      "Add water, cover and steam 5 min.",
      "Uncover to crisp base again."
    ],
    cardParagraph: "Japan's beloved pan-fried dumpling. Crispy on the bottom, steamed and tender on top â€” with a pork and cabbage filling that's become a global obsession.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Ramen", "Gyoza Sauce", "Beer"],
    cuisine: "Japanese"
  },
  {
    id: 65,
    cardImg: "greek-spanakopita.jpg",
    cardHeading: "Greek Spanakopita",
    rating: [4.7, 105],
    calories: "350",
    cookingTime: "70",
    ingredients: [
      "Phyllo dough",
      "500g fresh spinach",
      "200g feta cheese",
      "2 eggs",
      "Spring onions",
      "Fresh dill",
      "Olive oil",
      "Nutmeg"
    ],
    steps: [
      "Wilt spinach, squeeze dry, chop.",
      "Mix with crumbled feta, eggs, onion, dill, nutmeg.",
      "Brush phyllo sheets with olive oil, layer in pan.",
      "Add filling, fold and layer more phyllo on top.",
      "Score top, brush with oil, bake at 190Â°C for 40 min."
    ],
    cardParagraph: "Greece's iconic spinach-feta pie wrapped in shatteringly crisp phyllo. Every Greek household has its own version, and every version is correct.",
    numberOfPeople: 8,
    cookingLevel: "Medium",
    perfectWith: ["Greek Salad", "Tzatziki", "White Wine"],
    cuisine: "Greek"
  },
  {
    id: 66,
    cardImg: "nigerian-egusi-soup.jpg",
    cardHeading: "Nigerian Egusi Soup",
    rating: [4.8, 85],
    calories: "450",
    cookingTime: "60",
    ingredients: [
      "2 cups ground egusi (melon seeds)",
      "Assorted meats (oxtail, goat, tripe)",
      "Dried stockfish",
      "Palm oil",
      "Leafy greens (spinach or bitter leaf)",
      "Crayfish",
      "Scotch bonnet pepper",
      "Onion"
    ],
    steps: [
      "Cook assorted meats with onion and seasoning until tender.",
      "Heat palm oil, fry blended pepper.",
      "Add egusi and stir-fry into the oil.",
      "Add meat stock and crayfish.",
      "Add meat, stockfish and greens, simmer 15 min."
    ],
    cardParagraph: "Nigeria's most beloved soup. Ground melon seeds create a thick, nutty stew enriched with palm oil and dried fish â€” eaten with fufu, eba or pounded yam.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Fufu", "Eba", "Pounded Yam"],
    cuisine: "Nigerian"
  },
  {
    id: 67,
    cardImg: "turkish-iskender.jpg",
    cardHeading: "Ä°skender Kebab",
    rating: [4.9, 118],
    calories: "520",
    cookingTime: "30",
    ingredients: [
      "DÃ¶ner lamb meat (thinly sliced)",
      "Pide bread (torn into pieces)",
      "Tomato sauce (butter, tomato)",
      "Browned butter",
      "Yogurt",
      "Fresh herbs"
    ],
    steps: [
      "Roast and slice dÃ¶ner lamb.",
      "Toast pide pieces in oven.",
      "Make tomato sauce with butter.",
      "Layer: pide â†’ meat â†’ tomato sauce.",
      "Drizzle browned butter on top, serve with cold yogurt."
    ],
    cardParagraph: "Bursa's gift to Turkish cuisine. Tender dÃ¶ner slices over crispy pide bread, bathed in tomato butter sauce and finished with sizzling browned butter.",
    numberOfPeople: 2,
    cookingLevel: "Medium",
    perfectWith: ["Ayran", "Green Salad", "Pickles"],
    cuisine: "Turkish"
  },
  {
    id: 68,
    cardImg: "french-onion-soup.jpg",
    cardHeading: "French Onion Soup",
    rating: [4.8, 120],
    calories: "380",
    cookingTime: "75",
    ingredients: [
      "6 large onions (sliced)",
      "Dry white wine",
      "Beef stock",
      "GruyÃ¨re cheese",
      "Baguette",
      "Butter",
      "Thyme, bay leaf",
      "Flour"
    ],
    steps: [
      "Caramelize onions in butter for 45 min until deep golden.",
      "Add wine and reduce.",
      "Add stock, thyme and bay, simmer 20 min.",
      "Ladle into oven-proof bowls, float baguette slices.",
      "Top with GruyÃ¨re and broil until bubbling and golden."
    ],
    cardParagraph: "One of France's greatest cold-weather rituals. Deeply caramelized onions in rich beef broth topped with a bubbling gratin of GruyÃ¨re â€” worth every minute of patience.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Baguette", "Red Wine", "Salad"],
    cuisine: "French"
  },
  {
    id: 69,
    cardImg: "indian-palak-paneer.jpg",
    cardHeading: "Palak Paneer",
    rating: [4.7, 135],
    calories: "310",
    cookingTime: "35",
    ingredients: [
      "500g fresh spinach",
      "300g paneer (cubed)",
      "2 onions",
      "Ginger-garlic paste",
      "Tomatoes",
      "Cumin, garam masala, coriander",
      "Fresh cream",
      "Ghee"
    ],
    steps: [
      "Blanch spinach, blend until smooth.",
      "Fry paneer until golden, set aside.",
      "Make masala: onion, ginger-garlic, tomatoes and spices.",
      "Add spinach puree and simmer.",
      "Add paneer and cream, cook 5 min."
    ],
    cardParagraph: "Vibrant green spinach curry studded with golden cubes of fresh Indian cheese. Simple, nutritious, and deeply satisfying vegetarian comfort food.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Garlic Naan", "Jeera Rice", "Raita"],
    cuisine: "Indian"
  },
  {
    id: 70,
    cardImg: "australian-meat-pie.jpg",
    cardHeading: "Australian Meat Pie",
    rating: [4.7, 95],
    calories: "480",
    cookingTime: "90",
    ingredients: [
      "Short crust pastry (base)",
      "Puff pastry (top)",
      "500g ground beef",
      "Beef stock",
      "Worcestershire sauce",
      "Tomato paste",
      "Onion",
      "Cornstarch"
    ],
    steps: [
      "Brown beef with onion.",
      "Add tomato paste, stock and Worcestershire.",
      "Thicken with cornstarch, cool filling.",
      "Line pie tin with shortcrust, add filling.",
      "Top with puff pastry, brush with egg, bake 30 min at 200Â°C."
    ],
    cardParagraph: "Australia's great sporting event food. A hand-held pie of rich, saucy beef filling in buttery pastry â€” traditionally drowned in tomato sauce at the footy.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Tomato Sauce", "Mushy Peas", "Beer"],
    cuisine: "Australian"
  },
  {
    id: 71,
    cardImg: "shrimp-etouffee.jpg",
    cardHeading: "Louisiana Shrimp Ã‰touffÃ©e",
    rating: [4.8, 88],
    calories: "380",
    cookingTime: "45",
    ingredients: [
      "700g large shrimp",
      "The holy trinity: onion, celery, bell pepper",
      "Butter",
      "Cajun seasoning",
      "Worcestershire sauce",
      "Hot sauce",
      "Garlic",
      "Shrimp stock"
    ],
    steps: [
      "Make roux with butter and flour until golden.",
      "Add the trinity and cook down.",
      "Add garlic, Cajun seasoning, Worcestershire.",
      "Add shrimp stock and simmer.",
      "Add shrimp and cook until just pink."
    ],
    cardParagraph: "Louisiana bayou cooking at its finest. Buttery, spiced shrimp smothered in a glossy gravy â€” served over white rice in a bowl that smells like New Orleans.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["White Rice", "Cornbread", "Sweet Tea"],
    cuisine: "American"
  },
  {
    id: 72,
    cardImg: "russian-borscht.jpg",
    cardHeading: "Russian Borscht",
    rating: [4.7, 90],
    calories: "250",
    cookingTime: "75",
    ingredients: [
      "500g beef",
      "3 beets",
      "Cabbage, carrots, potatoes",
      "Onion, garlic",
      "Tomato paste",
      "White vinegar",
      "Dill",
      "Sour cream"
    ],
    steps: [
      "Slow cook beef until tender, reserve stock.",
      "Roast or grate beets.",
      "SautÃ© onion, carrot with tomato paste.",
      "Add stock, potato and cabbage.",
      "Add beets and vinegar at end, serve with dill and sour cream."
    ],
    cardParagraph: "Eastern Europe's crimson icon. A vibrant beet soup that's sour, earthy and warming â€” the color alone is a spectacle, the flavor a revelation.",
    numberOfPeople: 6,
    cookingLevel: "Medium",
    perfectWith: ["Sour Cream", "Dark Bread", "Dill"],
    cuisine: "Russian"
  },
  {
    id: 73,
    cardImg: "mexican-enchiladas.jpg",
    cardHeading: "Red Chile Enchiladas",
    rating: [4.7, 105],
    calories: "420",
    cookingTime: "60",
    ingredients: [
      "Corn tortillas",
      "Shredded chicken or beef",
      "Ancho and guajillo chiles (for sauce)",
      "Chicken stock",
      "Cumin, oregano, garlic",
      "Queso fresco",
      "Onion",
      "Sour cream"
    ],
    steps: [
      "Toast and rehydrate dried chilies.",
      "Blend with garlic, cumin, stock.",
      "Fry sauce in oil until darkened.",
      "Dip tortillas in sauce, fill with meat, roll.",
      "Place in dish, pour remaining sauce, bake 20 min."
    ],
    cardParagraph: "Mexico's great rolled comfort food. Corn tortillas soaked in deep red ancho chile sauce, stuffed with seasoned meat and topped with crumbled cheese.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Mexican Rice", "Refried Beans", "Margarita"],
    cuisine: "Mexican"
  },
  {
    id: 74,
    cardImg: "indian-tandoori-chicken.jpg",
    cardHeading: "Tandoori Chicken",
    rating: [4.8, 178],
    calories: "320",
    cookingTime: "50",
    ingredients: [
      "1 kg chicken (bone-in)",
      "Yogurt",
      "Kashmiri red chili powder",
      "Ginger-garlic paste",
      "Cumin, coriander, garam masala",
      "Lemon juice",
      "Mustard oil",
      "Salt"
    ],
    steps: [
      "Score chicken deeply and marinate in yogurt-spice mixture.",
      "Marinate minimum 6 hours, overnight best.",
      "Cook at maximum oven heat or under broiler.",
      "Cook until charred in places, 30â€“35 min.",
      "Serve with raw onion rings, lemon and mint chutney."
    ],
    cardParagraph: "The dish that put India on the global food map. Yogurt-marinated chicken charred in a screaming hot oven â€” smoky, crimson, and deeply aromatic.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Mint Chutney", "Onion Rings", "Naan"],
    cuisine: "Indian"
  },
  {
    id: 75,
    cardImg: "portuguese-bacalhau.jpg",
    cardHeading: "Bacalhau Ã  BrÃ¡s",
    rating: [4.7, 78],
    calories: "420",
    cookingTime: "40",
    ingredients: [
      "400g salted cod (bacalhau, desalted)",
      "Thin fries (matchstick potatoes)",
      "5 eggs",
      "2 onions",
      "Garlic, olive oil",
      "Black olives",
      "Parsley"
    ],
    steps: [
      "Shred desalted bacalhau.",
      "Fry matchstick potatoes until golden, drain.",
      "SautÃ© onions and garlic in olive oil.",
      "Add bacalhau, then stir in beaten eggs off heat.",
      "Fold in potatoes, garnish with olives and parsley."
    ],
    cardParagraph: "Portugal's favorite way with salt cod. Silky scrambled eggs with shredded bacalhau and crispy matchstick fries â€” simple genius from a nation of legendary seafarers.",
    numberOfPeople: 4,
    cookingLevel: "Medium",
    perfectWith: ["Vinho Verde", "Salad", "Crusty Bread"],
    cuisine: "Portuguese"
  },
  {
    id: 76,
    cardImg: "dim-sum-har-gow.jpg",
    cardHeading: "Dim Sum Har Gow",
    rating: [4.8, 155],
    calories: "210",
    cookingTime: "60",
    ingredients: [
      "Wheat starch + tapioca starch (for wrapper)",
      "300g shrimp",
      "Bamboo shoots",
      "Sesame oil",
      "Salt, white pepper",
      "Shaoxing wine",
      "Oyster sauce"
    ],
    steps: [
      "Make wrapper dough, rest 30 min.",
      "Chop shrimp and combine with bamboo shoots and seasonings.",
      "Roll thin wrapper discs.",
      "Fill and pleat into crescent shapes.",
      "Steam in bamboo steamer for 6â€“8 min."
    ],
    cardParagraph: "The queen of dim sum. Translucent rice flour wrappers stuffing bouncy, seasoned shrimp â€” the dumpling by which all Cantonese teahouses are judged.",
    numberOfPeople: 4,
    cookingLevel: "Hard",
    perfectWith: ["Siu Mai", "Congee", "Pu-erh Tea"],
    cuisine: "Chinese"
  },
  {
    id: 77,
    cardImg: "iraqi-masgouf.jpg",
    cardHeading: "Iraqi Masgouf",
    rating: [4.9, 78],
    calories: "380",
    cookingTime: "90",
    ingredients: [
      "1 whole carp (split open)",
      "Turmeric, salt",
      "Tamarind paste",
      "Tomatoes, onions",
      "Olive oil",
      "Lime",
      "Flatbread"
    ],
    steps: [
      "Split carp open like a book.",
      "Season with turmeric, tamarind and olive oil.",
      "Skewer open around an open wood fire.",
      "Cook slowly skin-side first for 1â€“2 hours.",
      "Serve with tomato salsa and flatbread."
    ],
    cardParagraph: "Mesopotamia's ancient grilled fish. Carp slow-cooked around an open fire on the banks of the Tigris â€” a recipe dating back thousands of years, unchanged.",
    numberOfPeople: 4,
    cookingLevel: "Hard",
    perfectWith: ["Flatbread", "Tomato Salad", "Lemon"],
    cuisine: "Iraqi"
  },
  {
    id: 78,
    cardImg: "lebanese-kibbeh.jpg",
    cardHeading: "Lebanese Kibbeh",
    rating: [4.8, 94],
    calories: "370",
    cookingTime: "60",
    ingredients: [
      "500g fine bulgur",
      "500g ground lamb",
      "1 onion",
      "Pine nuts",
      "Allspice, cinnamon",
      "Filling: ground lamb + onion + pine nuts",
      "Butter",
      "Salt and pepper"
    ],
    steps: [
      "Mix bulgur with ground lamb, onion and spices for shell.",
      "Make filling: brown lamb with onion and pine nuts.",
      "Shape shells around filling into football ovals.",
      "Fry in oil until golden.",
      "Serve with yogurt sauce."
    ],
    cardParagraph: "Lebanon's national dish in its most iconic form. A crispy shell of spiced lamb and bulgur encasing a savory pine nut filling â€” art that you eat.",
    numberOfPeople: 6,
    cookingLevel: "Hard",
    perfectWith: ["Yogurt", "Tabbouleh", "Hummus"],
    cuisine: "Lebanese"
  },
  {
    id: 79,
    cardImg: "scottish-cullen-skink.jpg",
    cardHeading: "Scottish Cullen Skink",
    rating: [4.7, 68],
    calories: "310",
    cookingTime: "35",
    ingredients: [
      "400g smoked haddock",
      "2 large potatoes",
      "1 onion",
      "Full-fat milk",
      "Butter",
      "Double cream",
      "Chives",
      "Bay leaf"
    ],
    steps: [
      "Poach haddock in milk with bay leaf.",
      "Remove fish, flake, discard skin and bones.",
      "Cook onion in butter, add potato and poaching milk.",
      "Simmer until potato soft, mash some into the soup.",
      "Add flaked haddock and cream, garnish with chives."
    ],
    cardParagraph: "Scotland's great smoked fish soup from the fishing village of Cullen. Creamy, smoky, deeply warming â€” the most honest comfort food the cold North produces.",
    numberOfPeople: 4,
    cookingLevel: "Easy",
    perfectWith: ["Crusty Bread", "Scottish Whisky", "Brown Bread"],
    cuisine: "Scottish"
  },
  {
    id: 80,
    cardImg: "turkish-manti.jpg",
    cardHeading: "Turkish Manti",
    rating: [4.8, 102],
    calories: "430",
    cookingTime: "90",
    ingredients: [
      "Dough: flour, egg, water",
      "250g ground lamb or beef",
      "1 onion (grated)",
      "Black pepper, cumin",
      "Yogurt + garlic (sauce)",
      "Butter + paprika + mint (drizzle)",
      "Sumac"
    ],
    steps: [
      "Make stiff dough, rest 30 min.",
      "Roll very thin, cut into small squares.",
      "Fill each square with tiny amount of meat, pinch shut.",
      "Boil in salted water until cooked.",
      "Top with garlicky yogurt, drizzle sizzling paprika butter."
    ],
    cardParagraph: "Turkey's labor-intensive treasure. Tiny meat-filled dumplings bathed in garlicky yogurt and sizzling paprika butter â€” worth every fold of the 40 dumplings per person.",
    numberOfPeople: 4,
    cookingLevel: "Hard",
    perfectWith: ["Ayran", "Salad", "Turkish Tea"],
    cuisine: "Turkish"
  }
    ],

    'Other':[
        {
    id: 81,
    cardImg: "taiwanese-beef-noodle.jpg",
    cardHeading: "Taiwanese Braised Beef Noodle Soup",
    rating: [4.9, 140],
    calories: "480",
    cookingTime: "180",
    ingredients: ["500g beef shank", "Wheat noodles", "Soy sauce, doubanjiang", "Star anise, cinnamon", "Tomatoes", "Scallions", "Chili oil", "Bok choy"],
    steps: ["Brown beef with aromatics.", "Add soy, doubanjiang and whole spices.", "Add tomatoes and water, braise 2 hours.", "Cook noodles separately.", "Assemble bowls with broth, sliced beef and bok choy."],
    cardParagraph: "Taiwan's greatest contribution to noodle culture. A mahogany broth of soy and spices built around meltingly tender beef â€” a bowl of deeply satisfying complexity.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Kimchi", "Scallion Pancake", "Iced Barley Tea"], cuisine: "Taiwanese"
  },
  {
    id: 82,
    cardImg: "georgian-khachapuri.jpg",
    cardHeading: "Georgian Adjarian Khachapuri",
    rating: [4.9, 115],
    calories: "560",
    cookingTime: "60",
    ingredients: ["Bread dough", "Sulguni cheese", "Mozzarella", "Eggs (1 per boat)", "Butter", "Salt"],
    steps: ["Make and rest dough.", "Shape into boat (gondola) form.", "Fill with mixture of cheeses.", "Bake at 230Â°C until crust golden.", "Add egg yolk and pat of butter to center, return briefly, stir at table."],
    cardParagraph: "Georgia's cheese bread to end all cheese breads. A boat-shaped loaf filled with molten cheese and a runny egg â€” stirred together at the table in a glorious mess.",
    numberOfPeople: 2, cookingLevel: "Medium", perfectWith: ["Georgian Wine", "Salad", "Tarragon Lemonade"], cuisine: "Georgian"
  },
  {
    id: 83,
    cardImg: "indian-fish-curry-kerala.jpg",
    cardHeading: "Kerala Fish Curry",
    rating: [4.8, 108],
    calories: "340",
    cookingTime: "35",
    ingredients: ["500g kingfish or snapper", "Coconut milk", "Kodampuli (Malabar tamarind)", "Green chilies, shallots", "Mustard seeds, curry leaves", "Turmeric, red chili", "Coconut oil"],
    steps: ["Prepare fish, marinate in turmeric and salt.", "Temper mustard seeds in coconut oil with curry leaves.", "Add shallots, chilies and spices.", "Add kodampuli soaked water.", "Pour in coconut milk and fish, simmer 15 min."],
    cardParagraph: "Kerala's crimson coast on a plate. Fish simmered in tangy Malabar tamarind and coconut milk with the unmistakable perfume of fresh curry leaves.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Appam", "Boiled Rice", "Pappadam"], cuisine: "Indian"
  },
  {
    id: 84,
    cardImg: "uzbek-plov.jpg",
    cardHeading: "Uzbek Plov",
    rating: [4.9, 130],
    calories: "520",
    cookingTime: "120",
    ingredients: ["500g lamb (ribs or shoulder)", "3 cups long-grain rice", "3 carrots (julienned)", "2 onions", "Whole garlic head", "Cumin, barberries", "Cotton or sunflower oil", "Salt"],
    steps: ["Heat large oil in kazan (heavy pot).", "Brown lamb until dark.", "Add onion and carrots, cook down.", "Add water to cover, whole garlic head and cumin.", "Add rice on top, do not stir, cook until rice absorbs all liquid."],
    cardParagraph: "Central Asia's most famous dish. A massive cauldron of lamb, carrots and long-grain rice cooked in lamb fat â€” made communally, eaten communally, remembered forever.",
    numberOfPeople: 8, cookingLevel: "Hard", perfectWith: ["Achichuk (Tomato Salad)", "Nan Bread", "Green Tea"], cuisine: "Uzbek"
  },
  {
    id: 85,
    cardImg: "japanese-okonomiyaki.jpg",
    cardHeading: "Osaka Okonomiyaki",
    rating: [4.7, 122],
    calories: "400",
    cookingTime: "30",
    ingredients: ["Cabbage (shredded)", "Flour, eggs, dashi stock", "Pork belly slices", "Katsuobushi (bonito flakes)", "Okonomiyaki sauce", "Japanese mayo", "Pickled ginger", "Aonori"],
    steps: ["Mix batter with cabbage, eggs and dashi.", "Pour into round pancake on griddle.", "Place pork belly on top.", "Flip and cook through.", "Top with sauce, mayo, bonito, pickled ginger."],
    cardParagraph: "Osaka's beloved savory pancake whose name means 'cook what you like.' Loaded with cabbage and pork, smothered in sweet sauce and dancing bonito flakes.",
    numberOfPeople: 2, cookingLevel: "Easy", perfectWith: ["Miso Soup", "Edamame", "Japanese Beer"], cuisine: "Japanese"
  },
  {
    id: 86,
    cardImg: "mexican-pozole.jpg",
    cardHeading: "Mexican Pozole Rojo",
    rating: [4.8, 96],
    calories: "390",
    cookingTime: "150",
    ingredients: ["Pork shoulder", "Hominy corn (canned)", "Ancho and guajillo chilies", "Garlic, onion", "Oregano, cumin", "Shredded cabbage, radish, lime for garnish", "Tostadas"],
    steps: ["Cook pork until tender.", "Blend rehydrated chilies into sauce.", "Fry sauce in oil.", "Combine pork, hominy and chile sauce.", "Simmer 30 min, serve with all garnishes."],
    cardParagraph: "Mexico's ancient celebration soup. Hominy corn and pork in a brick-red chile broth, piled with crunchy cabbage, radish and lime at the table.",
    numberOfPeople: 8, cookingLevel: "Hard", perfectWith: ["Tostadas", "Lime", "Mexican Beer"], cuisine: "Mexican"
  },
  {
    id: 87,
    cardImg: "indian-rajma.jpg",
    cardHeading: "Punjabi Rajma",
    rating: [4.7, 110],
    calories: "320",
    cookingTime: "60",
    ingredients: ["2 cans kidney beans", "2 onions", "3 tomatoes", "Ginger-garlic paste", "Rajma masala", "Cumin, coriander, turmeric", "Fresh coriander", "Ghee"],
    steps: ["Cook onions in ghee until golden.", "Add ginger-garlic paste and tomatoes.", "Add spices and cook until oil separates.", "Add kidney beans and water.", "Simmer until thick and creamy."],
    cardParagraph: "Punjab's everyday hero. Red kidney beans simmered in a robust, warmly spiced masala â€” the dish every North Indian student survives on and every grandmother perfects.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Jeera Rice", "Lassi", "Pickle"], cuisine: "Indian"
  },
  {
    id: 88,
    cardImg: "chinese-mapo-tofu.jpg",
    cardHeading: "Mapo Tofu",
    rating: [4.8, 145],
    calories: "310",
    cookingTime: "20",
    ingredients: ["400g silken tofu", "150g ground pork", "Doubanjiang (fermented chili bean paste)", "Sichuan peppercorns", "Black bean paste", "Garlic, ginger", "Chicken stock", "Scallions"],
    steps: ["Fry ground pork until brown.", "Add doubanjiang, garlic, ginger.", "Add stock and bring to simmer.", "Gently add cubed tofu.", "Finish with Sichuan peppercorn oil and scallions."],
    cardParagraph: "Chengdu's most famous dish. Silken tofu swimming in a fiery, mouth-numbing Sichuan peppercorn and doubanjiang sauce. Deceptively simple, deeply complex.",
    numberOfPeople: 2, cookingLevel: "Easy", perfectWith: ["Steamed Rice", "Cold Beer", "Cucumber Salad"], cuisine: "Chinese"
  },
  {
    id: 89,
    cardImg: "lebanese-mansaf.jpg",
    cardHeading: "Jordanian Mansaf",
    rating: [4.9, 82],
    calories: "560",
    cookingTime: "120",
    ingredients: ["1 kg lamb (on bone)", "Jameed (dried fermented yogurt)", "Long grain rice", "Flatbread (shrak)", "Almonds and pine nuts", "Ghee", "Cardamom, turmeric"],
    steps: ["Reconstitute jameed in warm water.", "Cook lamb until tender.", "Add jameed sauce to lamb, simmer.", "Cook rice with lamb stock.", "Serve on flatbread topped with rice, lamb and nuts."],
    cardParagraph: "Jordan's national dish and cultural identity. Lamb on a throne of rice, drenched in jameed yogurt sauce â€” eaten communally with the right hand, standing together.",
    numberOfPeople: 8, cookingLevel: "Hard", perfectWith: ["Salata Arabiyya", "Arabic Coffee", "Dates"], cuisine: "Jordanian"
  },
  {
    id: 90,
    cardImg: "thai-massaman-curry.jpg",
    cardHeading: "Thai Massaman Curry",
    rating: [4.9, 162],
    calories: "460",
    cookingTime: "90",
    ingredients: ["800g beef or lamb", "Massaman curry paste", "400ml coconut milk", "Potatoes, onion", "Roasted peanuts", "Cardamom, cinnamon, bay leaves", "Palm sugar", "Tamarind paste"],
    steps: ["Fry massaman paste in coconut cream.", "Add meat and brown.", "Add coconut milk, whole spices, potato.", "Slow cook until meat is very tender.", "Finish with peanuts, tamarind and palm sugar."],
    cardParagraph: "Southern Thailand's Persian-influenced curry. Warming spices from cinnamon and cardamom meet Thai aromatics in a mildly sweet, hauntingly complex coconut broth.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Jasmine Rice", "Roti", "Cucumber Salad"], cuisine: "Thai"
  },
  {
    id: 91,
    cardImg: "pakistani-paya.jpg",
    cardHeading: "Pakistani Paya",
    rating: [4.8, 95],
    calories: "350",
    cookingTime: "240",
    ingredients: ["4 trotters (beef or goat)", "2 onions", "Ginger-garlic paste", "Paya masala blend", "Whole spices", "Fresh coriander", "Ginger julienne", "Ghee"],
    steps: ["Clean trotters thoroughly.", "Slow cook with onions and spices for 3â€“4 hours.", "Broth should become thick and gelatinous.", "Adjust spices.", "Serve with ginger, coriander and naan."],
    cardParagraph: "The ultimate Pakistani winter morning ritual. Slow-simmered trotters yielding a thick, collagen-rich, deeply spiced broth that is consumed with a reverence bordering on religious.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Naan", "Ginger", "Lassi"], cuisine: "Pakistani"
  },
  {
    id: 92,
    cardImg: "pad-krapow.jpg",
    cardHeading: "Pad Krapow Moo",
    rating: [4.8, 150],
    calories: "360",
    cookingTime: "15",
    ingredients: ["400g ground pork", "Thai holy basil", "Bird's eye chilies", "Garlic", "Oyster sauce, fish sauce", "Soy sauce", "Sugar", "Fried egg (khai dao)"],
    steps: ["Pound garlic and chilies in mortar.", "Stir-fry in very hot wok.", "Add pork, break up and brown.", "Add sauces and sugar.", "Toss in holy basil off heat, serve with fried egg."],
    cardParagraph: "Thailand's working lunch. Stir-fried pork with holy basil in a minute-fast wok â€” served over rice with a crispy-edged fried egg. Thailand's everyday masterpiece.",
    numberOfPeople: 2, cookingLevel: "Easy", perfectWith: ["Jasmine Rice", "Fried Egg", "Thai Iced Tea"], cuisine: "Thai"
  },
  {
    id: 93,
    cardImg: "haitian-griot.jpg",
    cardHeading: "Haitian Griot",
    rating: [4.8, 72],
    calories: "430",
    cookingTime: "90",
    ingredients: ["1 kg pork shoulder", "Scotch bonnet", "Bitter orange (sour orange)", "Thyme, garlic, shallots", "Epis (Haitian seasoning base)", "Cooking oil", "Pikliz (spicy slaw)"],
    steps: ["Marinate pork in epis and sour orange overnight.", "Braise in marinade until tender.", "Fry in oil until crispy on all sides.", "Serve with rice and beans (diri ak pwa).", "Pile pikliz on the side."],
    cardParagraph: "Haiti's national celebration dish. Sour orange-marinated pork, braised then fried until crispy outside and tender within. Pikliz â€” the fiery slaw â€” is non-negotiable.",
    numberOfPeople: 6, cookingLevel: "Hard", perfectWith: ["Diri ak Pwa", "Pikliz", "Bannann Peze"], cuisine: "Haitian"
  },
  {
    id: 94,
    cardImg: "udon-noodles.jpg",
    cardHeading: "Kake Udon",
    rating: [4.7, 120],
    calories: "310",
    cookingTime: "25",
    ingredients: ["Udon noodles (fresh or dried)", "Dashi stock (kombu + bonito)", "Soy sauce (light)", "Mirin", "Narutomaki fish cake", "Spring onion", "Shichimi togarashi"],
    steps: ["Make dashi by simmering kombu then bonito.", "Season with soy and mirin.", "Cook udon noodles separately.", "Place in bowl with hot broth.", "Add fish cake, spring onion and shichimi."],
    cardParagraph: "Japan's gentlest bowl. Thick, chewy udon noodles floating in a delicate, golden dashi broth. Simple, sublime, restorative â€” the Japanese equivalent of chicken soup.",
    numberOfPeople: 2, cookingLevel: "Easy", perfectWith: ["Tempura", "Onigiri", "Green Tea"], cuisine: "Japanese"
  },
  {
    id: 95,
    cardImg: "indian-dosa.jpg",
    cardHeading: "Masala Dosa",
    rating: [4.8, 180],
    calories: "350",
    cookingTime: "30",
    ingredients: ["Dosa batter (fermented rice + urad dal)", "Potato filling: potatoes, mustard seeds, curry leaves, onion, turmeric", "Ghee or oil", "Coconut chutney", "Sambar"],
    steps: ["Ferment batter overnight.", "Heat iron griddle, spread batter thin in circle.", "Drizzle ghee and cook until golden and crispy.", "Add potato filling, fold.", "Serve with coconut chutney and sambar."],
    cardParagraph: "South India's greatest export. A paper-thin, crackling crispy crepe filled with spiced potato â€” the breakfast that has conquered the world, and for good reason.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Coconut Chutney", "Sambar", "Filter Coffee"], cuisine: "Indian"
  },
  {
    id: 96,
    cardImg: "moroccan-bastilla.jpg",
    cardHeading: "Moroccan Bastilla",
    rating: [4.9, 78],
    calories: "490",
    cookingTime: "120",
    ingredients: ["Warqa (thin pastry) or phyllo", "Pigeon or chicken", "Eggs", "Almonds (fried)", "Cinnamon, ginger, saffron", "Ras el hanout", "Powdered sugar, cinnamon for topping", "Butter"],
    steps: ["Cook pigeon/chicken with spices until tender, shred.", "Scramble eggs into the meat sauce.", "Fry almonds, mix with sugar and cinnamon.", "Layer pastry, meat, almond mixture and fold.", "Bake until golden, dust with powdered sugar."],
    cardParagraph: "Morocco's great sweet-savory pie. Saffron-spiced meat and eggs wrapped in crispy pastry, topped with powdered sugar and cinnamon â€” a shocking and magnificent combination.",
    numberOfPeople: 6, cookingLevel: "Hard", perfectWith: ["Mint Tea", "Orange Blossom Water Drink", "Dates"], cuisine: "Moroccan"
  },
  {
    id: 97,
    cardImg: "greek-lamb-kleftiko.jpg",
    cardHeading: "Greek Lamb Kleftiko",
    rating: [4.9, 92],
    calories: "520",
    cookingTime: "240",
    ingredients: ["1.5 kg lamb shoulder", "Garlic cloves", "Lemon juice", "Oregano, thyme, rosemary", "Tomatoes, onions", "Olive oil", "Kefalotiri or Kefalotyri cheese", "Parchment paper"],
    steps: ["Stab lamb and stuff with garlic slivers.", "Marinate in lemon, herbs and olive oil overnight.", "Place with vegetables in parchment parcel, seal.", "Bake very low (160Â°C) for 4 hours.", "Open parcel for final 30 min to brown."],
    cardParagraph: "Named after Greek mountain bandits who slow-cooked stolen meat underground. Lamb sealed in parchment, braised in its own juices â€” falling apart in the most glorious way.",
    numberOfPeople: 6, cookingLevel: "Easy", perfectWith: ["Roasted Potatoes", "Horiatiki Salad", "Retsina"], cuisine: "Greek"
  },
  {
    id: 98,
    cardImg: "jamaican-oxtail.jpg",
    cardHeading: "Jamaican Oxtail Stew",
    rating: [4.9, 105],
    calories: "490",
    cookingTime: "180",
    ingredients: ["1.5 kg oxtail", "Butter beans", "Browning sauce", "Thyme, allspice, scotch bonnet", "Spring onions, garlic", "Soy sauce", "Worcestershire sauce", "Onion, tomato"],
    steps: ["Season oxtail with browning, soy, spices.", "Pressure cook 45 min or braise 3 hours.", "Add butter beans last 30 min.", "Sauce should be thick and coating.", "Serve over white rice."],
    cardParagraph: "Jamaica's Sunday glory. Oxtail braised until the gelatinous meat slides from the bone in a thick, deeply savory gravy. Butter beans absorb every drop of flavor.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["White Rice", "Festival", "Red Stripe Beer"], cuisine: "Jamaican"
  },
  {
    id: 99,
    cardImg: "italian-osso-buco.jpg",
    cardHeading: "Milanese Osso Buco",
    rating: [4.9, 98],
    calories: "470",
    cookingTime: "120",
    ingredients: ["4 veal shanks (cross-cut)", "White wine", "Tomatoes, celery, carrot, onion", "Beef stock", "Gremolata: lemon zest, parsley, garlic", "Butter, olive oil", "Saffron risotto (to serve)"],
    steps: ["Dust shanks in flour, brown in butter and oil.", "Remove, add vegetables and wine, reduce.", "Add tomatoes and stock, return shanks.", "Braise at 160Â°C for 1.5 hours.", "Make gremolata, scatter over, serve on saffron risotto."],
    cardParagraph: "Milan's most celebrated dish. Braised veal shank with the bone marrow intact â€” richest thing in Italy. Gremolata cuts the richness. Saffron risotto is mandatory.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Saffron Risotto", "Barolo", "Bitter Greens"], cuisine: "Italian"
  },
  {
    id: 100,
    cardImg: "kimchi.jpg",
    cardHeading: "Traditional Kimchi",
    rating: [4.9, 200],
    calories: "30",
    cookingTime: "60",
    ingredients: ["1 Napa cabbage", "Coarse salt", "Gochugaru (Korean red pepper flakes)", "Fish sauce", "Garlic, ginger", "Spring onions", "Daikon radish", "Sugar"],
    steps: ["Salt cabbage, let sit 2 hours.", "Rinse and squeeze dry.", "Make paste with gochugaru, fish sauce, garlic, ginger.", "Coat cabbage and daikon with paste.", "Pack into jar, ferment 1â€“5 days at room temperature."],
    cardParagraph: "Korea's living, breathing national condiment. Spicy, funky, sour fermented cabbage â€” serves as banchan, cooking ingredient and probiotic powerhouse all at once.",
    numberOfPeople: 8, cookingLevel: "Easy", perfectWith: ["Everything Korean", "Rice", "Ramen"], cuisine: "Korean"
  },
  {
    id: 101,
    cardImg: "chicken-shawarma.jpg",
    cardHeading: "Chicken Shawarma",
    rating: [4.8, 210],
    calories: "390",
    cookingTime: "50",
    ingredients: ["800g chicken thighs", "Shawarma spice: cumin, turmeric, cinnamon, cardamom", "Yogurt, lemon", "Garlic", "Toum (garlic sauce)", "Pita bread", "Pickled turnips, tomato"],
    steps: ["Marinate chicken in yogurt and shawarma spices.", "Roast at high heat or grill.", "Let rest and slice thin.", "Warm pita.", "Fill with chicken, toum, pickles and tomato."],
    cardParagraph: "The Middle East's greatest street food export. Spiced, marinated chicken shaved thin and stuffed into warm pita with garlic sauce and tangy pink pickles.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Toum", "Pickled Turnips", "Fattoush"], cuisine: "Lebanese"
  },
  {
    id: 102,
    cardImg: "lamb-biryani-hyderabadi.jpg",
    cardHeading: "Hyderabadi Biryani",
    rating: [4.9, 188],
    calories: "540",
    cookingTime: "120",
    ingredients: ["1 kg lamb", "3 cups basmati rice", "Fried onions (birista)", "Saffron", "Yogurt", "Whole spices", "Mint leaves", "Ghee and rose water"],
    steps: ["Marinate lamb in yogurt, spices and birista.", "Cook raw (kachchi method) â€” layer raw marinated meat with parboiled rice.", "Seal pot with dough.", "Cook on high 20 min then low 40 min.", "Open at table for full aromatic impact."],
    cardParagraph: "The Nizams' masterpiece from Hyderabad. The kachchi method cooks raw meat and rice together â€” resulting in rice that has absorbed all the meat's flavor from below.",
    numberOfPeople: 6, cookingLevel: "Hard", perfectWith: ["Mirchi Ka Salan", "Raita", "Khubani Ka Meetha"], cuisine: "Indian"
  },
  {
    id: 103,
    cardImg: "puerto-rican-pernil.jpg",
    cardHeading: "Puerto Rican Pernil",
    rating: [4.9, 130],
    calories: "510",
    cookingTime: "360",
    ingredients: ["3 kg pork shoulder (bone-in, skin-on)", "Adobo: garlic, oregano, salt, pepper, olive oil", "Sazon", "Sofrito", "Sour orange or lime"],
    steps: ["Stab pork all over and stuff with adobo paste.", "Marinate overnight in sour orange and sofrito.", "Roast uncovered at 160Â°C for 5â€“6 hours.", "Blast at 230Â°C for last 30 min for chicharrÃ³n skin.", "Rest before serving."],
    cardParagraph: "Puerto Rico's Christmas centerpiece. A pork shoulder marinated in garlic adobo and slow-roasted until the meat pulls apart under a shatteringly crispy skin.",
    numberOfPeople: 10, cookingLevel: "Hard", perfectWith: ["Arroz con Gandules", "Tostones", "Coquito"], cuisine: "Puerto Rican"
  },
  {
    id: 104,
    cardImg: "ghanaian-groundnut-soup.jpg",
    cardHeading: "Ghanaian Groundnut Soup",
    rating: [4.8, 78],
    calories: "450",
    cookingTime: "75",
    ingredients: ["Chicken pieces", "Peanut butter (1 cup)", "Tomatoes, onion", "Scotch bonnet", "Ginger, garlic", "Tomato paste", "Chicken stock", "Fish (optional)"],
    steps: ["Brown chicken.", "Blend tomatoes, onion and scotch bonnet.", "Cook blended peppers with tomato paste.", "Mix peanut butter into stock.", "Combine chicken with peanut sauce, simmer 40 min."],
    cardParagraph: "Ghana's warm embrace of a soup. Peanut butter dissolves into a rich, slightly spicy tomato broth around tender chicken â€” one of West Africa's most beloved dishes.",
    numberOfPeople: 6, cookingLevel: "Medium", perfectWith: ["Fufu", "Rice Balls", "Kenkey"], cuisine: "Ghanaian"
  },
  {
    id: 105,
    cardImg: "beef-bulgogi.jpg",
    cardHeading: "Korean Beef Bulgogi",
    rating: [4.9, 175],
    calories: "380",
    cookingTime: "30",
    ingredients: ["500g beef ribeye (thinly sliced)", "Soy sauce", "Asian pear or apple (grated)", "Sesame oil", "Garlic, ginger", "Sugar", "Spring onions", "Sesame seeds"],
    steps: ["Thinly slice beef.", "Marinate in soy, pear, sesame oil, garlic, sugar.", "Marinate minimum 30 min.", "Grill on hot griddle or grill pan.", "Serve with lettuce wraps, rice and banchan."],
    cardParagraph: "Korea's beloved grilled beef. Sweet-savory marinated ribeye caramelized on a hot grill â€” eaten wrapped in lettuce with rice and a smear of ssamjang.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Ssam (Lettuce Wraps)", "Banchan", "Soju"], cuisine: "Korean"
  },
  {
    id: 106,
    cardImg: "egyptian-kushari.jpg",
    cardHeading: "Egyptian Koshari",
    rating: [4.8, 108],
    calories: "420",
    cookingTime: "60",
    ingredients: ["Rice, lentils, macaroni", "Fried onions (crispy)", "Tomato sauce with cumin and vinegar", "Garlic vinegar sauce (dakka)", "Chili sauce", "Chickpeas"],
    steps: ["Cook rice with lentils.", "Cook macaroni separately.", "Make tomato sauce.", "Make garlic vinegar sauce.", "Layer: rice-lentil, macaroni, chickpeas, then sauces and fried onion."],
    cardParagraph: "Egypt's national street food. A glorious pile of carbs â€” rice, lentils, macaroni â€” topped with three different sauces and a crown of crispy fried onion.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Pickled Vegetables", "Ayran", "Egyptian Bread"], cuisine: "Egyptian"
  },
  {
    id: 107,
    cardImg: "iranian-khoresh-fesenjan.jpg",
    cardHeading: "Persian Khoresh Fesenjan",
    rating: [4.9, 85],
    calories: "480",
    cookingTime: "90",
    ingredients: ["500g chicken or duck", "2 cups ground walnuts", "Pomegranate molasses", "Sugar", "Onion", "Saffron", "Salt, pepper", "Cinnamon"],
    steps: ["Brown chicken with onion.", "Toast ground walnuts in dry pan.", "Combine walnuts, pomegranate molasses and water.", "Add chicken to sauce.", "Simmer slowly 1 hour until sauce is very dark and oil separates."],
    cardParagraph: "Iran's most luxurious stew. Ground walnuts and sour pomegranate molasses create a dark, tangy, mysteriously complex sauce around duck or chicken. Extraordinary.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Chelow Rice", "Cucumber Yogurt", "Lavash"], cuisine: "Persian"
  },
  {
    id: 108,
    cardImg: "wonton-soup.jpg",
    cardHeading: "Cantonese Wonton Soup",
    rating: [4.8, 140],
    calories: "290",
    cookingTime: "45",
    ingredients: ["Wonton wrappers", "300g shrimp + 150g ground pork", "Ginger, sesame oil", "Soy sauce, white pepper", "Egg", "Clear chicken and pork broth", "Bok choy", "Spring onions"],
    steps: ["Mix shrimp and pork with seasonings.", "Fill wonton wrappers, fold into nurse-cap shape.", "Boil wontons separately.", "Heat broth, season with soy and white pepper.", "Add wontons and bok choy."],
    cardParagraph: "Hong Kong's most comforting bowl. Silky, thin-skinned wontons filled with bouncy shrimp and pork, floating in a crystal-clear, deeply savory broth.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Egg Noodles", "Char Siu Bao", "Pu-erh Tea"], cuisine: "Chinese"
  },
  {
    id: 109,
    cardImg: "peking-duck.jpg",
    cardHeading: "Peking Duck",
    rating: [4.9, 155],
    calories: "580",
    cookingTime: "1440",
    ingredients: ["1 whole Peking duck", "Maltose syrup", "Five-spice powder", "Mandarin pancakes", "Hoisin sauce", "Spring onions, cucumber"],
    steps: ["Inflate and air-dry duck for 24â€“48 hours.", "Glaze with maltose syrup, repeat several times.", "Roast hanging in very hot oven, turning.", "Carve tableside, skin first â€” wafer thin.", "Serve in pancakes with hoisin, spring onion and cucumber."],
    cardParagraph: "China's most imperial dish. Lacquered crimson duck with crackling, mahogany skin wrapped in a delicate pancake â€” a preparation that demands days of commitment.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Mandarin Pancakes", "Hoisin Sauce", "Mei Gui Lu wine"], cuisine: "Chinese"
  },
  {
    id: 110,
    cardImg: "nigerian-suya.jpg",
    cardHeading: "Nigerian Suya",
    rating: [4.8, 115],
    calories: "320",
    cookingTime: "30",
    ingredients: ["500g beef sirloin (thinly sliced)", "Suya spice (kuli-kuli, ginger, paprika, garlic)", "Groundnut oil", "Onion (sliced)", "Tomatoes", "Yaji (spice powder to serve)"],
    steps: ["Slice beef paper-thin.", "Coat in groundnut oil and suya spice.", "Thread on flat skewers.", "Grill over charcoal on very high heat.", "Serve with raw onion, tomato and extra yaji."],
    cardParagraph: "West Africa's greatest street skewer. Thin beef strips coated in spiced groundnut paste and grilled over charcoal â€” a night market aroma you never forget.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Onion", "Tomato", "Zobo Drink"], cuisine: "Nigerian"
  },
  {
    id: 111,
    cardImg: "turkish-balik-ekmek.jpg",
    cardHeading: "Turkish BalÄ±k Ekmek",
    rating: [4.7, 90],
    calories: "340",
    cookingTime: "20",
    ingredients: ["Mackerel or sea bass fillets", "Bread roll (long)", "Lettuce, onion, tomato", "Lemon", "Salt, pepper", "Olive oil", "Turkish red pepper"],
    steps: ["Season fish with salt and pepper.", "Grill or pan-fry in olive oil.", "Split bread roll and warm.", "Layer with lettuce, tomato and onion.", "Add fish, squeeze lemon."],
    cardParagraph: "Istanbul's iconic bridge food. Fresh grilled mackerel in a crusty bread roll with salad and lemon â€” eaten standing beside the Galata Bridge with the Bosphorus before you.",
    numberOfPeople: 2, cookingLevel: "Easy", perfectWith: ["Pickles", "Ayran", "Åžalgam Suyu"], cuisine: "Turkish"
  },
  {
    id: 112,
    cardImg: "sri-lankan-kottu-roti.jpg",
    cardHeading: "Sri Lankan Kottu Roti",
    rating: [4.8, 100],
    calories: "450",
    cookingTime: "25",
    ingredients: ["Godamba roti (flatbread, torn)", "Egg", "Chicken or beef", "Leeks, carrots", "Onion, garlic, ginger", "Sri Lankan curry sauce", "Soy sauce", "Curry powder"],
    steps: ["Cook roti, tear into small pieces.", "Stir-fry aromatics on a hot tawa.", "Add meat and cook through.", "Add roti pieces and scramble egg through.", "Pour curry sauce, toss and chop together rhythmically."],
    cardParagraph: "Sri Lanka's hypnotic street food. The rhythmic clang of metal blades chopping roti on a hot griddle is the soundtrack of Colombo nights â€” addictive food, addictive sound.",
    numberOfPeople: 2, cookingLevel: "Medium", perfectWith: ["Coconut Sambol", "Curry", "Lion Beer"], cuisine: "Sri Lankan"
  },
  {
    id: 113,
    cardImg: "kenyan-ugali-sukuma.jpg",
    cardHeading: "Kenyan Ugali with Sukuma Wiki",
    rating: [4.7, 75],
    calories: "350",
    cookingTime: "30",
    ingredients: ["Ugali: white maize flour, water", "Sukuma wiki: kale or collard greens", "Tomatoes, onion", "Oil", "Salt", "Nyama choma (grilled meat, optional)"],
    steps: ["Boil water, add maize flour gradually.", "Stir vigorously on heat until very thick.", "Mold and flip onto plate.", "SautÃ© onions and tomatoes for sukuma.", "Add kale and cook until wilted."],
    cardParagraph: "East Africa's staff of life. Thick, dense ugali â€” used as edible cutlery â€” alongside sautÃ©ed kale. Simple, nourishing, essential to daily life across the continent.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Nyama Choma", "Stew", "Fermented Milk"], cuisine: "Kenyan"
  },
  {
    id: 114,
    cardImg: "indian-biryani-lucknowi.jpg",
    cardHeading: "Lucknowi Awadhi Biryani",
    rating: [4.9, 165],
    calories: "510",
    cookingTime: "120",
    ingredients: ["Mutton", "Aged basmati rice", "Whole spices", "Saffron in warm milk", "Kewra water, rose water", "Fried onion", "Mawa (khoya)", "Ghee"],
    steps: ["Cook mutton in gentle, aromatic pakhni stock.", "Parboil rice in stock.", "Layer rice and mutton.", "Sprinkle kewra, rose water, saffron milk and fried onion.", "Dum cook sealed for 35 min."],
    cardParagraph: "Lucknow's aristocratic biryani â€” milder and more perfumed than Hyderabadi. The Nawabs demanded subtlety: saffron, kewra and rose water in a restrained, elegant masterpiece.",
    numberOfPeople: 6, cookingLevel: "Hard", perfectWith: ["Zarda", "Sheermal", "Seviyan"], cuisine: "Indian"
  },
  {
    id: 115,
    cardImg: "nasi-lemak.jpg",
    cardHeading: "Malaysian Nasi Lemak",
    rating: [4.9, 170],
    calories: "520",
    cookingTime: "45",
    ingredients: ["Coconut milk rice (pandan-infused)", "Sambal ikan bilis (anchovies in chili sauce)", "Hard boiled egg", "Fried anchovies (ikan bilis)", "Roasted peanuts", "Cucumber", "Banana leaf"],
    steps: ["Cook rice with coconut milk and pandan leaf.", "Make sambal: blend chilies, onion, prawn paste, fry with anchovies.", "Fry additional ikan bilis until crispy.", "Soft boil eggs.", "Serve rice on banana leaf with all components."],
    cardParagraph: "Malaysia's undisputed national dish. Fragrant coconut rice served on banana leaf surrounded by sambal, crispy anchovies, roasted peanuts and hard-boiled egg â€” perfection.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Curry Chicken", "Rendang", "Teh Tarik"], cuisine: "Malaysian"
  },
  {
    id: 116,
    cardImg: "portuguese-piri-piri-chicken.jpg",
    cardHeading: "Piri Piri Chicken",
    rating: [4.8, 150],
    calories: "400",
    cookingTime: "60",
    ingredients: ["1 whole chicken (spatchcocked)", "Piri piri chilies", "Garlic, lemon", "Red wine vinegar", "Paprika", "Oregano", "Olive oil", "Bay leaves"],
    steps: ["Blend piri piri, garlic, lemon, vinegar, paprika, olive oil.", "Butterfly chicken and marinade 4+ hours.", "Grill over charcoal turning regularly.", "Baste with remaining marinade.", "Serve with crispy chips and piri piri sauce."],
    cardParagraph: "Portugal's fire-fueled icon, with roots in Mozambique. Spatchcocked chicken marinated in African bird's eye chili and grilled over charcoal â€” globally addictive.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Chips", "Garlic Bread", "Vinho Verde"], cuisine: "Portuguese"
  },
  {
    id: 117,
    cardImg: "canadian-poutine.jpg",
    cardHeading: "Canadian Poutine",
    rating: [4.7, 125],
    calories: "650",
    cookingTime: "30",
    ingredients: ["Russet potatoes", "Cheese curds (fresh)", "Brown gravy (chicken or beef stock based)", "Oil for frying", "Salt"],
    steps: ["Cut potatoes, soak in water 1 hour.", "Double fry: 150Â°C then 185Â°C.", "Make thick, peppery brown gravy.", "Pile fries in bowl, add cheese curds.", "Pour hot gravy over curds to melt slightly."],
    cardParagraph: "Quebec's greatest contribution: crispy fries, squeaky fresh cheese curds, hot brown gravy. The combination has no business being as extraordinary as it is.",
    numberOfPeople: 2, cookingLevel: "Medium", perfectWith: ["Beer", "Smoked Meat Sandwich", "Maple Syrup Pie"], cuisine: "Canadian"
  },
  {
    id: 118,
    cardImg: "vietnamese-banh-mi.jpg",
    cardHeading: "Vietnamese BÃ¡nh MÃ¬",
    rating: [4.8, 180],
    calories: "390",
    cookingTime: "30",
    ingredients: ["French baguette", "Pork belly or pÃ¢tÃ©", "Pickled daikon and carrot", "Cucumber", "JalapeÃ±o", "Cilantro", "Mayonnaise", "Maggi seasoning sauce"],
    steps: ["Pickle daikon and carrot in rice vinegar and sugar.", "Marinate and grill/roast pork.", "Split baguette, spread mayo and Maggi.", "Layer pÃ¢tÃ©, pork, pickled vegetables, cucumber.", "Add cilantro and sliced jalapeÃ±o."],
    cardParagraph: "Vietnam's French colonial inheritance reimagined. A crackling baguette stuffed with layers of pork, pÃ¢tÃ©, pickled vegetables and fresh herbs â€” sandwich perfection.",
    numberOfPeople: 2, cookingLevel: "Easy", perfectWith: ["Vietnamese Coffee", "Nuoc Cham", "Sugarcane Juice"], cuisine: "Vietnamese"
  },
  {
    id: 119,
    cardImg: "ethiopian-tibs.jpg",
    cardHeading: "Ethiopian Tibs",
    rating: [4.8, 85],
    calories: "360",
    cookingTime: "25",
    ingredients: ["500g lamb or beef", "Niter kibbeh", "Onions, garlic", "JalapeÃ±o peppers", "Rosemary", "Berbere spice", "Tomatoes", "Awaze (hot sauce)"],
    steps: ["Heat niter kibbeh in heavy pan.", "Add onions and cook until translucent.", "Add meat on very high heat.", "Add jalapeÃ±o, rosemary and tomatoes.", "Stir-fry quickly â€” serve sizzling."],
    cardParagraph: "Ethiopia's beloved sautÃ©ed meat dish. Lamb or beef stir-fried fast in spiced butter with jalapeÃ±os and rosemary â€” served sizzling on injera.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Injera", "Tej (Honey Wine)", "Lentil Stew"], cuisine: "Ethiopian"
  },
  {
    id: 120,
    cardImg: "armenian-dolma.jpg",
    cardHeading: "Armenian Dolma",
    rating: [4.8, 88],
    calories: "320",
    cookingTime: "90",
    ingredients: ["Grape leaves (brined)", "Ground lamb and beef", "Rice", "Tomato paste", "Onion", "Mint, parsley, dill", "Cinnamon, allspice", "Lemon, yogurt to serve"],
    steps: ["Rinse grape leaves.", "Mix meat with rice, onion, herbs and spices.", "Fill and roll leaves tightly.", "Pack tightly in pot.", "Add water and lemon, slow cook 1 hour."],
    cardParagraph: "The Caucasus at its most meticulous. Spiced meat and rice wrapped in grape leaves and steamed â€” a labor of love eaten across the Middle East and South Caucasus.",
    numberOfPeople: 6, cookingLevel: "Hard", perfectWith: ["Yogurt", "Armenian Bread", "Pomegranate Seeds"], cuisine: "Armenian"
  },
  {
    id: 121,
    cardImg: "chinese-dan-dan-noodles.jpg",
    cardHeading: "Sichuan Dan Dan Noodles",
    rating: [4.8, 135],
    calories: "430",
    cookingTime: "20",
    ingredients: ["Wheat noodles", "Ground pork", "Ya cai (Yibin preserved vegetable)", "Tahini or sesame paste", "Soy sauce, Chinkiang vinegar", "Sichuan peppercorn oil", "Chili oil", "Garlic, ginger"],
    steps: ["Make sauce: sesame paste, soy, vinegar, chili oil, peppercorn.", "Brown pork with ya cai.", "Cook noodles.", "Place sauce in bowl.", "Add noodles, top with pork and garnishes, mix vigorously."],
    cardParagraph: "Chengdu's street noodle legend. A sauce built on nutty sesame, black vinegar and face-numbing Sichuan peppercorn oil â€” every bite a firework in your mouth.",
    numberOfPeople: 2, cookingLevel: "Easy", perfectWith: ["Cold Beer", "Scallion Pancake", "Cucumber Salad"], cuisine: "Chinese"
  },
  {
    id: 122,
    cardImg: "lebanese-fattoush.jpg",
    cardHeading: "Lebanese Fattoush",
    rating: [4.7, 90],
    calories: "200",
    cookingTime: "20",
    ingredients: ["Pita bread (toasted or fried)", "Romaine lettuce", "Tomatoes, cucumber, radish", "Spring onions", "Fresh mint, parsley", "Sumac", "Lemon, olive oil, pomegranate molasses"],
    steps: ["Toast or fry pita until crispy.", "Chop all vegetables.", "Make dressing: lemon, olive oil, pomegranate molasses, sumac.", "Toss salad with dressing.", "Add pita last so it stays slightly crisp."],
    cardParagraph: "Lebanon's vibrant bread salad. Crispy pita shards, fresh vegetables and a sumac-pomegranate dressing that makes every other salad feel like it's trying too hard.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Hummus", "Grilled Meat", "Arak"], cuisine: "Lebanese"
  },
  {
    id: 123,
    cardImg: "south-indian-prawn-masala.jpg",
    cardHeading: "Goan Prawn Curry",
    rating: [4.8, 102],
    calories: "310",
    cookingTime: "30",
    ingredients: ["500g prawns", "Coconut milk", "Kashmiri chilies (for color)", "Kokum (sour fruit)", "Turmeric, coriander, cumin", "Garlic, ginger", "Onion", "Coconut oil"],
    steps: ["Dry roast and grind spices.", "SautÃ© onion in coconut oil.", "Add ground spice paste.", "Add prawns and kokum.", "Pour in coconut milk, simmer 10 min."],
    cardParagraph: "Goa's crimson-red prawn curry with the unmistakable sourness of kokum and the heat of Kashmiri chilies. The tropical coast on a plate.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Steamed Rice", "Papadam", "Kachumber"], cuisine: "Indian"
  },
  {
    id: 124,
    cardImg: "thai-tom-yum.jpg",
    cardHeading: "Tom Yum Goong",
    rating: [4.9, 168],
    calories: "230",
    cookingTime: "25",
    ingredients: ["500g large shrimp", "Lemongrass, kaffir lime leaves, galangal", "Bird's eye chilies", "Fish sauce, lime juice", "Straw mushrooms", "Evaporated milk (for creamy version)", "Coriander"],
    steps: ["Boil water with lemongrass, galangal and kaffir lime.", "Add shrimp and mushrooms.", "Season with fish sauce and lime juice.", "Add chilies.", "Finish with coriander."],
    cardParagraph: "Thailand's great sour-spicy soup. Shrimp in a fragrant broth of lemongrass, galangal and kaffir lime â€” sour, spicy, aromatic. Thailand's most famous soup export.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Jasmine Rice", "Pad Thai", "Thai Iced Tea"], cuisine: "Thai"
  },
  {
    id: 125,
    cardImg: "bengali-fish-mustard.jpg",
    cardHeading: "Bengali Sorshe Ilish",
    rating: [4.9, 78],
    calories: "340",
    cookingTime: "25",
    ingredients: ["4 hilsa fish steaks", "3 tbsp black mustard seeds", "2 tbsp yellow mustard seeds", "Green chilies", "Turmeric", "Mustard oil", "Salt"],
    steps: ["Soak and grind both mustards to paste.", "Mix with green chili, turmeric and salt.", "Coat fish steaks in paste.", "Steam or cook in covered pan with mustard oil.", "Do not overcook."],
    cardParagraph: "Bengal's most poetic dish. Hilsa fish â€” so bony it demands love and patience â€” steamed in pungent mustard paste. The flavor is unlike anything else in the world.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Steamed Rice", "Daal", "Begun Bhaja"], cuisine: "Bangladeshi"
  },
  {
    id: 126,
    cardImg: "mexican-carnitas.jpg",
    cardHeading: "Michoacan Carnitas",
    rating: [4.9, 165],
    calories: "450",
    cookingTime: "180",
    ingredients: ["2 kg pork shoulder (bone-in)", "Lard", "Orange juice and zest", "Garlic, bay leaves", "Cumin, oregano", "Milk (for caramelization)", "Corn tortillas", "Salsa verde"],
    steps: ["Submerge pork in lard in heavy pot.", "Cook at 150Â°C for 2â€“3 hours.", "Remove, increase heat, fry chunks in lard.", "Add orange juice and milk for caramelization.", "Break into chunks, serve in tortillas."],
    cardParagraph: "MichoacÃ¡n's pork masterpiece. Pork shoulder slowly confit'd in lard until fork-tender, then crisped in the same fat with orange and milk. Taco perfection.",
    numberOfPeople: 8, cookingLevel: "Hard", perfectWith: ["Corn Tortillas", "Salsa Verde", "Pickled Onion"], cuisine: "Mexican"
  },
  {
    id: 127,
    cardImg: "nigerian-moi-moi.jpg",
    cardHeading: "Nigerian Moi Moi",
    rating: [4.7, 82],
    calories: "280",
    cookingTime: "60",
    ingredients: ["Black-eyed beans (soaked, peeled)", "Red bell pepper, scotch bonnet", "Onion, garlic", "Palm oil", "Seasoning cube", "Eggs, fish or corned beef (filling)", "Salt"],
    steps: ["Blend beans with peppers until smooth.", "Season and add palm oil.", "Mix in filling ingredients.", "Pour into foil or banana leaf wraps.", "Steam for 45 min."],
    cardParagraph: "Nigeria's beloved steamed bean pudding. Silky smooth bean paste cooked with eggs and fish inside banana leaf wraps â€” nutritious, flavorful, and deeply nostalgic.",
    numberOfPeople: 8, cookingLevel: "Medium", perfectWith: ["Jollof Rice", "Fried Plantain", "Pepper Soup"], cuisine: "Nigerian"
  },
  {
    id: 128,
    cardImg: "peruvian-lomo-saltado.jpg",
    cardHeading: "Lomo Saltado",
    rating: [4.8, 130],
    calories: "480",
    cookingTime: "25",
    ingredients: ["500g beef sirloin (strips)", "Tomatoes, red onion", "AjÃ­ amarillo (yellow chili)", "Soy sauce, oyster sauce", "Red wine vinegar", "French fries", "Steamed rice", "Coriander"],
    steps: ["Cut beef into strips.", "Stir-fry in very hot wok.", "Add onion and tomatoes.", "Add soy sauce, vinegar and ajÃ­ amarillo.", "Toss with french fries at end, serve with rice."],
    cardParagraph: "Peru's Chinese-Peruvian fusion miracle. Beef stir-fried in a wok with soy and vinegar, finished with french fries â€” a dish that shouldn't work but is absolutely extraordinary.",
    numberOfPeople: 3, cookingLevel: "Easy", perfectWith: ["Steamed Rice", "Chicha Morada", "Causa"], cuisine: "Peruvian"
  },
  {
    id: 129,
    cardImg: "vietnamese-bun-bo-hue.jpg",
    cardHeading: "Vietnamese BÃºn BÃ² Huáº¿",
    rating: [4.9, 95],
    calories: "430",
    cookingTime: "180",
    ingredients: ["Pork bones and beef shank", "Lemongrass", "Shrimp paste (máº¯m ruá»‘c)", "Chili oil", "Round rice noodles", "Pork blood cubes", "Banana blossom", "Bean sprouts, herbs"],
    steps: ["Simmer bones with lemongrass for 2 hours.", "Add shrimp paste and chili oil.", "Cook beef shank separately, slice.", "Cook round rice noodles.", "Assemble with all toppings."],
    cardParagraph: "Vietnam's fiercer answer to pho. The royal city of HuÃ©'s noodle soup â€” lemongrass-forward, spicy, and spiked with shrimp paste into a deeply complex crimson broth.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Lime", "Chili", "Herbs"], cuisine: "Vietnamese"
  },
  {
    id: 130,
    cardImg: "spanish-croquetas.jpg",
    cardHeading: "Spanish JamÃ³n Croquetas",
    rating: [4.8, 130],
    calories: "280",
    cookingTime: "60",
    ingredients: ["Iberian ham (jamÃ³n ibÃ©rico)", "Butter, flour, milk (for thick bÃ©chamel)", "Egg for coating", "Breadcrumbs", "Nutmeg", "Oil for frying", "Salt, white pepper"],
    steps: ["Make very thick bÃ©chamel with butter, flour, hot milk.", "Fold in finely chopped jamÃ³n.", "Chill mixture 4 hours until firm.", "Shape into cylinders, coat in egg and breadcrumbs.", "Fry at 180Â°C until golden."],
    cardParagraph: "Spain's perfect bar snack. A crispy shell shattering into the creamiest, most luxurious ham-studded bÃ©chamel filling. The true measure of a good tapas bar.",
    numberOfPeople: 6, cookingLevel: "Hard", perfectWith: ["Cold Beer", "Sherry", "Patatas Bravas"], cuisine: "Spanish"
  },
  {
    id: 131,
    cardImg: "indonesian-satay.jpg",
    cardHeading: "Indonesian Sate Ayam",
    rating: [4.8, 160],
    calories: "330",
    cookingTime: "40",
    ingredients: ["500g chicken thigh (cubed)", "Coconut milk", "Soy sauce, turmeric, galangal", "Peanut sauce: roasted peanuts, coconut milk, palm sugar, tamarind", "Skewers", "Kecap manis", "Lemongrass"],
    steps: ["Marinate chicken in coconut milk and spices.", "Thread on soaked bamboo skewers.", "Grill over charcoal.", "Make peanut sauce from ground peanuts, coconut milk, palm sugar.", "Serve with peanut sauce and lontong rice cakes."],
    cardParagraph: "Indonesia's famous grilled skewer. Turmeric-golden chicken on bamboo sticks, dipped in a rich peanut sauce that has become one of the world's most beloved flavors.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Peanut Sauce", "Lontong", "Pickled Cucumbers"], cuisine: "Indonesian"
  },
  {
    id: 132,
    cardImg: "bihari-boti.jpg",
    cardHeading: "Bihari Boti Kebab",
    rating: [4.8, 88],
    calories: "340",
    cookingTime: "45",
    ingredients: ["500g beef or mutton (thin slices)", "Raw papaya paste (tenderizer)", "Mustard oil", "Yogurt", "Bihari spice mix: poppy seeds, fried onion, chili", "Kachri (raw mango powder)", "Coal for smoking"],
    steps: ["Tenderize meat with raw papaya paste.", "Marinate in mustard oil, yogurt and spice mix.", "Thread on flat skewers.", "Grill over coal.", "Smoke finish for authentic flavor."],
    cardParagraph: "Bihar and Pakistan's smoked kebab treasure. Flat skewers of spiced beef made impossibly tender with raw papaya, kissed by coal smoke. Rarely found outside its homeland.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Paratha", "Onion Rings", "Mint Chutney"], cuisine: "Pakistani"
  },
  {
    id: 133,
    cardImg: "jamaican-curry-goat.jpg",
    cardHeading: "Jamaican Curry Goat",
    rating: [4.9, 108],
    calories: "430",
    cookingTime: "150",
    ingredients: ["1 kg goat (bone-in)", "Caribbean curry powder", "Scotch bonnet", "Thyme, garlic, ginger", "Spring onions", "Potato (added last)", "Allspice berries", "Oil"],
    steps: ["Season goat overnight with curry and spices.", "Brown well in hot oil.", "Add water, scotch bonnet and allspice.", "Slow cook 2 hours.", "Add potato, cook until tender."],
    cardParagraph: "Jamaica's greatest curry. Bone-in goat slow-cooked in aromatic Caribbean curry until the meat is falling off the bone and the sauce is thick with deep flavor.",
    numberOfPeople: 6, cookingLevel: "Hard", perfectWith: ["White Rice", "Rice & Peas", "Roti"], cuisine: "Jamaican"
  },
  {
    id: 134,
    cardImg: "dim-sum-siu-mai.jpg",
    cardHeading: "Cantonese Siu Mai",
    rating: [4.8, 145],
    calories: "240",
    cookingTime: "45",
    ingredients: ["Round wonton wrappers", "300g ground pork", "200g shrimp (chopped)", "Shiitake mushrooms", "Soy sauce, sesame oil", "Shaoxing wine", "Ginger", "Flying fish roe (tobiko) for garnish"],
    steps: ["Mix pork, shrimp, mushrooms with seasonings.", "Place filling in wrapper cup shape.", "Leave top open, garnish with tobiko.", "Steam in bamboo steamer for 8 min.", "Serve immediately with soy and chili."],
    cardParagraph: "The king of dim sum alongside har gow. Open-topped pork and shrimp dumplings crowned with bright orange roe â€” a Cantonese Sunday yum cha essential.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Har Gow", "Pu-erh Tea", "Turnip Cake"], cuisine: "Chinese"
  },
  {
    id: 135,
    cardImg: "lebanese-manakish.jpg",
    cardHeading: "Lebanese Manakish",
    rating: [4.8, 115],
    calories: "310",
    cookingTime: "30",
    ingredients: ["Flatbread dough", "Za'atar spice blend", "Olive oil", "Halloumi or akkawi cheese (optional)", "Tomatoes, mint for serving"],
    steps: ["Make soft flatbread dough, rest.", "Mix za'atar with olive oil to thick paste.", "Roll dough thin, spread za'atar generously.", "Bake at highest heat 7â€“10 min.", "Serve with tomatoes, olives and cheese."],
    cardParagraph: "Lebanon's morning flatbread. Za'atar and olive oil baked onto soft dough â€” a Levantine breakfast that entire families gather around on weekend mornings.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Labneh", "Tomatoes", "Mint Tea"], cuisine: "Lebanese"
  },
  {
    id: 136,
    cardImg: "new-york-pizza.jpg",
    cardHeading: "New York Style Pizza",
    rating: [4.8, 250],
    calories: "480",
    cookingTime: "60",
    ingredients: ["High-gluten flour", "San Marzano tomatoes", "Low-moisture mozzarella", "Yeast, water, salt, olive oil", "Garlic, oregano, basil", "Pepperoni (optional)"],
    steps: ["Make dough, cold ferment 48â€“72 hours.", "Stretch thin by hand into large round.", "Apply crushed tomatoes thinly.", "Add mozzarella and toppings.", "Bake at max oven heat on preheated stone."],
    cardParagraph: "New York's great street food. A wide, thin-crusted slice with crisp bottom and foldable structure â€” topped minimally with great tomato sauce and stretchy mozzarella.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Garlic Knots", "Caesar Salad", "Soda"], cuisine: "American"
  },
  {
    id: 137,
    cardImg: "pho-bo-special.jpg",
    cardHeading: "Hanoi BÃºn Cháº£",
    rating: [4.8, 108],
    calories: "390",
    cookingTime: "40",
    ingredients: ["Pork belly (sliced)", "Ground pork patties", "Rice vermicelli", "Fish sauce, lime, sugar, garlic, chilies (dipping sauce)", "Fresh herbs: mint, perilla, coriander", "Green papaya strips"],
    steps: ["Make sweet-sour dipping sauce.", "Grill pork belly and patties over charcoal until slightly charred.", "Place grilled pork in sauce bowl.", "Cook vermicelli noodles.", "Serve everything separately for dipping."],
    cardParagraph: "Hanoi's beloved charcoal-grilled pork dipped in sweet fish sauce broth. Made internationally famous by Anthony Bourdain and President Obama â€” justifiably so.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Fresh Herbs", "Nem Cuon", "Bia Hoi Beer"], cuisine: "Vietnamese"
  },
  {
    id: 138,
    cardImg: "tanzanian-pilau.jpg",
    cardHeading: "Tanzanian Pilau",
    rating: [4.8, 72],
    calories: "460",
    cookingTime: "90",
    ingredients: ["500g beef", "3 cups rice", "2 onions", "Pilau masala: cumin, cardamom, cinnamon, cloves, black pepper", "Garlic, ginger", "Potatoes", "Oil"],
    steps: ["Fry onions dark brown in oil.", "Add garlic, ginger and whole spices.", "Add beef and brown.", "Add water and cook beef tender.", "Add rice and potatoes, cook absorbed."],
    cardParagraph: "East Africa's spiced rice, distinct from biryani and plov. Deeply caramelized onions and whole spices make Tanzania's pilau one of the continent's great rice dishes.",
    numberOfPeople: 6, cookingLevel: "Medium", perfectWith: ["Kachumbari Salad", "Mango Juice", "Coconut Beans"], cuisine: "Tanzanian"
  },
  {
    id: 139,
    cardImg: "peruvian-anticucho.jpg",
    cardHeading: "Peruvian Anticuchos",
    rating: [4.8, 88],
    calories: "280",
    cookingTime: "30",
    ingredients: ["Beef heart", "AjÃ­ panca paste", "Cumin, oregano", "Red wine vinegar", "Garlic", "Skewers", "Uchucuta sauce (spicy)", "Boiled potato and choclo corn"],
    steps: ["Clean and cube beef heart.", "Marinate in ajÃ­ panca, cumin, vinegar and garlic overnight.", "Thread on skewers.", "Grill over very hot charcoal.", "Serve with boiled potato and corn."],
    cardParagraph: "Peru's ancient street food from Inca times. Beef heart marinated in ajÃ­ panca and grilled over charcoal â€” incredibly flavorful, slightly chewy, deeply traditional.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Boiled Potato", "Choclo Corn", "Chicha Morada"], cuisine: "Peruvian"
  },
  {
    id: 140,
    cardImg: "sichuan-hotpot.jpg",
    cardHeading: "Sichuan Hot Pot",
    rating: [4.9, 200],
    calories: "500",
    cookingTime: "60",
    ingredients: ["Spicy mala broth: doubanjiang, dried chilies, Sichuan peppercorns", "Thinly sliced beef and lamb", "Tofu, mushrooms, lotus root", "Tripe, beef tongue", "Rice noodles, glass noodles", "Sesame dipping sauce"],
    steps: ["Make mala broth with doubanjiang, chilies, spices.", "Bring to rolling boil at table.", "Prepare all raw ingredients on platters.", "Diners cook ingredients in hot pot themselves.", "Dip in sesame-garlic sauce."],
    cardParagraph: "China's great communal dining ritual. A crimson, numbing, electric broth kept boiling at the table into which everything is plunged â€” transcendent and impossible to stop eating.",
    numberOfPeople: 6, cookingLevel: "Medium", perfectWith: ["Baijiu", "Cold Beers", "Sesame Dip"], cuisine: "Chinese"
  },
  {
    id: 141,
    cardImg: "swedish-meatballs.jpg",
    cardHeading: "Swedish Meatballs",
    rating: [4.7, 145],
    calories: "420",
    cookingTime: "40",
    ingredients: ["300g ground beef + 200g ground pork", "Breadcrumbs soaked in milk", "Egg, onion", "Allspice, nutmeg", "Butter", "Beef stock, cream (for sauce)", "Lingonberry jam to serve"],
    steps: ["Mix meats with soaked breadcrumbs, egg, onion, spices.", "Roll into small balls.", "Brown in butter.", "Make cream sauce with pan drippings, stock and cream.", "Simmer meatballs in sauce 10 min."],
    cardParagraph: "Sweden's globally beloved comfort food. Tiny spiced meatballs in a creamy, slightly sweet gravy â€” served with lingonberry jam, mashed potato and a sense of hygge.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Mashed Potato", "Lingonberry Jam", "Pickled Cucumber"], cuisine: "Swedish"
  },
  {
    id: 142,
    cardImg: "iranian-tahdig.jpg",
    cardHeading: "Persian Tahdig",
    rating: [4.9, 120],
    calories: "380",
    cookingTime: "60",
    ingredients: ["2 cups basmati rice", "Yogurt", "Saffron", "Butter or ghee", "Salt", "Turmeric"],
    steps: ["Parboil rice until half cooked.", "Mix saffron-yogurt-butter for the crust layer.", "Heat pot with ghee, add rice, create steam holes.", "Wrap lid with kitchen towel, cook on low 35 min.", "Invert onto plate â€” crust should be golden and crispy."],
    cardParagraph: "Iran's most competitive kitchen achievement. The coveted crispy golden rice crust at the bottom of the pot â€” inverted perfectly onto a plate is a source of genuine family pride.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Any Persian Stew", "Grilled Meat", "Shirazi Salad"], cuisine: "Persian"
  },
  {
    id: 143,
    cardImg: "moroccan-couscous.jpg",
    cardHeading: "Moroccan Seven-Vegetable Couscous",
    rating: [4.8, 95],
    calories: "420",
    cookingTime: "90",
    ingredients: ["Couscous", "Lamb or chicken", "7 vegetables: turnip, carrot, zucchini, squash, cabbage, eggplant, chickpeas", "Ras el hanout, turmeric, ginger", "Onion", "Tomatoes", "Olive oil"],
    steps: ["Steam couscous twice over broth for fluffiness.", "Braise meat with onion and spices.", "Add vegetables in stages (firmest first).", "Cook each until tender in the broth.", "Pile couscous, arrange vegetables, pour broth."],
    cardParagraph: "Morocco's Friday family gathering dish. Seven-vegetable couscous with slow-braised lamb â€” the centerpiece of Moroccan social life and one of the world's great dishes.",
    numberOfPeople: 8, cookingLevel: "Hard", perfectWith: ["Harissa", "Mint Tea", "Smen Butter"], cuisine: "Moroccan"
  },
  {
    id: 144,
    cardImg: "dominican-sancocho.jpg",
    cardHeading: "Dominican Sancocho",
    rating: [4.8, 82],
    calories: "490",
    cookingTime: "120",
    ingredients: ["Chicken, pork, goat (mixed)", "Yuca, Ã±ame, yautÃ­a (root vegetables)", "Plantain", "Corn on cob", "Garlic, oregano, sour orange", "Sofrito", "Achiote oil", "Cilantro"],
    steps: ["Season meats with oregano, garlic and sour orange.", "Brown all meats.", "Cover with water, add sofrito and achiote oil.", "Cook meats until nearly tender.", "Add root vegetables and plantain, cook until done."],
    cardParagraph: "The Dominican Republic's ritual stew. Multiple meats and root vegetables in an aromatic sour-orange broth â€” the dish that gets cooked for family celebrations.",
    numberOfPeople: 10, cookingLevel: "Hard", perfectWith: ["White Rice", "Avocado", "Tostones"], cuisine: "Dominican"
  },
  {
    id: 145,
    cardImg: "indian-chole-bhature.jpg",
    cardHeading: "Chole Bhature",
    rating: [4.8, 155],
    calories: "580",
    cookingTime: "60",
    ingredients: ["2 cans chickpeas", "3 tomatoes", "2 onions", "Amchur, anardana", "Black cardamom, bay leaves", "Bhature: maida flour, yogurt, yeast", "Ginger, green chilies", "Oil for frying"],
    steps: ["Cook chickpeas in spiced onion-tomato masala.", "Add amchur and anardana for tartness.", "Make bhature dough with flour, yogurt and yeast, rest 2 hours.", "Roll and deep fry until puffed and golden.", "Serve piping hot with chilled chole."],
    cardParagraph: "Delhi's legendary breakfast combo that no one eats only at breakfast. Puffy, golden fried bread with tangy, spiced chickpeas â€” a complete sensory experience.",
    numberOfPeople: 4, cookingLevel: "Medium", perfectWith: ["Pickled Onion", "Lassi", "Mango Achaar"], cuisine: "Indian"
  },
  {
    id: 146,
    cardImg: "lebanese-kibbeh-nayyeh.jpg",
    cardHeading: "Steak Tartare",
    rating: [4.7, 90],
    calories: "280",
    cookingTime: "15",
    ingredients: ["300g beef tenderloin (hand-chopped)", "Shallots, capers, cornichons", "Dijon mustard", "Worcestershire sauce", "Tabasco", "Egg yolk", "Parsley", "Toasted baguette"],
    steps: ["Hand-chop beef very finely (never blender).", "Mix with shallot, capers, mustard, Worcestershire, Tabasco.", "Season well, taste.", "Form on plate with indentation.", "Top with egg yolk, serve immediately with toast."],
    cardParagraph: "The French bistro's most elegant dish. Raw beef, perfectly seasoned with classic condiments, crowned with a golden egg yolk â€” refined, bold, and deeply satisfying.",
    numberOfPeople: 2, cookingLevel: "Easy", perfectWith: ["Frites", "Red Wine", "MÃ¢che Salad"], cuisine: "French"
  },
  {
    id: 147,
    cardImg: "pilipino-sinigang.jpg",
    cardHeading: "Filipino Sinigang",
    rating: [4.8, 135],
    calories: "330",
    cookingTime: "50",
    ingredients: ["Pork ribs or shrimp", "Tamarind (fresh or paste)", "Eggplant, okra, water spinach (kangkong)", "Long green chili", "Tomatoes, onion, daikon", "Fish sauce", "Water"],
    steps: ["Boil pork ribs with onion and tomatoes.", "Add tamarind pulp or paste.", "Add daikon, cook until soft.", "Add eggplant, okra and kangkong.", "Season with fish sauce, serve piping hot."],
    cardParagraph: "The Philippines' beloved sour soup. Pork simmered in tamarind broth with vegetables â€” bracingly sour, savory, and deeply comforting in the tropical heat.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Steamed Rice", "Patis (Fish Sauce)", "Fried Galunggong"], cuisine: "Filipino"
  },
  {
    id: 148,
    cardImg: "egyptian-ful-medames.jpg",
    cardHeading: "Egyptian Ful Medames",
    rating: [4.7, 105],
    calories: "290",
    cookingTime: "30",
    ingredients: ["2 cans fava beans", "Lemon juice", "Garlic, cumin", "Olive oil", "Parsley", "Hard boiled egg", "Tomatoes, onion", "Egyptian flatbread (aish baladi)"],
    steps: ["Heat beans with their liquid.", "Mash partially.", "Add garlic, cumin, lemon juice.", "Pour olive oil generously.", "Garnish with egg, tomato, parsley, serve with flatbread."],
    cardParagraph: "Egypt's ancient breakfast, eaten for millennia. Fava beans mashed with garlic, cumin and lemon â€” a dish of extraordinary depth for just five ingredients.",
    numberOfPeople: 4, cookingLevel: "Easy", perfectWith: ["Aish Baladi", "Falafel", "Egyptian Tea"], cuisine: "Egyptian"
  },
  {
    id: 149,
    cardImg: "uzbek-samsa.jpg",
    cardHeading: "Uzbek Samsa",
    rating: [4.8, 98],
    calories: "350",
    cookingTime: "60",
    ingredients: ["Layered dough (unleavened)", "400g lamb or beef", "2 onions", "Cumin, black pepper", "Tail fat (kurdyuk)", "Egg wash", "Sesame seeds"],
    steps: ["Make unleavened dough, roll and fold with fat to create layers.", "Fill with chopped raw meat, onion and spices.", "Shape into triangles.", "Brush with egg, sprinkle sesame.", "Bake in tandoor or oven at 220Â°C until golden."],
    cardParagraph: "Central Asia's beloved baked pastry. Flaky layered dough around a filling of chopped lamb and onion â€” baked in a clay oven and eaten on every street corner in Tashkent.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Green Tea", "Samsa Sauce", "Salad Achichuk"], cuisine: "Uzbek"
  },
  {
    id: 150,
    cardImg: "malaysian-laksa.jpg",
    cardHeading: "Penang Assam Laksa",
    rating: [4.9, 138],
    calories: "380",
    cookingTime: "90",
    ingredients: ["Mackerel (poached, flaked)", "Rice noodles (thick)", "Assam laksa paste: galangal, lemongrass, chilies", "Tamarind", "Torch ginger flower", "Cucumber, onion, pineapple (garnish)", "Shrimp paste (petis)"],
    steps: ["Simmer mackerel, remove bones and flake.", "Make paste with lemongrass, galangal and chilies.", "Cook paste in fish broth.", "Add tamarind and torch ginger flower.", "Cook noodles, assemble with garnishes and petis on top."],
    cardParagraph: "Penang's sour fish noodle soup that CNN once voted the world's best food. Tangy tamarind broth with flaked mackerel â€” sour, spicy, funky and completely hypnotic.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Teh Tarik", "Pasembur", "Cendol"], cuisine: "Malaysian"
  },
  {
    id: 151,
    cardImg: "beef-chilli.jpg",
    cardHeading: "Texas Red Chili",
    rating: [4.8, 160],
    calories: "450",
    cookingTime: "180",
    ingredients: ["1 kg beef chuck (cubed, never ground)", "Dried ancho, guajillo and chile de Ã¡rbol", "Beef stock", "Cumin, oregano", "Garlic", "Masa harina (to thicken)", "Salt"],
    steps: ["Toast and blend dried chilies into paste.", "Brown beef cubes in batches.", "Add chili paste, garlic and spices.", "Add beef stock, simmer 2â€“3 hours.", "Thicken with masa harina."],
    cardParagraph: "Texas's sacred stew â€” no beans, no tomatoes, just beef and dried chilies. An intense, dark red, deeply spiced bowl that Texans will fight over.",
    numberOfPeople: 6, cookingLevel: "Hard", perfectWith: ["Cornbread", "Sour Cream", "Beer"], cuisine: "American"
  },
  {
    id: 152,
    cardImg: "chinese-xiaolongbao.jpg",
    cardHeading: "Shanghai Xiaolongbao",
    rating: [4.9, 190],
    calories: "290",
    cookingTime: "120",
    ingredients: ["Thin skin dough", "Pork filling", "Pork skin jelly (for soup inside)", "Ginger, soy, sesame oil", "Shaoxing wine", "Spring onions", "Black vinegar, ginger for dipping"],
    steps: ["Make pork skin jelly (gelatin that melts into soup).", "Make filling with pork and seasonings.", "Fold jelly into filling.", "Roll thin wrappers, pleat into 18 folds (traditional).", "Steam 8 min, serve in bamboo."],
    cardParagraph: "Shanghai's most magical dumpling. Bite through the thin skin to find a mouthful of hot, savory soup inside â€” then eat the pork filling. An edible engineering miracle.",
    numberOfPeople: 4, cookingLevel: "Hard", perfectWith: ["Black Vinegar + Ginger", "Crab Roe Dumplings", "Dim Sum Tea"], cuisine: "Chinese"
  },
  {
    id: 153,
    cardImg: "greek-fasolada.jpg",
    cardHeading: "Greek Fasolada",
    rating: [4.7, 72],
    calories: "280",
    cookingTime: "75",
    ingredients: ["White beans (soaked)", "Carrots, celery, onion", "Tomatoes", "Generous olive oil", "Parsley", "Bay leaves", "Salt, pepper", "Lemon"],
    steps: ["Soak beans overnight.", "Cook with onion, carrot and celery.", "Add tomatoes and olive oil.", "Simmer until beans are completely tender.", "Finish with parsley and lemon."],
    cardParagraph: "Ancient Greece's national dish â€” a humble white bean soup enriched with good olive oil. Simple, deeply nutritious and wonderfully satisfying.",
    numberOfPeople: 6, cookingLevel: "Easy", perfectWith: ["Crusty Bread", "Olives", "Feta"], cuisine: "Greek"
  },
  {
    id: 154,
    cardImg: "yemeni-fahsa.jpg",
    cardHeading: "Yemeni Fahsa",
    rating: [4.9, 75],
    calories: "380",
    cookingTime: "120",
    ingredients: ["Lamb (chopped)", "Fenugreek paste (hulba)", "Hawaayij spice blend", "Tomatoes, onion", "Garlic", "Ghee", "Salta (fenugreek froth)", "Flatbread (lahoh)"],
    steps: ["Cook lamb with onion and hawaayij spices.", "Simmer until very tender and almost dry.", "Transfer to stone bowl (manja) and heat.", "Add tomatoes and cook on high heat.", "Top with frothy hulba, serve sizzling."],
    cardParagraph: "Yemen's molten stone-bowl lamb stew, topped with whipped fenugreek froth called salta. A dish that arrives at the table still bubbling and crackling with heat.",
    numberOfPeople: 2, cookingLevel: "Hard", perfectWith: ["Lahoh Bread", "Bint Al Sahn", "Qishr Ginger Coffee"], cuisine: "Yemeni"
  }
    ]

    }

    const allRecipeItemsArray = [... recipeItems['South Asian'], ... recipeItems['Middle Eastern'], ... recipeItems['East Asian'], ... recipeItems['Southeast Asian'], ... recipeItems['Caribbean'], ... recipeItems['African'], ... recipeItems['Latin American'], ... recipeItems['European & American'], ... recipeItems['World Famouse'], ... recipeItems['Other']]

    const [slectedREcipeArreyItems, setSlectedREcipeArreyItems ] = useState(allRecipeItemsArray)

    const [showFullRecipePage, setShowFullRecipePage] = useState(false)
    const [fullRecipeD , setFullRecipeD] = useState({cardImg: img1, cardHeading: "",
                                rating:[4.8, 80], calories:'', cookingLevel:"", perfectWith:["","",""],
                                cookingTime: "", ingredients: ["", "", "", "", "", ""],
                                numberOfPeople:"", steps:["","","","",""],
                                cardParagraph: ""})
    
    const [slectedRecipeCategory,setSlectedRecipeCategory] = useState('All Recipes')
    const [recipeHeroSectionPageBgImg, setRecipeHeroSectionPageBgImg] = useState(0)
    const heroImgsArray = [recipePageBgImg1 , recipePageBgImg2, recipePageBgImg3, recipePageBgImg2]

     useEffect(() => {
    const interval = setInterval(() => {
      setRecipeHeroSectionPageBgImg((prev) => (prev + 1) % heroImgsArray.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='recipe'>

        <div className= {`ShowFulldetail ${showFullRecipePage? "showFullRecipePage" : ""}`}  onClick={()=> setShowFullRecipePage(false)}>
                    {/* <div className='gobackButton' ><TiArrowLeftThick /></div> */}
                    <div className='recipeSec' onClick={(e)=>  e.stopPropagation()}>
                        {/* <h1 className='articalHeading startingH1tag'>{fullarticalD.cardHeading}</h1> */}
                        <div  className='recipeDetails'>
                            <div className='recipeHeader'>
                                <div className='headerImg' style={{ backgroundImage: `url(${img2})` }}></div>
                                
                                <div className='headerBottom'>
                                    <h4>{fullRecipeD.cardHeading}</h4>
                                    <p>{fullRecipeD.cardParagraph}</p>
                                    <div className='headerBottomIcon'>
                                        <div>
                                            <span><GiSandsOfTime /></span> 
                                            <p>{fullRecipeD.cookingTime} min</p>
                                        </div>

                                        <div>
                                            <span><RiGroupLine /></span> 
                                            <p>Serves {fullRecipeD.numberOfPeople} </p>
                                        </div>

                                        <div>
                                            <span><GiCook /></span>
                                            <p>{fullRecipeD.cookingLevel} </p>
                                        </div>
                                    </div>

                                </div>
                                
                            </div>
                            <div className='brP'>
                                    <p>Made with BORI ROOTS Balochi Spice Infused Olive Oil</p>
                            </div>

                            <div className='recipemain'>
                                
                                <div className='RecipeIngredients'>
                                    <h5>Ingredients</h5>
                                    <ul>
                                        {fullRecipeD.ingredients.map((ingredient,index) =>{
                                            return (
                                                <li key={index}> {ingredient} </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <div className='recipeSteps'>
                                    <h5>Steps</h5>
                                    <ol>
                                        {fullRecipeD.steps.map((step,index) =>{
                                            return (
                                                <li key={index}>{step}</li>
                                            )
                                        })}
                                        
                                    </ol>
                                </div>
                            </div>

                            <div className='recipeFooter'>
                                <h4>Prefect With</h4>
                                <div className='recipeFooterDiv'>
                                    {fullRecipeD.perfectWith.map((item,index)=>{
                                           return(
                                                 <div>{item} </div>
                                           )
                                    })}
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
            </div>

      <div className='recipeHeroSec'>

        {/* <div className='recipeHeroSecImg' style={{backgroundImage: `url(${heroImgsArray[recipeHeroSectionPageBgImg]})`}}> */}
        <div className='recipeHeroSecImg'>
          {heroImgsArray.map((img, index) => (
            <div key={index}  className={`slide ${  index === recipeHeroSectionPageBgImg ? "active" : ""    }`}
              style={{ backgroundImage: `url(${img})` }}
            />
          ))}
        </div>

        <div className='herosecHeading'>
            <h1 className='startingH1tag'>Eat Well, Live Well</h1>
            
            <p className='ptagAfterH1tag'>
                Discover nutrient-packed recipes that are good for your body, mind and soul.
            </p>
            <button>Explore Our Products →</button>
            <div>
                <p>Happy Healthy Eaters 50K+</p>
            </div>
        </div>

      </div>

      <div className='recipeBody'>
        <p className='catrgoryP'>Categories</p>

        <div className='categorySec'>

            <div className ={`categoryBtn ${(slectedRecipeCategory == "All Recipes")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("All Recipes"); setSlectedREcipeArreyItems(allRecipeItemsArray)}}> 
                {/* <div><HiMiniRectangleGroup /> </div> */}
                <p>All Recipes</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "South Asian")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("South Asian"); setSlectedREcipeArreyItems(recipeItems['South Asian'])}}> 
                {/* <div><IoIosSunny /> </div> */}
                <p>South Asia</p>
            </div>
            <div className={`categoryBtn ${(slectedRecipeCategory == "Middle Eastern")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("Middle Eastern"); setSlectedREcipeArreyItems(recipeItems['Middle Eastern'])}}> 
                {/* <div><GiMeal /> </div> */}
                <p>Middle Eastern</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "East Asian")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("East Asian"); setSlectedREcipeArreyItems(recipeItems['East Asian'])}}> 
                {/* <div><GiHotMeal /> </div> */}
                <p>East Asian</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "Southeast Asian")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("Southeast Asian"); setSlectedREcipeArreyItems(recipeItems['Southeast Asian'])}}> 
                {/* <div><GiHotMeal /> </div> */}
                <p>Southeast Asian</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "Caribbean")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("Caribbean"); setSlectedREcipeArreyItems(recipeItems['Caribbean'])}}> 
                {/* <div><GiHotMeal /> </div> */}
                <p>Caribbean</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "African")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("African"); setSlectedREcipeArreyItems(recipeItems['African'])}}> 
                {/* <div><GiHotMeal /> </div> */}
                <p>African</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "Latin American")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("Latin American"); setSlectedREcipeArreyItems(recipeItems['Latin American'])}}> 
                {/* <div><GiHotMeal /> </div> */}
                <p>Latin American</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "European & American")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("European & American"); setSlectedREcipeArreyItems(recipeItems['European & American'])}}> 
                {/* <div><GiHotMeal /> </div> */}
                <p>European & American</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == 'World Famouse')? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("World Famouse"); setSlectedREcipeArreyItems(recipeItems['World Famouse'])}}> 
                {/* <div><TbSaladFilled /> </div> */}
                <p>World Famouse</p>
            </div>

            <div className={`categoryBtn ${(slectedRecipeCategory == "Other")? 'activeBtn': ""}`} onClick={()=> {setSlectedRecipeCategory("Other"); setSlectedREcipeArreyItems(recipeItems['Other'])}}> 
                {/* <div><TbSoupFilled /> </div> */}
                <p>Other</p>
            </div>
        </div>

        <div className='slectedCategory'>
            <div>
                <span><HiMiniRectangleGroup /> </span>
                <h3>{slectedRecipeCategory}</h3>
            </div>
            
            <p>{slectedREcipeArreyItems.length } recipes found</p>
        </div>

        <div className='recipeItemsSec'>
            
            {slectedREcipeArreyItems.map((item,index) => {
                return(
                        <div className='recipeItem'>

                <div className='itemImg'></div>

                <div className='itemDetalSec'>
                    <h4>{item.cardHeading}</h4>
                    <div className='itemReview'>
                        <div className='iconDiv'><FaStar /> <span>{item.rating[0]} {`(${item.rating[1]})`}</span></div>
                        <p> {item.calories} cal</p>
                    </div>

                    <div className='btnSec'>
                        
                        <div><GiCampCookingPot />
                            <p>{item.cookingTime} mins</p>
                        </div>
                        <button onClick={()=>{setShowFullRecipePage(true); setFullRecipeD(item)}}>View Recipe</button>
                    </div>
                </div>
                
            </div>
                )
            })}
            

            

        </div>

        
      </div>
    </div>
  )
}

export default Recipe
