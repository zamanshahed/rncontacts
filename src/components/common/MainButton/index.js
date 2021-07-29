import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

const MainButton = ({title, disabled}) => {
  return (
    <TouchableOpacity>
      <View style={styles.wrapper}>
        {title && <Text style={styles.titleStyle}>{title}</Text>}
      </View>
    </TouchableOpacity>
  );
};

export default MainButton;
