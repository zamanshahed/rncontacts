import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CreateContactComponent from '../../components/CreateContactComponent';

const CreateContacts = () => {
  const [form, setFrom] = useState({});

  const onChangeText = ({name, value}) => {
    setFrom({...form, [name]: value});
  };

  const onSubmit = () => {
    console.log('submit clicked! ', 111);
    console.log('form: ', form);
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
