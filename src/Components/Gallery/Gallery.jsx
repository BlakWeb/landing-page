import React from "react";
import "./Gallery.css"
import Services_Data from "../../assets/services_data";

const Gallery = () => {
    return (
        <div id="gallery" className="gallery">
            <div className="gallery-title">
                <h1>Our Portfolio</h1>
                <p>
                    Explore our extensive portfolio showcasing the range of services we offer. Each project represents our commitment to quality, innovation, and client satisfaction.
                </p>
            </div>
            <div className="gallery-container">
                {Services_Data.map((service, index) => {
                    return (
                        <div key={index} className="gallery-item">
                            <img src={service.s_image} alt={service.s_name} className="gallery-image" />
                            <div className="gallery-overlay">
                                <h3>{service.s_no}</h3>
                                <h2>{service.s_name}</h2>
                                <p>{service.s_desc}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Gallery;
