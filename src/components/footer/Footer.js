import * as React from "react";
import './Footer.css';

function Footer() {

    return (
        <div className="Footer xs:max-sm:flex-col py-10 text-center" id="Footer">

            <div className="Footer-Section  text-left">
                <img src="images/logo.svg" alt="logo" className="Footer-Icon" />
                <p className="Footer-Section-Description pt-2 pb-5 text-sm text-main-0">Your number 1 platform that caters <br />for your work balance lifestyle</p>
                <div className="Footer-Section-Social">
                    <img src="images/youtube.svg" alt="youtube" className="Footer-Section-Social-Icon " />
                    <img src="images/facebook.svg" alt="facebook" className="Footer-Section-Social-Icon " />
                    <img src="images/twitter.svg" alt="twitter" className="Footer-Section-Social-Icon " />
                    <img src="images/instagram.svg" alt="instagram" className="Footer-Section-Social-Icon " />
                </div>

            </div>

            <div className="Footer-Section text-left">
                <h1 className="text-xl font-bold text-main-0">Website</h1>
                <ul>
                    <li className="Footer-Section-Item pt-1">
                        <a href="#Footer" className="Footer-Section-Link text-sm text-main-0">About Us</a>
                    </li>
                    <li className="Footer-Section-Item pt-1">
                        <a href="#Footer" className="Footer-Section-Link text-sm text-main-0">Community</a>
                    </li>
                    <li className="Footer-Section-Item pt-1">
                        <a href="#Footer" className="Footer-Section-Link text-sm text-main-0">Terms of Use</a>
                    </li>
                </ul>
            </div>

            <div className="Footer-Section text-left">
                <h1 className="text-xl font-bold text-main-0">Support</h1>
                <ul>
                    <li className="Footer-Section-Item pt-1">
                        <a href="#Footer" className="Footer-Section-Link text-sm text-main-0">FAQ</a>
                    </li>
                    <li className="Footer-Section-Item pt-1">
                        <a href="#Footer" className="Footer-Section-Link text-sm text-main-0">Support Center</a>
                    </li>
                    <li className="Footer-Section-Item pt-1">
                        <a href="#Footer" className="Footer-Section-Link text-sm text-main-0">Contact Us</a>
                    </li>
                </ul>
            </div>

            <div className="Footer-Section text-left">
                <h1 className="text-xl font-bold text-main-0">Connect</h1>
                <ul>
                    <li className="Footer-Section-Item pt-1">
                        <a href="#Footer" className="Footer-Section-Link text-sm text-main-0">Don’t hesitate to reach out to us on </a>
                    </li>
                    <li className="Footer-Section-Item pt-1">
                        <a href="#Footer" className="Footer-Section-Link text-sm text-main-0">team3@gmail.com</a>
                    </li>
                    <li className="Footer-Section-Item pt-1">
                        <a href="#Footer" className="Footer-Section-Link text-sm text-main-0">+447867665206</a>
                    </li>
                </ul>
            </div>

        </div>
    );
}

export default Footer;
