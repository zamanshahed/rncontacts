import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputStyle: {
    paddingHorizontal: 11,
  },
  userImage: {
    borderRadius: 195,
    backgroundColor: colors.accent,
    height: 130,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
    paddingBottom: 9,
  },
  secondaryIcon: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageText: {
    color: colors.white,
    fontSize: 13,
    textTransform: 'uppercase',
    fontWeight: 'bold',
    paddingBottom: 5,
  },
});
