import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
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
  _text_header: {
    fontSize: 22,
    fontFamily: fonts.Poppins.Regular
  },
  text_login_style: {
    color: "#4A4A4A",
    fontSize: 22,
    fontFamily: fonts.Poppins.Medium
  },
  content: {
    flex: 1,
    alignItems: "center"
  },
  text_input_container: {
    width: width - 50,
    borderWidth: 0.5,
    borderColor: "#CFD0D1",
    borderRadius: 6,
    height: 50,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  txt_input: {
    flex: 1,
    marginHorizontal: 15
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
  eye_icon: {
    width: 20,
    height: 11,
    paddingHorizontal: 10
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
  submit_button: {
    backgroundColor: "#FBAE3E",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginBottom: 30
  },
  submit_txt: {
    color: "white",
    fontSize: 16
  },
  submit_touch: {
    width: width - 50,
    marginTop: 25
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
