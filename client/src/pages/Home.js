import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import MainContent from '../components/MainContent';

function  Home () {

    return (
        <div className="page-container">
            <div className="content-wrap">
            <Navbar />
            <MainContent />
            <Footer />
            </div>
        </div>
    )
}

export default Home;