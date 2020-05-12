import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
const item_width = width - 22;
const ex_item_width = width - 52;
export const styles = StyleSheet.create({
  con_view: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: width - 32,
    height: height / 2
  },
  con_img: {
    width: 50,
    height: 50
  },
  con_txt: {
    color: "#CCCCCC"
  },
  con_reload_txt: {
    color: "#1e88e5",
    textDecorationLine: "underline",
    marginTop: 3
  }
});
