import React from "react";
import Team_data from "../../assets/Team_data";
import "./Teams.css";

const Team = () => {
    return (
        <div className="team-container">
            <h2>Meet Our Team</h2>
            <p className="team-description">
                Our team is composed of talented professionals who are passionate about
                delivering the best results for our clients. Each member brings a unique set
                of skills and expertise to the table, ensuring that we can tackle any challenge
                that comes our way.
      </p>
            <div className="team-grid">
                {Team_data.map((team) => (
                    <div key={team.t_no} className="team-data">
                        <img src={team.t_image} alt={`${team.t_name} photo`} className="team-image" />
                        <h3>{team.t_name}</h3>
                        <p className="team-role">{team.t_role}</p>
                        <p className="team-desc">{team.t_desc}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Team;
