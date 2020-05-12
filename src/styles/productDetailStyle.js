import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("window");
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
  cart_icon: {
    width: 23,
    height: 23
  },
  header_right: {
    flexDirection: "row",
    alignItems: "center"
  },
  cart_touch: {
    paddingHorizontal: 8
  },
  product_img: {
    width: width,
    height: width - 150
  },
  product_header: {
    width: width,
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    marginLeft: 0,
    marginTop: -15,
    borderBottomWidth: 0,
    marginBottom: 0
  },
  product_name_con: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start"
    // paddingHorizontal: 16
  },
  product_name_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 26
  },
  heart_icon: {
    width: 25,
    height: 21
  },
  pd_price: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 16,
    color: "#FE6336",
    marginVertical: 5
  },
  rating_container: {
    flexDirection: "row",
    alignItems: "center"
  },
  rating_star: {
    width: 11,
    height: 11,
    marginRight: 5
  },
  rating_avg: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 12,
    color: "#F5A623"
  },
  divider: {
    height: 13,
    width: 1,
    backgroundColor: "#979797",
    marginHorizontal: 10
  },
  sold_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 12,
    color: "#707070"
  },
  divider_horizontal: {
    width: width,
    backgroundColor: "#F6F6F6",
    height: 10
  },
  delivery_box: {
    width: width,
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  header_adress: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  delivery_txt: {
    fontFamily: fonts.Avenir.Black,
    fontSize: 14
  },
  delivery_fee_txt: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 14,
    color: "#8D8D8D"
  },
  pick_address: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  pick_address_icon: {
    width: 8,
    height: 15,
    marginLeft: 10
  },
  adress_detail: {
    flexDirection: "row",
    width: width - 32,
    marginTop: 16
  },
  car_icon: {
    width: 28,
    height: 16,
    marginTop: 5
  },
  adress_detail_txt_con: {
    flex: 1,
    paddingLeft: 10
  },
  add_txt: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 14,
    color: "#9B9B9B"
  },
  shop_name: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 14,
    color: "#F5A623"
  },
  option_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 14,
    color: "#000000",
    marginLeft: 10
  },
  viriate_title: {
    flexDirection: "row",
    alignItems: "center"
  },
  option_item: {
    width: 54,
    height: 30,
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
  shop: {
    width: width,
    paddingHorizontal: 16,
    paddingVertical: 16
  },
  shop_info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  shop_info_box: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  shop_img: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 10
  },
  shop_name_2: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 15,
    color: "#000"
  },
  active_time: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 12,
    color: "#9B9B9B"
  },
  shop_detail: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10
  },
  shop_detail_box: {
    alignItems: "center",
    flex: 1
  },
  shop_detail_box_sub: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 2
  },
  detail_icon: {
    width: 18,
    height: 18
  },
  detail_txt: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 15,
    color: "#FE6336",
    marginLeft: 8
  },
  sub_option_title: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 12,
    color: "#707070"
  },
  divider_2: {
    height: 19,
    width: 1,
    backgroundColor: "#979797",
    marginHorizontal: 10
  },
  view_shop: {
    width: 88,
    height: 28,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0.5,
    borderRadius: 5,
    borderColor: "#979797"
  },
  view_shop_txt: {
    fontFamily: fonts.Avenir.Medium,
    color: "#4A4A4A",
    fontSize: 12
  },
  avg_view: {
    width: width,
    borderBottomWidth: 0.5,
    borderBottomColor: "#C5C5C5",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 16
  },
  avg_header: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16,
    marginVertical: 5,
    flex: 1
  },
  star_bg: {
    width: 53,
    height: 53,
    justifyContent: "center",
    alignItems: "center"
  },
  star_rating: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 11,
    color: "#fff"
  },
  avg_rating_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 14,
    color: "#000"
  },
  base_on: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: 11,
    color: "#9B9B9B"
  },
  avg_header_txt: {
    marginLeft: 13
  },
  box: {
    width: 5,
    height: 9,
    backgroundColor: "#FE6336",
    marginLeft: 8
  },
  see_all: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  review_box: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#C5C5C5"
  },
  rw_img: {
    width: 44,
    height: 44,
    borderRadius: 22,
    marginRight: 16
  },
  rw_detail_box: {
    flex: 1
  },
  rw_detail: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  rw_name: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 13,
    color: "#262628"
  },
  rw_text_review: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 14,
    color: "#262628"
  },
  rw_time: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: 9.6,
    color: "#BBBCCD"
  },
  pd_detail_box: {
    width: width,
    paddingBottom: 10
  },
  pd_detail: {
    width: width,
    borderBottomWidth: 1,
    borderBottomColor: "#F6F6F6",
    paddingVertical: 16,
    paddingHorizontal: 16
  },
  pd_sub_detail: {
    width: width - 32,
    paddingTop: 10,
    paddingHorizontal: 16,
    flexWrap: "wrap"
  },
  item_detail_box: {
    flexDirection: "row",
    width: "100%"
  },
  header_pd_item_detail: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#000000",
    marginTop: 6,
    marginHorizontal: 10
  },
  item_detail_text: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: 12,
    color: "#707070"
  },
  footer_button: {
    justifyContent: "center",
    alignItems: "center"
  },
  linearGradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  footer_icon: {
    width: 20,
    height: 20,
    tintColor: "gray"
  },
  footer_icon_add_toCart: {
    width: 20,
    height: 20,
    tintColor: "#fff"
  },
  footer_icon_store: {
    width: 23,
    height: 23,
    tintColor: "gray"
  },
  footer_title_chat: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 16,
    color: "#fff",
    textAlign: "center"
  },
  footer_title_chat_store: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 11,
    color: "#757575"
  },
  buy_new_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 16,
    color: "#fff"
  },
  modal_container: {
    height: height - 70,
    width: width,
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  modal_header: {
    width: width,
    height: 70,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  modal_header_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 18,
    color: "#262628"
  },
  close_modal_touch: {
    position: "absolute",
    right: 16,
    top: 16
  },
  modal_address: {
    width: width - 32,
    flexDirection: "row",
    marginHorizontal: 16
  },
  modal_addr_sub: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  delivery_to_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 16,
    color: "#4A4A4A",
    position: "relative"
  },
  modal_addr_txt: {
    flex: 1,
    fontFamily: fonts.Poppins.Regular,
    fontSize: 15,
    color: "#FE6336"
  },
  md_divider: {
    height: 0.5,
    backgroundColor: "#C5C5C5",
    width: width - 20,
    marginHorizontal: 10,
    marginVertical: 5
  },
  deliv_card: {
    width: width - 32,
    marginLeft: 16,
    borderRadius: 4.53,
    flexDirection: "row",
    padding: 16
  },
  radio_container: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FF4033",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 2
  },
  radio_dot: {
    width: 14,
    height: 14,
    backgroundColor: "#FF4033",
    borderRadius: 7
  },
  md_addr_standard: {
    marginLeft: 10
  },
  standard_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 16.3,
    color: "#4D4D4D"
  },
  md_addr_pricing: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 14,
    color: "#8D8D8D"
  },
  md_addr_standard_sub: {
    flexDirection: "row",
    alignItems: "center"
  },
  enjoy_txt: {
    fontFamily: fonts.Avenir.Medium,
    color: "#9B9B9B",
    fontSize: 12,
    marginLeft: 10
  },
  deliv_service: {
    width: width - 32,
    marginLeft: 16,
    marginTop: 20
  },
  deliv_service_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 16,
    color: "#4A4A4A"
  },
  deliv_service_sub_txt: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 14,
    color: "#4A4A4A",
    marginLeft: 5,
    marginTop: 10
  },
  // Atc style --------------
  atc_card: {
    width: 130,
    height: 130,
    borderRadius: 10,
    position: "absolute",
    top: -65
  },
  atc_modal_container: {
    height: height - 130,
    width: width,
    backgroundColor: "#fff",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  atc_modal_header: {
    width: width,
    // backgroundColor: "red",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  atc_modal_header_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 15,
    color: "#000000",
    alignSelf: "center"
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
    width: 130,
    height: 130,
    borderRadius: 10
  },
  atc_pd_detail_box: {
    marginTop: 80
  },
  atc_option_1_title: {
    fontFamily: fonts.Avenir.Black,
    fontSize: 18,
    color: "#4A4A4A",
    marginLeft: 16,
    marginBottom: 5
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
    height: 40,
    width: width - 32,
    marginLeft: 16,
    borderRadius: 10,
    backgroundColor: "#F5A623",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    marginBottom: 5
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
  btn_store: {
    width: 50,
    alignItems: "center",
    justifyContent: "center"
  },
  line_btns: {
    width: 1,
    height: "70%",
    backgroundColor: "#e0e0e0",
    marginTop: 10
  },
  footer_btn: {
    paddingRight: 10,
    paddingLeft: 5,
    backgroundColor: "#fff",
    paddingVertical: 5,
    height: 60,
    flexDirection: "row"
  },
  v_btn_bynow_addCart: {
    flex: 1,
    flexDirection: "row",
    marginLeft: 7
  },
  v_btn_2_season: {
    flex: 2,
    paddingHorizontal: 3,
    paddingVertical: 5
  },
  btn_by_now: {
    flex: 1,
    backgroundColor: "#ffab00",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  btn_add_to_card: {
    flex: 1,
    backgroundColor: "#ff5722",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    paddingHorizontal: 10
  },
  atc_btn_view: {
    flexDirection: "row",
    alignItems: "center",
    width: width
  },
  cart_count_box: {
    backgroundColor: "transparent",
    alignItems: "flex-end"
  },
  cart_count_txt: {
    color: "#fff",
    fontSize: 10,
    backgroundColor: "#ff5722",
    paddingBottom: 0,
    paddingHorizontal: 5,
    borderRadius: 8,
    marginTop: -8,
    marginRight: -8,
    borderColor: "#fff",
    borderWidth: 0.5
  },
  add_to_wishlist_btn: {
    position: "absolute",
    top: 20,
    right: 20
  },
  heart_icon: {
    width: 30,
    height: 30
  }
});
