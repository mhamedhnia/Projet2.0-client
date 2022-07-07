import React from "react";
import "./Gallerie.css";
function Gallerie({ product }) {
    return (
        <div className="portfolio-wrapper ">
            <div className="content ">
                <div className="content-overlay"></div>
                <img className="content-image" src={product.imageURL} />
                <div className="content-details fadeIn-bottom">
                    <h5 className="p-title">{product.title}</h5>
                    <p className="p-desc">{product.description}</p>
                </div>
            </div>
        </div>
    );
}

export default Gallerie;
