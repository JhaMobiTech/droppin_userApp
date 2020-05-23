import React from 'react';
import { Text, View, StyleSheet ,Button} from 'react-native';
import MapInput from '../components/MapInput';
import MyMapView from '../components/MapView';
import { getLocation, geocodeLocationByName } from '../services/location-service';

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
        console.log('location: ',loc.formatted_address)
        console.log('location: ',loc.geometry.location.lat)
        console.log('location: ',loc.geometry.location.lng)
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

    onMapRegionChange(region) {
        this.setState({ region });
    }

    render() {
        return (
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
                        
                <Button title='Confirm'                     
                    onPress={() => this.props.navigation.navigate('DropShip', {data:this.state.region})} 
                    />
                {/* <Button title='Confirm'                     
                    onPress={() => goBack()} 
                /> */}
                
            </View>
        );
    }
}

export default MapContainer;