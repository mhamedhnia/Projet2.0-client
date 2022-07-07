import React from "react";
import GallerieCard from "./GallerieCard";
import "./Gallerie.css";
import { getProducts } from "../../JS/actions/upload";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
function GallerieList() {
    const products = useSelector((state) => state.uploadReducer.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);
    return (
        <section id="Portfolio">
            <div className="container">
                <h2 className="title-portfolio">Gallerie</h2>

                <div className="galleries">
                    {products &&
                        products.map((product) => (
                            <GallerieCard
                                product={product}
                                index={product._id}
                                key={product._id}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
}

export default GallerieList;
