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
    fontFamily: fonts.Poppins.Regular
  },
  scroll_: {
    marginTop: 16
  },
  list_view: {
    width: width - 32,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 16
  },
  card_: {
    borderRadius: 66
  },
  image_pro: {
    width: 72,
    height: 72,
    borderRadius: 66
  },
  ms_con: {
    flex: 1,
    paddingLeft: 16,
    flexDirection: "row"
  },
  ms_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 16,
    color: "#111111",
    flex: 1
  },
  ms_time: {
    fontFamily: fonts.Avenir.Medium,
    fontSize: 11,
    color: "#727C8E",
    marginLeft: 16
  }
});
