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
import Icon from 'react-native-vector-icons/AntDesign';

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
    console.log('array item: ', item);
    const {contact_picture, first_name, last_name, phone_number} = item;

    return (
      <TouchableOpacity
        //item-container
        onPress={() => {}}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingRight: 18,
          alignItems: 'center',
        }}>
        <View
          //item
          style={{
            flexDirection: 'row',
            // justifyContent: 'flex-start',
            // backgroundColor: 'rgba(0,0,0,0.08)',
            // borderRadius: 5,
            height: 50,
            marginTop: 5,
            // alignItems: 'center',
            // width: '95%',
            paddingLeft: 5,
            paddingRight: 5,
            // marginLeft: 6,
            // marginRight: 5,
          }}>
          {contact_picture ? (
            <View>
              <Image
                style={{
                  backgroundColor: colors.grey,
                  // margin: 5,
                  // padding: 4,
                  borderRadius: 95,
                  borderWidth: 1,
                  borderColor: colors.danger,
                  width: 45,
                  height: 45,
                }}
                source={{uri: contact_picture}}
              />
            </View>
          ) : (
            <View
              style={{
                backgroundColor: colors.success,
                // margin: 5,
                borderRadius: 95,
              }}></View>
          )}

          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingLeft: 9,
              }}>
              <Text style={styles.textStyle}>{first_name}</Text>
              <Text style={styles.textStyle}>{last_name}</Text>
            </View>
            <Text style={{color: colors.grey, fontSize: 15, paddingLeft: 18}}>
              {phone_number}
            </Text>
          </View>
        </View>
        <Icon style={{paddingLeft: 22}} size={17} name="rightcircleo" />
      </TouchableOpacity>
    );
  };

  return (
    <View
    // style={{alignItems: 'center', justifyContent: 'center'}}
    >
      {/* <View style={styles.imageContainer}>
        <Image
          height={70}
          width={70}
          source={require('../../assets/images/logo.png')}
          style={styles.imageStyle}
        />
      </View> */}
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
      {/* <Text style={{fontSize: 24}}>Welcome HOME </Text> */}

      {loading && (
        <View style={{paddingTop: 21}}>
          <ActivityIndicator size="large" color={colors.accent} />
        </View>
      )}
      {!loading && (
        <View>
          <FlatList
            data={data}
            ListEmptyComponent={ListEmptyComponent}
            keyExtractor={item => {
              String(item.id);
            }}
            renderItem={renderItem}
            ListFooterComponent={<View style={{height: 55}}></View>}
            ListHeaderComponent={<View style={{height: 25}}></View>}
          />
        </View>
      )}
    </View>
  );
};

export default ContactComponent;
