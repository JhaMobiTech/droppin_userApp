import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 0
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
  empty_container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  _view_icon_cicle: {
    width: 138,
    height: 138
  },
  _text_NoAdd: {
    fontSize: 16,
    fontFamily: fonts.Poppins.Bold,
    marginTop: 36
  },
  _text_notify: {
    fontSize: 13
  },
  _btn_save_Addr: {
    width: 200,
    height: 44,
    backgroundColor: "#FE6336",
    borderRadius: 10,
    marginTop: 32,
    justifyContent: "center",
    alignItems: "center"
  },
  _text_save_Addr: {
    fontSize: 15,
    fontFamily: fonts.Poppins.Bold,
    color: "#fff"
  },
  _line: {
    width: 134,
    height: 5,
    backgroundColor: "#000",
    marginBottom: 5
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 5
  },
  shipping_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 15,
    color: "#293340",
    marginTop: 15,
    marginLeft: 20,
    marginBottom: 5
  },
  card_address: {
    width: width - 40,
    borderRadius: 5,
    height: 100,
    paddingHorizontal: 15,
    paddingVertical: 18,
    flexDirection: "row"
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
    width: 14,
    height: 14,
    backgroundColor: "#FF4033",
    borderRadius: 7
  },
  address_detail: {
    flex: 1,
    marginLeft: 10,
    marginRight: 10
  },
  detail_title: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 15,
    color: "#282C37"
  },
  detail_address: {
    fontFamily: fonts.Poppins.Regular,
    color: "#4A4A4A"
  },
  edit_btn: {
    width: 18,
    height: 18,
    padding: 10
  },
  option_btn_container: {
    justifyContent: "space-between"
  },
  add_new_card: {
    width: 60,
    height: 60,
    borderRadius: 30,
    position: "absolute",
    bottom: 30,
    right: 20
  },
  add_new_touch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  add_new_icon: {
    width: 25,
    height: 25
  },
  linearGradient: {
    flex: 1,
    borderRadius: 30
  },
  default_add_txt: {
    backgroundColor: "#FFDACE",
    paddingHorizontal: 5,
    fontSize: 10,
    paddingVertical: 3,
    borderRadius: 3,
    marginLeft: 5,
    color: "#FF6336"
  }
});
