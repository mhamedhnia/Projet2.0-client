import React from "react";

export default function GetProduct({ product }) {
    return (
        <div className="main-container">
            <div className="cards">
                <div className="card card-1">
                    <p className="card__text">{product.title}</p>

                    <img src={product.imageURL} />
                    <h3 className="card__title">{product.description}</h3>
                </div>
            </div>
        </div>
    );
}
