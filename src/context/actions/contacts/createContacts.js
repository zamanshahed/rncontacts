import {
  CREATE_CONTACTS_FAIL,
  CREATE_CONTACTS_LOADING,
  CREATE_CONTACTS_SUCCESS,
} from '../../../constants/actionTypes';
import axiosInstance from '../../helpers/axiosInstance';

export default form => dispatch => onSuccess => {
  // console.log('form.is_favourite: ', form.is_favourite);

  const requestPayload = {
    country_code: form.country_code || '',
    first_name: form.first_name || '',
    last_name: form.last_name || '',
    phone_number: form.phone_number || '',
    contact_picture: form.contact_picture || null,
    is_favorite: form.is_favorite || false,
  };
  dispatch({
    type: CREATE_CONTACTS_LOADING,
  });

  axiosInstance
    .post('/contacts/', requestPayload)
    .then(res => {
      //res = response from API
      console.log('createContacts ~ res-data: >>> ', res.data);
      dispatch({
        //on success response:
        type: CREATE_CONTACTS_SUCCESS,
        payload: res.data,
      });
      console.log('CREATE_CONTACTS_SUCCESS');
      onSuccess();
    })
    .catch(err => {
      console.log('CREATE_CONTACTS error: ', err.response);
      dispatch({
        type: CREATE_CONTACTS_FAIL,
        payload: err.response
          ? err.response.data
          : {error: 'OH NO!! CREATE_CONTACTS_FAIL..'},
      });
    });
};
