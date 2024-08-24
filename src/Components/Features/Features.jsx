import React from 'react';
import './Features.css';

const features = [
    {
        title: "High Performance",
        description: "Our application is optimized for speed and efficiency.",
        icon: "🚀",
    },
    {
        title: "User Friendly",
        description: "Designed with the user in mind, easy to navigate.",
        icon: "👍",
    },
    {
        title: "Secure",
        description: "We prioritize your security and privacy above all.",
        icon: "🔒",
    },
    {
        title: "24/7 Support",
        description: "Our team is available around the clock to assist you.",
        icon: "📞",
    },
];

const FeaturesPage = () => {
    return (
        <div className="features-page">
            <header className="features-header">
                <h1>Our Features</h1>
                <p>Discover the unique features that set us apart.</p>
            </header>
            <section className="features-list">
                {features.map((feature, index) => (
                    <div key={index} className="feature-item">
                        <div className="feature-icon">{feature.icon}</div>
                        <h2>{feature.title}</h2>
                        <p>{feature.description}</p>
                    </div>
                ))}
            </section>
        </div>
    );
}

export default FeaturesPage;
