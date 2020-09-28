import React from 'react';
import './reservationcontent.scss';

function ReservationContent() {
    return (
        <main className="reservation-section">
            <div>
                <h1 className="reservation-header">get a table.</h1>
            </div>
            <form className="reservation-form">
                <label>
                    First Name:
                    <input type="text" name="firstName" className="reservation-text-input" />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" className="reservation-text-input" />
                </label>
                <div>
                    <label>
                        Guests:
                    <select defaultValue="2" className="reservation-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                    <label>
                        Time:
                    <select defaultValue="7:00" className="reservation-select">
                            <option value="6:00">6:00</option>
                            <option value="6:30">6:30</option>
                            <option value="7:00">7:00</option>
                            <option value="7:30">7:30</option>
                        </select>
                    </label>
                    <label>
                        Date:
                    <select defaultValue="3" className="reservation-select">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                        </select>
                    </label>
                </div>
                <label>
                    Notes:
                </label>
                <textarea className="reservation-textarea" placeholder="Birthday? Allergies? Put all that good stuff here."></textarea>
                <input className="reservation-submit-btn" type="submit" value="BOOK IT" />
            </form>
        </main>
    )
}

export default ReservationContent;