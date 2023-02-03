import * as React from "react";
import Alarm from '../../images/alarm.svg';
import Community from '../../images/community.svg';
import Gym from '../../images/gym.svg';
import Shopping from '../../images/shopping.svg';
import ExploreCard from "./Explore-Card";
import './Explore.css';

function Explore() {

    const ExploreCards = [
        {
            title: "Personalized Tracking",
            description: "Never forget anything on our watch.",
            image: Alarm,
        },
        {
            title: "Supportive Community",
            description: "Discover like-minded people.",
            image: Community,
        },

        {
            title: "Suggested Shopping",
            description: "From Amazon to your doorstep.",
            image: Shopping,
        },

        {
            title: "Manage Routine",
            description: "From sunrise till sunset, you need it, we remind you.",
            image: Gym,
        },
    ];

    return (
        <div className="Explore xs:max-sm:flex-col py-5" id="Explore">
            <div className="Explore-text">
                <h1 className="text-4xl font-bold text-main-0">EXPLORE A BETTER WORK-LIFE BALANCE</h1>
            </div>
            <div className="Explore-cards py-5 xs:max-sm:flex-wrap">
                {ExploreCards.map((card, index) => (
                    <ExploreCard data={card} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Explore;
