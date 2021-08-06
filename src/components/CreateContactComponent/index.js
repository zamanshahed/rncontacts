import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MainButton from '../common/MainButton';
import styles from './styles';
import Input from '../common/Input';
import CountryPicker from 'react-native-country-picker-modal';

const CreateContactComponent = props => {
  return (
    <View
    //  style={styles.container}
    >
      <ScrollView
        style={{
          width: '100%',
        }}>
        <Text>Create Contacts</Text>

        <View style={styles.inputStyle}>
          <Input label="First Name" placeholder="Enter First Name" />
          <Input label="Last Name" placeholder="Enter Last Name" />
          <Input
            icon={
              <CountryPicker
                withFilter
                withFlag
                withCountryNameButton={false}
                withCallingCode={true}
                withEmoji
                onSelect={() => {}}
              />
            }
            style={{paddingLeft: 15}}
            iconPosition="left"
            label="Phone Number"
            placeholder="Enter Phone Number"
          />

          <Input label="First Name" placeholder="Enter First Name" />
          <Input label="First Name" placeholder="Enter First Name" />
          <Input label="First Name" placeholder="Enter First Name" />
          <Input label="First Name" placeholder="Enter First Name" />

          <MainButton title="Submit" />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateContactComponent;
