import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import MainButton from '../common/MainButton';
import styles from './styles';
import Input from '../common/Input';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/theme/colors';

const CreateContactComponent = ({onChangeText, form, onSubmit, setForm}) => {
  const [currentCca2, setCurrentCca2] = useState('');
  return (
    <View
    //  style={styles.container}
    >
      <ScrollView
        style={{
          width: '100%',
        }}>
        <View style={styles.userImage}>
          <View style={styles.iconBorder}>
            <Icon size={93} name="user" color={colors.primary} />
            <MaterialIcon
              style={styles.secondaryIcon}
              color={colors.danger}
              name="camera-plus"
              size={42}
            />
          </View>
        </View>

        <View style={styles.inputStyle}>
          <Input
            label="First Name"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChangeText({name: 'first_name', value: value});
            }}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChangeText({name: 'last_name', value: value});
            }}
          />
          <Input
            icon={
              <CountryPicker
                withFilter
                withFlag
                countryCode={currentCca2}
                withCountryNameButton={true}
                withCallingCodeButton
                withEmoji
                onSelect={v => {
                  const current_cca2 = v.cca2;
                  setCurrentCca2(current_cca2);
                  const country_code = String(v.callingCode);
                  onChangeText({name: 'country_code', value: country_code});
                  console.log('country_code: ', country_code);
                  console.log('cca2: ', current_cca2);
                }}
              />
            }
            style={{paddingLeft: 15}}
            iconPosition="left"
            label="Phone Number"
            placeholder="Enter Phone Number"
            onChangeText={value => {
              onChangeText({name: 'phone_number', value: value});
            }}
          />
          <MainButton title="Submit" onPress={onSubmit} />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateContactComponent;
