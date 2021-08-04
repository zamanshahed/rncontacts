import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../assets/theme/colors';
import {LOGIN} from '../../constants/routeNames';

import Container from '../common/Container';
import Input from '../common/Input';
import MainButton from '../common/MainButton';
import styles from './styles';

const RegisterComponent = ({
  onSubmit,
  onChange,
  form,
  error,
  loading,
  errors,
}) => {
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
        <Text style={styles.title}>Kontaxts Registration !</Text>
        <Text style={styles.subTitle}>
          Please fill up the informations to continue!
        </Text>

        {/* {errors.error && <MainMessage message={errors.error} />} */}

        <View>
          <Input
            label="Username"
            error={errors.userName || error?.username?.[0]}
            placeholder="Enter User name"
            onChangeText={value => {
              onChange({name: 'userName', value});
            }}
          />

          <Input
            label="First name"
            onChangeText={value => {
              onChange({name: 'firstName', value});
            }}
            error={errors.firstName || error?.first_name?.[0]}
            placeholder="Enter First name"
          />

          {/* errors={errors.firstName} A SILLY BUG SPOTTED: (-_-) */}

          <Input
            label="Last name"
            onChangeText={value => {
              onChange({name: 'lastName', value});
            }}
            error={errors.lastName || error?.last_name?.[0]}
            placeholder="Enter Last name"
          />

          <Input
            label="Email"
            onChangeText={value => {
              onChange({name: 'email', value});
            }}
            error={errors.email || error?.email?.[0]}
            placeholder="Enter valid email"
          />

          <Input
            label="Password"
            secureTextEntry={passShow}
            onChangeText={value => {
              onChange({name: 'password', value});
            }}
            error={errors.password || error?.password?.[0]}
            placeholder="Enter Password (min: 8 char..)"
            icon={
              <TouchableOpacity onPress={passShowHandler}>
                <Text>{passShow ? 'SHOW' : 'HIDE'}</Text>
              </TouchableOpacity>
            }
            iconPosition="right"
          />

          {/* custom button  */}
          <MainButton
            loading={loading}
            onPress={onSubmit}
            disabled={loading}
            title="Submit"
          />

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
