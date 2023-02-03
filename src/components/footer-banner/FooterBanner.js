import * as React from "react";
import './FooterBanner.css';

function FooterBanner() {

    return (
        // add a class to the div to make it responsive
        <div className="Footer-Banner xs:max-sm:flex-col py-8 bg-main-80 text-center" id="Footer-Banner">
            <h1 className="text-4xl font-bold text-white">Download Trackpal</h1>
            <p className="Footer-Banner-Description pt-2 pb-5 text-sm text-white">Lorem Ipsum is simply dummy text of the printing and
                <br /> typesetting industry. Bulabalu bulaba blu blu</p>

            <div className="Footer-Banner-Download">
                <a href="#Footer-Banner" className="px-3">
                    <img src="images/google-play.png" alt="hero_image" className='m-auto' />
                </a>
                <a href="#Footer-Banner" className="px-3">
                    <img src="images/apple.png" alt="hero_image" className='m-auto' />
                </a>
            </div>
        </div>
    );
}

export default FooterBanner;
