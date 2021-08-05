import React from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import AppModal from '../common/AppModal';
import Container from '../common/Container';
import styles from './styles';
import MainButton from '../../components/common/MainButton';
import colors from '../../assets/theme/colors';

const ContactComponent = ({modalVisible, setModalVisible, data, loading}) => {
  const ListEmptyComponent = () => {
    return (
      <View style={{padding: 11}}>
        <Text style={{color: colors.grey, fontSize: 26}}>
          No contcts in your list !
        </Text>
      </View>
    );
  };

  const renderItem = ({item}) => {
    console.log('render item: ', item);
    return (
      <TouchableOpacity>
        <Text>Contact One</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{alignItems: 'center', justifyContent: 'center'}}>
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
      {/* <MainButton
        title="   modal-switch   "
        onPress={() => {
          setModalVisible(true);
        }}
      /> */}
      <Text style={{fontSize: 24}}>Welcome HOME </Text>

      {loading && (
        <View style={{paddingTop: 21}}>
          <ActivityIndicator size="large" color={colors.accent} />
        </View>
      )}
      {!loading && (
        <FlatList
          data={data}
          ListEmptyComponent={ListEmptyComponent}
          keyExtractor={item => {
            String(item.id);
          }}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default ContactComponent;
