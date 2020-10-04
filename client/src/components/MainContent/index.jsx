import React from 'react';
import './maincontent.scss';

function MainContent() {
    return (
        <main className="main-home">
            <div>
                <h1 className="main-header">good restauraunt.</h1>
            </div>
            <div className="main-blurb">
                <p className="main-blurb-text">
                <h2 className="secondary-header">When it comes to serving our community...</h2>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Sit amet aliquam id diam maecenas ultricies. Aliquam id diam maecenas ultricies mi eget mauris pharetra et. 
                </p>
                <button className="enter-btn">ENTER</button>
            </div>
        </main>
    )
}

export default MainContent;