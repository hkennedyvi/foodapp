import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ReservationContent from '../components/ReservationContent';

function  Reservation () {

    return (
        <div className="page-container">
            <div className="content-wrap">
            <Navbar />
            <ReservationContent />
            <Footer />
            </div>
        </div>
    )
}

export default Reservation;