const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        breakfastMenu : {
            title: "breakfast.",
            items: [{
                title: "pancakes",
                ingredients: "lettuce, tomato, onion",
                price: 9,
                // image: PancakeImage
            },
            {
                title: "sandwich",
                ingredients: "turkey, bacon, avocado",
                price: 8
            }]
        },
        lunchMenu : {
            title: "lunch.",
            items: [{
                title: "burger",
                ingredients: "lettuce, tomato, onion",
                price: 9,
                // image: BurgerImage
            },
            {
                title: "sandwich",
                ingredients: "turkey, bacon, avocado",
                price: 8
            }]
        },
        dinnerMenu : {
            title: "dinner.",
            items: [{
                title: "pizza",
                ingredients: "lettuce, tomato, onion",
                price: 9,
                // image: PizzaImage
            },
            {
                title: "sandwich",
                ingredients: "turkey, bacon, avocado",
                price: 8
            }]
        }
    })
})

module.exports = router;