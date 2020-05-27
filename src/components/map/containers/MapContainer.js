import React from 'react';
import { Text, View, StyleSheet ,Button,SafeAreaView} from 'react-native';
import { connect } from "react-redux";
import MapInput from '../components/MapInput';
import MyMapView from '../components/MapView';
import { getLocation, geocodeLocationByName } from '../services/location-service';
import {
    pickupAddressAction,
    dropoffAddressAction,
    setTotalDistance,setDeliveryCost,
  } from '../../../functions/dropshipManage';
import { stat } from 'react-native-fs';

class MapContainer extends React.Component {
    state = {
        region: {}

    };

    componentDidMount() {
        this.getInitialState();
    }

    getInitialState() {
        getLocation().then(
            (data) => {
                console.log(data);
                this.setState({
                    region: {
                        latitude: data.latitude,
                        longitude: data.longitude,
                        latitudeDelta: 0.003,
                        longitudeDelta: 0.003
                    }
                });
            }
        );
    }

    getCoordsFromName(loc) {

        let dropshipObj = {
            address:loc.formatted_address,
            lat:loc.geometry.location.lat,
            lng:loc.geometry.location.lng
        }
                
        if(this.props.address_for === 'pickUp'){
            pickupAddressAction(this.props.currentDis, dropshipObj);
        }
        else{
            dropoffAddressAction(this.props.currentDis, dropshipObj);
        }

        if(this.props.dropoff_formatted_address.lat!=null && this.props.pickup_formatted_address.lat){
            console.log('lat1: '+this.props.pickup_formatted_address.lat+','+this.props.pickup_formatted_address.lng)
            this.getDistanceOneToOne(this.props.pickup_formatted_address.lat,this.props.pickup_formatted_address.lng,
                this.props.dropoff_formatted_address.lat,this.props.dropoff_formatted_address.lng)
        }


        this.setState({
            region: {
                latitude: loc.geometry.location.lat,
                longitude: loc.geometry.location.lng,
                latitudeDelta: 0.003,
                longitudeDelta: 0.003,
                formatted_address:loc.formatted_address
            }
        });

    }

    getDistanceOneToOne = async(lat1, lng1, lat2, lng2)=>
    {
      const Location1Str = lat1 + "," + lng1;
      const Location2Str = lat2 + "," + lng2;
    //   const GOOGLE_API_KEY= 'AIzaSyC3US8ADVe4nOqCoDerq9mYBZxu1p6b6X8'
      let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";
      
       let params = `origins=${Location1Str}&destinations=${Location2Str}&key=${this.props.lang.google_distance_API}`; // you need to get a key
       let finalApiURL = `${ApiURL}${encodeURI(params)}`;

       let fetchResult =  await fetch(finalApiURL); // call API
       let Result =  await fetchResult.json(); // extract json
       const deliveryDistance = (Result.rows[0].elements[0].distance.text).substr(0,Result.rows[0].elements[0].distance.text.indexOf(' '));
       const deliveryCost =8000 + deliveryDistance*2000;
       setDeliveryCost(this.props.currentDis, deliveryCost);
       setTotalDistance(this.props.currentDis, deliveryDistance);
       console.log(Result)
       console.log('total distance: ',Result.rows[0].elements[0].distance.text)
       console.log('distance: ',deliveryDistance+" price: "+deliveryCost)
      
    }

    onMapRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
            <SafeAreaView style={{flex: 1}}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <MapInput notifyChange={(loc) => this.getCoordsFromName(loc)}
                    />
                </View>

                {
                    this.state.region['latitude'] ?
                        <View style={{ flex: 1 }}>
                            <MyMapView
                                region={this.state.region}
                                onRegionChange={(reg) => this.onMapRegionChange(reg)} />
                        </View> : null}
                        
                
                {/* <Button title='Confirm'                     
                    onPress={() => goBack()} 
                /> */}
                
            </View>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        lang: state.setActiveLanguage.data,
      address_for:state.setDropShipDetails.address_for,
      pickup_formatted_address:state.setDropShipDetails.pickup_formatted_address,
      dropoff_formatted_address:state.setDropShipDetails.dropoff_formatted_address,
  
    };
  };
  const mapDispatchToProps = dispatch => {
    return {
      currentDis: dispatch
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(MapContainer);
  