import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Container from '../../components/common/Container';
import {CONTACT_LIST, SETTINGS} from '../../constants/routeNames';
import LogoutUser from '../../context/actions/auth/LogoutUser';

import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIconPro from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const SideMenu = ({navigation, authDispatch}) => {
  const userLogoutHandler = () => {
    navigation.toggleDrawer();
    Alert.alert('Logout !', 'Are you sure you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => {},
      },
      {
        text: 'Yes',
        onPress: () => {
          LogoutUser()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Icon size={21} name="contacts" />,
      name: 'All Contacts',
    },
    {
      icon: <MaterialIcons size={21} name="phone-portrait-outline" />,
      name: 'Phone Contacts',
    },
    {
      icon: <MaterialIconPro size={21} name="sim" />,
      name: 'Sim Card Contacts',
    },
    {
      icon: <MaterialIcons size={22} name="ios-list-circle-outline" />,
      name: 'Categories',
    },
    {
      icon: <Icon size={21} name="home" />,
      name: 'Home',
      onPress: () => {
        navigation.navigate(CONTACT_LIST);
      },
    },
    {
      icon: <Icon size={21} name="setting" />,
      name: 'Settings',
      onPress: () => {
        navigation.navigate(SETTINGS);
      },
    },
    {
      icon: <Icon size={21} name="logout" />,
      name: 'Logout',
      onPress: () => {
        console.log('Log out clicked..', 5555);
        userLogoutHandler();
        // navigation.navigate(SETTINGS);
      },
    },

    {
      icon: <Icon size={21} name="infocirlceo" />,
      name: 'About',
    },
    {icon: <Icon size={21} name="checkcircleo" />, name: 'Check for updates'},
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
