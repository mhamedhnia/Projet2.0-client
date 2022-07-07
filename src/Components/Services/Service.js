import React from "react";
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4 } from "react-icons/ri";
import "./Service.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
function ServiceList({ services }) {
    return (
        <section className="work" id="service">
            <div className="work-content-left">
                <h2 className="work-title">Nos Services</h2>
                <p className="work-description">
                    Nous réalisations des applications natives et cross-platform
                    Android, iOS (Apple) web et web mobile, webapp et
                    back-office.
                </p>
                <div className="work-button">
                    <Link to="/Contact">
                        {" "}
                        <p className="work-button-text">
                            Get in touch with us{" "}
                            <AiOutlineArrowRight className="work-icons" />{" "}
                        </p>
                    </Link>
                </div>
            </div>
            <div className="work-content-right">
                <div className="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber1 className="icons" />
                    </div>

                    <h5 className="work-title2">App Mobile</h5>
                    <p className="work-description">
                        Conception d’applications mobiles sur-mesure iOS et
                        Android, natives et cross-plateformes.
                    </p>
                </div>
                <div className="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber2 className="icons" />
                    </div>
                    <h5 className="work-title2">Site Internet</h5>
                    <p className="work-description">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et
                        velit aliquam .
                    </p>
                </div>
                <div className="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber3 className="icons" />
                    </div>
                    <h5 className="work-title2">Social Media</h5>
                    <p className="work-description">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et
                        velit aliquam .
                    </p>
                </div>
                <div className="card2">
                    <div className="work-icon">
                        {" "}
                        <RiNumber4 className="icons" />
                    </div>
                    <h5 className="work-title2">Sur mesure</h5>
                    <p className="work-description">
                        Euismod faucibus turpis eu gravida mi. Pellentesque et
                        velit aliquam .
                    </p>
                </div>
            </div>
        </section>
    );
}

export default ServiceList;
