import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "./../assets/fonts/fontConfig";
const { height, width } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  _header: {
    backgroundColor: "#fff",
    paddingLeft: 15,
    paddingRight: 15,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0
  },
  _btn_back_dARK: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 5
  },
  _iconBack_dark: {
    width: 20,
    height: 20
  },
  search: {
    flex: 1,
    height: 35,
    backgroundColor: "#eeeeee",
    borderRadius: 10,
    paddingHorizontal: 13,
    flexDirection: "row",
    alignItems: "center",
    marginRight: 10
  },
  search_input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 12,
    paddingVertical: 0,
    alignItems: "flex-start"
  },
  txt_cancle: {
    color: "red",
    fontSize: 16,
    fontFamily: fonts.Avenir.Medium
  },
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  v_header: {
    height: height,
    backgroundColor: "#fff",
    paddingTop: 20,
    //paddingBottom: 20,
    paddingHorizontal: 10
  },
  txt_recant: {
    color: "#000",
    fontSize: 20,
    fontFamily: fonts.Avenir.Heavy
  },
  v_recentText: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 24,
    justifyContent: "space-between",
    paddingRight: 20,
    marginBottom: 10
  },
  txt_phonhub: {
    color: "#4A4A4A",
    fontSize: 16,
    fontFamily: fonts.Avenir.Medium
  },
  v_phonhub: {
    width: "100%",
    height: 55,
    paddingHorizontal: 10,
    borderBottomWidth: 0.5,
    borderBottomColor: "#979797",
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center"
  },
  v_phonhub_2: {
    width: "100%",
    backgroundColor: "#fff",
    marginTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20
  },
  v_icon_: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 0.5,
    borderBottomColor: "#979797",
    alignItems: "center",
    paddingLeft: 5
  },
  txt_popular: {
    color: "#000",
    fontSize: 15,
    fontFamily: fonts.Poppins.Bold
  },
  btn_phonhubFromSearch: {
    height: 30,
    borderRadius: 15,
    borderWidth: 0.4,
    borderColor: "#FE6336",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 13
  },
  txt_p_Search: {
    color: "#FE6336",
    fontFamily: fonts.Poppins.Medium,
    fontSize: 13
  },
  v_btn_f_search: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    flexWrap: "wrap",
    justifyContent: "flex-start"
  },
  v_item_: {
    width: "100%",
    height: 78,
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 25
  },
  v_img_heart: {
    width: 85,
    height: "100%"
  },
  txt_nameItem: {
    color: "#000",
    fontSize: 13,
    fontFamily: fonts.Avenir.Heavy
  },
  txt_price: {
    color: "#FE6336",
    fontSize: 11,
    fontFamily: fonts.Avenir.Roman
  },
  txt_price_2: {
    color: "#000",
    fontSize: 11,
    fontFamily: fonts.Poppins.Regular
  },
  v_btn_status: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    marginTop: 2
  },
  V_itemDetail: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    paddingBottom: 5
  },
  btn_addBag: {
    width: 97,
    height: 24,
    borderRadius: 4,
    backgroundColor: "#FE6336",
    alignItems: "center",
    justifyContent: "center"
  },
  txt_addBag: {
    color: "#fff",
    fontSize: 10,
    fontFamily: fonts.Poppins.Bold
  },
  txt_date: {
    color: "#FF0000",
    fontFamily: fonts.Poppins.Regular,
    fontSize: 10
  },
  v_price_: {
    width: "100%",
    paddingHorizontal: 10,
    marginTop: 3
  },
  v_nameImg: {
    width: "100%",
    paddingHorizontal: 10
  },
  v_btn_heart: {
    width: "100%",
    marginTop: -28,
    paddingLeft: 5
  },
  v_removeUnlike: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    marginBottom: 30
  },
  txt_unlike: {
    color: "#000",
    fontSize: 14,
    fontFamily: fonts.Avenir.Black
  },
  btn_notify: {
    width: 97,
    height: 24,
    borderRadius: 4,
    borderWidth: 0.4,
    borderColor: "#D6D6D6",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  txt_notify: {
    color: "#000",
    fontSize: 10,
    fontFamily: fonts.Poppins.Bold
  },
  filter_con: {
    width: width,
    height: 40,
    borderTopWidth: 0.5,
    borderTopColor: "#e0e0e0",
    borderBottomWidth: 0.5,
    borderBottomColor: "#e0e0e0",
    flexDirection: "row"
  },
  filter_btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  filter_header_dv: {
    height: 40,
    width: 1,
    backgroundColor: "#e0e0e0"
  },
  arrow_down_: {
    width: 15,
    height: 15,
    marginHorizontal: 10,
    tintColor: "#FE6336"
  },
  best_match_con: {
    flexDirection: "row",
    alignItems: "center",
    width: width / 2,
    height: 40,
    justifyContent: "space-between",
    paddingLeft: 20
  },
  filter_touch_able: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: width / 2,
    height: 40,
    paddingLeft: 20
  },
  best_match_txt: {
    color: "#757575"
  }
});
