import axios from 'axios';
import { CART_CLEAR_ITEMS } from '../constants/cartConstants'
import {
 CREATE_ORDER_FAILED,
 CREATE_ORDER_SUCCESS,
 CREATE_ORDER_REQUEST,
 DETAILS_ORDER_REQUEST,
 DETAILS_ORDER_SUCCESS,
 DETAILS_ORDER_FAILED,
 PAY_ORDER_FAILED,
 PAY_ORDER_SUCCESS,
 PAY_ORDER_REQUEST,
 LIST_USER_ORDERS_REQUEST,
 LIST_USER_ORDERS_SUCCESS,
 LIST_USER_ORDERS_FAILED,
} from '../constants/orderconstants';

export const createOrder = (order) => async (dispatch, getState) => {
 try {
  dispatch({
   type: CREATE_ORDER_REQUEST,
  });

  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${userInfo.token}`,
   },
  };

  const { data } = await axios.post(`/api/orders`, order, config);

  dispatch({
   type: CREATE_ORDER_SUCCESS,
   payload: data,
  });

  dispatch({
   type: CART_CLEAR_ITEMS,
   payload: data,
 })
 localStorage.removeItem('cartItems');
  
 } catch (error) {
  dispatch({
   type: CREATE_ORDER_FAILED,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const getOrderDetails = (id) => async (dispatch, getState) => {
 try {
  dispatch({
   type: DETAILS_ORDER_REQUEST,
  });

  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };

  const { data } = await axios.get(`/api/orders/${id}`, config);

  dispatch({
   type: DETAILS_ORDER_SUCCESS,
   payload: data,
  });
  
 } catch (error) {
  dispatch({
   type: DETAILS_ORDER_FAILED,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
 try {
  dispatch({
   type: PAY_ORDER_REQUEST,
  });

  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
     'Content-type': 'application/json',
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };

  const { data } = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config);

  dispatch({
   type: PAY_ORDER_SUCCESS,
   payload: data,
  });
  
 } catch (error) {
  dispatch({
   type: PAY_ORDER_FAILED,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};

export const listUserOrders = () => async (
   dispatch, 
   getState
   ) => {
 try {
  dispatch({
   type: LIST_USER_ORDERS_REQUEST,
  });

  const {
   userLogin: { userInfo },
  } = getState();

  const config = {
   headers: {
    Authorization: `Bearer ${userInfo.token}`,
   },
  };

  const { data } = await axios.get(`/api/orders/myorders`, config);

  dispatch({
   type: LIST_USER_ORDERS_SUCCESS,
   payload: data,
  });
  
 } catch (error) {
  dispatch({
   type: LIST_USER_ORDERS_FAILED,
   payload:
    error.response && error.response.data.message
     ? error.response.data.message
     : error.message,
  });
 }
};
