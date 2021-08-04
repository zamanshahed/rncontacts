import {StyleSheet} from 'react-native';
import colors from '../../assets/theme/colors';

export default StyleSheet.create({
  imageContainer: {
    marginTop: -18,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2,
  },
  imageStyle: {
    height: 180,
    width: 180,
  },
  menuItemStyle: {
    flexDirection: 'row',
    paddingVertical: 3,
    marginVertical: 16,
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
