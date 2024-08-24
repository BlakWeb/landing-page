import React from "react";
import "./About.css";

const About = () => {
    return (
        <div id="about" className="about">
            <div className="about-title">
                <h1>About Us</h1>
            </div>
            <div className="about-sections">
                <div className="about-right">
                    <div className="about-para">
                        <p>
                            We are a dedicated team of web development professionals with many Years of experience in delivering high-quality, responsive websites. Our expertise spans across different web development services, allowing us to create dynamic and engaging digital experiences. We are committed to helping businesses thrive online by developing custom solutions that meet their unique needs and objectives.
                        </p>
                    </div>
                </div>
            </div>
            <div className="about-achievements">
                <div className="about-achievement">
                    <h1>10+</h1>
                    <p>Years of Industry Experience</p>
                </div>
                <div className="about-achievement">
                    <h1>1000+</h1>
                    <p>Successful Projects Delivered</p>
                </div>
                <div className="about-achievement">
                    <h1>750+</h1>
                    <p>Satisfied Clients Worldwide</p>
                </div>
            </div>
        </div>
    );
};

export default About;
