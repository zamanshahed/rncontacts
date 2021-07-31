import React, {useEffect, useState} from 'react';
import envs from '../../config/env';

import RegisterComponent from '../../components/Register/index';
import axiosInstance from '../../context/helpers/axiosInterceptor';

const Register = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  // DEV environment variable urls check up
  // const {DEV_BACKEND_URL} = envs;
  // console.log('DEV_BACKEND_URL >>> ', DEV_BACKEND_URL);
  // console.log('__DEV__: ', __DEV__);

  React.useEffect(() => {
    axiosInstance.get('/contacts').catch(err => {
      console.log('error: ', err.response);
    });
  }, []);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});

    if (value !== '') {
      if (name === 'password') {
        if (value.length < 6) {
          setErrors(prev => {
            return {...prev, [name]: 'Minimum 6 characters required!'};
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
    console.log('form: ', form);

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
  };

  return (
    <RegisterComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      errors={errors}
    />
  );
};

export default Register;
