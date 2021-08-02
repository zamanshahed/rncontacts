import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';
import Container from '../../components/common/Container/index';
import Input from '../../components/common/Input';
import MainButton from '../../components/common/MainButton';
import Colors from '../../assets/theme/colors';
import {REGISTER} from '../../constants/routeNames';
import MainMessage from '../common/Message';

const LoginComponent = () => {
  const {navigate} = useNavigation();
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

        <MainMessage
          retry
          retryFunction={() => {
            console.log('Retry Function: OK', 211);
          }}
          message="this is an error message"
          success
          onDismiss={() => {
            console.log('Dismiss Fn: OK', 3333);
          }}
        />
        <MainMessage message="this is an error message" primary />
        <MainMessage message="this is an error message" info />
        <MainMessage
          onDismiss={() => {
            console.log('Dismiss Fn: OK', 3333);
          }}
          message="this is an error message"
          danger
        />
        <MainMessage message="this is an error message" />

        <View>
          <Input label="Username" placeholder="Enter User name" />

          <Input
            label="Password"
            secureTextEntry={true}
            placeholder="Enter Password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
          />
          {/* custom button  */}
          <MainButton title="Login" />
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
