import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container/index';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from './styles';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            paddingHorizontal: 7,
            paddingVertical: 9,
            // borderWidth: 1,
            // backgroundColor: 'red',
          }}
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon size={37} color={colors.accent} name="menu" />
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            marginLeft: -51,
            fontSize: 21,
          }}>
          KONTAXTS
        </Text>
      ),
    });
  }, []);
  return (
    <Container style={{padding: 77}}>
      <Text>Signal received from Contacts !!</Text>
    </Container>
  );
};

export default Contacts;
