import axios from 'axios';
import { push } from 'react-router-redux'

const ROOT_URL = ''

export const CREATE_USER_PENDING = "CREATE_USER_PENDING"
export const CREATE_USER_SUCCESS = "CREATE_USER_SUCCESS"
export const CREATE_USER_ERROR = "CREATE_USER_ERROR"

export function userSignUp (newUser){

  return  (dispatch, getState) => {
    dispatch({
      type: CREATE_USER_PENDING
    });

    return axios({
      method: 'post',
      url: ROOT_URL,
      data: newUser,
    }).then(function(response){
      dispatch({
        type: CREATE_USER_SUCCESS,
        question: response.data,
        success: true,
        message: "Success at creating data",
        status: "Success"
      });
      dispatch(push('/dashboard'))
    }).catch(function(response){
      dispatch({
        type: CREATE_USER_ERROR,
        question: {},
        success: false,
        message: "Error: Could not create user!",
        status: "Error"
      })
    })
  }
}
