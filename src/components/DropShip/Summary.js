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
  Platform,Button,
  Alert
} from "react-native";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Container, Content, Header, Card } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
import { styles } from "../../styles/summaryStyle";
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

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "TabNavigator" })]
});
// API ------
import { url, ads } from "./../../apis/Url";
class Summary extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "done");
    this.state = {
      date:new Date(1598051730000),
      mode:'datetime',
      show:false,
      pickUpAddress: "",
      dropOffAdress: "",
      photoUri:null,
      photoName:null,
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
          <Text style={styles.text_header_style}>{this.props.lang.summary}</Text>
          
          <View style={styles._iconBack_dark}/>
          
        </Header>
        <ScrollView>
        <Content contentContainerStyle={styles.content}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          {/* ---------- */}
         
        <View style={styles.mask}>
        <Text style={styles.schedule_date}>Today</Text>
           <Text style={styles.schedule_time}>Now</Text>
           <TouchableOpacity style={styles.change_delivery_time_txt} 
                onPress={() => console.log()}>
                <Text style={styles.change_delivery_time_txt}>
                  {this.props.lang.change_delivery_time}
                  </Text>
              </TouchableOpacity>
           <Image style={styles.summary_photo} source={icons.summary_photo} />
        </View>
        
        <View style={styles.v_card_1}>
        <Card style={styles.card_3}>
          <View
            style={styles.sm_vertical_line_container}>
            <Image
              source={icons.pickUp}
              style={styles.sm_pickup_icon}
            />
            <View style={styles.sm_vertical_line}/>
            <Image
                source={icons.dropPlace}
                style={styles.sm_dropplace_icon}
              />
          </View>
          <View style={{alignItems:'center',flexDirection:'column'}}>
            <Text style={styles.pickUp_address_label}>{this.props.lang.pick_up_location}</Text>
              <Text style={styles.pickUp_address}>{this.props.lang.pick_up_location}</Text>
                <Text style={styles.pickUp_driver_note}>Note to driver</Text>
          </View>
          <View style={styles.sm_note_input_container}>
              <Image
                source={icons.note}
                style={styles.text_input_image}
              />
              <TextInput
                style={{ flex: 1 }}
                placeholder="Note to driver"
                underlineColorAndroid="transparent"
              />
          </View>
          <View style={{alignItems:'center',flexDirection:'row'}}>
            <Text style={{position: 'relative',
              left:'-84%',
              
              top:'-60%',
              fontSize:13,
              color:'#000'}}>Name <Text style={{color:'red'}}>*</Text></Text>

              
          </View>
            </Card>
        </View>
        <View style={styles.v_card_3}>
          <Card style={styles.card_2}>
          <Text style={styles.total_price_txt}>{this.props.lang.total_price}</Text>

            <View style={styles.card_3_item}>
            
            <TouchableOpacity
            style={styles.schedule_touch}
            onPress={() => this.scheduleDate()
            
            }
           >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#2695F8", "#2695F8", "#2695F8"]}
                style={styles.schedule_button}
              >
              <Text style={styles.schedule_txt}>{this.props.lang.select_payment_method}</Text>
            </LinearGradient>
            </TouchableOpacity>          

            </View>
            <Text style={styles.total_amt_txt}>455 LAK</Text>
          </Card>
        </View>
    
        


          {SimpleLoading(this.props.proccess == "loading" ? true : false)}
        </Content>
        </ScrollView>
      </Container>
    );
  }

  uploadPhoto = async()=>{
    const options = {
      title: 'Select Photo',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);
     
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response };
        console.log('Image path: ', source);
        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };
     
        this.setState({
          photoUri:response.uri,
          photoName:response.fileName,
          
        });
      }
    });
  }

  // date time picker

  scheduleDate = async()=>{
    await this.setState({show:true})
    let val = JSON.stringify(this.state.show)
    //Alert.alert('schedule btn tapped',val);
    console.log('schedule button tapped')
    {this.state.show && (
      <DateTimePicker
        testID="dateTimePicker"
        timeZoneOffsetInMinutes={0}
        value={this.state.date}
        mode={this.state.mode}
        is24Hour={true}
        display="default"
        onChange={this.onChange()}
      />
    )}
  }

  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({show:Platform.OS ==='ios',date:currentDate})
    console.log("scheduked date: ",selectedDate)
  };

  deliverNow =()=>{
    console.log('delive now button tapped')
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
export default connect(mapStateToProps, mapDispatchToProps)(Summary);
