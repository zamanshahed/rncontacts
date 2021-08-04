import {useNavigation, useRoute} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import LoginComponent from '../../components/Login';
import LoginUser from '../../context/actions/auth/LoginUser';
import {GlobalContext} from '../../context/Provider';

const Login = () => {
  const [form, setForm] = useState({});
  const {params} = useRoute();

  useEffect(() => {
    if (params?.data) {
      console.log('params: ', params);
      setForm({...form, userName: params.data.username});
    }
  }, [params]);

  const {
    authDispatch,
    authState: {error, loading},
  } = useContext(GlobalContext);

  const onChange = ({name, value}) => {
    setForm({...form, [name]: value});
  };

  const onSubmit = () => {
    if (form.userName && form.password) {
      console.log('Form data submitting...', 1122);
      LoginUser(form)(authDispatch);
    }
  };

  return (
    <LoginComponent
      onSubmit={onSubmit}
      onChange={onChange}
      form={form}
      error={error}
      loading={loading}
    />
  );
};

export default Login;
