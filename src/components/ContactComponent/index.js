import React from 'react';
import {Image, Text, View} from 'react-native';
import AppModal from '../common/AppModal';
import Container from '../common/Container';
import styles from './styles';
import MainButton from '../../components/common/MainButton';

const ContactComponent = ({modalVisible, setModalVisible}) => {
  return (
    <Container style={{alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.imageContainer}>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.imageStyle}
        />
      </View>
      <AppModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        modalTitle={'PRO KONTAXTS !'}
        modalBody={
          <>
            <View>
              <Text>These texts are useless!</Text>
            </View>
          </>
        }
        modalFooter={
          <>
            <View>
              <Text>Some useless footer!</Text>
            </View>
          </>
        }
      />
      <MainButton
        title="   modal-switch   "
        onPress={() => {
          setModalVisible(true);
        }}
      />
      <Text style={{fontSize: 24}}>Welcome HOME </Text>
    </Container>
  );
};

export default ContactComponent;
