import { StyleSheet, Dimensions, Platform } from "react-native";
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
  man_header: {
    width: width,
    height: 86,
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 36,
    justifyContent: "space-between"
  },
  shop_detail_box: {
    width: width - 64,
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 32,
    marginTop: 16
  },
  img_shop_card: {
    width: 48,
    height: 48,
    borderRadius: 13,
    padding: 1
  },
  shop_img: {
    width: "100%",
    height: "100%",
    borderRadius: 13
  },
  shop_name_box: {
    marginLeft: 10
  },
  shop_name_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 18,
    color: "#000000"
  },
  shop_follower: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: 12,
    color: "#7B7B7B"
  },
  follow_touch: {
    width: 72,
    height: 32,
    borderRadius: 16,
    position: "absolute",
    right: 0
  },
  follow_touch_btn: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  follow_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 13,
    color: "#FE6336"
  },
  menu_tab: {
    width: width,
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 32,
    marginTop: 20,
    borderBottomWidth: 0.5,
    paddingTop: 0,
    borderTopWidth: 0,
    borderTopColor: "#fff",
    marginLeft: 0,
    marginRight: 0,
    paddingBottom: 0
  },
  divider_vertical: {
    height: 24,
    width: 1,
    backgroundColor: "#E5E5E5"
  },
  menu_tab_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 15,
    textAlign: "center"
  },
  tab_item_box: {
    flex: 3,
    alignItems: "flex-start"
  },
  tab_underline: {
    width: 77,
    height: 4,
    backgroundColor: "#FE6336",
    position: "absolute",
    bottom: -0.5
  },
  tab_sub_con: {
    backgroundColor: "#fff",
    alignItems: "center",
    height: "100%",
    justifyContent: "center"
  },
  promo_header: {
    width: width - 32,
    marginHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    marginTop: 16,
    marginBottom: 10
  },
  promo_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 21
  },
  see_all_box: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0
  },
  see_all_txt: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 13,
    color: "#9B9B9B",
    marginRight: 5
  },
  promo_card: {
    width: 280,
    height: 158,
    borderRadius: 6.34,
    marginRight: 8
  },
  see_more_box: {
    width: 118,
    height: 28,
    borderRadius: 2.72,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 13,
    bottom: 13
  },
  see_more_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 13,
    color: "#323232",
    flex: 1,
    textAlign: "center"
  },
  go_right: {
    width: 25,
    height: 25,
    backgroundColor: "#FE6336",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 1.5
  },
  go_right_img: {
    width: 12,
    height: 16,
    borderRadius: 0.91
  },
  // popular
  pop_card: {
    width: 165,
    height: 192,
    borderRadius: 4.53,
    marginRight: 4
  },
  pop_img: {
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
  cate_touch: {
    height: 32,
    borderRadius: 21,
    marginRight: 10
  },
  cate_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 13,
    color: "#C9CFE5"
  },
  linearGradient: {
    flex: 1,
    borderRadius: 21,
    paddingHorizontal: 30,
    justifyContent: "center",
    alignItems: "center"
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
  rw_rate_num: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 60,
    color: "#F5A623"
  },
  of5: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 15,
    color: "#4B4A50"
  },
  rw_rate_num_con: {
    alignItems: "center"
  },
  rw_container: {
    flexDirection: "row",
    marginHorizontal: 30,
    marginBottom: 20,
    width: width - 60
  },
  rw_rate_detail: {
    flex: 1,
    alignItems: "flex-end",
    paddingTop: 13,
    marginLeft: 20
  },
  rw_gray_star: {
    width: 7,
    height: 7,
    marginRight: 2
  },
  rw_gray_star_con: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 2
  },
  star_percent: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%"
  },
  star_percent_container: {
    flex: 1,
    height: 2.5,
    backgroundColor: "#EFEFF4",
    borderRadius: 2
  },
  star_percent_value: {
    width: "50%",
    height: 2.5,
    backgroundColor: "#85848A",
    borderRadius: 2
  },
  rating_count_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 15,
    color: "#9B9B9B",
    position: "absolute",
    right: 0,
    bottom: 0
  },
  // ====review box--------

  review_box: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 30,
    paddingVertical: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#C5C5C5"
  },
  rw_img: {
    width: 52,
    height: 52,
    borderRadius: 26,
    marginRight: 16
  },
  rw_img_pd: {
    width: 51,
    height: 51,
    borderRadius: 3.6,
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
  rw_detail_pd: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flex: 1
  },
  rw_name: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 14,
    color: "#4A4A4A"
  },
  rw_text_review: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 13.44,
    color: "#828393",
    marginTop: 10
  },
  rw_time: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: 9.6,
    color: "#BBBCCD"
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
  rw_brand_txt: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 12,
    color: "#4A4A4A"
  },
  rw_pd_price: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 10,
    color: "#707070"
  },
  chat_btn: {
    width: 66,
    height: 66,
    borderRadius: 33,
    justifyContent: "center",
    alignItems: "center"
  },
  chat_btn_img: {
    width: 29,
    height: 24
  },
  chat_touch: {
    position: "absolute",
    right: 16,
    bottom: 30,
    borderRadius: 33
  }
});
