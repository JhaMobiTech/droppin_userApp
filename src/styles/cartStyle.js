import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
    marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
  },
  _txt_header: {
    fontSize: 18,
    fontFamily: fonts.Poppins.Regular,
    color: "#282C37"
  },
  _content: {
    flex: 1,
    backgroundColor: "#F0F0F0"
  },
  _item: {
    width: "100%",
    height: 174,
    backgroundColor: "#fff",
    marginTop: 5,
    flexDirection: "column",
    marginBottom: 5
  },
  _item_head: {
    width: "100%",
    height: 60,
    borderBottomWidth: 0.7,
    borderBottomColor: "#D8D8D8",
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center"
  },
  _cicle_: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FBAE3E"
  },
  _cicle_img: {
    width: 20,
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  _icon_ok: {
    width: 15,
    height: 15
  },
  _view_head_item: {
    width: 80,
    flexDirection: "row",
    alignItems: "center"
  },
  _view_item_seller: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  _item_seller: {
    width: 38,
    height: 38,
    borderRadius: 30
  },
  _view_name_dt: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between"
  },
  _txt_name_item: {
    color: "#4A4A4A",
    fontSize: 17,
    marginTop: 7
  },
  _txt_edit: {
    color: "#262628",
    fontSize: 15
  },
  _shop: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20
  },
  _select: {
    width: 115,
    flexDirection: "row",
    alignItems: "center"
  },
  _pic_: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  _picture: {
    width: 71,
    height: 78,
    borderRadius: 4
  },
  _txt_all: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 18,
    paddingBottom: 17
  },
  _txt_picName: {
    color: "#4A4A4A",
    fontSize: 14.5
  },
  _v_price: {
    flex: 1,
    justifyContent: "center"
  },
  _txt_price: {
    color: "#FE6336",
    fontSize: 11
  },
  _v_dl_add: {
    width: 97,
    height: 30,
    borderRadius: 6,
    borderColor: "#979797",
    borderWidth: 0.5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  _v_dl: {
    flex: 1,
    alignItems: "center"
  },
  _icon_dl: {
    width: 12,
    height: 15
  },
  _v_qty: {
    flex: 1,
    alignItems: "center"
  },
  _txt_qty: {
    color: "#4A4A4A",
    fontSize: 17
  },
  _v_add: {
    flex: 1,
    alignItems: "center"
  },
  _txt_add: {
    color: "#9B9B9B",
    fontSize: 22
  },
  _v_c_Like: {
    width: "100%",
    height: 272,
    backgroundColor: "#fff"
  },
  _v_line: {
    width: "100%",
    height: 52,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  _line_: {
    borderTopWidth: 1,
    borderColor: "#D3D3D3",
    width: "100%"
  },
  _v_txt_line: {
    flex: 1,
    alignItems: "center"
  },
  _txt_l: {
    color: "#4A4A4A",
    fontSize: 14.5
  },
  _v_item_b: {
    flexDirection: "row",
    width: "100%",
    paddingHorizontal: 20
  },
  _v_c_b: {
    width: 166,
    height: 192,
    borderRadius: 4.5,
    marginRight: 10
  },
  _v_item_b_: {
    width: "100%",
    height: 136,
    borderTopLeftRadius: 4.5,
    borderTopRightRadius: 4.5
  },
  _v_dt_item: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "flex-end"
  },
  _txt_name_b: {
    color: "#494949",
    fontSize: 11
  },
  _v_price_b: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: "center"
  },
  _txt_price_b: {
    color: "#FE6336",
    fontSize: 12
  },
  _v_checkout: {
    width: "100%",
    height: 63,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center"
  },
  _v_select_all_item: {
    flexDirection: "row"
  },
  _txt_sl_all: {
    color: "#4A4A4A",
    fontSize: 13,
    marginLeft: 10
  },
  _v_dt_check: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingRight: 10
  },
  _txt_subtotal: {
    color: "#4A4A4A",
    fontSize: 13
  },
  _btn_ck: {
    width: 118,
    height: 44,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center"
  },
  _txt_ck: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold"
  },
  _v_ck_price: {
    flex: 1,
    alignItems: "flex-end",
    paddingRight: 10
  },
  _txt_ck_price: {
    color: "#FE6336",
    fontSize: 13.24
  },
  _v_btn_ck: {
    alignItems: "flex-end"
  }
});
