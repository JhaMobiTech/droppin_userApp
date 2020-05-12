import { StyleSheet, Platform } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";

export const CELL_SIZE = 40;
export const CELL_BORDER_RADIUS = 4;
export const DEFAULT_CELL_BG_COLOR = "#fff";
export const NOT_EMPTY_CELL_BG_COLOR = "#f4511e";
export const ACTIVE_CELL_BG_COLOR = "#f7fafe";

export default StyleSheet.create({
  txt_resending: {
    fontSize: 17,
    color: "#FE6336",
    fontFamily: fonts.Poppins.Regular,
    textAlign: "center"
  },
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
    fontSize: 27,
    fontFamily: fonts.Poppins.Regular
  },
  content: {
    flex: 1,
    backgroundColor: "#fff"
  },
  v_header: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center"
  },
  txt_header_2: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  t_h2: {
    color: "#000",
    fontSize: 17,
    fontFamily: fonts.Poppins.Regular
  },
  textInput: {
    padding: 0,
    margin: 0,
    flex: 1,
    fontSize: 20,
    color: "#FE4F34"
  },
  // ------------
  linearGradient: {
    minHeight: 555
  },
  inputWrapper: {
    alignItems: "center",
    justifyContent: "center"
  },
  inputLabel: {
    fontFamily: fonts.Avenir.Heavy,
    paddingTop: 100,
    paddingBottom: 10,
    color: "#0A1F44",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center"
  },
  inputSubLabel: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 17,
    color: "#0A1F44"
  },
  inputWrapStyle: {
    height: 50,
    marginTop: 30
  },
  input: {
    height: 50,
    width: 40,
    borderRadius: 3,
    color: "#000",
    backgroundColor: "rgba(0,0,0,0.1)",
    ...Platform.select({
      web: {
        lineHeight: 46
      }
    })
  },
  inputNotEmpty: {
    backgroundColor: "rgba(0,0,0,0)"
  },
  nextButton: {
    marginTop: 100,
    width: 70,
    height: 70,
    borderRadius: 80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // IOS
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    // Android
    elevation: 5
  },
  nextButtonArrow: {
    transform: [{ translateX: -3 }, { rotate: "45deg" }],
    borderColor: "#ff595f",
    width: 20,
    height: 20,
    borderWidth: 4,
    borderLeftWidth: 0,
    borderBottomWidth: 0
  },
  did_not_receive_code: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 17,
    color: "#B8BBC6",
    marginTop: 30
  },
  resend_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 17,
    color: "#FE6336"
  },
  wrong_pass_view: {
    flexDirection: "row",
    alignItems: "flex-end",
    marginTop: 10
  },
  warning_img: {
    width: 15,
    height: 15
  },
  warning_txt: {
    fontFamily: fonts.Avenir.Roman,
    fontSize: 12,
    color: "#B8BBC6",
    marginLeft: 5,
    marginBottom: -3
  }
});
