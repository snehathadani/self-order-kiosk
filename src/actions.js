import Axios from 'axios'
import { CATEGORY_LIST_FAIL, CATEGORY_LIST_REQUEST, CATEGORY_LIST_SUCCESS, ORDER_SET_TYPE, PRODUCT_LIST_FAIL, PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS } from "./constants"

export const setOrderType = async (dispatch, orderType) => { //accepts 2 paras dispatch and value we are going to update
    return dispatch({
        type:ORDER_SET_TYPE,
        payload: orderType,
    })
}

export const listCategories = async (dispatch) => {
    dispatch({ type: CATEGORY_LIST_REQUEST });
    try {
      const { data } = await Axios.get('/api/categories');
      return dispatch({
        type: CATEGORY_LIST_SUCCESS,
        payload: data,
      });
    } catch (error) {
      return dispatch({
        type: CATEGORY_LIST_FAIL,
        payload: error.message,
      });
    }
  };
  

  export const listProducts = async(dispatch, categoryName ='')=>{
    dispatch({ type: PRODUCT_LIST_REQUEST});
    try {
      const { data } = await Axios.get(`/api/products?category=${categoryName}`);
      return dispatch({
        type: PRODUCT_LIST_SUCCESS,
        payload: data,
      });
    }catch(error){
      return dispatch({
        type: PRODUCT_LIST_FAIL,
        payload: error.message,
      })
    }
  }                                                                                                                                                                                                     