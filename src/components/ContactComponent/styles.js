import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  imageContainer: {
    // marginTop: -8,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
  },
  imageStyle: {
    height: 160,
    width: 160,
  },
  menuItemStyle: {
    flexDirection: 'row',
    paddingVertical: 3,
    marginVertical: 9,
    // borderWidth: 1,
    borderRadius: 8,
    // borderColor: colors.accent,
    minWidth: '80%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    // backgroundColor: colors.grey,
  },
  menuIconStyle: {
    paddingHorizontal: 9,
    paddingLeft: 5,
    color: colors.primary,
    fontSize: 18,
  },
  menuItemNameStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.primary,
    fontSize: 18,
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
