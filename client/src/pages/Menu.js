import React, { useEffect, useState } from 'react';
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

            // Retrieve menus from API
            setMenus(res);
            //Set default menu to lunch
            setSelectedMenu(res.data.lunchMenu);
        })
            .catch(err => console.log(err));
    }

    const [menus, setMenus] = useState();
    const [selectedMenu, setSelectedMenu] = useState();

    function chooseMenu(e) {
        const menuSelect = e.target.value;

        if (menuSelect === "dinner") {

            setSelectedMenu(menus.data.dinnerMenu);

        } else if (menuSelect === "lunch") {

            setSelectedMenu(menus.data.lunchMenu);
           
        } else if (menuSelect === "breakfast") {

            setSelectedMenu(menus.data.breakfastMenu);
            
        };
    };

    return (
        <div className="page-container">
            <div className="content-wrap">
                <Navbar />
                <MenuContent chooseMenu={chooseMenu}
                    selectedMenu={selectedMenu} />
                <Footer />
            </div>
        </div>
    )
}

export default Menu;