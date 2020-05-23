/*Example to Calculate Distance Between Two Locations*/
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
} from 'react-native';

import { getDistance, getPreciseDistance } from 'geolib';

class App extends Component {
  _getDistance = () => {
    var dis = getDistance(
      { latitude: 16.8524, longitude:  74.5815 },
      { latitude: 17.0295, longitude: 74.6078 }
    );
    alert(`Distance\n${dis} Meter\nor\n${dis / 1000} KM`);
  };

  _getPreciseDistance = () => {
    var pdis = getPreciseDistance(
      { latitude: 16.8524, longitude:  74.5815 },
      { latitude: 17.0295, longitude: 74.6078 }
    );
    alert(`Precise Distance\n${pdis} Meter\nor\n${pdis / 1000} KM`);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.body}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.header}>
                Example to Calculate Distance Between Two Locations
              </Text>
              <Text style={styles.textStyle}>
                Distance between{'\n'}India(20.0504188, 64.4139099) and UK
                (51.528308, -0.3817765)
              </Text>
              <TouchableHighlight
                style={styles.buttonStyle}
                onPress={() => {
                  this._getDistance();
                }}>
                <Text>Get Distance</Text>
              </TouchableHighlight>
              <Text style={styles.textStyle}>
                Precise Distance between{'\n'}India(20.0504188, 64.4139099) and
                UK (51.528308, -0.3817765)
              </Text>
              <TouchableHighlight
                style={styles.buttonStyle}
                onPress={() => {
                  this._getPreciseDistance();
                }}>
                <Text>Get Precise Distance</Text>
              </TouchableHighlight>
            </View>
          </View>
        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  textStyle: {
    marginTop: 30,
    fontSize: 16,
    textAlign: 'center',
    color: 'black',
    paddingVertical: 20,
  },
  header: {
    fontSize: 22,
    fontWeight: '600',
    color: 'black',
    textAlign: 'center',
    paddingVertical: 20,
  },
  buttonStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#dddddd',
    margin: 10,
  },
});

export default App;