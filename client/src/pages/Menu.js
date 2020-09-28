import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MenuContent from '../components/MenuContent';
import API from '../utils/API';


function Menu() {

    useEffect(() => {
        loadMenus();
    }, [])

    function loadMenus() {
        API.getMenus().then(res => {
            console.log(res)
        })
            .catch(err => console.log(err));
    }

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