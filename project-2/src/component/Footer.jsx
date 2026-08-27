import './Footer.css'

export function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__brand">
                        <div className="footer__logo">
                            <img src="/Nexcent.png" alt="Nexcent" />
                        </div>
                        <p className="footer__copyright">
                            Copyright © 2020 Landify UI Kit. <br /> All rights reserved.
                        </p>
                        <div className="footer__socials">
                            <a href="#"><img src="/Social Icons.png" alt="" /></a>
                            <a href="#"><img src="/Social Icons 2.png" alt="" /></a>
                            <a href="#"><img src="/Social Icons 3.png" alt="" /></a>
                            <a href="#"><img src="/Social Icons 4.png" alt="" /></a>
                        </div>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__column-title">Company</h4>
                        <ul className="footer__links">
                            <li><a href="#">About us</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Testimonials</a></li>
                        </ul>
                    </div>

                    <div className="footer__column">
                        <h4 className="footer__column-title">Support</h4>
                        <ul className="footer__links">
                            <li><a href="#">Help center</a></li>
                            <li><a href="#">Terms of service</a></li>
                            <li><a href="#">Legal</a></li>
                            <li><a href="#">Privacy policy</a></li>
                            <li><a href="#">Status</a></li>
                        </ul>
                    </div>

                    <div className="footer__column footer__column--subscribe">
                        <h4 className="footer__column-title">Stay up to date</h4>
                        <form className="footer__subscribe-form">
                            <input type="email" placeholder="Your email address" className="footer__subscribe-input" />
                            <button type="submit" className="footer__subscribe-btn">→</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    );
}