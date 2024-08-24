import React, { useState } from 'react';
import "./Navbar.css";
import { TiTimes, TiThMenu } from "react-icons/ti";
import { Link } from 'react-router-dom';

export const Navbar = () => {
    const [Mobile, setMobile] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const handleSetActiveLink = (index) => {
        setActiveLink(index);
        setMobile(false);
    };

    const navLinks = [
        { name: 'HOME', path: '/' },
        { name: 'FEATURES', path: '/features' },
        { name: 'ABOUT', path: '/about' },
        { name: 'SERVICES', path: '/services' },
        { name: 'GALLERY', path: '/gallery' },
        { name: 'TESTIMONIALS', path: '/testimonials' },
        { name: 'TEAM', path: '/teams' },
        { name: 'CONTACT', path: '/contact' },
    ];

    return (
        <div>
            <div className="navbar">
                <div className="nav-logo">
                    <h2>WEB-DEV</h2>
                </div>
                <div className={Mobile ? "nav-links" : "links"} onClick={() => setMobile(false)}>
                    <ul>
                        {navLinks.map((link, index) => (
                            <Link
                                to={link.path}
                                key={index}
                                className={activeLink === index ? 'active' : ''}
                                onClick={() => handleSetActiveLink(index)}
                            >
                                <li>{link.name}</li>
                            </Link>
                        ))}
                    </ul>
                </div>
                <div className="nav-btn">
                    <button>CONNECT WITH US</button>
                </div>
                <button className="toggle" onClick={() => setMobile(!Mobile)}>
                    {Mobile ? <TiTimes className="close-icon" /> : <TiThMenu className="open-icon" />}
                </button>
            </div>
        </div>
    );
};
