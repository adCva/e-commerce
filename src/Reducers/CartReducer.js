import { FETCH_PRODUCT, ADD_TO_CART, DELETE_FROM_CART } from "../Actions/Types";



const initialState = {
    product: 
        {
            company: "Sneaker Company",
            productName: "Fall Limited Edition Sneakers",
            productDesc: "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
            productUnitPrice: 125.00,
            productDiscount: 50,
            productOriginalPrice: 250.00
        },
    addedToCart: [],
    total: 0
};



export default function( state = initialState, action ) {

    switch (action.type) {
        case FETCH_PRODUCT:
            return {
                ...state
            }

        case ADD_TO_CART:
            let newItem = action.payload;
            
            let currentTotal = state.total;
            let increaseTotal = currentTotal + action.payload.total;

            return {
                ...state,
                addedToCart: [ ...state.addedToCart, newItem],
                total: increaseTotal
            }

        case DELETE_FROM_CART:
            let deleteItem = state.addedToCart[action.payload];
            let existingItems = state.addedToCart;
            let remainingItems = existingItems.filter(item => item !== deleteItem);

            let existingTotal = state.total;
            let decreseTotal = existingTotal - deleteItem.total;

            return {
                ...state,
                addedToCart: remainingItems,
                total: decreseTotal
            }

        default: 
            return state;
    }
    
};