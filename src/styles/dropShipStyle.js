import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
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
      marginTop: 15,
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
      flexDirection: 'row'
  },
  v_card_2: {
      width: '100%',
      marginTop: 15,
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
      height: 120,
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
    alignItems: "center"
  },
  text_input_container: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight:10,
    paddingLeft:10,
  },
  txt_input: {
    width: 280,
    color: "#000",
    alignSelf: "stretch",
    // marginLeft: 16,
    marginLeft:10,
    paddingTop: 14,
    paddingRight: 0,
    paddingBottom: 8,
    paddingLeft: 0,
    borderColor: "#D9D5DC",
    borderBottomWidth: 1,
    fontSize: 16,
    fontFamily: "roboto-regular",
    lineHeight: 16
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
    width:width-210,
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
    width: width - 50,
    marginTop: 25,
    paddingLeft:width-205,
    paddingHorizontal:50,
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
  }
});
