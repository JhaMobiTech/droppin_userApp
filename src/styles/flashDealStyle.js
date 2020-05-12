import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
const item_width = width > 511 ? (width - 54) / 3 : (width - 46) / 2;
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "transparent",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 16,
    paddingRight: 16,
    borderBottomWidth: 0,
    marginTop: Platform.OS == "ios" ? 0 : StatusBar.currentHeight
  },
  _btn_back_dARK: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  content: {
    flex: 1
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
    height: 23,
    tintColor: "#fff"
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
  tb_underline: {
    backgroundColor: "#FEC52B",
    borderRadius: 3,
    height: 6,
    marginHorizontal: 5
  },
  tab_style: {
    backgroundColor: "transparent"
  },
  active_tab: {
    backgroundColor: "transparent"
  },
  tab_title: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 13,
    color: "#fff"
  },
  active_title: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 13,
    color: "#fff"
  },
  all_pd_con: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    backgroundColor: "transparent"
  },
  all_pd_card: {
    marginLeft: 0,
    marginTop: 14,
    marginRight: 16,
    marginBottom: 0,
    borderRadius: 16,
    width: item_width,
    height: item_width * 1.68,
    alignItems: "center"
  },
  poster_: {
    width: item_width + 2,
    height: item_width * 0.43,
    marginHorizontal: -1,
    marginTop: -1,
    justifyContent: "center",
    alignItems: "center"
  },
  flash_txt: {
    fontFamily: fonts.Poppins.Medium,
    fontSize: 15,
    color: "#fff"
  },
  count_down_time: {
    flexDirection: "row",
    alignItems: "center"
  },
  num_bound: {
    width: 20,
    height: 20,
    borderRadius: 4,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 2
  },
  num: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 13,
    color: "#FF4896"
  },
  double_qote: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5
  },
  pd_img: {
    width: item_width - 1,
    height: item_width / 1.5
  },
  pd_name: {
    fontFamily: fonts.Avenir.Black,
    fontSize: 16,
    marginHorizontal: 10
  },
  pd_price: {
    fontFamily: fonts.Poppins.Bold,
    fontSize: 13,
    color: "#FE6336",
    marginHorizontal: 10
  },
  progress_1: {
    width: item_width - 32,
    height: 9,
    borderRadius: 4,
    backgroundColor: "#F1F3F8",
    marginTop: 6
  },
  progress_2: {
    width: 70,
    height: 9,
    borderRadius: 4,
    backgroundColor: "#C9CFE5"
  },
  left_item: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: 13,
    color: "#40434E",
    marginTop: 10
  },
  sub_cate: {
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent",
    marginRight: 5,
  },
  sub_cate_scrollview: {
    marginLeft: 16,
    marginTop: 20
  },
  sub_txt_color: {
    color: "#fff",
    fontFamily: fonts.Avenir.Medium,
    fontSize: 14
  }
});
