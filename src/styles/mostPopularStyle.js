import { StyleSheet, Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  _header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3f51b5",
    flexDirection: "row",
    height: width * 0.12,
    paddingHorizontal: width * 0.03,
    position: "absolute",
    marginTop: width * 0.05,
    opacity: 0.3
  },
  _header_: {
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3f51b5",
    flexDirection: "row",
    height: Platform.OS === "android" ? StatusBar.currentHeight + 50 : 22 + 50,
    paddingRight: width * 0.03,
    paddingLeft: width * 0.015,
    position: "absolute",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 22
    // marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 22
    // opacity: 0.2
  },
  contents: {
    flex: 1
    //backgroundColor: 'red'
  },
  iconBack: {
    width: width / 18,
    height: width * 0.05
  },
  iconBackq: {
    width: 20,
    height: 20
  },
  btn_back: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6
  },
  btn_sare: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6
  },
  btn_menu: {
    width: 30,
    height: 30,
    // backgroundColor: 'red',
    alignItems: "center",
    justifyContent: "center"
    // marginRight: width * 0.02
  },
  v_3item: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  search: {
    width: 20,
    height: 20
  },
  img_most: {
    width: "100%",
    height: width * 0.8
  },
  v_title: {
    width: "100%",
    paddingLeft: width * 0.07,
    position: "absolute",
    top: width * 0.14,
    opacity: 0.11,
    paddingVertical: width * 0.03
  },
  v_title_2: {
    width: "100%",
    paddingLeft: width * 0.05,
    position: "absolute",
    top: 70,
    paddingBottom: 30
  },
  v_topMost30: {
    //width: '100%',
    position: "absolute",
    paddingLeft: width * 0.03
  },
  v30top: {
    width: width / 3,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.02,
    backgroundColor: "#3f51b5",
    borderRadius: width * 0.02,
    opacity: 0.5,
    marginTop: 20
  },
  v30top_2: {
    width: width / 2.5,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.02,
    // backgroundColor: 'blue',
    borderRadius: width * 0.02
    //opacity: 0.5
  },
  img_bolt: {
    width: width / 30,
    height: width * 0.03,
    marginRight: width * 0.02,
    tintColor: "#fff"
  },
  txt_khaiydee: {
    color: "#fff",
    fontSize: width * 0.05
  },
  txt_baseTo: {
    color: "#fff",
    fontSize: width * 0.02
  },
  txt_most: {
    color: "#fff",
    fontSize: width * 0.03
  },
  v_item_most: {
    width: "100%",
    paddingHorizontal: width * 0.03,
    position: "absolute",
    top: width * 0.49
  },
  item_most: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: width * 0.01,
    //paddingHorizontal: width * 0.02,
    flexDirection: "row"
  },
  v_imgMost: {
    //paddingVertical: width * 0.02
  },
  imgMost: {
    width: width / 4.5,
    height: width * 0.25,
    borderRadius: width * 0.015,
    marginLeft: width * 0.02
  },
  v_appsoutJust: {
    position: "absolute"
  },
  styleJust: {
    backgroundColor: "#3f51b5",
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.01,
    borderTopLeftRadius: width * 0.02,
    borderBottomRightRadius: width * 0.1
  },
  txt_justfo: {
    color: "#fff",
    fontSize: width * 0.02
  },
  txt_detail: {
    fontSize: width * 0.04,
    textAlign: "left"
  },
  v_price_cart: {
    flexDirection: "row",
    alignItems: "center"
  },
  txt_price: {
    color: "#000",
    fontSize: width * 0.04,
    fontWeight: "bold"
  },
  txt_price_io: {
    color: "#757575",
    fontSize: width * 0.03,
    textDecorationLine: "line-through",
    marginLeft: width * 0.02
  },
  img_add_cart: {
    width: width / 15,
    height: width * 0.07,
    tintColor: "blue"
  },
  v_allItem: {
    width: "100%",
    backgroundColor: "#eeeeee",
    paddingVertical: width * 0.03,
    borderTopLeftRadius: width * 0.03,
    borderTopRightRadius: width * 0.03,
    marginTop: -(width * 0.03),
    paddingHorizontal: width * 0.02
  },
  v_undub: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: width * 0.015,
    paddingBottom: 5,
    paddingHorizontal: width * 0.01,
    flexDirection: "row",
    marginBottom: width * 0.025
  },
  v_imgUndub: {
    position: "absolute",
    top: -(width * 0.015)
    //left: width * 0.007
  },
  img_undubAppsout: {
    width: width / 14,
    height: width * 0.09
  },
  v_photoUndub: {
    width: width / 4,
    height: width * 0.23
    //backgroundColor: 'red'
  },
  img_undubTop: {
    flex: 1,
    borderRadius: width * 0.015
  },
  v_undub_1: {
    position: "absolute",
    backgroundColor: "#3f51b5",
    width: "100%",
    borderBottomLeftRadius: width * 0.2,
    borderBottomRightRadius: width * 0.2,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: width * 0.004
  },
  txt_top30: {
    color: "#fff",
    fontSize: width * 0.02
  },
  v_detailProTop: {
    flex: 1,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.02,
    justifyContent: "space-between"
  },
  txt_selled: {
    color: "blue",
    fontSize: width * 0.03
  },
  v_naenum: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: width * 0.015,
    paddingVertical: width * 0.03,
    paddingHorizontal: width * 0.03,
    marginBottom: width * 0.03
  },
  txt_naenum: {
    color: "#424242",
    fontSize: width * 0.03
  },
  v_scrollNaenum: {
    width: "100%",
    marginTop: width * 0.04
  },
  itemnaenum: {
    alignItems: "center",
    marginRight: width * 0.04
  },
  img_naenum: {
    width: width / 3.3,
    height: width * 0.29,
    borderRadius: width * 0.01
  },
  txt_theNaenum: {
    color: "#616161",
    fontSize: width * 0.023,
    marginTop: width * 0.017
  },
  v_btndf: {
    flexDirection: "row",
    alignItems: "center"
    // opacity: 1
  },
  v_10_top: {
    width: width / 12,
    height: width * 0.05,
    backgroundColor: "#3f51b5",
    borderBottomRightRadius: 100,
    borderTopLeftRadius: width * 0.02,
    alignItems: "center",
    justifyContent: "center"
  },
  txt_top_10: {
    color: "#fff",
    fontSize: width * 0.025
  },
  txt_youLikeMay: {
    color: "#000",
    fontSize: width * 0.03,
    textAlign: "center",
    fontWeight: "bold"
  },
  v_youmay: {
    width: "100%",
    marginTop: width * 0.03,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  item_youMay: {
    width: width / 2.1 - 2,
    backgroundColor: "#fff",
    borderRadius: width * 0.02,
    marginBottom: width * 0.02
  },
  item_youMayLike: {
    width: "100%",
    height: width * 0.4,
    borderTopLeftRadius: width * 0.02,
    borderTopRightRadius: width * 0.02
  },
  txt_detail_youMay: {
    fontSize: width * 0.025,
    color: "#757575"
  },
  v_detailLike: {
    paddingHorizontal: width * 0.03,
    marginTop: width * 0.02
  },
  v_pricreOut: {
    flexDirection: "row",
    paddingHorizontal: width * 0.03,
    justifyContent: "center",
    marginTop: width * 0.01,
    marginBottom: width * 0.02
  },
  txt_like_may: {
    color: "blue",
    fontSize: width * 0.027,
    marginRight: width * 0.03
  },
  txt_decol: {
    color: "#9e9e9e",
    fontSize: width * 0.024,
    textDecorationLine: "line-through"
  },
  header_txt: {
    fontSize: 20,
    color: "gray",
    fontWeight: "bold"
  },
  view_header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
