import {
    GET_CONTACTS,
    ADD_CONTACT,
    DELETE_CONTACTS,
    GET_CONTACT,
    TOGGLE_TRUE,
    TOGGLE_FALSE,
} from "../actionTypes/contact";

const initialState = {
    contact: [],
    errors: [],
    show: false,
};

const contactReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CONTACTS:
            return { ...state, contact: payload };
        case ADD_CONTACT:
            return { ...state, contact: payload };
        case DELETE_CONTACTS:
            return { ...state, contact: payload };
        case GET_CONTACT:
            return { ...state, contact: payload };
        case "VIDE_ERRORS":
            return { ...state, errors: [] };
        case TOGGLE_TRUE:
            return { ...state, show: true };

        case TOGGLE_FALSE:
            return { ...state, show: false };
        default:
            return state;
    }
};
export default contactReducer;
