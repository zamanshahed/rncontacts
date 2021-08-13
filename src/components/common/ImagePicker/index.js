import React from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import Icon from 'react-native-vector-icons/Ionicons';
import {Text, TouchableOpacity, View} from 'react-native';

const ImagePicker = React.forwardRef(({}, ref) => {
  const options = [
    {
      name: 'Take a photo',
      icon: <Icon name="camera-outline" size={16} onPress={() => {}} />,
    },
    {
      name: 'Choose from Gallery',
      icon: <Icon name="images-outline" size={16} onPress={() => {}} />,
    },
  ];
  return (
    <View>
      <RBSheet
        ref={ref}
        height={150}
        openDuration={250}
        closeOnDragDown
        // customStyles={{
        //   container: {
        //     justifyContent: 'center',
        //     alignItems: 'center',
        //   },
        // }}
      >
        {options.map(({name, icon, onPress}) => {
          return (
            <TouchableOpacity
              key={name}
              style={{
                flexDirection: 'row',
                paddingLeft: 42,
                paddingVertical: 11,
                alignItems: 'center',
              }}>
              <View style={{borderWidth: 1, padding: 5, borderRadius: 95}}>
                {icon}
              </View>
              <Text style={{paddingLeft: 11, fontSize: 16}}>{name}</Text>
            </TouchableOpacity>
          );
        })}
      </RBSheet>
    </View>
  );
});
export default ImagePicker;
