import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuContent from '../components/MenuContent'


function  Menu () {

    return (
        <div className="page-container">
            <div className="content-wrap">
            <Navbar />
            <MenuContent />
            <Footer />
            </div>
        </div>
    )
}

export default Menu;