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
    paddingLeft: 0,
    paddingRight: 0,
    borderBottomWidth: 0
  },
  _btn_back_dARK: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20
  },
  _iconBack_dark: {
    width: 20,
    height: 20,
    marginRight: 15
  },
  _text_header: {
    fontSize: 18,
    fontFamily: fonts.Avenir.Heavy,
    color: "#282C37"
  },
  search_container: {
    flex: 1,
    backgroundColor: "#EFEFEF",
    marginLeft: 10,
    borderRadius: 10,
    marginRight: 10,
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
    fontSize: 12,
    alignItems: "center"
  },
  option_menu_con: {
    width: width,
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center"
  },
  option_con: {
    borderWidth: 0.91,
    borderColor: "#F5F5F5",
    flex: 1,
    height: 36,
    paddingLeft: 20
  },
  filter_: {
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  arrow_down_icon: {
    height: 9,
    width: 16
  },
  menu_trigle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%"
  },
  option_text: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 13,
    color: "#4C475A"
  },
  promo_header: {
    width: width - 32,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30
  },
  promo_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 18,
    color: "#282C37"
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
  md_filter: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginBottom: 0,
    marginTop: 0,
    marginRight: 0,
    marginLeft: width / 2
  },
  md_view: {
    width: width / 2,
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: 20
  },
  md_header_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: width / 2 - 32,
    marginHorizontal: 16
  },
  md_header_txt: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 18,
    color: "#4D4D4D"
  },
  x_close: {
    width: 17,
    height: 17
  },
  reset_txt: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 12,
    color: "#FE6336",
    textDecorationLine: "underline"
  },
  x_reset_touch: {
    padding: 5
  },
  option_header: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 15,
    color: "#4C475A",
    marginLeft: 20
  },
  slider_style: {
    marginHorizontal: 6
  },
  price_length_con: {
    width: width / 2 - 32,
    marginLeft: 14,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
    marginBottom: -10
  },
  price_length_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 10,
    color: "#111111"
  },
  option_scroll: {
    marginLeft: 20,
    width: width / 2 - 32,
    marginTop: 10
  },
  option_touch: {
    width: 24,
    height: 24,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  option_text: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 10,
    color: "#111111"
  },
  rw_star: {
    width: 12,
    height: 12
  },
  star_touch: {
    marginRight: 5
  },
  brand_touch: {
    height: 25,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    marginRight: 5,
    marginBottom: 10
  },
  brand_scroll: {
    marginLeft: 20,
    width: width / 2 - 32,
    marginTop: 10
  },
  brand_view: {
    flexDirection: "row",
    width: width / 2 - 32,
    flexWrap: "wrap"
  },
  brand_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 10,
    color: "#111111"
  },
  apply_gra: {
    width: width / 2 - 32,
    marginLeft: 16,
    borderRadius: 3,
    justifyContent: "center",
    alignItems: "center",
    height: 36,
    marginBottom: 20,
    marginTop: 20
  },
  apply_txt: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 14,
    color: "#fff"
  }
});
