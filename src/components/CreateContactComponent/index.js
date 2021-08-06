import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import MainButton from '../common/MainButton';
import styles from './styles';
import Input from '../common/Input';
import CountryPicker from 'react-native-country-picker-modal';
import Icon from 'react-native-vector-icons/AntDesign';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/theme/colors';

const CreateContactComponent = props => {
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
          <MainButton title="Submit" />
        </View>
      </ScrollView>
    </View>
  );
};

export default CreateContactComponent;
