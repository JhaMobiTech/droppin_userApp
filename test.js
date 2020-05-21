import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {PROVIDER_GOOGLE} from 'react-native-maps';

/*This is an Example of React Native Map*/
import MapView, {Marker} from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
 
export default class App extends React.Component {
  onRegionChange(region) {
    this.setState({ region });
  }
  render() {
    var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
    return (
      <View style={styles.container}>
        <MapView
        provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 20.5937,
            longitude: 78.9629,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}
          showsUserLocation = {true}
        >
          <Marker
            draggable
            coordinate={{
              latitude: 20.5937,
              longitude: 78.9629,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  map: {
    position:'absolute',
    top:0,
    left:0,
    right:0,
    bottom:0,
  },
});

// const GooglePlacesInput = () => {
//   return (
//     <GooglePlacesAutocomplete
//       placeholder='Search'
//       fetchDetails = {true}
//       onPress={(data, details = null) => {
//         // 'details' is provided when fetchDetails = true
//         // console.log('data', data);
//         console.log('details', details.formatted_address);
//         console.log('lat', details.geometry.location.lat);
//         console.log('lng', details.geometry.location.lng);
//       }}
//       query={{
//         key: 'AIzaSyDIZ6k-UKsT6ALVRUlIp21YdSTQL4Y7HH8',
//         language: 'en',
//       }}
//       currentLocation={true}
//       currentLocationLabel='Current location'
//     />
//   );
// };

// export default GooglePlacesInput;