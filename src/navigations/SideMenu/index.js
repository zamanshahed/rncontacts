import React from 'react';
import {View, SafeAreaView, Image, Text, ScrollView} from 'react-native';
import Container from '../../components/common/Container';
import styles from './styles';

const SideMenu = ({navigation}) => {
  return (
    <ScrollView>
      <Container>
        <View style={styles.imageContainer}>
          <Image
            height={70}
            width={70}
            source={require('../../assets/images/logo.png')}
            style={styles.imageStyle}
          />
        </View>
      </Container>
      <Text> Image Area Above !</Text>
    </ScrollView>
  );
};

export default SideMenu;
