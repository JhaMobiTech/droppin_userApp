import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    height: 45
  },
  _txt_header: {
    fontSize: 18,
    fontFamily: fonts.Poppins.Regular,
    color: "#282C37"
  },
  _content: {
    flex: 1,
    backgroundColor: "#F7F7F8",
    paddingHorizontal: 10
  },
  v_2_btn: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    backgroundColor: "#F7F7F8",
    paddingVertical: 10
  },
  txt_now: {
    fontSize: 14,
    //color: '#fff',
    fontFamily: fonts.Avenir.Medium
  },
  btn_2_reason: {
    //backgroundColor: '#ff6d00',
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 3,
    marginRight: 20
  },
  _view_item: {
    width: width - 24,
    height: width,
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    marginTop: 16,
    flexDirection: "column",
    paddingHorizontal: 10,
    paddingBottom: 10
  },
  _view_pic: {
    flex: 1,
    borderRadius: 5
  },
  _pic_big: {
    width: "100%",
    height: "100%",
    borderRadius: 5
  },
  _pic_: {
    width: 40,
    height: 40,
    borderRadius: 20
  },
  _view_logo: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20
  },
  _btn_follow: {
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    // backgroundColor: "#757575",
    // borderWidth: 1,
    // borderColor: "#FE4C24",
    paddingHorizontal: 6,
    paddingTop: 3
  },
  _txt_follow: {
    color: "#fff",
    fontSize: 12,
    fontFamily: fonts.Poppins.Regular
  },
  _item_header: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
    // backgroundColor: "red"
  },
  _txt_item: {
    flex: 1,
    flexDirection: "column"
  },
  _txt_name_icon: {
    flex: 2,
    flexDirection: "column",
    paddingLeft: 15
  },
  _v_txt: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  _v_txt_2: {
    flex: 1.5,
    flexDirection: "row",
    alignItems: "flex-start"
  },
  _txt_name_: {
    color: "#1C1C1C",
    fontSize: 16,
    fontFamily: fonts.Poppins.Bold
  },
  _txt_name_2: {
    color: "#999999",
    fontSize: 14,
    fontFamily: fonts.Poppins.Regular
  },
  _txt_detail: {
    color: "#2A87FD",
    fontSize: 16,
    fontFamily: fonts.Poppins.Regular,
    marginVertical: 10
  },
  _view_txt_detail: {
    alignItems: "center",
    flexDirection: "row"
  },
  _txt_status_: {
    color: "#999999",
    fontSize: 14,
    fontFamily: fonts.Poppins.Regular
  },
  _view_status_: {
    justifyContent: "center",
    marginVertical: 10
  },
  _view_likeed_: {
    flexDirection: "row"
  },
  _liked_v: {
    width: 100,
    flexDirection: "row",
    paddingLeft: 5
  },
  like_: {
    width: 24,
    height: 24,
    marginRight: 5
  },
  txt_v: {
    color: "#999999",
    fontSize: 14,
    fontFamily: fonts.Poppins.Regular
  },
  _btn_ck: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  }
});
