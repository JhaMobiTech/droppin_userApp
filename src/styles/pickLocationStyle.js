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
    paddingHorizontal: 0,
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
  search_container: {
    width: width - 40,
    backgroundColor: "#EFEFEF",
    marginLeft: 20,
    borderRadius: 19,
    height: 40,
    flexDirection: "row",
    alignItems: "center"
  },
  search_icon: {
    height: 20,
    width: 20,
    marginLeft: 15,
    marginRight: 10
  },
  search_input: {
    flex: 1
  },
  maps_container: {
    flex: 1,
    marginTop: 15
  },
  maps: {
    width: "100%",
    height: "100%"
  },
  mark_icon: {
    width: 70,
    height: 80
  },
  marker: {
    position: "absolute",
    alignItems: "center"
  },
  maerker_detail: {
    width: 279,
    height: 96,
    backgroundColor: "white",
    borderRadius: 8,
    marginLeft: 0,
    marginRight: 0,
    marginTop: 0,
    marginBottom: 0,
    // justifyContent: "center",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20
  },
  location_txt: {
    fontFamily: fonts.Poppins.Bold,
    fontSize: 14,
    color: "#4A4A4A"
  },
  maerker_address: {
    fontSize: 13,
    color: "#4A4A4A"
  },
  gps_touch: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    right: 20,
    bottom: 90
  },
  gps_icon: {
    width: 21,
    height: 21
  },
  maps_option: {
    width: 50,
    height: 50,
    borderRadius: 25,
    position: "absolute",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    right: 20,
    top: 20
  },
  option_icon: {
    width: 30,
    height: 30,
    padding: 5
  },
  save_btn: {
    width: width - 40,
    height: 50,
    borderRadius: 6,
    position: "absolute",
    bottom: 20,
    marginLeft: 20
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
  menu_option_container: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  menu_header: {
    marginTop: 20,
    marginLeft: 20
  }
});
