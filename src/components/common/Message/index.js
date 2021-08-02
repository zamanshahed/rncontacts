import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity, View} from 'react-native';
import colors from '../../../assets/theme/colors';
import Colors from '../../../assets/theme/colors';
import styles from './styles';

const MainMessage = ({
  message,
  success,
  primary,
  danger,
  info,
  retry,
  retryFunction,
  onDismiss,
}) => {
  const getBtnColor = () => {
    if (primary) {
      return Colors.primary;
    } else if (info) {
      return Colors.secondary;
    } else if (danger) {
      return Colors.danger;
    } else if (success) {
      return Colors.success;
    } else {
      return colors.accent;
    }
  };
  return (
    <View
      style={[
        styles.wrapper,
        {
          backgroundColor: getBtnColor(),
          borderColor: getBtnColor(),
        },
        {justifyContent: retry ? 'space-evenly' : 'center'},
        {
          justifyContent:
            typeof onDismiss === 'function' ? 'space-evenly' : 'center',
        },
      ]}>
      <View>
        <Text style={styles.messageStyle}>{message}</Text>
      </View>
      <View>
        {retry && (
          <TouchableOpacity onPress={retryFunction}>
            <Text style={[styles.messageStyle, styles.secondaryBox]}>
              Retry
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View>
        <TouchableOpacity onPress={onDismiss}>
          {typeof onDismiss === 'function' && (
            <Text style={[styles.messageStyle, styles.secondaryBox]}>X</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainMessage;
