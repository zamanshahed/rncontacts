import React, {useContext, useEffect, useState} from 'react';
import envs from '../../config/env';

import RegisterComponent from '../../components/Register/index';
import axiosInstance from '../../context/helpers/axiosInterceptor';
import register, {clearAuthState} from '../../context/actions/auth/register';
import {GlobalContext} from '../../context/Provider';
import {LOGIN} from '../../constants/routeNames';
import {useFocusEffect, useNavigation} from '@react-navigation/native';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const {navigate} = useNavigation();
  const {
    authDispatch,
    authState: {error, loading, data},
  } = useContext(GlobalContext);

  React.useEffect(() => {
    axiosInstance.get('/contacts').catch(err => {
      console.log('error: ', err.response);
    });
  }, []);

  React.useEffect(() => {
    if (data) {
      navigate(LOGIN);
    }
  }, [data]);

  useFocusEffect(
    React.useCallback(() => {
      if (data || error) {
        clearAuthState()(authDispatch);
      }
    }, [data, error]),
  );

  // console.log('authState: ', authState);
  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    //console checks

    console.log('data found: ', data);
    console.log('error: ', error);

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 8) {
          setErrors(prev => {
            return {...prev, [name]: 'Minimum 8 characters required!'};
          });
        } else {
          setErrors(prev => {
            return {...prev, [name]: null};
          });
        }
      } else {
        setErrors(prev => {
          return {...prev, [name]: null};
        });
      }
    } else {
      setErrors(prev => {
        return {...prev, [name]: 'This field is required!'};
      });
    }
  };

  const onSubmit = () => {
    //validatitions
    // console.log('form: ', form);

    if (!form.userName) {
      setErrors(prev => {
        return {...prev, userName: 'Username is required'};
      });
    }

    if (!form.firstName) {
      setErrors(prev => {
        return {...prev, firstName: 'First Name is required'};
      });
    }

    if (!form.lastName) {
      setErrors(prev => {
        return {...prev, lastName: 'Last Name is required'};
      });
    }

    if (!form.email) {
      setErrors(prev => {
        return {...prev, email: 'Email is required'};
      });
    }

    if (!form.password) {
      setErrors(prev => {
        return {...prev, password: 'Password is required'};
      });
    }

    if (
      Object.values(form).length === 5 &&
      Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(errors).every(item => !item)
    ) {
      console.log('1111: OK', 1111);
      register(form)(authDispatch);
    }
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
      error={error}
      loading={loading}
    />
  );
};

export default Register;
