import {StyleSheet} from 'react-native';
import Colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    backgroundColor: Colors.accent,
    borderWidth: 1,
    borderColor: Colors.accent,
    borderRadius: 9,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleStyle: {
    color: Colors.white,
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
