import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
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
  shipping_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 14,
    color: "#293340"
  },
  add_new_btn: {
    width: 23,
    height: 23,
    borderRadius: 11
  },
  add_new_icon: {
    width: 23,
    height: 23
  },
  label_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width - 40,
    marginLeft: 20,
    marginTop: 20
  },
  address_box: {
    width: 144,
    height: 60,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#D8D8D8",
    marginRight: 20
  },
  touch_box: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  box_icon: {
    height: 18,
    width: 18,
    marginBottom: 3
  },
  box_title: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: 15,
    color: "#A2A2A2"
  },
  list_box: {
    marginLeft: 20,
    marginTop: 10
    // backgroundColor: "red"
  },
  form: {
    width: width - 40,
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 20
  },
  form_header: {
    color: "#727C8E",
    fontSize: 12
  },
  text_input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#D8D8D8",
    paddingVertical: 3,
    borderRadius: 5,
    height: 45,
    marginTop: 5,
    paddingHorizontal: 10
  },
  address_box_detail: {
    width: width - 40,
    marginLeft: 20,
    borderWidth: 1,
    borderColor: "#D0D0D0",
    borderRadius: 8,
    height: 164,
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  address_txt: {
    fontFamily: fonts.Poppins.Bold,
    fontSize: 16,
    color: "#282C37"
  },
  address_header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10
  },
  radio_container: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF4033",
    justifyContent: "center",
    alignItems: "center"
  },
  radio_dot: {
    width: 13,
    height: 13,
    backgroundColor: "#FF4033",
    borderRadius: 6
  },
  makedef_con: {
    width: width - 40,
    marginLeft: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  save_btn: {
    width: width - 40,
    height: 50,
    borderRadius: 6,
    marginLeft: 20,
    marginTop: 30,
    marginBottom: 20
  },
  linearGradient: {
    flex: 1,
    borderRadius: 6,

    justifyContent: "center",
    alignItems: "center"
  },
  save_btn_txt: {
    fontFamily: fonts.Poppins.Bold,
    fontSize: 18,
    color: "#fff"
  },
  modal: {
    alignItems: "center"
  },
  modal_content: {
    backgroundColor: "white",
    width: 300,
    borderRadius: 10,
    // justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingVertical: 30
  },
  add_label: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 20,
    marginBottom: 20
  },
  add_new_address: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#979797",
    borderRadius: 5,
    paddingHorizontal: 20,
    marginBottom: 30
  },
  done: {
    width: "100%",
    marginHorizontal: 10,
    backgroundColor: "#FE6336",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    paddingVertical: 10
  },
  done_txt: {
    fontFamily: fonts.Poppins.Bold,
    color: "#fff"
  },
  exit: { position: "absolute", top: 10, right: 10 }
});
