import { StyleSheet } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";

export const styles = StyleSheet.create({
  _header: {
    backgroundColor: "#fff",
    paddingHorizontal: 18,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 0
  },
  btn_back: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  txt_header: {
    fontSize: 22,
    fontFamily: fonts.Poppins.Regular
  },
  content: {
    flex: 1,
    backgroundColor: "#fff"
  },
  v_header: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  v_input: {
    width: "100%",
    paddingHorizontal: 28,
    marginTop: 33
  },
  input_type: {
    width: "100%",
    height: 50,
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: "#D4D4D4",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: 16
  },
  txt_type: {
    fontSize: 14,
    marginLeft: 10,
    fontFamily: fonts.Poppins.Regular,
    flex: 1,
    marginTop: 5,
    color: "#616161"
  },
  btn_register: {
    width: "100%",
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  txt_register: {
    fontFamily: fonts.Poppins.Bold,
    fontSize: 16,
    color: "#fff"
  },
  v_register: {
    width: "100%",
    marginTop: 27,
    paddingHorizontal: 29
  },
  txt_click: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 25
  },
  btn_click: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  },
  txt_tem: {
    color: "#FE6336",
    fontSize: 13,
    fontFamily: fonts.Poppins.Regular
  },
  txt_by: {
    fontFamily: fonts.Poppins.Regular,
    fontSize: 13,
    color: "#4A4A4A"
  }
});
