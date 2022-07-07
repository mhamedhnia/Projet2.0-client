import {
    GET_IMAGES,
    GET_IMAGE,
    ADD_PRODUCT,
    GET_PRODUCTS,
} from "../actionTypes/upload";

const initialState = {
    images: [],
    image: "",
    products: [],
};

const uploadReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_IMAGES:
            return {
                ...state,
                images: payload,
            };
        case GET_IMAGE:
            return {
                ...state,
                image: payload,
            };
        case ADD_PRODUCT:
            return {
                ...state,
                products: payload,
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload,
            };

        default:
            return state;
    }
};
export default uploadReducer;
