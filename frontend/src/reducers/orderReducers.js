import {
 CREATE_ORDER_FAILED,
 CREATE_ORDER_REQUEST,
 CREATE_ORDER_SUCCESS,
} from '../constants/orderconstants';

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
  default:
   return state;
 }
};
