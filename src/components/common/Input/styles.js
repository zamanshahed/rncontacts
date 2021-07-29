import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default StyleSheet.create({
  inputContainer: {
    paddingVertical: 15,
  },
  wrapper: {
    paddingHorizontal: 7,
    borderRadius: 8,
    borderWidth: 1,
  },
  textInput: {
    height: 40,
    flex: 1,
    // backgroundColor: Colors.primary,
  },
  labelStyle: {
    color: 'black',
    paddingBottom: 8,
    paddingLeft: 3,
  },
});
