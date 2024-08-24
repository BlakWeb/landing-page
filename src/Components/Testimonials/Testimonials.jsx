import React from "react";
import "./Testimonials.css";
import team1 from "../../assets/team1.webp"
import team2 from "../../assets/team2.jpg"
import team3 from "../../assets/team3.webp"
import team4 from "../../assets/team4.jpg"

const Testimonials = () => {
    const testimonialsData = [
        {
            name: "John Doe",
            role: "CEO, Example Corp.",
            quote: "The team exceeded our expectations in every way. The website they built for us not only looks amazing but also functions flawlessly. We couldn't be happier with the results.",
            image: team1,
            rating: 5
        },
        {
            name: "Jane Smith",
            role: "Marketing Director, ABC Inc.",
            quote: "Their attention to detail and dedication to delivering a high-quality product were evident throughout the entire project. We received fantastic feedback from our clients after launching the new site.",
            image: team2,
            rating: 4
        },
        {
            name: "Michael Johnson",
            role: "CTO, XYZ Ltd.",
            quote: "Working with this team was an absolute pleasure. Their technical expertise and understanding of our business goals made the entire process smooth and stress-free.",
            image: team3,
            rating: 5
        },
        {
            name: "Donald Williams",
            role: "CTO, XYZ Ltd.",
            quote: "Working with this team was an absolute pleasure. Their technical expertise and understanding of our business goals made the entire process smooth and stress-free.",
            image: team4,
            rating: 5
        }
    ];

    const renderStars = (rating) => {
        return [...Array(5)].map((star, index) => (
            <span key={index} className={index < rating ? "star filled" : "star"}>★</span>
        ));
    };

    return (
        <div id="testimonials" className="testimonials">
            <div className="testimonials-title">
                <h1>What Our Clients Say</h1>
            </div>
            <div className="testimonials-description">
                <p>
                    We take pride in delivering top-notch services to our clients. Here’s what some of our satisfied clients have to say about their experiences working with us. Their feedback highlights our commitment to quality, dedication, and the positive impact we’ve had on their businesses.
                </p>
            </div>
            <div className="testimonials-content">
                {testimonialsData.map((testimonial, index) => (
                    <div key={index} className="testimonial">
                        <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
                        <div className="testimonial-text">
                            <p className="testimonial-quote">"{testimonial.quote}"</p>
                            <p className="testimonial-name">{testimonial.name}</p>
                            <p className="testimonial-role">{testimonial.role}</p>
                            <div className="testimonial-rating">
                                {renderStars(testimonial.rating)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
