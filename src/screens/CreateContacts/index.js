import React, {useContext, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {GlobalContext} from '../../context/Provider';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContacts from '../../context/actions/contacts/createContacts';
import CONTACT_LIST from '../../constants/routeNames';

const CreateContacts = () => {
  const {
    contactDispatch,
    contactState: {
      createContacts: {loading, error, data},
    },
  } = useContext(GlobalContext);

  const [form, setFrom] = useState({});

  const {navigate} = useNavigation();

  const onChangeText = ({name, value}) => {
    setFrom({...form, [name]: value});
  };

  const onSubmit = () => {
    createContacts(form)(contactDispatch)(() => {
      navigation.navigate(CONTACT_LIST);
      console.log('Called navigate(CONTACT_LIST) ! ', 111);
    });
  };

  // console.log('create contact Loading: ', loading);
  // console.log('create contact Error: ', error);

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      setFrom={setFrom}
      loading={loading}
      error={error}
    />
  );
};

export default CreateContacts;
