import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
const item_width = width - 22;
const ex_item_width = width - 30;
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    borderBottomWidth: 0
    // marginTop: Platform.OS == "ios" ? 5 : StatusBar.currentHeight
    // marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
  },
  _btn_back_dARK: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  _iconBack_dark: {
    width: 20,
    height: 20,
    tintColor: "#fff"
  },
  _text_header: {
    fontSize: 18,
    fontFamily: fonts.Poppins.Bold,
    color: "#fff"
  },
  cart_icon: {
    width: 23,
    height: 23
    // tintColor: "#fff"
  },
  header_right: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    flex: 1
  },
  cart_touch: {
    paddingHorizontal: 8
  },
  header_gradient: {
    width: 683,
    height: 503,
    borderRadius: 600
  },
  svg: {
    backgroundColor: "transparent",
    position: "absolute"
  },
  content: {
    backgroundColor: "transparent"
  },
  search_container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    marginLeft: 10,
    borderRadius: 5,
    height: 35,
    flexDirection: "row",
    alignItems: "center"
  },
  search_icon: {
    height: 18,
    width: 18,
    marginLeft: 15,
    marginRight: 10
  },
  search_input: {
    flex: 1,
    borderRadius: 5,
    color: "gray"
  },
  cart_touch: {
    paddingHorizontal: 8
  },
  slider_img_con: {
    width: width - 20,
    height: width * 0.4,
    marginLeft: 10,
    backgroundColor: "#f5f5f5",
    borderRadius: 5
  },
  img_slider: {
    flex: 1,
    borderRadius: 5
  },
  cate_scroll_: {
    marginTop: 10
  },
  view_of_cate: {
    alignItems: "center"
    // backgroundColor: "red"
  },
  cate_img: {
    width: width * 0.07,
    height: width * 0.07
    //borderRadius: 15
  },
  v_indicator: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: -15
  },
  // indicator_leng: {
  //   width: 22,
  //   height: 5,
  //   borderRadius: 50,
  //   backgroundColor: '#ff6f00',
  //   marginRight: 7
  // },
  indicator_sun: {
    height: width * 0.012,
    borderRadius: 20,
    backgroundColor: "#e0e0e0",
    marginRight: 7
  },
  cate_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: width / 33,
    marginTop: 5
  },
  header_view: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 10
  },
  header_icon: {
    width: width * 0.025,
    height: width * 0.03,
    borderRadius: 6
  },
  header_title_flash: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: width * 0.04,
    color: "#1C1C1C",
    marginLeft: 5
  },
  flash_con: {
    alignItems: "flex-start"
  },
  flash_img: {
    width: "100%",
    height: "100%",
    borderRadius: 6,
    backgroundColor: "#f5f5f5"
  },
  sold_out: {
    backgroundColor: "#ff9800",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: width * 0.025,
    paddingVertical: 3,
    paddingHorizontal: width * 0.025,
    marginTop: 5
  },
  sold_txt: {
    fontSize: width * 0.025,
    color: "#fff"
  },
  current_price: {
    fontSize: width * 0.025,
    color: "#E67A3B",
    marginTop: 5,
    marginLeft: 3
  },
  view_header_main: {
    width: width,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15
  },
  shop_more_txt: {
    fontSize: width * 0.03,
    fontFamily: fonts.Avenir.Medium,
    color: "#E67A3B"
    //marginBottom: 15
  },
  discount_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: width * 0.03,
    color: "#fff",
    position: "absolute",
    top: "8%",
    right: "10%"
  },
  espacial_view: {
    width: width - 20,
    marginLeft: 10,
    borderRadius: 12,
    marginTop: 15,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  es_header: {
    flexDirection: "row",
    alignItems: "center"
  },
  es_icon: {
    width: width * 0.0325,
    height: width * 0.0325
  },
  es_header_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: width * 0.03,
    color: "#1C1C1C",
    marginLeft: 5
  },
  es_item: {
    width: item_width / 2,
    height: (item_width * 0.88) / 2,
    backgroundColor: "#f5f5f5",
    padding: 10
  },
  es_img: {
    flex: 1,
    marginVertical: 10
  },
  fc_title: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: width * 0.04,
    color: "#1C1C1C"
  },
  fc_con: {
    width: "100%",
    height: width * 0.66
  },
  fc_item_img: {
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12
  },
  fc_txt_view: {
    flex: 1,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: "#7476FF",
    alignItems: "center"
  },
  fc_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 12,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 5,
    marginBottom: 5,
    color: "#fff",
    textAlign: "center"
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
    fontSize: width * 0.025,
    color: "#494949"
  },
  pop_pd_price: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: width * 0.0325,
    color: "#FE6336"
  },
  v_item_cate_1: {
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 9
  },
  card_cate_1: {
    flex: 1,
    borderRadius: 7,
    backgroundColor: "#b3e5fc"
  },
  v_item_cate_1_1: {
    flex: 1.5,
    flexDirection: "row"
  },
  v_card_2: {
    flex: 1,
    flexDirection: "column"
  },
  ex_header: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 18,
    color: "#1C1C1C",
    marginTop: 20,
    marginLeft: 10,
    marginBottom: 5
  },
  ex_con: {
    flexDirection: "row"
  },
  ex_item: {
    alignItems: "center",
    width: ex_item_width / 3,
    backgroundColor: "gray",
    height: ex_item_width / 2.7,
    borderRadius: 5,
    marginRight: 5,
    justifyContent: "space-around"
  },
  ex_icon: {
    width: (ex_item_width / 3) * 0.4,
    height: (ex_item_width / 3) * 0.4,
    // borderRadius: ((ex_item_width / 3) * 0.4) / 2,
    marginTop: 20
  },
  ex_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: width * 0.03,
    color: "#ef5350",
    marginVertical: 5
  },
  rew_con: {
    alignItems: "center",
    borderRadius: 10,
    width: "100%",
    marginBottom: 10
  },
  coins: {
    width: width * 0.04,
    height: width * 0.04,
    borderRadius: 7
  },
  coins_txt: {
    fontFamily: fonts.Avenir.Black,
    fontSize: width * 0.03,
    color: "#fff",
    marginLeft: 5
  },
  gradient: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingVertical: 3,
    width: "80%"
  },
  most_item: {
    width: ex_item_width / 3,
    height: ex_item_width / 2.9,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    marginRight: 5
  },
  most_item_header: {
    width: ex_item_width / 3,
    height: ex_item_width / 3 / 2.5,
    backgroundColor: "transparent",
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  most_header_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: width * 0.035,
    color: "#0d47a1"
  },
  most_header_txt_life_1: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: width * 0.035,
    color: "#e65100"
  },
  v_shopmore: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: 10,
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 2
  },
  v_flastD: {
    width: "100%",
    height: width * 0.3,
    flexDirection: "row"
  },
  most_header_desc: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: width * 0.03,
    color: "#1e88e5"
  },
  most_header_desc_life_1: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: width * 0.03,
    color: "#f57f17"
  },
  most_img: {
    flex: 1,
    marginHorizontal: 20,
    marginVertical: 10,
    borderRadius: 10
  },
  most_l: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: width * 0.2,
    marginTop: 5,
    paddingHorizontal: 10
  },
  most_l_1: {
    flexDirection: "row",
    alignItems: "center",
    width: (width - 25) / 2,
    backgroundColor: "#f5f5f5",
    borderRadius: 5,
    marginTop: 7,
    marginRight: 5
  },
  most_l_2: {
    flex: 2,
    paddingRight: 7
  },
  most_l_img: {
    flex: 1,
    borderRadius: 4
  },
  v_img_leng: {
    flex: 1,
    paddingVertical: 4,
    paddingRight: 7
  },
  ml_header: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: width * 0.0235
  },
  ml_like_count: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: width * 0.025,
    color: "#9e9e9e"
  },
  ml_desc: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: width * 0.0225,
    color: "#ff9e80"
  },
  v_top_cate: {
    flex: 1.2,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 10
  },
  v_circle_hot: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
    flexDirection: "row"
  },
  v_hot: {
    width: 25,
    height: 25,
    borderRadius: 50,
    backgroundColor: "red",
    marginRight: -5,
    alignItems: "center",
    justifyContent: "center"
  },
  txt_hot: {
    color: "#fff",
    fontSize: 9
  },
  v_name_cate: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 15
  },
  txt_name_cate_1: {
    color: "#1e88e5",
    fontSize: width * 0.035,
    textAlign: "center"
  },
  txt_name_cate_2: {
    color: "#7b1fa2",
    fontSize: width * 0.035
  },
  v_title_top: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start"
  },
  txt_title_top: {
    color: "red",
    fontSize: width * 0.025
  },
  btn_cate_top: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 5
  },
  v_item_cate_2: {
    flex: 1.2,
    flexDirection: "row",
    paddingHorizontal: 9
  },
  v_card_2_1: {
    flex: 1,
    paddingRight: 5
  },
  v_card_3: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    borderRadius: 7,
    marginRight: 4
  },
  btn_card_3: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 7
  },
  v_txt_title_item_2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 7
  },
  img_item_2: {
    flex: 1,
    borderRadius: 7
  },
  txt_name_cate_4: {
    color: "#ad1457",
    fontSize: width * 0.0325,
    fontFamily: fonts.Poppins.Regular
  },
  txt_name_cate_5: {
    color: "#1a237e",
    fontSize: width * 0.0325,
    fontFamily: fonts.Poppins.Regular
  },
  txt_name_cate_3: {
    color: "#5d4037",
    fontSize: width * 0.0325,
    fontFamily: fonts.Poppins.Regular
  },

  v_2_item: {
    flex: 1,
    flexDirection: "column",
    paddingLeft: 2.5
  },

  v_header_item_1: {
    width: "100%",
    height: 40,
    backgroundColor: "#f50057",
    position: "absolute",
    opacity: 0.5,
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6
  },
  txt_header_item_off_1: {
    fontSize: 17,
    color: "#880e4f",
    fontFamily: fonts.Poppins.Medium
  },

  v_header_item_3: {
    width: "60%",
    height: 25,
    backgroundColor: "#33691e",
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
    borderTopLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  v_header_item_4: {
    width: "100%",
    height: 25,
    backgroundColor: "#000",
    // position: 'absolute',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6
  }
});
