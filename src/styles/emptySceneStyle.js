import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
const item_width = width - 22;
const ex_item_width = width - 52;
export const styles = StyleSheet.create({
  sub_view: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "100%",
    height: height / 2
  },
  sub_img: {
    width: 80,
    height: 80
  },
  sub_txt: {
    color: "#CCCCCC",
    marginTop: 10
  },
  sub_reload_txt: {
    color: "#1e88e5",
    textDecorationLine: "underline",
    marginTop: 3
  }
});
