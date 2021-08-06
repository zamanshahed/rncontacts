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
    marginTop: -25,
    // backgroundColor: 'white',
    borderRadius: 4,
    padding: 9,
    marginLeft: 46,
  },
  iconBorder: {
    width: 150,
    height: 150,
    borderWidth: 4,
    borderRadius: 100,
    paddingLeft: 18,
    paddingTop: 5,
    borderColor: colors.primary,
  },
});
