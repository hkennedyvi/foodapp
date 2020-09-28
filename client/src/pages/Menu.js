import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuContent from '../components/MenuContent';
import API from '../utils/API';
import PancakeImage from '../assets/pancakes.svg';
import BurgerImage from '../assets/burger.svg';
import PizzaImage from '../assets/pizza.svg';



function Menu() {

    useEffect(() => {
        loadMenus();
    }, [])

    function loadMenus() {
        API.getMenus().then(res => {
            console.log(res)
        })
            .catch(err => console.log(err));
    }

    const breakfastMenu = {
        title: "breakfast.",
        items: [{
            title: "pancakes",
            ingredients: "lettuce, tomato, onion",
            price: 9,
            image: PancakeImage
        },
        {
            title: "sandwich",
            ingredients: "turkey, bacon, avocado",
            price: 8
        }]
    }

    const lunchMenu = {
        title: "lunch.",
        items: [{
            title: "burger",
            ingredients: "lettuce, tomato, onion",
            price: 9,
            image: BurgerImage
        },
        {
            title: "sandwich",
            ingredients: "turkey, bacon, avocado",
            price: 8
        }]
    }

    const dinnerMenu = {
        title: "dinner.",
        items: [{
            title: "pizza",
            ingredients: "lettuce, tomato, onion",
            price: 9,
            image: PizzaImage
        },
        {
            title: "sandwich",
            ingredients: "turkey, bacon, avocado",
            price: 8
        }]
    }

    const [menuType, setMenuType] = useState(lunchMenu);

    function chooseMenu(e) {
        const menuSelect = e.target.value;
        console.log(menuType);
        if (menuSelect === "dinner") {
            setMenuType(dinnerMenu);
        } else if (menuSelect === "lunch") {
            setMenuType(lunchMenu);
        } else if (menuSelect === "breakfast") {
            setMenuType(breakfastMenu);
        }
    }

    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar />
                <MenuContent chooseMenu={chooseMenu} />
                <Footer />
            </div>
        </div>
    )
}

export default Menu;