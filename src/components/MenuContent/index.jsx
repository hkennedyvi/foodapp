import React from 'react';
import './menucontent.scss';

function MenuContent() {
    return (
        <main className="menu-section">
            <div className="menu-header">
                <h1>what to eat?</h1>
            </div>
            <ul className="menu">
                <li className="menu-item">
                    <i class="fas fa-hamburger menu-item-icon"></i>
                    <div className="menu-item-text">
                        <span className="menu-item-title">FOOD</span>
                        <p className="menu-item-detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                        </p>
                    </div>
                </li>
                <li className="menu-item">
                    <i class="fas fa-hamburger menu-item-icon"></i>
                    <div className="menu-item-text">
                        <span className="menu-item-title">FOOD</span>
                        <p className="menu-item-detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                        </p>
                    </div>
                </li>
                <li className="menu-item">
                    <i class="fas fa-hamburger menu-item-icon"></i>
                    <div className="menu-item-text">
                        <span className="menu-item-title">FOOD</span>
                        <p className="menu-item-detail">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non diam phasellus vestibulum lorem sed risus ultricies tristique. Nullam ac tortor vitae purus faucibus ornare suspendisse sed.
                        </p>
                    </div>
                </li>
            </ul>
        </main>
    )
}

export default MenuContent;