import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  YellowBox,
  TextInput,
  ScrollView,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Dimensions,
  Animated,
  Platform,
  Alert
} from "react-native";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Container, Content, Header, Card } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
import { styles } from "../../styles/dropShipStyle";
import { icons } from "../../assets/icons/IconsConfig";
import { SimpleLoading } from "./../loadingoverlay/AppLoading";
import { StackActions, NavigationActions } from "react-navigation";
import { storeActiveUser, manualLoggin } from "./../../functions/userManage";
import {
  setActiveProccess,
  timeoutPromise,
  onReload
} from "./../../functions/connectionManage";
import {setAddressForAction,setDeliveryItem,setDeliverTime,setDeliverDate} from '../../functions/dropshipManage'

import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import dbhelper from '../../database/dbHelper'

import RNFS from 'react-native-fs'
import base64 from 'react-native-base64'
import {PROVIDER_GOOGLE} from 'react-native-maps';
import MapContainer from '../map/containers/MapContainer'
const screenHeight = Dimensions.get("window").height;

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "TabNavigator" })]
});
// API ------
import { url, ads } from "./../../apis/Url";
// import { update_pickup_formatted_address } from "../redux/actions/reduceActions";

YellowBox.ignoreWarnings([
  'VirtualizedLists should never be nested inside plain ScrollViews with the same orientation - use another VirtualizedList-backed container instead.',
  'If you are using React Native v0.60.0+ you must follow these instructions to enable currentLocation: https://git.io/Jf4AR'
])
class DropShip extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "done");
    this.state = {
      date:new Date(),
      time:'00.00.00',
      showCalendar:false,
      showClock:false,
      showIOSCalendar:false,
      imagePath:null,
      imageName:null,
      isloading: false,
      showPlacesList:null,
      pickUpAddress: "",
      pickUpLat:null,
      pickUpLng:null,
      dropOffAdress: "",
      dropOffLat:null,
      dropOffLng:null,
      selected_item:null,
      modalVisible:false,
      animation: new Animated.Value(0),
      AddressFor:null,
      totalDistance:null
    };
  }
  componentDidMount() {

    requestMultiple([PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.CAMERA]).then(
      (statuses) => {
        console.log('Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
        console.log('external storage', statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]);
      },
    );

    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
      }
      StatusBar.setBarStyle("dark-content");
    });
    dbhelper.openDB();

    // this.getDistanceAndPrice(
    //   this.props.pickup_formatted_address.lat,this.props.pickup_formatted_addresslng,
    //   this.props.dropoff_formatted_address.lat,this.props.dropoff_formatted_address.lng);
    // this.getDistanceAndPrice(this.props.pickUpLat,pickUpLng,this.props.dropOffLat,this.props.dropOffLng)
  }

  
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { goBack } = this.props.navigation;
    const { selected, makedef, onAdd } = this.state;
    const screenHeight = Dimensions.get("window").height;
    const { width, height } = Dimensions.get("screen");
    var mapStyle=[{"elementType": "geometry", "stylers": [{"color": "#242f3e"}]},{"elementType": "labels.text.fill","stylers": [{"color": "#746855"}]},{"elementType": "labels.text.stroke","stylers": [{"color": "#242f3e"}]},{"featureType": "administrative.locality","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "poi.park","elementType": "geometry","stylers": [{"color": "#263c3f"}]},{"featureType": "poi.park","elementType": "labels.text.fill","stylers": [{"color": "#6b9a76"}]},{"featureType": "road","elementType": "geometry","stylers": [{"color": "#38414e"}]},{"featureType": "road","elementType": "geometry.stroke","stylers": [{"color": "#212a37"}]},{"featureType": "road","elementType": "labels.text.fill","stylers": [{"color": "#9ca5b3"}]},{"featureType": "road.highway","elementType": "geometry","stylers": [{"color": "#746855"}]},{"featureType": "road.highway","elementType": "geometry.stroke","stylers": [{"color": "#1f2835"}]},{"featureType": "road.highway","elementType": "labels.text.fill","stylers": [{"color": "#f3d19c"}]},{"featureType": "transit","elementType": "geometry","stylers": [{"color": "#2f3948"}]},{"featureType": "transit.station","elementType": "labels.text.fill","stylers": [{"color": "#d59563"}]},{"featureType": "water","elementType": "geometry","stylers": [{"color": "#17263c"}]},{"featureType": "water","elementType": "labels.text.fill","stylers": [{"color": "#515c6d"}]},{"featureType": "water","elementType": "labels.text.stroke","stylers": [{"color": "#17263c"}]}];
    
    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: "clamp",
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    };

    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: "clamp",
          }),
        },
      ],
    };
    console.log('pickup_formatted_address')
    console.log(this.props.pickup_formatted_address.address)
    console.log(this.props.pickup_formatted_address.lat)
    console.log(this.props.pickup_formatted_address.lng)
    return (
      <Container>
        <ScrollView>
        <Header noShadow={true} style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles._btn_back_dARK}
            onPress={() => goBack()}
          >
            <Image style={styles._iconBack_dark} source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles.text_header_style}>{this.props.lang.dropship}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles._btn_back_dARK}
            onPress={() => console.log("on bill clicked")}
          >
            <Image style={styles._iconBill_dark} source={icons.bill_dark} />
          </TouchableOpacity>
        </Header>
        <Content contentContainerStyle={styles.content}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          
          {/* ---------- */}
          <Image style={styles.deliveryBoy} source={icons.deliveryBoy} />
          
          <View style={styles.text_input_container}>
            <Image source={icons.pickUp} style={styles.pickUp} />
          
             <TextInput
              value={this.props.pickup_formatted_address.address}
              style={styles.txt_input}
              underlineColorAndroid="transparent"
              placeholder={`${this.props.lang.pick_up_location}`}
              placeholderTextColor="#979899"
              autoCapitalize="none"
              onChangeText={txt => this.setState({ pickUpAddress: txt })}
             onFocus={()=>this.handleOpen('pickUp')} 
              
              
            />
            </View>
          <View style={styles.text_input_container}>
          <Image source={icons.dropPlace} style={styles.dropPlace} />
            <TextInput
              value={this.props.dropoff_formatted_address.address}
              style={styles.txt_input}
              underlineColorAndroid="transparent"
              placeholder={`${this.props.lang.dropPlace}`}
              placeholderTextColor="#979899"
              autoCapitalize="none"
              onChangeText={txt => this.setState({ dropOffAdress: txt })}
              onFocus={()=>this.handleOpen('dropOff')}
            />
           </View>

          <View style={styles.v_card_1}>
              
          <Card style={styles.card_1}>
{/*            ///// 
          <Text style={styles.txt_name_item_details}>
                  {this.props.lang.item_details}
                </Text> */}
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> this.onClickitem('documents')}>
                <Image style={styles.icon_h} source={icons.documents} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.documents}
                </Text>
               
              </TouchableOpacity>
            </View>
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> this.onClickitem('foods')}>
                <Image style={styles.icon_f} source={icons.foods} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.foods}
                </Text>
                
              </TouchableOpacity>
            </View>
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> this.onClickitem('cloths')}>
                <Image style={styles.icon_co} source={icons.cloths} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.cloths}
                </Text>
                
              </TouchableOpacity>
            </View>
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> this.onClickitem('more')}>
                <Image style={styles.icon_co} source={icons.more} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.more}
                </Text>
                
              </TouchableOpacity>
            </View>
          </Card>
        </View>



        <View style={styles.v_card_2}>
          <Card style={styles.card_2}>
            <View style={styles.card_2_item}>
              <Text style={styles.txt_upload_header_name}>
                {this.props.lang.upload_photo_header}
              </Text>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=>this.uploadPhoto()}>
                <Image style={styles.icon_cam} source={icons.upload_photo} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.upload_photo}
                  </Text>
              </TouchableOpacity>
              
            </View>
            {this.state.imagePath!==null &&(
              <View style={{}}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=>this.resetPhoto()}>
              <Image style={{width:100,height:80,marginRight:30}} source={this.state.imagePath} />              
                  {/* <Image style={styles.icon_reset} source={icons.close} /> */}
                  
                </TouchableOpacity>
                </View>
            )}
            
          </Card> 
        </View>

        <View style={styles.v_card_3}>
          <Card style={styles.card_3}>
          <Text style={styles.total_price_txt}>{this.props.lang.total_price}</Text>
            <View style={styles.card_3_item}>
            
            <TouchableOpacity
            style={styles.schedule_touch}
            onPress={() => this.scheduleTime()}
           >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#2695F8", "#2695F8", "#2695F8"]}
                style={styles.schedule_button}
              >
              <Text style={styles.schedule_txt}>{this.props.lang.schedule_button}</Text>
            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.deliver_touch}
                onPress={() =>  this.deliverNow()}
              >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#FE892C", "#FE892C", "#FE892C"]}                
                style={styles.deliver_button}
              >
              <Text style={styles.deliver_txt}>{this.props.lang.deliver_now_button}</Text>
            </LinearGradient>
            </TouchableOpacity>

            

            </View>
            <Text style={styles.total_amt_txt}>{this.props.price}LAK</Text>
          </Card>
        </View>

      {this.state.showIOSCalendar && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={this.state.date}
          mode='datetime'
          is24Hour={true}
          display="default"
          onChange={this.onChange}
        />
      )}

      {this.state.showCalendar && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={this.state.date}
          mode='date'
          is24Hour={true}
          display="default"
          onChange={this.onChange}
        />
      )}

      {this.state.showClock && (
        <DateTimePicker
          testID="dateTimePicker"
          timeZoneOffsetInMinutes={0}
          value={this.state.date}
          mode='time'
          is24Hour={true}
          display="default"
          onChange={this.onChangeTime}
        />
      )}

          {SimpleLoading(this.props.proccess == "loading" ? true : false)}
          
        </Content>
        </ScrollView>
            
              
              
      </Container>
    );
  }

  getDistanceAndPrice = async(lat1, lng1, lat2, lng2)=>
    {
      if(lat1!==null,lng1!==null,lat2!==null,lng2!==null){
        const Location1Str = lat1 + "," + lng1;
        const Location2Str = lat2 + "," + lng2;

        const GOOGLE_API_KEY= 'AIzaSyC3US8ADVe4nOqCoDerq9mYBZxu1p6b6X8'//only for distance calculation
        let ApiURL = "https://maps.googleapis.com/maps/api/distancematrix/json?";
        
        let params = `origins=${Location1Str}&destinations=${Location2Str}&key=${GOOGLE_API_KEY}`; // you need to get a key
        let finalApiURL = `${ApiURL}${encodeURI(params)}`;

        let fetchResult =  await fetch(finalApiURL); // call API
        let Result =  await fetchResult.json(); // extract json
        const km = (Result.rows[0].elements[0].distance.text).substr(0,Result.rows[0].elements[0].distance.text.indexOf(' '));
        this.setState({distance: km,price: 8000 + km*2000})
        
        // console.log(Result)
        // console.log('total distance: ',Result.rows[0].elements[0].distance.text)
        // console.log('distance: ',this.state.distance+" price: "+this.state.price)

      }      
    }
  handleOpen =(value)=>{
    setAddressForAction(this.props.currentDis,value)
    this.props.navigation.navigate('Map')
  }
  saveAddress = (details)=>{
    console.log('Address for',this.state.AddressFor)
    if(this.state.AddressFor=== 'pickUp'){
      this.setState({ pickUpAddress: details.formatted_address, 
        showPlacesList: false,
        pickUpLat:details.geometry.location.lat,
        pickUpLng:details.geometry.location.lng })
    }
    
    if(this.state.AddressFor === 'dropOff'){
      this.setState({ dropOffAdress: details.formatted_address, 
        showPlacesList: false,
        dropOffLat:details.geometry.location.lat,
        dropOffLng:details.geometry.location.lng })
    }
   

    console.log('details', this.state.pickUpAddress);
    console.log('lat', this.state.pickUpLat);
    console.log('lng', this.state.pickUpLng);
    
     
  }

  resetPhoto=()=>{
    this.setState({imageName:null,imagePath:null})
  }
  onClickitem =(item)=>{
    this.setState({selected_item:item})

    // let orderDetail = {};

    // orderDetail.customer_id=123
    // orderDetail.driver_id=253,
    // orderDetail.pick_up_loc_lat_Ing=16.8524,
    // orderDetail.drop_off_loc_lat_Ing=74.5856,
    // orderDetail.pick_up_loc='a/p sangli,near vishram chowk,416415',
    // orderDetail.drop_off_loc='a/p sangli,near puskraj chowk,416416',
    // orderDetail.item_id=12,
    // orderDetail.item_pics='/d/dds/dsd/dsd/s/png.png',
    // orderDetail.price =525,
    // orderDetail.pick_up_time='27/08/2020',
    // orderDetail.pick_up_date='05:20:10 AM',
    // orderDetail.delivery_date='27/08/2020',
    // orderDetail.delivery_time='05:20:10 AM',
    // orderDetail.driver_note='falt no 508',
    // orderDetail.sender_name='shivam',
    // orderDetail.sender_phone=986598598,
    // orderDetail.receiver_name='sham',
    // orderDetail.receiver_phone=4578457845,
    // orderDetail.cash_paymen_method="collect from -drop-off",
    // orderDetail.driver_name='kiran',
    // orderDetail.distance_travelled='20',
    // orderDetail.driver_phone=9865986589,
    // orderDetail.is_active=true,
    // orderDetail.created_date='12/02/2020',
    // orderDetail.order_date='27/08020',
    // orderDetail.driver_rating=4.5    
    

    // dbhelper.insertRowIndrop_ship_order(orderDetail);
    // dbhelper.getAllOrderDetails()
    // dbhelper.getAllPendingRecords()

  }
  uploadPhoto = ()=>{
 
    requestMultiple([PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE, PERMISSIONS.ANDROID.CAMERA]).then(
      (statuses) => {
        console.log('Camera', statuses[PERMISSIONS.ANDROID.CAMERA]);
        console.log('external storage', statuses[PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE]);
      },
    );
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
     console.log('image response: ',response)
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        // let result = base64.encode(response.data)
        const source={uri:response.uri}
        const fileName={file:response.fileName}
        // console.log('result: ',result)
        this.setState({
          imagePath: source,
          imageName:fileName,
        });
        console.log('uri and file name: ',source,fileName)
      }
    });

  }
  scheduleTime= async()=>{
    if(Platform.OS === 'ios'){
      this.setState({ showIOSCalendar:true})
    }
    if(Platform.OS === 'android'){
      this.setState({showCalendar:true})
    }
  }
  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    console.log('date format: ',currentDate.toLocaleDateString())
    console.log('time format: ',currentDate.toLocaleTimeString())
    setDeliverDate(this.props.currentDis,currentDate)
    if(Platform.OS === 'ios'){
      this.setState({date:currentDate,showIOSCalendar:false})
      this.deliverNow()
    }
    
    if(Platform.OS === 'android'){
      this.setState({date:currentDate,showCalendar:false,showClock:true})
    }
  }
  onChangeTime = (event, selectedTime) => {
    const currentTime = selectedTime || this.state.time;
    setDeliverTime(this.props.currentDis,currentTime)
    this.setState({time:currentTime,showClock:false})
    this.deliverNow()
  }

  deliverNow =()=>{

    if (this.props.pickup_formatted_address.address == "") {
      Alert.alert(
        this.props.lang.warning,
        'Pick-up address is required'
      );
    } else if (this.props.dropoff_formatted_address.address == "") {
      Alert.alert(
        this.props.lang.warning,
        'Drop-off address is required'
      );
    } else if (this.props.deliveryItem == "") {
      Alert.alert(
        this.props.lang.warning,
        'please select item'
      );
    } else if (this.state.imagePath == "") {
      Alert.alert(
        this.props.lang.warning,
        'please upload photo'
      );
    }else{
      setDeliveryItem(this.props.currentDis,this.state.selected_item)

      // setImagePath(this.props.currentDis,this.state.imagePath)
      
      let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      let d = new Date(this.state.date);
      let dayName = days[d.getDay()];

      let monthName = d.toLocaleString('default', { month: 'short' });
      let customDate=dayName+' '+d.getDate() ;
      
      let hours = d.getHours();
      let minutes = d.getMinutes();
      let ampm = hours >= 12 ? 'pm' : 'am';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0'+minutes : minutes;
      let customTime = hours + ':' + minutes + ' ' + ampm;

      console.log("date: ",customDate);
      console.log("customHours: ",customTime);
      const data={}
      data.pickUpAddress=this.state.pickUpAddress,
      data.dropOffAdress=this.state.dropOffAdress,
      data.pickUpLat=this.state.pickUpLat,
      data.pickUpLng=this.state.pickUpLng,
      data.dropOffLat=this.state.dropOffLat,
      data.dropOffLng=this.state.dropOffLng,
      data.selected_item=this.state.selected_item,
      data.imagePath= this.state.imagePath,
      data.displaydeliverDate=customDate,
      data.displaydeliverTime=customTime,
      data.deliverDate=this.state.date.toLocaleDateString(),
      data.deliverTime=customTime,

      this.props.navigation.navigate('Summary', {data});
    }
  }


 
}


const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    curentlang: state.setActiveLanguage.lang,
    proccess: state.setActiveProccess.proccess,
    
    pickup_formatted_address:state.setDropShipDetails.pickup_formatted_address,
    dropoff_formatted_address:state.setDropShipDetails.dropoff_formatted_address,
    address_for:state.setDropShipDetails.address_for,
    price:state.setDropShipDetails.price,
    distance:state.setDropShipDetails.distance,
    delivery_item:state.setDropShipDetails.delivery_item,

  };
};


const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch,

  };
};
export default connect(mapStateToProps, mapDispatchToProps)(DropShip);


const styless = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  sheet: {
    position: "absolute",
    top: Dimensions.get("window").height,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  popup: {
    backgroundColor: "#FFF",
    marginHorizontal: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: screenHeight,
  },
});