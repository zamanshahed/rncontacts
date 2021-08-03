import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import colors from '../../assets/theme/colors';
import Container from '../../components/common/Container/index';

const Contacts = () => {
  const {setOptions, toggleDrawer} = useNavigation();
  useEffect(() => {
    setOptions({
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => {
            toggleDrawer();
          }}>
          <View
            style={{
              paddingLeft: 7,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Text
              style={{
                textAlign: 'center',
                borderRadius: 3,
                borderWidth: 1,
                borderColor: colors.accent,
                padding: 3,
                color: colors.accent,
              }}>
              Drawer
            </Text>
          </View>
        </TouchableOpacity>
      ),
      headerTitle: () => (
        <Text
          style={{
            textAlign: 'center',
            justifyContent: 'center',
            marginLeft: -51,
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
