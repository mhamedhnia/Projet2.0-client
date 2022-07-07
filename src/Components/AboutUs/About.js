import React from "react";
import "./About.css";
import amy from "../../2.jpg";

function About() {
    return (
        <section className="about">
            <div className="about-top">
                <div className="about-container">
                    <h2 className="about-heading">About Us</h2>
                    <h1 className="about-title">Our design solve problems</h1>
                    <p className="about-text">
                        Our team of developers manages the server part, data
                        processing and integration of the information system
                        before moving on to the web and/or mobile development of
                        user interfaces
                    </p>
                </div>
                <img className="about-img" src={amy} />
            </div>
            <div className="about-bottom">
                <h2 className="about-heading-2">Who we are</h2>
                <div className="about-container-2">
                    <div style={{ display: "flex", marginBottom: 20 }}>
                        <div className="about-container-bottom">
                            <h3 className="about-title-bottom">Goal Focused</h3>
                            <p className="about-text-bottom">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                        <div className="about-container-bottom">
                            <h3 className="about-title-bottom">
                                Continous improvement
                            </h3>
                            <p className="about-text-bottom">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </div>
                    <img className="about-img2" src="" />
                </div>
            </div>
        </section>
    );
}

export default About;
