import React, {useState} from 'react';
import {Text} from 'react-native';

import Container from '../../components/common/Container/index';
import Input from '../../components/common/Input';
import MainButton from '../../components/common/MainButton';

const Login = () => {
  const [value, onChangeText] = useState('');
  return (
    <Container>
      <Input
        label="Username"
        onChangeText={onChangeText}
        placeholder="useless placeholder"
        icon={<Text>SHD</Text>}
        iconPosition="left"
        error="This field is required !"
      />

      <Input
        label="Password"
        onChangeText={onChangeText}
        placeholder="useless placeholder"
        // icon={<Text>SHD</Text>}
        iconPosition="left"
        // error="This field is required !"
      />
      {/* custom button  */}
      <MainButton title="Submit" danger loading />
      <MainButton title="Login" />
    </Container>
  );
};

export default Login;
