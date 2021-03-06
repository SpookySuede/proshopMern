import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
 productListReducer,
 productDetailsReducer,
} from "./reducers/productReducers";
import { cartReducer } from "./reducers/cartReducers";
import {
 userLoginReducer,
 userDetailsReducer,
 userRegisterReducer,
 userUpdateProfileReducer,
 userUpdateReducer,
 userListReducer
} from "./reducers/userReducers";
import {
 orderCreateReducer,
 orderDetailsReducer,
 orderPayReducer,
 userOrderListReducer,
} from "./reducers/orderReducers";

const reducer = combineReducers({
 productList: productListReducer,
 productDetails: productDetailsReducer,
 cart: cartReducer,
 userLogin: userLoginReducer,
 userDetails: userDetailsReducer,
 userRegister: userRegisterReducer,
 userUpdateProfile: userUpdateProfileReducer,
 userUpdate: userUpdateReducer,
 orderCreate: orderCreateReducer,
 orderDetails: orderDetailsReducer,
 orderPay: orderPayReducer,
 userOrderList: userOrderListReducer,
 userList: userListReducer
});
const cartItemsFromStorage = localStorage.getItem("cartItems")
 ? JSON.parse(localStorage.getItem("cartItems"))
 : [];
const userInfoFromStorage = localStorage.getItem("userInfo")
 ? JSON.parse(localStorage.getItem("userInfo"))
 : null;
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
 ? JSON.parse(localStorage.getItem("shippingAddress"))
 : {};
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
 ? JSON.parse(localStorage.getItem("paymentMethod"))
 : {};
const initialState = {
 cart: {
  cartItems: cartItemsFromStorage,
  shippingAddress: shippingAddressFromStorage,
  paymentMethod: paymentMethodFromStorage,
 },
 userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
 reducer,
 initialState,
 composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
