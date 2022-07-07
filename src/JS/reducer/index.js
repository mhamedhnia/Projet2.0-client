import { combineReducers } from "redux";
import userReducer from "./user";
import contactReducer from "./contact";
import uploadReducer from "./upload";
const rootReducer = combineReducers({
    userReducer,
    contactReducer,
    uploadReducer,
});
export default rootReducer;
