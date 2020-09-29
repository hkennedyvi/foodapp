const express = require('express');
const router = express.Router();
//Need to properly import image for menu items from assets folder
// const burgerImage = url('../../assets/042-burger.png');

router.get('/', (req, res, next) => {
    res.status(200).json({
        breakfastMenu : {
            title: "breakfast.",
            items: [{
                title: "pancakes",
                ingredients: "syrup, butter, hazelnuts",
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
                // image: burgerImage
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
                ingredients: "pepperoni, mushrooms, peppers",
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