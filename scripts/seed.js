require('dotenv').config();

const mongoose = require('mongoose');
const DB = require('../models');

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const menuSeed = [
    {
        type: "breakfastMenu",
        title: "breakfast.",
        items: [
            {
                title: "pancakes",
                ingredients: "syrup, butter, hazelnuts",
                price: 9,
                image: ""
            },
            {
                title: "waffles",
                ingredients: "whipped cream, strawberries, bananas",
                price: 8
            },
            {
                title: "donut",
                ingredients: "glaze, chocolate, sprinkles",
                price: 5
            }
        ]
    },
    {
        type: "lunchMenu",
        title: "lunch.",
        items: [
            {
                title: "burger",
                ingredients: "lettuce, tomato, onion",
                price: 9,
            },
            {
                title: "sandwich",
                ingredients: "turkey, bacon, avocado",
                price: 8
            },
            {
                title: "hot dog",
                ingredients: "mustard, ketchup, relish",
                price: 7
            }
        ]
    }, {
        type: "dinnerMenu",
        title: "dinner.",
        items: [
            {
                title: "pizza",
                ingredients: "pepperoni, mushrooms, peppers",
                price: 9,
            },
            {
                title: "sushi",
                ingredients: "salmon, rice, ginger",
                price: 8
            },
            {
                title: "tacos",
                ingredients: "beef, cheese, salsa",
                price: 6
            }
        ]
    }

];

DB.Menu
    .remove({})
    .then(() => DB.Menu.collection.insertMany(menuSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });