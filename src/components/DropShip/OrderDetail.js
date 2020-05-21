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
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  SafeAreaView,
  Animated,
  Modal,
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
import CheckBox from '@react-native-community/checkbox'

const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "TabNavigator" })]
});
// API ------
import { url, ads } from "./../../apis/Url";
class OrderDetail extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "done");
    this.state = {
      modalVisible:false,
      animation: new Animated.Value(0),
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
    const { width, height } = Dimensions.get("screen");

    const data = this.props.navigation.getParam('summaryDetails')
    console.log('data: ',data)

    return (
      <Container>
        <Header noShadow={true} style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles._btn_back_dARK}
            onPress={() => this.props.navigation.navigate('Home')}
          >
            <Image style={{width:30,height:30}} source={icons.close} />
          </TouchableOpacity>
          <Text style={styles.text_header_style}>{this.props.lang.order_detail}</Text>
          
          <View style={styles._iconBack_dark}/>
          
        </Header>
        <ScrollView>
        <Content contentContainerStyle={styles.content}>
          <StatusBar translucent={false} backgroundColor="#fff" />

          <View style={{flex:1,marginBottom:20,paddingBottom:20,marginRight:20,paddingRight:20,marginLeft:20,paddingLeft:20}}>
                <Image source={icons.oval} style={{width:30,height:30}}/>
                <Text style={{marginLeft:55,marginTop:-25,fontWeight:'bold',fontSize:15}}>Order no:112235 </Text>
                <Text style={{marginLeft:-10,marginTop:10,fontWeight:'bold',fontSize:15}}>MotorCycle </Text>

            <View
            style={{marginLeft:-40,marginTop:10}}>
            <Image
              source={icons.pickUp}
              style={{width:30,height:30,marginLeft:30}}
            />
            <View style={{
                marginLeft:45,
                borderStyle: 'solid',
                height:170,
                borderLeftWidth:2,
                borderColor:'#2695F8'
                }}/>
            <Image
                source={icons.dropPlace}
                style={{ width:30,
                    height:30,marginLeft:30}}
              />
          </View>
          <View style={{flex:1,right:'0%'}}>
            <Text style={{marginLeft:30,marginTop:-220,color:'#777'}}>{this.props.lang.pick_up_location}</Text>
            <Text style={{marginTop:5,marginLeft:30,fontSize:15}}>{data.pickUpAddress}</Text>
            <Text style={{marginTop:5,marginLeft:30,fontSize:15,color:'#777'}}>Note to driver</Text>
            <Text style={{marginTop:5,marginLeft:30,fontSize:15}}>{data.driverNote}</Text>
            <Text style={{marginTop:5,marginLeft:30,fontSize:15,color:'#777'}}>Contact</Text>
                <Text style={{marginTop:5,marginLeft:30,fontSize:15}}>{data.driverName},{data.driverPhone}</Text>
            <Text style={{marginTop:5,marginLeft:30,fontSize:15,color:'#777'}}>Drop-off Location</Text>
                <Text style={{marginTop:5,marginLeft:30,fontSize:15}}>{data.dropOffAdress}</Text>
            <Text style={{marginTop:5,marginLeft:30,fontSize:15,color:'#777'}}>Recipient Contact</Text>
                <Text style={{marginTop:5,marginLeft:30,fontSize:15}}>{data.recipientName},{data.recipientPhone}</Text>
          </View>
          <View  style={{color:'#000',borderBottomWidth:1,margin:10}}/>
          
          <Text style={{marginLeft:30,fontSize:15,color:'#000',fontSize:18}}>Item Details</Text>
                <Text style={{marginTop:5,marginLeft:30,fontSize:15}}>{data.selected_item}</Text>
          <View  style={{color:'#000',borderBottomWidth:1,margin:10}}/>
          <View style={{flex:1,flexDirection:'row'}}>
          <Text style={{marginTop:5,marginLeft:30,fontSize:15,justifyContent:'flex-start'}}>Subtotal</Text>
          <Text style={{marginTop:5,marginLeft:100,fontSize:15,justifyContent:'flex-end'}}>555 LAK</Text>          
          </View>

          <View style={{flex:1,flexDirection:'row'}}>
          <Text style={{marginTop:5,marginLeft:30,fontSize:15,justifyContent:'flex-start',color:'#777'}}>Discount</Text>
          <Text style={{marginTop:5,marginLeft:100,fontSize:15,justifyContent:'flex-end',color:'#777'}}>---</Text>
          </View>

          <View style={{flex:1,flexDirection:'row'}}>
          <Text style={{marginTop:5,marginLeft:30,fontSize:15,justifyContent:'flex-start',color:'#000'}}>Total Price</Text>
          <Text style={{marginTop:5,marginLeft:80,fontSize:15,justifyContent:'flex-end',color:'#000'}}>555 LAK</Text>
          </View>

          <View style={{flex:1,flexDirection:'row',backgroundColor:''}}>
          <Image source={icons.cash1} style={{width:50,height:30,marginTop:15,marginLeft:30,justifyContent:'flex-start',}}/>
          <Text style={{margin:20,fontSize:18,justifyContent:'flex-end',color:'green'}}>Collect from Pick-up</Text>
          </View>


        </View>
         
          {/* ---------- */}
          {SimpleLoading(this.props.proccess == "loading" ? true : false)}
        </Content>
        </ScrollView>

      </Container>

      

      
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(OrderDetail);


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
    minHeight: 400,
  },
});