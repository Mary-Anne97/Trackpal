import * as React from "react";
import TeamCard from './Team-Card';
import './Team.css';

function Team() {

    const TeamCards = [
        {
            name: "Mary-Anne",
            image: "images/team-1.png",
        },
        {
            name: "Thri",
            image: "images/team-2.png",
        },
        {
            name: "Adepoju",
            image: "images/team-3.png",
        },
        {
            name: "Arya",
            image: "images/team-4.png",
        },
    ];

    return (
        // add a class to the div to make it responsive
        <div className="Team-container xs:max-sm:flex-col py-8" id="Team">
            <h1 className="text-4xl font-bold text-main-80">Meet the team</h1>

            <div className="Team-cards py-5 xs:max-sm:flex-wrap xs:max-sm:justify-center justify-between">
                {TeamCards.map((card, index) => (
                    <TeamCard data={card} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Team;
