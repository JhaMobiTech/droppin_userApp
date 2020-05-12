import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
const half = width / 2;
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 0
  },
  _btn_back_dARK: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  _iconBack_dark: {
    width: 20,
    height: 20
  },
  _text_header: {
    fontSize: 22,
    fontFamily: fonts.Poppins.Regular
  },
  actionbar_title: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 22,
    color: "#4A4A4A"
  },
  coin: {
    width: 22.59,
    height: 23,
    marginRight: 5
  },
  coin_container: {
    flexDirection: "row",
    alignItems: "center"
  },
  coin_num: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 18,
    color: "#4A4A4A"
  },
  tb_underline: {
    backgroundColor: "#FE6336",
    borderRadius: 3,
    marginHorizontal: 3
  },
  tab_style: {
    backgroundColor: "#fff"
  },
  active_tab: {
    backgroundColor: "#fff"
  },
  tab_title: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 13,
    color: "#71828A"
  },
  active_title: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 13,
    color: "#FE6336"
  },
  all_pd_con: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
  },
  all_pd_card: {
    marginLeft: 0,
    marginTop: 14,
    marginRight: 14,
    marginBottom: 0,
    borderRadius: 4.53
  },
  all_pd_touchable_op: {
    borderRadius: 4.53
  },
  all_pd_image_view: {
    flex: 1,
    marginRight: Platform.OS == "android" ? 0.5 : 1,
    borderTopLeftRadius: 4.53,
    borderTopRightRadius: 4.53,
    flexDirection: "row"
  },
  all_pd_img: {
    flex: 1,
    borderTopLeftRadius: 4.53,
    borderTopRightRadius: 4.53
  },
  pop_detail_box: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 13
  },
  pop_pd_name: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: 10.87,
    color: "#494949"
  },
  pop_pd_price: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 13,
    color: "#FE6336"
  },
  coin_2: {
    width: 16,
    height: 18,
    marginRight: 5
  },
  coin_num_2: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 16,
    color: "#F5A623"
  },
  // Atc style --------------
  atc_card: {
    width: 160,
    height: 160,
    borderRadius: 10,
    position: "absolute",
    top: -86
  },
  atc_modal_container: {
    height: height / 1.3,
    width: width,
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  atc_modal_header: {
    width: width,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  atc_modal_header_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 15,
    color: "#000000"
  },
  atc_modal_price_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 18,
    color: "#FE6336",
    marginTop: 3
  },
  atc_img_box: {
    width: width,
    alignItems: "center"
  },
  atc_img: {
    width: "100%",
    height: "100%",
    borderRadius: 10
  },
  atc_pd_detail_box: {
    marginTop: 96
  },
  atc_option_1_title: {
    fontFamily: fonts.Avenir.Black,
    fontSize: 18,
    color: "#4A4A4A",
    marginLeft: 16,
    marginBottom: 10
  },
  atc_option_1_touch: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4.2,
    borderWidth: 0.5,
    paddingVertical: 3,
    paddingHorizontal: 15,
    marginRight: 10,
    borderColor: "#666666"
  },
  atc_option_1_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 12.6,
    color: "#666666"
  },
  atc_qty_box: {
    width: width,
    alignItems: "center"
  },
  atc_qty_title: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 16,
    color: "#262628"
  },
  atc_manage_qty: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1.27,
    borderColor: "#D8D8D8",
    borderRadius: 8.8,
    height: 43,
    marginTop: 10
  },
  atc_plus_touch: {
    paddingHorizontal: 10,
    height: "100%",
    justifyContent: "center"
  },
  atc_add_to_cart: {
    height: 54,
    width: width - 32,
    marginLeft: 16,
    borderRadius: 10,
    backgroundColor: "#F5A623",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 20
  },
  atc_buy_now_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 16,
    color: "#fff"
  },
  atc_qty_txt_value: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 20,
    color: "#4A4A4A",
    marginHorizontal: 10
  },
  close_modal_touch: {
    position: "absolute",
    right: 16,
    top: 16
  },
  heart_icon: {
    width: 25,
    height: 21
  },
  option_item: {
    width: 54,
    height: 53,
    borderRadius: 4,
    backgroundColor: "#F7F7F7",
    marginRight: 5
  },
  option_touch: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  option_item_img: {
    width: 51,
    height: 50
  },
  coin_container_3: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10
  },
  coin_3: {
    width: 27.5,
    height: 28,
    marginRight: 10
  },
  coin_num_3: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 34,
    color: "#4A4A4A"
  }
});
