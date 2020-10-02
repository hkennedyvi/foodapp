import React from 'react';
import './menucontent.scss';
import BurgerImage from '../../assets/burger.svg';

function MenuContent(props) {

    const menu = props.selectedMenu ? props.selectedMenu : "";
    const menuItems = !menu.items ? [] : menu.items;

    return (
        <main className="menu-section">
            <div>
                <h1 className="menu-header">what to eat?</h1>
            </div>
            <form action="submit">
                <select defaultValue="lunch" className="menu-select" onChange={props.chooseMenu}>
                    <option value="breakfast">Breakfast</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                </select>
            </form>
            <div className="menu">
                <div className="menu-title-header">
                    <h1>{menu.title}</h1>
                </div>
                <ul>
                {menuItems ?
                    menuItems.map((item, index) => {
                        return (
                            <li key={index} className="menu-item">
                                <img className="menu-item-icon" src={BurgerImage} alt="" />
                                <div className="menu-item-text">
                                    <span className="menu-item-title">{item.title}</span>
                                    <p className="menu-item-detail">
                                        {item.ingredients} <br />
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.<br />
                                        {item.price}
                                    </p>
                                </div>
                            </li>
                        )
                    }) : ""}
                </ul>
            </div>
        </main>
    )
}

export default MenuContent;