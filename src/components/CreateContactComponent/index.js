import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import MainButton from '../common/MainButton';
import styles from './styles';
import Input from '../common/Input';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/theme/colors';

const CreateContactComponent = ({
  onChangeText,
  form,
  onSubmit,
  setForm,
  loading,
  error,
}) => {
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
          <Icon size={63} name="user" color={colors.primary} />
          <MaterialIcon
            style={styles.secondaryIcon}
            color={colors.danger}
            name="camera-plus"
            size={29}
          />
        </View>

        <View style={styles.inputStyle}>
          <Input
            label="First Name"
            placeholder="Enter First Name"
            onChangeText={value => {
              onChangeText({name: 'first_name', value: value});
            }}
            error={error?.first_name?.[0]}
          />
          <Input
            label="Last Name"
            placeholder="Enter Last Name"
            onChangeText={value => {
              onChangeText({name: 'last_name', value: value});
            }}
            error={error?.last_name?.[0]}
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
            error={error?.phone_number?.[0]}
          />
          <MainButton
            loading={loading}
            disabled={loading}
            title="Submit"
            onPress={onSubmit}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateContactComponent;
