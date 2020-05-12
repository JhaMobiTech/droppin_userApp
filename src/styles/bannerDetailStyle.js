import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  _header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: width * 0.03
  },
  iconBack: {
    width: 20,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    tintColor: "#455a64"
  },
  btnClick: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  v_title: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  txt_title: {
    color: "#37474f",
    fontSize: 18,
    fontWeight: "900"
  },
  btn_share: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center"
  },
  _content: {
    backgroundColor: "#e57373"
  },
  img_title: {
    width: "100%",
    height: width * 0.3
  },
  itemTitle: {
    width: width / 3.3,
    height: width * 0.28,
    backgroundColor: "#fff",
    marginTop: width * 0.05,
    borderRadius: width * 0.02,
    marginLeft: width * 0.03,
    alignItems: "center",
    justifyContent: "center"
  },
  img_first: {
    width: width / 4,
    height: width * 0.19
  },
  txt_priceTitle: {
    color: "red",
    fontSize: width * 0.03
  },
  txt_TopDiscount: {
    color: "#fff",
    fontSize: width * 0.026,
    marginLeft: width * 0.03,
    marginTop: width * 0.06
  },
  v_discounSell: {
    width: "100%",
    flexDirection: "row",
    marginTop: width * 0.03
  },
  btn_sellDis: {
    width: width / 2.2,
    // height: width * 0.2,
    paddingVertical: width * 0.01,
    borderRadius: width * 0.01,
    marginRight: width * 0.016
  },
  v_discount: {
    width: "100%",
    flexDirection: "row",
    paddingHorizontal: width * 0.024,
    alignItems: "center"
  },
  txt_Namesell: {
    color: "red",
    fontSize: width * 0.025
  },
  txt_number: {
    color: "#880e4f",
    fontSize: width * 0.043,
    fontWeight: "bold"
  },
  txt_percentDiscount: {
    color: "#880e4f",
    fontSize: width * 0.033,
    marginTop: width * 0.01
  },
  logo_imgStore: {
    width: width * 0.08,
    height: width * 0.08,
    borderRadius: width * 0.014
  },
  v_dash: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  circle_red: {
    width: width * 0.03,
    height: width * 0.03,
    backgroundColor: "#e57373",
    borderRadius: width * 0.1,
    marginLeft: -(width * 0.013)
  },
  circle_red_: {
    width: width * 0.03,
    height: width * 0.03,
    backgroundColor: "#e57373",
    borderRadius: width * 0.1,
    marginRight: -(width * 0.013)
  },
  v_btnClick: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.02
  },
  txt_mini: {
    color: "#880e4f",
    fontSize: width * 0.025
  },
  v_Take: {
    width: width * 0.14,
    height: width * 0.05,
    backgroundColor: "red",
    borderRadius: width * 0.006,
    alignItems: "center",
    justifyContent: "center"
  },
  txt_taked: {
    color: "#424242",
    fontSize: width * 0.025
  },
  txt_dellTitle: {
    color: "#fff",
    textAlign: "center",
    marginTop: width * 0.05,
    fontSize: width * 0.04,
    marginBottom: width * 0.03
  },
  v_ListItem: {
    width: "100%",
    paddingHorizontal: width * 0.03,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  btn_item: {
    width: width / 3.27,
    backgroundColor: "#fff",
    borderRadius: width * 0.02,
    paddingVertical: width * 0.01,
    marginBottom: width * 0.01
  },
  img_item: {
    width: "100%",
    height: width * 0.3,
    borderTopRightRadius: width * 0.02,
    borderTopLeftRadius: width * 0.02
  },
  v_detailItem: {
    width: "100%",
    paddingHorizontal: width * 0.02,
    marginTop: width * 0.015
  },
  txt_detailItem: {
    color: "#37474f",
    fontSize: width * 0.027
  },
  txt_prices: {
    color: "red",
    textAlign: "center",
    fontSize: width * 0.03,
    fontWeight: "bold",
    marginTop: width * 0.01,
    marginBottom: width * 0.01
  },
  appSout: {
    width: "100%",
    position: "absolute"
  },
  v_appSout: {
    width: width * 0.09,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    borderTopRightRadius: width * 0.1,
    borderBottomRightRadius: width * 0.1,
    borderTopLeftRadius: width * 0.04
  },
  txt_appsout: {
    color: "#fff",
    fontSize: width * 0.025
  },
  btn_item2Row: {
    width: width / 2.15,
    backgroundColor: "#fff",
    borderRadius: width * 0.02,
    paddingVertical: width * 0.01,
    marginBottom: width * 0.01
  },
  img_item2Row: {
    width: "100%",
    height: width * 0.4,
    borderTopRightRadius: width * 0.02,
    borderTopLeftRadius: width * 0.02
  },
  txt_prices2Row: {
    color: "red",
    fontSize: width * 0.03,
    fontWeight: "bold",
    marginTop: width * 0.01,
    marginLeft: width * 0.03
  },
  txt_decoletion: {
    color: "#616161",
    fontSize: width * 0.026,
    marginBottom: width * 0.01,
    textDecorationLine: "line-through"
  },
  v_perceDis: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: width * 0.03
  },
  txt_perDis: {
    color: "#616161",
    fontSize: width * 0.026,
    marginBottom: width * 0.01,
    marginLeft: width * 0.03
  }
});
