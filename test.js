import React, {useState} from 'react';
import {View, Button, Platform} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Image } from 'react-native'

import ImagePicker from 'react-native-image-picker';
const App = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [avatarSource, setAvatarSource] = useState('');
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = currentMode => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const uploadPhoto = ()=>{
   // More info on all the options is below in the API Reference... just some common use cases shown here
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    
    /**
     * The first arg is the options object for customization (it can also be null or omitted for default options),
     * The second arg is the callback which sends object: response (more info in the API Reference)
     */
    // ImagePicker.showImagePicker(options, (response) => {
    //   console.log('Response = ', response);
    
    //   if (response.didCancel) {
    //     console.log('User cancelled image picker');
    //   } else if (response.error) {
    //     console.log('ImagePicker Error: ', response.error);
    //   } else if (response.customButton) {
    //     console.log('User tapped custom button: ', response.customButton);
    //   } else {
    //     const source = { uri: response.uri };
    //     setAvatarSource(source);
    //     // You can also display the image using data:
    //     // const source = { uri: 'data:image/jpeg;base64,' + response.data };
    
    //   }
    // });
  }
  return (
    <View>
      <View style={{flex:1,alignItems:'center',padding:20}}>
        <Button onPress={showDatepicker} title="Show date picker!" />
      </View>
      <View style={{flex:1,alignItems:'center',padding:20}}>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      <View style={{flex:1,alignItems:'center',padding:20}}>
        <Button onPress={uploadPhoto} title="upload photo" />
      </View>
      
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}

    <Image source={avatarSource} style={{width:50,height:50}} />
      
    </View>
  );
};

export default App;