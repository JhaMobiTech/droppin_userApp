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
class Summary extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "done");
    this.state = {
      modalVisible:false,
      animation: new Animated.Value(0),
      driverNote:null,
      driverName:null,
      driverPhone:null,
      recipientName:null,
      recipientPhone:null,
    };
  }
  componentDidMount() {
    // let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    // let d = new Date(this.props.navigation.getParam('deliverDate'));
    // let dayName = days[d.getDay()];

    // let monthName = d.toLocaleString('default', { month: 'long' });
    // let customDate=dayName+' '+d.getDate() + " "+ monthName;
    // console.log("date: ",customDate);



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
    const {getParam} =  this.props.navigation
    const screenHeight = Dimensions.get("window").height;
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
        <Text style={styles.schedule_date}>{this.props.navigation.getParam('deliverDate')}</Text>
           <Text style={styles.schedule_time}>{this.props.navigation.getParam('deliverTime')}</Text>
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
              <Text style={styles.pickUp_address}>{this.props.navigation.getParam('pickUpAddress')}</Text>
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
                onChangeText={(note)=>this.setState({driverNote:note})}
              />
          </View>
          <View style={styles.name_container}>
            <Text style={styles.name_input}>Name <Text style={{color:'red'}}>*</Text></Text>
              
          </View>
          <View style={styles.name_container}>
            <Text style={styles.number_input}>Phone Number <Text style={{color:'red'}}>*</Text></Text>
          </View>

          <View style={styles.sm_name_input_container}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Name"
                underlineColorAndroid="transparent"
                onChangeText={(name)=>this.setState({driverName:name})}
              />
          </View>
          <View style={styles.sm_number_input_container}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Phone number"
                underlineColorAndroid="transparent"
                onChangeText={(phone)=>this.setState({driverPhone:phone})}
                />
          </View>
          
            <Text style={styles.dropOff_address_label}>{this.props.lang.dropPlace}</Text>
            <Text style={styles.dropOff_address}>{this.props.navigation.getParam('dropOffAdress')}</Text>
            <Text style={styles.recipient_note}>Recipient Detail</Text>


          <View style={styles.name_container}>
            <Text style={styles.recipient_name_input}>Name <Text style={{color:'red'}}>*</Text></Text>
            <Text style={styles.recipient_number_input}>Phone Number <Text style={{color:'red'}}>*</Text></Text>
          </View>
          
          <View style={styles.recipient_name_input_txt}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Name"
                underlineColorAndroid="transparent"
                onChangeText={(name)=>this.setState({recipientName :name})}
              />
          </View>
          <View style={styles.recipient_number_input_txt}>
              <TextInput
                style={{ flex: 1 }}
                placeholder="Phone number"
                underlineColorAndroid="transparent"
                onChangeText={(phone)=>this.setState({recipientPhone:phone})}
              />
          </View>

            
            </Card>
        </View>
        <View style={styles.v_card_3}>
          <Card style={styles.card_2}>
          <Text style={styles.total_price_txt}>{this.props.lang.total_price}</Text>

            <View style={styles.card_3_item}>
            
            <TouchableOpacity
            style={styles.schedule_touch}
            onPress={() => this.handleOpen()}
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

       
<Animated.View style={[StyleSheet.absoluteFill, styless.cover, backdrop]}>
  <View style={[styless.sheet]}>
    <Animated.View style={[styless.popup, slideUp]}>
      <View style={{flexDirection:'row',alignItems:'center'}}>

      <Text style={{alignItems:'center',fontSize:22,marginTop:10,marginLeft:50,justifyContent:'space-around'}}>Payment Method</Text>
      <TouchableOpacity onPress={this.handleClose} style={{marginLeft:50,marginTop:10,marginRight:-30}}>
        <Image source={icons.close} style={{width:30,height:25}}/>
      </TouchableOpacity>
      </View>
      
      <View style={{left:-120,top:20,position:'relative',alignContent:'flex-start',fontWeight:'bold'}}>
      <Text>Cash</Text>  
      </View>
      
      <View style={{flex:1,alignItems:'center',flexDirection:'row',paddingLeft:20,marginTop:30}}>
        <Image source={icons.cash1} style={{width:50,height:30}}/>
        <Text style={{paddingLeft:30,fontSize:15,marginRight:40}}>Collect from Pick-up</Text>
        <CheckBox />
      </View>

      <View style={{flex:1,alignItems:'center',flexDirection:'row',marginBottom:110,marginTop:10}}>
        <Image source={icons.cash1} style={{width:50,height:30,paddingRight:30}}/>
        <Text style={{fontSize:15,marginLeft:10}}>Collect from Drop-off</Text>
        <CheckBox />
      </View>
      <View style={{
        top:-80,
        borderStyle: 'dashed',
        marginLeft:5,
        marginRight:5,
        width:width,
        borderBottomWidth:2,
        borderColor:'#777777',}}/>
        <View style={{flexDirection:'row',paddingLeft:20,fontSize:15,marginRight:35,left:-60,top:-50,}}>
          <Text style={{color:'#777'}}>Subtotal</Text>
          <Text style={{color:'#777',right:-130}}>2222 lak</Text>
        </View>
        <View style={{flexDirection:'row',fontSize:15,justifyContent:'space-between'}}>
        <Text style={{marginLeft:20,fontSize:20,}}>Total</Text>
          <Text style={{marginLeft:20,fontSize:20,}}>2222 lak</Text>
        </View>


      <TouchableOpacity
            style={{paddingBottom:20,paddingRight:30}}
            onPress={() => this.navigateToOrderDetail()}
           >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#2695F8", "#2695F8", "#2695F8"]}
                style={styles.schedule_button}
              >
              <Text style={styles.schedule_txt}>{this.props.lang.place_order}</Text>
            </LinearGradient>
            </TouchableOpacity>          

    </Animated.View>
  </View>
</Animated.View>
      
      </Container>

      

      
    );
  }
  
  handleOpen = () => {
    console.log(
      'driverNote: '+this.state.driverNote+
      'driverName: '+this.state.driverPhone+
      'driverPhone: '+this.state.driverPhone+
      'recipientName: '+this.state.recipientName+
      'recipientPhone: '+this.state.recipientPhone)
    console.log('pickUpAddress: '+this.props.navigation.getParam('pickUpAddress'))
    console.log('dropOffAdress: '+this.props.navigation.getParam('dropOffAdress'))
    console.log('selected_item: '+this.props.navigation.getParam('selected_item'))
    console.log('imagePath: '+this.props.navigation.getParam('imagePath'))
    console.log('imagePath: '+this.props.navigation.getParam('imagePath'))
    console.log('deliverDate: '+this.props.navigation.getParam('deliverDate'))
    console.log('deliverTime: '+this.props.navigation.getParam('deliverTime'))
      
    console.log('state animation open',this.state.animation)
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };



  navigateToOrderDetail = ()=>{

    let summaryDetails ={
      driverNote:this.state.driverNote,
      driverName:this.state.driverName,
      driverPhone:this.state.driverPhone,
      recipientName:this.state.recipientName,
      recipientPhone:this.state.recipientPhone,
      pickUpAddress:this.props.navigation.getParam('pickUpAddress'),
      dropOffAdress:this.props.navigation.getParam('dropOffAdress'),
      selected_item:this.props.navigation.getParam('selected_item'),
      imagePath:this.props.navigation.getParam('imagePath'),
      deliverDate:this.props.navigation.getParam('deliverDate'),
      deliverTime:this.props.navigation.getParam('deliverTime')
        
    }
    this.props.navigation.navigate('OrderDetail', {summaryDetails});

  }

  handleClose = () => {
    console.log('state animation close',this.state.animation)
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  


  onChange = (event, selectedDate) => {
    const currentDate = selectedDate || this.state.date;
    this.setState({show:Platform.OS ==='ios',date:currentDate})
    console.log("scheduked date: ",selectedDate)
  };


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