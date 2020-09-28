import React from 'react';
import './navbar.scss';
import MenuImage from '../../assets/menu.png';
import FoodCartImage from '../../assets/foodCart.png';
import DinnerTableImage from '../../assets/dinnerTable.png';

function NavBar() {
    return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <a href="/" className="nav-link">
                            <span className="link-text logo-text">Restaurant</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <img src={FoodCartImage} alt="Home"/>
                            <span className="link-text">HOME</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/menu" className="nav-link">
                        <img src={MenuImage} alt="Menu"/>
                            <span className="link-text">MENU</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/reservation" className="nav-link">
                            <img src={DinnerTableImage} alt="Reservation"/>
                            <span className="link-text">RESERVATION</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            <i className="fas fa-question" alt="About"></i>
                            <span className="link-text">ABOUT</span>
                        </a>
                    </li>
                </ul>
            </nav>        
    );
}

export default NavBar;