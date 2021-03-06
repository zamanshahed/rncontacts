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
import {useNavigation} from '@react-navigation/native';
import {CREATE_CONTACT} from '../../constants/routeNames';

const ContactComponent = ({modalVisible, setModalVisible, data, loading}) => {
  const {navigate} = useNavigation();

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
    // console.log('array item: ', item);
    const {contact_picture, first_name, last_name, phone_number, country_code} =
      item;

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
                  borderColor: colors.success,
                  width: 45,
                  height: 45,
                }}
                source={{uri: contact_picture}}
              />
            </View>
          ) : (
            <View
              style={{
                backgroundColor: colors.grey,
                borderRadius: 95,
                borderColor: colors.accent,
                borderWidth: 1,
                height: 45,
                width: 45,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                color: colors.white,
              }}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  fontWeight: '700',
                  fontSize: 18,
                  color: colors.white,
                }}>
                {first_name[0]}
              </Text>
              <Text
                style={{
                  color: colors.white,
                  textTransform: 'uppercase',
                  fontWeight: 'bold',
                  fontSize: 18,
                }}>
                {last_name[0]}
              </Text>
            </View>
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
            <Text
              style={{
                opacity: 0.5,
                color: 'black',
                fontSize: 15,
                paddingLeft: 18,
              }}>
              (+{country_code})-{phone_number}
            </Text>
          </View>
        </View>
        <Icon style={{opacity: 0.4}} size={19} name="rightcircleo" />
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View>
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

        {loading ? (
          <View style={{paddingTop: 21}}>
            <ActivityIndicator size="large" color={colors.accent} />
          </View>
        ) : (
          <View>
            <FlatList
              data={data}
              ListEmptyComponent={ListEmptyComponent}
              key={data.id}
              renderItem={renderItem}
              ListFooterComponent={<View style={{height: 55}}></View>}
              ListHeaderComponent={<View style={{height: 25}}></View>}
              ItemSeparatorComponent={() => (
                <View style={{height: 1, backgroundColor: colors.grey}}></View>
              )}
            />
          </View>
        )}
      </View>
      <TouchableOpacity
        style={styles.floatingActionBtn}
        onPress={() => {
          navigate(CREATE_CONTACT);
        }}>
        <Icon name="pluscircleo" color={colors.white} size={42} />
      </TouchableOpacity>
    </>
  );
};

export default ContactComponent;
