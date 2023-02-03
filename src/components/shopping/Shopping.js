import * as React from "react";
import GenericCard from "../generic-card/GenericCard";
import './Shopping.css';

function Shopping() {

    const ShoppingCards = [
        {
            title: "Ergonomic chair",
            description: "Ergonomic chairs promote good posture and support the body in a way that reduces the risk of discomfort or injury.",
            image: 'images/shopping-1.png',
            link: "https://www.amazon.com/s?k=ergonomic+chair&crid=3K8DZMDO40ZB9&sprefix=ergonomic+chair%2Caps%2C212&ref=nb_sb_noss_1",
            buttonText: "View more"
        },
        {
            title: "Tables",
            description: "Good tables help with posture and support and can be adjusted to fit the user's body and provide support.",
            image: 'images/shopping-2.png',
            link: "https://www.amazon.com/s?k=tables&crid=3PFUGX8G7Q71I&sprefix=tables%2Caps%2C311&ref=nb_sb_noss_1",
            buttonText: "View more"
        },
        {
            title: "Cushions",
            description: "Memory foam cushions conform to the shape of a person's body and then return to its original shape after the person gets up.",
            image: 'images/shopping-3.png',
            link: "https://www.amazon.com/s?k=memory+foam+cushion&crid=2OJY1ZAU8DMDX&sprefix=memory+foam+cushion%2Caps%2C277&ref=nb_sb_ss_ts-doa-p_1_19",
            buttonText: "View more"
        }, {
            title: "Heating Pads",
            description: "A heating pad is a device that is used to provide heat therapy to the body.",
            image: 'images/shopping-4.png',
            link: "https://www.amazon.com/s?k=heating+pad&crid=1E82VH3TWSOE9&sprefix=heating+%2Caps%2C383&ref=nb_sb_ss_ts-doa-p_1_8",
            buttonText: "View more"
        },
        {
            title: "Socks",
            description: "Compression socks are specialized hosiery that are designed to apply graduated compression and help increase blood flow and reduce swelling to the legs.",
            image: 'images/shopping-5.png',
            link: "https://www.amazon.com/s?k=compression+socks+for+women&crid=2GK1V6MRT2XYO&sprefix=com%2Caps%2C206&ref=nb_sb_ss_ts-doa-p_1_3",
            buttonText: "View more"
        },
        {
            title: "Pants",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            image: 'images/shopping-6.png',
            link: "https://www.amazon.com/s?k=pants&crid=1BQ8ZMFV2QRZI&sprefix=pants%2Caps%2C217&ref=nb_sb_noss_1",
            buttonText: "View more"
        },
    ];

    return (
        // add a class to the div to make it responsive
        <div className="Shopping xs:max-sm:flex-col py-8" id="Shopping">
            <h1 className="text-4xl font-bold text-main-80">Shopping Suggestions</h1>

            <div className="Shopping-cards py-5 xs:max-sm:flex-wrap">
                {ShoppingCards.map((card, index) => (
                    <GenericCard data={card} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Shopping;
