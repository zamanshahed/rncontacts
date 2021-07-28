import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import styles from '../Input/styles';

const Input = ({
  onChangeText,
  style,
  value,
  label,
  placeholder,
  icon,
  iconPosition,
  error,
}) => {
  const [focused, setFocused] = useState(false);

  const getFlexDirection = () => {
    if (iconPosition === 'left') {
      return 'row';
    } else if (iconPosition === 'right') {
      return 'row-reverse';
    }
  };

  const getBorderColor = () => {
    if (focused) {
      return colors.primary;
    }

    if (error) {
      return colors.danger;
    } else {
      return colors.grey;
    }
  };

  return (
    <View style={styles.inputContainer}>
      {label && <Text style={styles.labelStyle}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {flexDirection: getFlexDirection(), borderColor: getBorderColor()},
        ]}>
        <View>{icon && icon}</View>
        <TextInput
          style={[style, styles.textInput]}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
        />
      </View>
      {error && (
        <Text style={{color: colors.danger, paddingTop: 5}}>{error}</Text>
      )}
    </View>
  );
};

export default Input;
