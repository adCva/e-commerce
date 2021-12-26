// This is the root Reducer
import { combineReducers } from "redux";
import cartReducer from "./CartReducer";


export default combineReducers({
    cart: cartReducer
});