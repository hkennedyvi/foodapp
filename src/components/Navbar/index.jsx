import React from 'react';
import './navbar.scss';

function NavBar() {
    return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <a href="/" className="nav-link">
                            <span class="link-text logo-text">Restaurant</span>
                            <i class="fas fa-arrow-right"></i>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i class="fas fa-question"></i>
                            <span className="link-text">HOME</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/about" className="nav-link">
                            <i class="fas fa-question"></i>
                            <span className="link-text">ABOUT</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/menu" className="nav-link">
                            <i class="fas fa-question"></i>
                            <span className="link-text">MENU</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a href="/" className="nav-link">
                            <i class="fas fa-question"></i>
                            <span className="link-text">POINT 4</span>
                        </a>
                    </li>
                </ul>
            </nav>        
    );
}

export default NavBar;