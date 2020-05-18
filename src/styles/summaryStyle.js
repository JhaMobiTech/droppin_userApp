import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
import { Container } from "native-base";
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  mask:{
    width:width,
    height:150,
    backgroundColor: '#FFF1DF',
    left: '0%',
    right: '0%',
    top: '0%',
    bottom: '22.55%',
    
  },
    graphicsCard:{
        backgroundColor: '#FFF1DF',
        position: 'absolute',
        marginLeft:50,
        paddingTop:10,
        paddingLeft:10,
        
    },
    summary_photo:{
        left:'50%',
        bottom:'60%',
        position:'relative',
    },
    schedule_date:{
        left:'8%',
        top:'5%',
        color: '#4A4A4A',
        fontSize: 20,
        fontFamily: fonts.Poppins.Medium
    },
    schedule_time:{
        left:'10%',
        top:'5%',
        color: '#4A4A4A',
        fontSize: 23,
        fontFamily: fonts.Poppins.Bold
    },
    change_delivery_time_txt:{
        color: '#FE892C',
        fontSize: 25,
        fontFamily: fonts.Poppins.Regular,
        left:'4%',
        top:'3%'
    },

    sm_card_1:{
      position: 'absolute',
      left: '5.33%',
      right: '5.33%',
      top: '50.11%',
      bottom: '0%',
      backgroundColor: '#777',
      borderRadius:9,
    },
    card_3: {
      width: '100%',
      flex:1,
      justifyContent:'center',
      top:'20%',
      backgroundColor: '#fff',
      borderRadius: 8,
      position:'relative',

  },
  card_1_item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  },
  card_1: {
      width: '100%',
      height: 114,
      borderRadius: 9,
      flexDirection: 'row'
  },
  v_card_1: {
      width: '100%',
      marginTop: -40,
      paddingHorizontal: 20,
      justifyContent: 'center'
  },
  card_2_item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection:'column',
    marginLeft:10
  },
  card_2: {
      width: '100%',
      height: 114,
      borderRadius: 9,
      flexDirection:'row',
      
  },
  v_card_2: {
      width: '105%',
      paddingTop: '32%',
      paddingHorizontal: 20,
      justifyContent: 'center'
  },

  card_3_item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
    
  },
  card_3: {
      width: '100%',
      height: height-width,
      borderRadius: 9,
      flexDirection: 'row'
  },
  v_card_3: {
      width: '100%',
      marginTop: 5,
      paddingHorizontal: 20,
      justifyContent: 'center'
  },
  
  btn_3_item: {
    alignItems: 'center', 
    justifyContent: 'center'
  },
  icon_h: {
    width: 34,
    height: 31,
    marginTop: 10
  },
  icon_f: {
    width: 34,
    height: 31,
    marginTop: 10
  },
  icon_co: {
      width: 34,
      height: 31,
      marginTop: 10
  },
  icon_cam: {
    width: 34,
    height: 31,
    marginTop: 10
  },
  txt_upload_header_name:{
    color: '#777',
    fontSize: 12,
    marginTop: 0,
    marginBottom:10,
  },
  txt_name_ic: {
    color: '#4C475A',
    fontSize: 15,
    marginTop: 5,
  },
  txt_name_item_details: {
    color: '#4C475A',
    fontSize: 15,
    paddingVertical : 2,

    
  },
  txt_w: {
    color: '#4A4A4A',
    fontSize: 21,
    fontFamily: fonts.Poppins.Bold
  },



  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0
  },
  _btn_back_dARK: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },
  _iconBack_dark: {
    width: 20,
    height: 20
  },
  _iconBill_dark:{
    width:30,
    height:30,
    marginRight:10,
  },
  deliveryBoy:{
    width:100,
    height:100,
    alignSelf:"center"
  },
  _text_header: {
    fontSize: 22,
    fontFamily: fonts.Poppins.Regular
  },
  text_login_style: {
    color: "#4A4A4A",
    fontSize: 22,
    fontFamily: fonts.Poppins.Medium
  },
  text_header_style:{
    color: "#4A4A4A",
    fontSize: 22,
    fontFamily: fonts.Poppins.Medium,
    
  },
  content: {
    flex: 1,
    alignItems: "center",
    position:'relative',
  },
  text_input_container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight:10,
    paddingLeft:10,
  },

  recipient_number_input_txt:{

    flexDirection: 'row',
    paddingLeft:5,
    backgroundColor: '#fff',
    borderWidth: 1,
    marginLeft:3,
    height: 40,
    borderRadius: 5,
    top:'83%',
    left:'-385%',
    width: 130,
    color: "#000",
    borderColor: '#777',
  },
  recipient_name_input_txt:{

    flexDirection: 'row',
    paddingLeft:5,
    backgroundColor: '#fff',
    borderWidth: 1,
    height: 40,
    borderRadius: 5,
    top:'83%',
    left:'-385%',
    width: 130,
    color: "#000",
    borderColor: '#777',
  },
  recipient_name_input:{
    position: 'relative',
    left:'-303.5%',    
    top:'75%',
    fontSize:13,
    color:'#000',

  },
  recipient_number_input:{
    position: 'relative',
    left:'-278%',    
    top:'76%',
    fontSize:13,
    color:'#000'
  },
  number_input:{
    position: 'relative',
    left:'-59%',
    top:'-37%',
    fontSize:13,
    color:'#000'
  },
  name_input:{
    position: 'relative',
    left:'-84%',    
    top:'-80%',
    fontSize:13,
    color:'#000'
  },
  name_container:{
    alignItems:'center',
    flexDirection:'row',
  },
  sm_number_input_container:{
    flexDirection: 'row',
    paddingLeft:5,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    height: 40,
    borderRadius: 5,
    top:'44%',
    right:'137%',
    width: 130,
    color: "#000",
    borderColor: 'gray',
    borderWidth: 1,
  },
  sm_name_input_container:{
    flexDirection: 'row',
    paddingLeft:5,
    backgroundColor: '#fff',
    borderWidth: 0.5,
    height: 40,
    borderRadius: 5,
    top:'44%',
    right:'138%',
    width: 130,
    color: "#000",
    borderColor: 'gray',
    borderWidth: 1,
  },
  sm_note_input_container: {
    flexDirection: 'row',
    
    backgroundColor: '#fff',
    borderWidth: 0.5,
    height: 40,
    borderRadius: 5,
    top:'25%',
    left:'-19.5%',
    right:'0%',
    width: 240,
    color: "#000",
    borderColor: 'gray',
    borderWidth: 1,
  },
  text_input_note: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    height: 40,
    borderRadius: 5,
    margin: 10,
    width: 240,
    color: "#000",
    left:'-46%',
    top:'15%',
    borderColor: 'gray',
    borderWidth: 1,
  },

  text_input_image: {
    padding: 10,
    margin: 5,
    height: 20,
    width: 20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  txt_input: {
     width: 250,
    
     color: "#000",
    
     left:'-69.5%',
     top:'20%',
     height: 40,
     borderColor: 'gray',
     borderWidth: 1,
     borderRadius:5,
  },
  sm_dropplace_icon:{
    left:'5%',
    top:'6%',
    width:30,
    height:30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  sm_pickup_icon:{
    left:'5%',
    top:'5%',
    width:30,
    height:30,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
  sm_vertical_line_container:{
    alignItems:'center',
    flex:1,
    left:'7.5%',
  },
  sm_vertical_line:{
    top:'5%',
    borderStyle: 'solid',
    height:170,
    borderLeftWidth:2,
    borderColor:'#2695F8',
  },
  warning_container: {
    marginTop: 3,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row",
    width: width - 55
  },
  warning_img_container: {
    width: 18,
    height: 15,
    marginRight: 10
  },
  txt_warning: {
    color: "#FF5A5F",
    fontSize: 12
  },
  pickUp: {
    width: 25,
    height: 25,
    paddingHorizontal: 10,
    paddingVertical:10,
    
    justifyContent: "space-between",
    
  },
  dropPlace: {
    width: 25,
    height: 25,
    paddingHorizontal: 10,
    paddingVertical:10,
  },
  eye_touch: {
    width: 30,
    marginRight: 10
  },
  forget_container: {
    width: width - 50,
    marginTop: 10,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    flexDirection: "row"
  },
  forget_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 12,
    color: "#EA5843"
  },
  total_price_txt:{
    paddingTop:10,
    paddingLeft:10,
    color: "#4A4A4A",
    fontSize: 20,
    fontFamily: fonts.Poppins.Medium,
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  total_amt_txt:{
    paddingTop:10,
    paddingRight:15,
    color: "#4A4A4A",
    fontSize: 20,
    fontFamily: fonts.Poppins.Medium,
    justifyContent:'flex-start',
    alignItems:'flex-start'
  },
  schedule_button: {
    backgroundColor: "#FBAE3E",
    height: 50,
    marginLeft:30,
    width:width-80,
    justifyContent: "center",
    alignItems: "center",
    marginTop:25,
    borderRadius: 6,
  },
  schedule_txt: {
    color: "white",
    fontSize: 16
  },
  schedule_touch: {
    width: width,
    paddingTop:20,
    position:'absolute',
  },

  deliver_button: {
    backgroundColor: "#FBAE3E",
    height: 50,
    width:width-225,
    justifyContent: "center",
    alignItems: "center",
    marginTop:25,
    borderRadius: 6,
  },
  deliver_txt: {
    color: "white",
    fontSize: 16
  },
  deliver_touch: {
    width: width - 50,
    marginTop: 25,
    marginRight:0,
    paddingRight:120
    
  },

  dropOff_address_label:{
    flexDirection: 'row',    
    top:'58%',
    right:'219.5%',
    width: 130,
    color: "#777",
    fontSize:12,

  },
  dropOff_address:{
    flexDirection: 'row',    
    top:'63%',
    right:'260%',
    width: 130,
    color: "#000",
    fontSize:15,

  },
  pickUp_address_label:{
    position: 'relative',
    left:'35%',
    top:'5%',
    fontSize:12,
    color:'#777',

  },
  pickUp_address:{
    position: 'relative',
    left:'44%',
    top:'6%',
    fontSize:15,
    color:'#000',
  },
  pickUp_driver_note:{
    position: 'relative',
    left:'30%',
    top:'8%',
    fontSize:13,
    color:'#000',
  },

  recipient_note:{
    flexDirection: 'row',    
    top:'69.5%',
    right:'301%',
    width: 130,
    color: "#000",
    fontSize:15,
  },

  quick_container: {
    width: width - 65,
    alignItems: "center",
    flexDirection: "row"
  },
  seperate: {
    height: 0.5,
    backgroundColor: "#D8D8D8",
    flex: 1
  },
  quickly_txt: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: 12,
    color: "#707070",
    marginHorizontal: 5
  },
  social_btn: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#e0e0e0",
    shadowOpacity: 1,
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: 1
  },
  social_icon: {
    width: 85,
    height: 60,
    borderRadius: 10
  },
  quickly_btn: {
    width: width - 50,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  register_con: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  register_txt: {
    color: "#FE6336",
    fontSize: 16,
    marginLeft: 10
  },
  button:{
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0 
    },
    shadowRadius: 25,
  }
});
