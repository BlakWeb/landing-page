import React from "react";
import "./Services.css"
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.png";

const Services = () => {
    return (
        <div id="services" className="services">
            <div className="services-title">
                <h1>Our Services</h1>
                <p>
                    Discover the pinnacle of innovation and expertise with our wide array of services, meticulously crafted to meet your every need. Whether you’re looking to elevate your business, enhance your personal experience, or explore new frontiers, our solutions are designed to deliver unparalleled results. Dive in and explore how we can turn your vision into reality, one step at a time.
                </p>
            </div>
            <div className="services-container">
                {Services_Data.map((service, index) => {
                    return (
                        <div key={index} className="services-format">
                            <h3>{service.s_no}</h3>
                            <h2>{service.s_name}</h2>
                            <p>{service.s_desc}</p>
                            <div className="services-exploremore">
                                <p>Explore More</p>
                                <img src={arrow_icon} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Services;
