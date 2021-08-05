import {StyleSheet} from 'react-native';
import colors from '../../../assets/theme/colors';
export default StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: colors.white,
    width: 300,
    height: 360,
    borderRadius: 11,
    padding: 7,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
  },
  modalTitleText: {
    textAlign: 'center',
    fontSize: 22,
  },
  headerSec: {
    flexDirection: 'row',
    justifyContent: 'center',
    minHeight: 40,
  },
  bodySec: {
    backgroundColor: colors.grey,
    minHeight: 260,
    borderRadius: 11,
    padding: 5,
    marginTop: 9,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  footerSec: {
    padding: 5,
    backgroundColor: colors.accent,
    borderRadius: 5,
    marginTop: 7,
    minHeight: 30,

    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalSecHolder: {
    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
  },
});
