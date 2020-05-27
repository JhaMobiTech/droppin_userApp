/*Example to Calculate Distance Between Two Locations*/
import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Alert,
  Modal,
} from 'react-native';

import { getDistance, getPreciseDistance } from 'geolib';
import ActionSheet from 'react-native-actionsheet'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      modalVisible:false,
      price:'',
      distance:''
    }
  }
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

  getDistanceOneToOne = async(lat1, lng1, lat2, lng2)=>
    {
      const Location1Str = lat1 + "," + lng1;
      const Location2Str = lat2 + "," + lng2;
      const GOOGLE_API_KEY= 'AIzaSyC3US8ADVe4nOqCoDerq9mYBZxu1p6b6X8'
      let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";
      
       let params = `origins=${Location1Str}&destinations=${Location2Str}&key=${GOOGLE_API_KEY}`; // you need to get a key
       let finalApiURL = `${ApiURL}${encodeURI(params)}`;

       let fetchResult =  await fetch(finalApiURL); // call API
       let Result =  await fetchResult.json(); // extract json
       const km = (Result.rows[0].elements[0].distance.text).substr(0,Result.rows[0].elements[0].distance.text.indexOf(' '));

        this.setState({
          distance: km,
          price: 8000 + km*2000,
        })
       
       console.log(Result)
       console.log('total distance: ',Result.rows[0].elements[0].distance.text)
       console.log('distance: ',this.state.distance+" price: "+this.state.price)
      
    }
    showActionSheet = () => {
      this.ActionSheet.show()
    }
  render() {
    return (

            
      //   <View>
      //   <Text onPress={this.showActionSheet}>Open ActionSheet</Text>
      //   <ActionSheet
      //     ref={o => this.ActionSheet = o}
      //     title={`<b>Which one do you like ?</b>`}
      //     options={['Apple', 'Banana', 'cancel']}
      //     cancelButtonIndex={2}
      //     destructiveButtonIndex={1}
      //     onPress={(index) => {
      //       Alert.alert('index: ',index)
      //      }}
      //   />
      // </View>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1 }}>
          <View style={styles.body}>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <Text style={styles.header}>
                distance: {this.state.distance}
              </Text>
              
              <Text style={styles.header}>
                   price : {this.state.price}
              </Text>
              {/* <Text style={styles.textStyle}>
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
*/}

              <TouchableHighlight
                style={styles.buttonStyle}
                onPress={() => {
                  this.getDistanceOneToOne(16.8524,74.5815,17.0295,74.6078);
                }}>
                <Text>Calculate Distance using API key</Text>
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