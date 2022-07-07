import React from "react";
import "./Hero.css";
const Hero = () => {
    return (
        <div className="HeroContainer">
            <div className="HeroContainerLeft">
                <h1 className="HeroTitle">
                    Transform Your Idea int reality with Bwdigital
                </h1>
                <p className="HeroText">
                    The entire Finsweet team knows what's good with Webflow and
                    you can too with 1 week and a good attitude.
                </p>
                <button className="HeroButton">Contact us</button>
            </div>
            <img className="Img" src="{imgHero}" />
        </div>
    );
};

export default Hero;
