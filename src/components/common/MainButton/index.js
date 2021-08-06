import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../../../assets/theme/colors';
import styles from './styles';

const MainButton = ({
  title,
  disabled,
  primary,
  secondary,
  danger,
  onPress,
  loading,
}) => {
  const getBtnColor = () => {
    if (primary) {
      return Colors.primary;
    } else if (secondary) {
      return Colors.secondary;
    } else if (danger) {
      return Colors.danger;
    } else if (disabled) {
      return Colors.grey;
    } else {
      return Colors.accent;
    }
  };
  return (
    <TouchableOpacity disabled={disabled} onPress={onPress}>
      <View
        style={[
          styles.wrapper,
          {backgroundColor: getBtnColor(), borderColor: getBtnColor()},
        ]}>
        {loading && (
          <ActivityIndicator color={Colors.white} style={{paddingRight: 8}} />
        )}
        {title && (
          <Text style={styles.titleStyle}>
            {loading ? 'Please wait' : title}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;
