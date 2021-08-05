import {useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
// import Container from '../../components/common/Container/index';
import {GlobalContext} from '../../context/Provider';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import styles from '../../components/ContactComponent/styles';
import ContactComponent from '../../components/ContactComponent';
import getContacts from '../../context/actions/contacts/getContacts';
// import styles from './styles';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);

  const {
    contactDispatch,
    contactState: {
      getContacts: {data, loading, error},
    },
  } = useContext(GlobalContext);

  console.log('data: ', data);
  console.log('loading: ', loading);
  console.log('error: ', error);

  useEffect(() => {
    getContacts()(contactDispatch);
  }, []);

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
      loading={loading}
      data={data}
    />
  );
};

export default Contacts;
