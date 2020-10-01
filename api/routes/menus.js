const { urlencoded } = require('express');
const express = require('express');
const router = express.Router();
//Need to properly import image for menu items from assets folder
// const burgerImage = require('../../assets/burger');


router.get('/', (req, res, next) => {
    res.status(200).json({
        breakfastMenu : {
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
        lunchMenu : {
            title: "lunch.",
            items: [
                {
                title: "burger",
                ingredients: "lettuce, tomato, onion",
                price: 9,
                // image: burgerImage
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
        },
        dinnerMenu : {
            title: "dinner.",
            items: [
                {
                title: "pizza",
                ingredients: "pepperoni, mushrooms, peppers",
                price: 9,
                // image: PizzaImage
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
    })
})

module.exports = router;