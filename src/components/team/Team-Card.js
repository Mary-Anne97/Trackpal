import * as React from "react";
import './Team.css';

function TeamCard({ data }) {
    return (
        // add a class to the div to make it responsive
        <div className="Team xs:max-sm:flex-col py-10 " id="Team">
            <div className="Team-image">
                <img src={data.image} alt="card" />
            </div>
            <div className="Team-content text-center py-3">
                <h1 className="text-xl font-bold text-main-80">{data.name}</h1>
            </div>
        </div>
    );
}

export default TeamCard;
