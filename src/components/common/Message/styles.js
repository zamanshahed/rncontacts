import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
import Colors from '../../../assets/theme/colors';

export default StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 9,
    height: 40,
    alignItems: 'center',
    marginVertical: 8,
  },
  messageStyle: {
    color: Colors.white,
    fontSize: 15,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  secondaryBox: {
    borderWidth: 1,
    borderColor: colors.white,
    paddingHorizontal: 7,
    paddingVertical: 3,
    borderRadius: 8,
    textAlign: 'center',
  },
});
