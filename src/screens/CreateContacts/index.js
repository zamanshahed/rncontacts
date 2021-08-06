import React, {useContext, useState} from 'react';

import {GlobalContext} from '../../context/Provider';
import CreateContactComponent from '../../components/CreateContactComponent';
import createContacts from '../../context/actions/contacts/createContacts';

const CreateContacts = () => {
  const {contactDispatch} = useContext(GlobalContext);
  const [form, setFrom] = useState({});

  const onChangeText = ({name, value}) => {
    setFrom({...form, [name]: value});
  };

  const onSubmit = () => {
    console.log('submit clicked! ', 111);
    console.log('form: ', form);
    createContacts(form)(contactDispatch);
  };

  return (
    <CreateContactComponent
      onChangeText={onChangeText}
      form={form}
      onSubmit={onSubmit}
      setFrom={setFrom}
    />
  );
};

export default CreateContacts;
