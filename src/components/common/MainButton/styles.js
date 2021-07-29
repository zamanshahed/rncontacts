import {StyleSheet} from 'react-native';
import Colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 9,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  titleStyle: {
    color: Colors.white,
    fontSize: 15,
    textTransform: 'uppercase',
  },
});
