import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants';

export const cartReducer = (state = { cartItems: [] }, action) => {
 switch (action.type) {
  case CART_ADD_ITEM:
   //to check if item already exists in cart, set payload to its own const
   const item = action.payload;
   //check the current state, IE 'cartItems', see if it already exists
   const itemExists = state.cartItems.find((x) => x.product === item.product);

   if (itemExists) {
    return {
     ...state,
     cartItems: state.cartItems.map((x) =>
      x.product === itemExists.product ? item : x
     ),
    };
   } else {
    //item DOESN'T exist
    return {
     ...state, //state with new item
     cartItems: [...state.cartItems, item], //update cartItems to reflect new item
    };
   }
  case CART_REMOVE_ITEM:
   return {
    ...state,
    cartItems: state.cartItems.filter((x) => x.product !== action.payload),
   };
  default:
   return state;
 }
};
