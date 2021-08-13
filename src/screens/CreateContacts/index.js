import React, {useContext, useRef, useState} from 'react';

import {GlobalContext} from '../../context/Provider';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContacts from '../../context/actions/contacts/createContacts';

import {useNavigation} from '@react-navigation/native';
import {CONTACT_LIST} from '../../constants/routeNames';

const CreateContacts = () => {
  const {
    contactDispatch,
    contactState: {
      createContacts: {loading, error, data},
    },
  } = useContext(GlobalContext);

  const sheetRef = useRef(null);

  const [form, setFrom] = useState({});

  const {navigate} = useNavigation();

  const onChangeText = ({name, value}) => {
    setFrom({...form, [name]: value});
  };

  const onSubmit = () => {
    createContacts(form)(contactDispatch)(() => {
      console.log('form: ', form);
      navigate(CONTACT_LIST, {screen: 'Contacts'});
    });
  };

  const toggleSwitchHandler = () => {
    setFrom({...form, is_favourite: !form.is_favourite});
    console.log('form.is_favourite: ', form.is_favourite);
  };

  // console.log('create contact Loading: ', loading);
  // console.log('create contact Error: ', error);

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };

  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      setFrom={setFrom}
      loading={loading}
      error={error}
      toggleSwitchHandler={toggleSwitchHandler}
      sheetRef={sheetRef}
      closeSheet={closeSheet}
      openSheet={openSheet}
    />
  );
};

export default CreateContacts;
