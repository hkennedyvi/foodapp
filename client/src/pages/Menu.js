import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuContent from '../components/MenuContent';
import API from '../utils/API';
// import PancakeImage from '../assets/pancakes.svg';
// import BurgerImage from '../assets/burger.svg';
// import PizzaImage from '../assets/pizza.svg';



function Menu() {

    useEffect(() => {
        loadMenus();
    }, [])

    function loadMenus() {
        API.getMenus().then(res => {
            setMenus(res)
            setSelectedMenu(res.data.lunchMenu)
        })
            .catch(err => console.log(err));
    }

    const [menus, setMenus] = useState();
    const [selectedMenu, setSelectedMenu] = useState();

    function chooseMenu(e) {
        const menuSelect = e.target.value;

        if (menuSelect === "dinner") {
            setSelectedMenu(menus.data.dinnerMenu);
            console.log(selectedMenu);
        } else if (menuSelect === "lunch") {
            setSelectedMenu(menus.data.lunchMenu);
            console.log(selectedMenu);
        } else if (menuSelect === "breakfast") {
            setSelectedMenu(menus.data.breakfastMenu);
            console.log(selectedMenu);
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