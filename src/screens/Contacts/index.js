import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container/index';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../../components/ContactComponent/styles';
import ContactComponent from '../../components/ContactComponent';
// import styles from './styles';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    setOptions({
      headerStyle: {
        height: 50,
      },
      headerLeft: () => (
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingLeft: 12,
            // borderWidth: 1,
            // backgroundColor: 'red',
          }}
          onPress={() => {
            toggleDrawer();
          }}>
          <Icon size={27} color={colors.accent} name="menu" />
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
    <ContactComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
    />
  );
};

export default Contacts;
