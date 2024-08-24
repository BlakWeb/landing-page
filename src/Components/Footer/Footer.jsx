import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import user_icon from "../../assets/user-icon.png";
import footer_img from "../../assets/footer-img.jpg"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
                <div className="footer-top-left">
                    <img src={footer_img} alt="Company Logo" />

                    <p>
                        We are a leading provider of web development solutions services to clientels from different countries in the World.
                    </p>
                </div>
                <div className="footer-top-right">
                    <div className="footer-email-input">
                        <img src={user_icon} alt="User Icon" />
                        <input type="email" placeholder="Enter Email" required />
                    </div>
                    <button className="footer-subscribe">
                        Subscribe
                    </button>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    <div className="social-links">
                        <a href="#" className="facebook social" aria-label="Facebook">
                            <FontAwesomeIcon icon={faFacebook} size="2x" />
                        </a>
                        <a href="#" className="instagram social" aria-label="Instagram">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="#" className="github social" aria-label="Github">
                            <FontAwesomeIcon icon={faGithub} size="2x" />
                        </a>
                        <a href="#" className="whatsapp social" aria-label="Whatsapp">
                            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                        </a>
                    </div>
                    <span>&copy; 2024 Web Development Solutions. All rights reserved.</span>
                </div>
                <div className="footer-bottom-right">
                    <p>Terms of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with us</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
