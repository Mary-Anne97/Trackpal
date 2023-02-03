import * as React from "react";
import Purse from '../../images/purse.svg';
import './Explore.css';

function ExploreCard({ data }) {

    return (
        <div className="ExploreCard xs:max-sm:flex-col">
            <div className="ExploreCard-text">
                <img src={data.image || Purse} alt="Purse" className='Purse' />
                <h1 className="text-xl font-bold text-white pt-2">{data.title}</h1>
                <p className="text-sm text-white py-5">{data.description}</p>
            </div>
            <div className="ExploreCard-Button xs:max-sm:hidden ">
                <button className="bg-main-white text-white px-4 py-2 font-bold join-now rounded">Join Now</button>
            </div>
        </div>
    );
}

export default ExploreCard;
