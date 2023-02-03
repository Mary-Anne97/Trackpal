import * as React from "react";
import 'swiper/css';
import Why_Mark from '../../images/mark.svg';
import Sport from '../../images/sport.svg';



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './Why.css';

function Why() {

    const WhyItems = [
        {
            title: "Earn daily achievements that convert to vouchers",
        },
        {
            title: "Get reminded. Never forget anything on our watch",
        },
        {
            title: "Connect worldwide with like-minded people",
        },
        {
            title: "From stretches to HIIT workout tailored for you",
        },
    ];

    // const Testimonials = [
    //     {
    //         title: "Look no further for an app that caters to all your needs.",
    //         name: 'John Doe',
    //         image: 'images/testimonial-1.png'
    //     },
    //     {
    //         title: "This app is so user-centered and beginner friendly.",
    //         name: 'Jane Doe',
    //         image: 'images/user 2.jpg'
    //     },
    //     {
    //         title: "It is so helpful getting ergonomic materials",
    //         name: 'John Doe',
    //         image: 'images/user 3.jpg'
    //     },
    // ];

    return (
        // add a class to the div to make it responsive
        <div className="Why xs:max-sm:flex-col py-8" id="Why">
            {/* White a layout that has why text at right and why image at left */}
            <div className="Why-image text-center py-5">
                <img src={Sport} alt="sport" className='m-auto Why-Image' />
            </div>
            <div className="Why-text py-5 text-left">
                <h1 className="text-4xl font-bold">WHY USE US?</h1>
                <ul className="py-3">
                    {WhyItems.map((item, index) => (
                        <li className="text-xl text-main-80 py-2 Why-Item" key={index}>
                            <img src={Why_Mark} alt="check" className="Why-Check" />
                            <div className="pl-3">{item.title}</div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Why;


