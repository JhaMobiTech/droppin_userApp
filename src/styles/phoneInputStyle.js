import { Platform, StyleSheet } from "react-native";
import { fonts } from "./../assets/fonts/fontConfig";
export const styles = StyleSheet.create({
  header: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0
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
  content_style: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -73
  },
  phone_veri_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 30
  },
  code_number_view: {
    width: 326,
    height: 51,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 60,
    marginTop: 60
  },
  code_box: {
    width: 40,
    height: 50,
    borderRadius: 5,
    textAlign: "center",
    margin: 2
  },
  verify_btn: {
    width: 300,
    height: 49,
    borderRadius: 25,
    backgroundColor: "#FC9E3C",
    justifyContent: "center",
    alignItems: "center"
  },
  verify_btn_txt: {
    fontFamily: fonts.Avenir.Heavy,
    fontSize: 20,
    color: "#fff"
  },
  phon_box_view: {
    width: 300,
    height: 51,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 30,
    backgroundColor: "#eeeeee",
    borderRadius: 25,
    paddingLeft: 25
  },
  phone_box: {
    flex: 1,
    height: 50,
    borderRadius: 12,
    fontSize: 18,
    color: "#757575",
    fontFamily: fonts.Avenir.R,
    fontWeight: "normal"
  },
  country_code: {
    fontFamily: fonts.Avenir.R,
    fontSize: 18,
    color: "gray",
    fontWeight: "normal"
  },
  inputWrapStyle: {
    height: 50,
    marginTop: 30
  },
  input: {
    height: 50,
    width: 40,
    borderRadius: 3,
    color: "#fff",
    backgroundColor: "rgba(255,255,255,0.3)"
  },
  inputNotEmpty: {
    backgroundColor: "rgba(0,0,0,0)"
  }
});
