import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  PermissionsAndroid,
  Alert,
  Platform
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Container, Content, Header, Card } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "../../styles/pickLocationStyle";
import { icons } from "../../assets/icons/IconsConfig";
import { SimpleLoadingHori } from "./../loadingoverlay/AppLoading";
import { exclusiveConnectionFailed } from "./../empty_and_failed/FailedScene";
import { connect } from "react-redux";
import Geolocation from "@react-native-community/geolocation";
import { check, PERMISSIONS, RESULTS } from "react-native-permissions";
import { BackHandler, DeviceEventEmitter } from "react-native";
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
const defRegion = {
  latitude: 17.980829,
  longitude: 102.631255,
  latitudeDelta: 0.5,
  longitudeDelta: 0.5
};
const mapsOptions = ["standard", "satellite"];
class PickLocation extends Component {
  watchID = null;
  state = {
    selectedAdd: 0,
    region: defRegion,
    mylocation: null,
    layout: null,
    activeMaps: 0,
    marker_address: null
  };
  componentDidMount() {
    if (Platform.OS == "android") {
      this.requestOpenAndroidGPS();
    }
    // this.requestGPSPerrmission();
  }
  componentWillUnmount() {
    this.watchID != null && Geolocation.clearWatch(this.watchID);
  }
  render() {
    const { goBack } = this.props.navigation;
    const { layout } = this.state;
    const { latitude, longitude } = this.state.region;
    var h = layout !== null ? layout.height / 2 : 0 / 2;
    return (
      <Container>
        <Header noShadow={true} style={styles.header}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles._btn_back_dARK}
            onPress={() => goBack()}
          >
            <Image style={styles._iconBack_dark} source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles._text_header}>Add Address</Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <Content contentContainerStyle={{ flex: 1 }}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <View style={styles.search_container}>
            <Image
              style={styles.search_icon}
              source={icons.search_gray_left_outline_32}
            />
            <TextInput style={styles.search_input} placeholder={"Search"} />
          </View>
          <View style={styles.maps_container}>
            <MapView
              maxZoomLevel={18}
              minZoomLevel={0}
              mapType={mapsOptions[this.state.activeMaps]}
              showsMyLocationButton={false}
              showsUserLocation={true}
              onLayout={event =>
                this.setState({ layout: event.nativeEvent.layout })
              }
              style={styles.maps}
              region={this.state.region}
              onRegionChangeComplete={region => this.onRegionChange(region)}
            />
            <View
              style={[
                styles.marker,
                {
                  top: layout !== null ? h - 142 : 0,
                  left: layout !== null ? layout.width / 2 - 140 : 0
                }
              ]}
            >
              <Card style={styles.maerker_detail}>
                <Text style={styles.location_txt}>Location</Text>
                <Text style={styles.maerker_address}>
                  {this.state.marker_address !== null
                    ? this.state.marker_address.latitude +
                      "," +
                      this.state.marker_address.longitude
                    : "No data from marker !"}
                </Text>
              </Card>
              <Image
                style={styles.mark_icon}
                source={icons.location_pin_org_fill_43}
              />
            </View>
            <TouchableOpacity
              style={styles.gps_touch}
              onPress={() => this.goToMyLocation()}
            >
              <Image
                style={styles.gps_icon}
                source={icons.gps_gray_outline_32}
              />
            </TouchableOpacity>
            <View activeOpacity={0.8} style={styles.maps_option}>
              {this.renderMenu()}
            </View>
            <TouchableOpacity
              style={styles.save_btn}
              onPress={() =>
                this.props.navigation.navigate("NewAddress", {
                  marker_address: this.state.marker_address
                })
              }
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#FBAE3E", "#FF4033"]}
                style={styles.linearGradient}
              >
                <Text style={styles.save_btn_txt}>Next</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
  renderMenu = () => {
    return (
      <Menu>
        <MenuTrigger
          customStyles={{
            triggerTouchable: {
              underlayColor: "transparent",
              activeOpacity: 0,
              borderRadius: 25
            },
            triggerWrapper: {
              padding: 0,
              backgroundColor: "transparent",
              borderRadius: 25
            },
            TriggerTouchableComponent: TouchableOpacity
          }}
        >
          <View
            style={{
              width: 50,
              height: 50,
              borderRadius: 25,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Image
              style={styles.option_icon}
              source={icons.maps_layout_gray_fill}
            />
          </View>
        </MenuTrigger>
        <MenuOptions>
          <Text style={styles.menu_header}>Maps Options</Text>
          <View
            style={{
              width: "100%",
              backgroundColor: "#e0e0e0",
              height: 1,
              marginTop: 5,
              marginBottom: 10
            }}
          />
          <View style={styles.menu_option_container}>
            {mapsOptions.map((item, key) => {
              if (item == "standard") {
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={() => this.setState({ activeMaps: key })}
                  >
                    <Image
                      source={icons.standard_maps}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor:
                          this.state.activeMaps == key ? "pink" : "white"
                      }}
                    />
                  </TouchableOpacity>
                );
              } else {
                return (
                  <TouchableOpacity
                    key={key}
                    onPress={() => this.setState({ activeMaps: key })}
                  >
                    <Image
                      source={icons.satellite_maps}
                      style={{
                        width: 60,
                        height: 60,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor:
                          this.state.activeMaps == key ? "pink" : "white"
                      }}
                    />
                  </TouchableOpacity>
                );
              }
            })}
          </View>
        </MenuOptions>
      </Menu>
    );
  };
  async requestGPSPerrmission() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        this.getCurrentLocation();
        // alert("Granted");
      } else {
        this.props.navigation.goBack();
      }
    } catch (err) {
      console.log(err);
    }
  }
  getCurrentLocation() {
    this.watchID = Geolocation.getCurrentPosition(
      position => {
        var region = this.state.region;
        const initialPosition = JSON.stringify(position);
        const coords = position.coords;
        const curr = {
          latitude: coords.latitude,
          longitude: coords.longitude,
          latitudeDelta: 0.5,
          longitudeDelta: 0.5
        };

        this.setState({ region: curr, mylocation: curr });
        // alert(initialPosition);
      },
      error => Alert.alert("Error", JSON.stringify(error)),
      { enableHighAccuracy: false, timeout: 20000, maximumAge: 1000 }
    );
    this.watchID = Geolocation.watchPosition(position => {
      const coords = position.coords;
      const curr = {
        latitude: coords.latitude,
        longitude: coords.longitude,
        latitudeDelta: 0.5,
        longitudeDelta: 0.5
      };
      this.setState({ mylocation: curr });
    });
  }
  onRegionChange(region) {
    // console.log(JSON.stringify(region));
    if (this.state.mylocation !== null) {
      var mylocation = this.state.mylocation;
      var newDelta = {
        latitude: mylocation.latitude,
        longitude: mylocation.longitude,
        latitudeDelta: region.latitudeDelta,
        longitudeDelta: region.longitudeDelta
      };
      this.setState({
        region: region,
        mylocation: newDelta,
        marker_address: region
      });
    } else {
      this.setState({ region: region, marker_address: region });
    }
    // fetch(
    //   `https://maps.googleapis.com/maps/api/geocode/json?latlng=${region.latitude},${region.longitude}&key=AIzaSyBR7R1d4ZxRhdH-ft8MSLV9NWc0Is4BJjw`
    // )
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     this.setState({ marker_address: responseJson });
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
  }
  goToMyLocation() {
    if (this.state.mylocation !== null) {
      this.setState({ region: this.state.mylocation });
    }
  }
  requestOpenAndroidGPS() {
    LocationServicesDialogBox.checkLocationServicesIsEnabled({
      message:
        "This app wants to change your device settings:<br/><br/>Use GPS, Wi-Fi, and cell network for location",
      ok: "YES",
      cancel: "NO",
      enableHighAccuracy: true,
      showDialog: true,
      openLocationServices: true,
      preventOutSideTouch: false,
      preventBackClick: false,
      providerListener: false
    })
      .then(async success => {
        if (success == "disabled") {
          this.setState({ mylocation: null });
        } else {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              this.getCurrentLocation();
              // alert("Granted");
            } else {
              this.props.navigation.goBack();
            }
          } catch (err) {
            console.log(err);
          }
        }
      })
      .catch(error => {
        alert("Error while trying to enable GPS !");
      });
  }
}
// -------------------------------------
const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    proccess: state.setActiveProccess.proccess,
    user: state.setActiveUser.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PickLocation);
