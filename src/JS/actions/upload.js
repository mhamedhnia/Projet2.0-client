import axios from "axios";
import {
    ADD_PRODUCT,
    GET_IMAGE,
    GET_IMAGES,
    GET_PRODUCTS,
} from "../actionTypes/upload";

export const loadImages = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/product/images");

        dispatch({ type: GET_IMAGES, payload: res.data });
    } catch (err) {
        console.error(err);
    }
};
export const uploadImage = (base64EncodedImage) => async (dispatch) => {
    try {
        const config = {
            headers: { "Content-Type": "application/json" },
        };
        await axios.post("/api/product/upload", base64EncodedImage, config);
        dispatch(loadImages());
    } catch (err) {
        console.error(err);
    }
};
/////get image et images
export const getImage = () => async (dispatch) => {
    try {
        const res = await axios.get("/api/product/image");
        dispatch({ type: GET_IMAGE, payload: res.data.toString() });
    } catch (err) {
        console.error(err);
    }
};

//add product
export const addProduct = (product) => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };

        let res = await axios.post("/api/product/addproduct", product, config);
        dispatch({ type: ADD_PRODUCT, payload: res.data.product });
    } catch (error) {
        console.log(error);
    }
};
export const getProducts = () => async (dispatch) => {
    try {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        const res = await axios.get("/api/product/allproducts", config);
        dispatch({ type: GET_PRODUCTS, payload: res.data.products }); //{msg,contacts}
    } catch (error) {
        console.log(error);
    }
};
