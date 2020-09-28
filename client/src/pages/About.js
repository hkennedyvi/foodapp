import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AboutContent from '../components/AboutContent';

function  Home () {

    return (
        <div className="page-container">
            <div className="content-wrap">
            <Navbar />
            <AboutContent />
            <Footer />
            </div>
        </div>
    )
}

export default Home;