import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {LOGIN} from '../../constants/routeNames';

import Container from '../common/Container';
import Input from '../common/Input';
import MainButton from '../common/MainButton';
import styles from './styles';

const RegisterComponent = () => {
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
        <Text style={styles.title}>Kontaxts Registration !</Text>
        <Text style={styles.subTitle}>
          Please fill up the informations to continue!
        </Text>
        <View>
          <Input label="Username" placeholder="Enter User name" />

          <Input label="Email" placeholder="Enter valid email" />

          <Input label="First name" placeholder="Enter First name" />

          <Input label="Last name" placeholder="Enter Last name" />

          <Input
            label="Password"
            secureTextEntry={true}
            placeholder="Enter Password"
            icon={<Text>SHOW</Text>}
            iconPosition="right"
          />
          {/* custom button  */}
          <MainButton title="Submit" />
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text>Already have an account?</Text>
            <TouchableOpacity
              onPress={() => {
                navigate(LOGIN);
              }}>
              <Text style={{color: Colors.primary}}>Login Now!</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Container>
  );
};

export default RegisterComponent;
