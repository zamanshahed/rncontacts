import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  textStyle: {
    fontSize: 17,
    paddingLeft: 9,
    fontWeight: '500',
  },
  floatingActionBtn: {
    width: 50,
    height: 50,
    backgroundColor: colors.accent,
    position: 'absolute',
    bottom: '5%',
    right: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 90,
  },
});
