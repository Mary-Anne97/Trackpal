import * as React from "react";
import './GenericCard.css';

function GenericCard({ data }) {
    return (
        // add a class to the div to make it responsive
        <div className="Generic-Card xs:max-sm:flex-col p-3" id="Generic-Card">
            <div className="Generic-Card-image">
                <img src={data.image} alt="card" />
            </div>
            <div className="Generic-Card-content text-left py-3">
                <h1 className="text-xl font-bold text-main-80">{data.title}</h1>
                <p className="Generic-Card-Description pt-2 pb-5 text-sm">{data.description}</p>
                <div className='xs:max-sm:m-auto xs:max-sm:py-5 text-center'>
                    <a href={data.link} className="bg-main-80 rounded text-white px-4 py-1 font-bold hover:bg-white hover:text-main-80 more-btn">{data.buttonText}</a>
                </div>
            </div>
        </div>
    );
}

export default GenericCard;
