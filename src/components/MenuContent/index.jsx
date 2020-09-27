import React, { useState } from 'react';
import './menucontent.scss';
import BurgerImage from '../../assets/burger.png';

function MenuContent() {

    // const [menuType, setMenuType] = useState([]);
    const breakfastMenu = {
        type: "lunch.",
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

    const lunchMenu = {
        type: "lunch.",
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
        type: "lunch.",
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

    return (
        <main className="menu-section">
            <div >
                <h1 className="menu-header">what to eat?</h1>
            </div>
            <form action="">
                    <select className="menu-select">
                        <option value="breakfast">Breakfast</option>
                        <option selected value="lunch">Lunch</option>
                        <option value="dinner">Dinner</option>
                    </select>
                </form>
            <ul className="menu">
                <div className="menu-title-header">
                    <h1>{lunchMenu.type}</h1>
                </div>
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