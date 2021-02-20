import {
 CREATE_ORDER_FAILED,
 CREATE_ORDER_REQUEST,
 CREATE_ORDER_SUCCESS,
 CREATE_ORDER_RESET,
 DETAILS_ORDER_FAILED,
 DETAILS_ORDER_REQUEST,
 DETAILS_ORDER_SUCCESS,
 LIST_USER_ORDERS_FAILED,
 LIST_USER_ORDERS_REQUEST,
 LIST_USER_ORDERS_SUCCESS,
 PAY_ORDER_FAILED,
 PAY_ORDER_REQUEST,
 PAY_ORDER_RESET,
 PAY_ORDER_SUCCESS,
 LIST_USER_ORDERS_RESET,
} from "../constants/orderconstants";

export const orderCreateReducer = (state = {}, action) => {
 switch (action.type) {
  case CREATE_ORDER_REQUEST:
   return {
    loading: true,
   };
  case CREATE_ORDER_SUCCESS:
   return {
    loading: false,
    success: true,
    order: action.payload,
   };
  case CREATE_ORDER_FAILED:
   return {
    loading: false,
    error: action.payload,
   };
  case CREATE_ORDER_RESET:
    return {};
  default:
   return state;
 }
};

export const orderDetailsReducer = (
 state = { loading: true, orderItems: [], shippingAddress: {} },
 action
) => {
 switch (action.type) {
  case DETAILS_ORDER_REQUEST:
   return {
    ...state,
    loading: true,
   };
  case DETAILS_ORDER_SUCCESS:
   return {
    loading: false,
    order: action.payload,
   };
  case DETAILS_ORDER_FAILED:
   return {
    loading: false,
    error: action.payload,
   };
  default:
   return state;
 }
};

export const orderPayReducer = (
 state = { },
 action
) => {
 switch (action.type) {
  case PAY_ORDER_REQUEST:
   return {
    loading: true,
   };
  case PAY_ORDER_SUCCESS:
   return {
    loading: false,
    success: true,
   };
  case PAY_ORDER_FAILED:
   return {
    loading: false,
    error: action.payload,
   };
   case PAY_ORDER_RESET:
     return {}
  default:
   return state;
 }
};

export const userOrderListReducer = (
 state = { orders: [] },
 action
) => {
 switch (action.type) {
  case LIST_USER_ORDERS_REQUEST:
   return {
    loading: true,
   };
  case LIST_USER_ORDERS_SUCCESS:
   return {
    loading: false,
    orders: action.payload,
   };
  case LIST_USER_ORDERS_FAILED:
   return {
    loading: false,
    error: action.payload,
   };
   case LIST_USER_ORDERS_RESET:
     return {
       orders: []
     }
  default:
   return state;
 }
};
