import {
  GET_CONTACTS_FAIL,
  GET_CONTACTS_LOADING,
  GET_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../helpers/axiosInstance';

export default () => dispatch => {
  dispatch({
    type: GET_CONTACTS_LOADING,
  });

  axiosInstance
    .get('/contacts/')
    .then(res => {
      //res = response from API
      // console.log('getContacts ~ res-data: >>> ', res.data);
      dispatch({
        //on success response:
        type: GET_CONTACTS_SUCCESS,
        payload: res.data,
      });
      console.log('GET_CONTACTS_SUCCESS');
    })
    .catch(err => {
      dispatch({
        type: GET_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'OH NO!! GET_CONTACTS_FAIL..'},
      });
    });
};
