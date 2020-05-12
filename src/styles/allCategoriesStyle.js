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
    paddingRight: 16
    // borderBottomWidth: 0
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
    fontSize: 18,
    color: "#282C37"
  },
  search_icon: {
    width: 18.5,
    height: 18.5
  },
  content: {
    flex: 1,
    flexDirection: "row"
  },
  tab_container: {
    width: 92,
    height: "100%",
    backgroundColor: "#F8F8F8",
    marginTop: 1
  },
  tab_box: {
    width: 92,
    height: 92,
    justifyContent: "center",
    alignItems: "center",
    borderBottomColor: "#E4E4E4",
    borderBottomWidth: 1
  },
  tab_icon: {
    width: 25,
    height: 25
  },
  cate_text: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 13,
    textAlign: "center",
    color: "#3E424D",
    marginHorizontal: 10
  },
  detail: {
    flex: 1
    // backgroundColor: "red"
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
    borderRadius: 4.53,
    backgroundColor: "#F8F8F8"
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
    width: "100",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4
  },
  pop_detail_box: {
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 13,
    alignItems: "center"
  },
  su_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 15,
    color: "#000"
  }
});
