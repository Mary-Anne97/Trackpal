import * as React from "react";
import GenericCard from "../generic-card/GenericCard";
import './Blog.css';

function Blog() {

    const BlogCards = [
        {
            title: "The Sedentary Lifestyle :",
            description: "What is sedentary lifestyle doing to us?",
            image: 'images/blog-1.png',
            link: "https://www.sycamorehealth.com.au/blog/the-sedentary-lifestyle/",
            buttonText: "Read more"
        },
        {
            title: "Benefits of Moving More :",
            description: "Move more everyday to combat sedentary lifestyle.",
            image: 'images/blog-2.png',
            link: "https://www.health.harvard.edu/blog/move-more-every-day-to-combat-a-sedentary-lifestyle-2018052413913",
            buttonText: "Read more"
        },
        {
            title: "Risks of sitting too much :",
            description: "10 effective ways to combat sedentary lifestyle",
            image: 'images/blog-3.png',
            link: "https://www.vantagefit.io/blog/sedentary-lifestyle/",
            buttonText: "Read more"
        },
    ];

    return (
        // add a class to the div to make it responsive
        <div className="Blog xs:max-sm:flex-col py-8" id="Blog">
            <h1 className="text-4xl font-bold text-main-80">Blog Post</h1>

            <div className="Blog-cards xs:max-sm:flex-wrap">
                {BlogCards.map((card, index) => (
                    <GenericCard data={card} key={index} />
                ))}
            </div>
        </div>
    );
}

export default Blog;
