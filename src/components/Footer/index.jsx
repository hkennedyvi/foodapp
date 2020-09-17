import React from 'react';
import './footer.scss';

function Footer() {
    return (
        <section className="footer">
            <div>
                <p>
                    Icons made by
                    {/* <a href="https://www.flaticon.com/authors/freepik" title="Freepik"> */}
                        Freepik
                    {/* </a> */}
                    from
                    {/* <a href="https://www.flaticon.com/" title="Flaticon"> */}
                        www.flaticon.com
                    {/* </a> */}
                </p>
            </div>
            <div className="social">
                <i class="fab fa-facebook social-item"></i>
                <i class="fab fa-twitter social-item"></i>
                <i class="fab fa-instagram social-item"></i>
            </div>
        </section>
    )
}

export default Footer;