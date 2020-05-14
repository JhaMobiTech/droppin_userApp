import React, { Component } from "react";
import {
  LoginManager,
  AccessToken,
  LoginButton,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  SafeAreaView,
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

import DateTimePicker from '@react-native-community/datetimepicker';
import ImagePicker from 'react-native-image-picker';
import {requestMultiple, PERMISSIONS} from 'react-native-permissions';
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "TabNavigator" })]
});
// API ------
import { url, ads } from "./../../apis/Url";
class Login extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "done");
    this.state = {
      date:new Date(1598051730000),
      time:'00.00.00',
      showCalendar:false,
      showClock:false,
      showIOSCalendar:false,
      imagePath:null,
      imageName:null,
      isloading: false,
      pickUpAddress: "",
      dropOffAdress: ""
    };
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
      }
      StatusBar.setBarStyle("dark-content");
    });
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { goBack } = this.props.navigation;
    const { selected, makedef, onAdd } = this.state;
    return (
      <Container>
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
              value={this.state.username}
              style={styles.txt_input}
              underlineColorAndroid="transparent"
              placeholder={`${this.props.lang.pick_up_location}`}
              placeholderTextColor="#979899"
              autoCapitalize="none"
              onChangeText={txt => this.setState({ pickUpAddress: txt })}
            />
          </View>
          <View style={styles.text_input_container}>
          <Image source={icons.dropPlace} style={styles.dropPlace} />
            <TextInput
              value={this.state.password}
              style={styles.txt_input}
              underlineColorAndroid="transparent"
              placeholder={`${this.props.lang.dropPlace}`}
              placeholderTextColor="#979899"
              autoCapitalize="none"
              onChangeText={txt => this.setState({ dropOffAdress: txt })}
            />
          </View>

          <View style={styles.v_card_1}>
              
          <Card style={styles.card_1}>
{/*            ///// 
          <Text style={styles.txt_name_item_details}>
                  {this.props.lang.item_details}
                </Text> */}
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> console.log("on document clicked")}>
                <Image style={styles.icon_h} source={icons.documents} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.documents}
                </Text>
               
              </TouchableOpacity>
            </View>
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> console.log("on food clicked")}>
                <Image style={styles.icon_f} source={icons.foods} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.foods}
                </Text>
                
              </TouchableOpacity>
            </View>
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> console.log("on cloths clicked")}>
                <Image style={styles.icon_co} source={icons.cloths} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.cloths}
                </Text>
                
              </TouchableOpacity>
            </View>
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> console.log("on more clicked")}>
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
            <Text style={styles.total_amt_txt}>455 LAK</Text>
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
      </Container>
    );
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
     
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        this.setState({
          imagePath: response.uri,
          imageName:response.fileName,
        });
        console.log('uri and file name: ',response.uri,response.fileName)
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
    this.setState({time:currentTime,showClock:false})
    this.deliverNow()
  }

  deliverNow =()=>{
    this.props.navigation.navigate('Summary')
  }


 
}
const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    curentlang: state.setActiveLanguage.lang,
    proccess: state.setActiveProccess.proccess
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
