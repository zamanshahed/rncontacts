import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';
export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
  inputStyle: {
    paddingHorizontal: 11,
  },
  userImage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 11,
  },
  secondaryIcon: {
    marginTop: -21,
    // backgroundColor: 'white',
    borderRadius: 4,
    padding: 9,
    marginLeft: 36,
  },
  iconBorder: {
    width: 110,
    height: 110,
    borderWidth: 4,
    borderRadius: 100,
    paddingLeft: 18,
    paddingTop: 5,
    borderColor: colors.primary,
  },
});
