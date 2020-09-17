import React from 'react';
import './reservationcontent.scss';

function ReservationContent() {
    return (
        <main className="reservation-section">
            <div className="reservation-header">
                <h1>Make A Reservation</h1>
            </div>
            <form className="reservation-form">
                <label className="reservation-input">
                    First Name:
                    <input type="text" name="firstName" />
                </label>
                <label className="reservation-input">
                    Last Name:
                    <input type="text" name="lastName" />
                </label>
                <div>
                <label className="reservation-input">
                    Guests:
                    <select>
                        <option value="1">1</option>
                        <option selected value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label>
                <label className="reservation-input">
                    Time:
                    <select>
                        <option value="6:00">6:00</option>
                        <option value="6:30">6:30</option>
                        <option selected value="7:00">7:00</option>
                        <option value="7:30">7:30</option>
                    </select>
                </label>
                <label className="reservation-input">
                    Date:
                    <select>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option selected value="3">3</option>
                        <option value="4">4</option>
                    </select>
                </label>
                </div>
                <input type="submit" value="Submit" />
            </form>
        </main>
    )
}

export default ReservationContent;