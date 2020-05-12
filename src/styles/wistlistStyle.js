import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";

export const styles = StyleSheet.create({
  _header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  back: {
    width: 18,
    height: 18
  },
  btn_back: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    backgroundColor: "#fff",
    width: "100%"
  },
  txt_status_header: {
    color: "#4A4A4A",
    fontSize: 22,
    fontFamily: fonts.Avenir.Heavy
  },
  line: {
    width: "100%",
    height: 0.5,
    backgroundColor: "#eeeeee",
    marginTop: 15
  },
  txt_qty_item: {
    color: "#000",
    fontSize: 14,
    fontFamily: fonts.Avenir.Heavy
  },
  v_removeItem: {
    width: "100%",
    paddingLeft: 20,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 20,
    marginBottom: 30
  },
  txt_remove: {
    color: "#000",
    fontSize: 10,
    fontFamily: fonts.Avenir.Black,
    textDecorationLine: "underline"
  },
  btn_remove_all: {
    height: 20,
    marginLeft: 20,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 2,
    flexDirection: "row"
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
  }
});
