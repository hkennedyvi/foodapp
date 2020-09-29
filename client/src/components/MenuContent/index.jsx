import React from 'react';
import './menucontent.scss';
import BurgerImage from '../../assets/burger.svg';



function MenuContent(props) {
   
    const menu = props.selectedMenu ? props.selectedMenu : "";
    const menuItem = !menu.items ? "LOADING" : menu.items[0];

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
            <ul className="menu">
                <div className="menu-title-header">
                    <h1>{menu.title}</h1>
                </div>
                <li className="menu-item">
                    <img className="menu-item-icon" src={BurgerImage} alt="" />
                    <div className="menu-item-text">
                        <span className="menu-item-title">{menuItem.title}</span>
                        <p className="menu-item-detail">
                            {menuItem.ingredients} <br />
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