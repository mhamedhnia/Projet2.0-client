import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import GetProduct from "./GetProduct";
import { getProducts } from "../../JS/actions/upload";

const ProductList = () => {
    const products = useSelector((state) => state.uploadReducer.products);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    });
    return (
        <div className="demandeList">
            <p style={{ textAlign: "center" }}> ProductList</p>
            <div className="ContactList">
                {products &&
                    products.map((product) => (
                        <GetProduct product={product} index={product._id} />
                    ))}
            </div>
        </div>
    );
};
export default ProductList;
