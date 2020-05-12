import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
const item_width = width - 22;
const ex_item_width = width - 52;
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 0
    // borderBottomWidth: 0
  },
  _btn_back_dARK: {
    width: 30,
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 10
  },
  _iconBack_dark: {
    width: 20,
    height: 20
  },
  _text_header: {
    fontSize: 22,
    fontFamily: fonts.Poppins.Regular,
    textAlign: "center"
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
    marginRight: 10,
    justifyContent: "space-around",
    marginTop: 10
  },
  ex_icon: {
    width: (ex_item_width / 3) * 0.4,
    height: (ex_item_width / 3) * 0.4,
    // borderRadius: ((ex_item_width / 3) * 0.4) / 2,
    marginTop: 20
  },
  ex_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 12,
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
    width: 15,
    height: 15,
    borderRadius: 7
  },
  coins_txt: {
    fontFamily: fonts.Avenir.Black,
    fontSize: 12,
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
  all_pd_con: {
    marginLeft: 16,
    marginRight: 16,
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%"
  }
});
