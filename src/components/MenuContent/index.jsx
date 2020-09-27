import React, { useState } from 'react';
import './menucontent.scss';
import BurgerImage from '../../assets/burger.png';

function MenuContent() {

    const breakfastMenu = {
        title: "breakfast.",
        items: [{
            title: "pancakes",
            ingredients: "lettuce, tomato, onion",
            price: 9
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
            price: 9
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
            title: "steak",
            ingredients: "lettuce, tomato, onion",
            price: 9
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
        <main className="menu-section">
            <div >
                <h1 className="menu-header">what to eat?</h1>
            </div>
            <form action="submit">
                <select className="menu-select" onChange={chooseMenu}>
                    <option value="breakfast">Breakfast</option>
                    <option selected value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>
            </form>
            <ul className="menu">
                <div className="menu-title-header">
                    <h1>{menuType.title}</h1>
                </div>
                <li className="menu-item">
                    <img className="menu-item-icon" src={BurgerImage} alt="" />
                    <div className="menu-item-text">
                        <span className="menu-item-title">{menuType.items[0].title}</span>
                        <p className="menu-item-detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                        </p>
                    </div>
                </li>
                <li className="menu-item">
                    <img className="menu-item-icon" src={BurgerImage} alt="" />
                    <div className="menu-item-text">
                        <span className="menu-item-title">FOOD</span>
                        <p className="menu-item-detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                        </p>
                    </div>
                </li>
                <li className="menu-item">
                    <img className="menu-item-icon" src={BurgerImage} alt="" />
                    <div className="menu-item-text">
                        <span className="menu-item-title">FOOD</span>
                        <p className="menu-item-detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                        </p>
                    </div>
                </li>
            </ul>
        </main>
    )
}

export default MenuContent;