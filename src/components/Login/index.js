import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Container from '../../components/common/Container/index';
import Input from '../../components/common/Input';
import MainButton from '../../components/common/MainButton';
import Colors from '../../assets/theme/colors';
import {REGISTER} from '../../constants/routeNames';
import MainMessage from '../common/Message';

const LoginComponent = ({error, loading, onSubmit, onChange, form}) => {
  const [passShow, setPassShow] = useState(true);
  const {navigate} = useNavigation();

  const passShowHandler = () => {
    if (passShow) {
      setPassShow(false);
    } else {
      setPassShow(true);
    }
  };
  return (
    <Container>
      <View style={styles.imageContainer}>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.imageStyle}
        />
      </View>

      <View>
        <Text style={styles.title}>Welcome To Kontaxts</Text>
        <Text style={styles.subTitle}>Please Login to continue!</Text>

        {/* error messages */}
        {error && (
          <MainMessage
            message="invalid credentials!"
            danger
            onDismiss={() => {
              // console.log('Dismiss Fn: OK', 3333);
            }}
          />
        )}

        <View>
          <Input
            label="Username"
            placeholder="Enter User name"
            value={form.userName || null}
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
            error={error?.username?.[0]}
          />

          <Input
            label="Password"
            secureTextEntry={passShow}
            placeholder="Enter Password"
            icon={
              <TouchableOpacity onPress={passShowHandler}>
                <Text>{passShow ? 'SHOW' : 'HIDE'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={error?.password?.[0]}
          />
          {/* custom button  */}
          <MainButton
            title="Login"
            disabled={loading}
            loading={loading}
            onPress={onSubmit}
          />

          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>Need an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(REGISTER);
              }}>
              <Text style={{color: Colors.primary}}>Register Now!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default LoginComponent;
