import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Container from '../../components/common/Container';
import {CONTACT_LIST, SETTINGS} from '../../constants/routeNames';
import styles from './styles';

const SideMenu = ({navigation}) => {
  const menuItems = [
    {
      icon: <Text>-</Text>,
      name: 'Home',
      onPress: () => {
        navigation.navigate(CONTACT_LIST);
      },
    },
    {
      icon: <Text>-</Text>,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Text>-</Text>,
      name: 'Logout',
      onPress: () => {
        console.log('Log out clicked..', 5555);
        // navigation.navigate(SETTINGS);
      },
    },
    {icon: <Text>-</Text>, name: 'About'},
    {icon: <Text>-</Text>, name: 'Check for updates'},
  ];
  return (
    <DrawerContentScrollView>
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
          {menuItems.map(({name, icon, onPress}) => (
            <TouchableOpacity
              onPress={onPress}
              key={name}
              style={styles.menuContainer}>
              <View style={styles.menuItemStyle}>
                <Text style={styles.menuIconStyle}>{icon}</Text>
                <Text style={styles.menuItemNameStyle}>{name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </Container>
    </DrawerContentScrollView>
  );
};

export default SideMenu;
