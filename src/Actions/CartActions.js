import { FETCH_PRODUCT, ADD_TO_CART, DELETE_FROM_CART } from "./Types";


export const fetchProduct = () => dispatch => {
    dispatch({
        type: FETCH_PRODUCT
    })
};


export const addToCart = (cartItem) => dispatch => {
    dispatch({
        type: ADD_TO_CART,
        payload: cartItem,
    })
};


export const deleteFromCart = (cartItem) => dispatch => {
    dispatch({
        type: DELETE_FROM_CART,
        payload: cartItem,
    })
};