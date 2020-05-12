import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";

export const styles = StyleSheet.create({
  _header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#fff"
  },
  back: {
    width: 18,
    height: 18
  },
  btn_back: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center"
  },
  content: {
    backgroundColor: "#fff",
    flex: 1
  },
  txt_status_header: {
    color: "#4A4A4A",
    fontSize: 22,
    fontFamily: fonts.Avenir.Heavy
  },
  v_bottom: {
    width: "100%",
    height: 63,
    marginBottom: 20,
    paddingRight: 20,
    marginTop: 15,
    alignItems: "flex-end",
    borderTopWidth: 0.5,
    borderTopColor: "#eeeeee"
  },
  btn_next: {
    width: 64,
    height: 64,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  txt_header2: {
    color: "#4A4A4A",
    fontSize: 18,
    fontFamily: fonts.Avenir.Black
  },
  v_txt_header2: {
    width: "100%",
    height: 58,
    borderTopWidth: 1,
    borderTopColor: "#F6F6F6",
    paddingLeft: 27,
    justifyContent: "flex-end"
  },
  card_visa: {
    width: "100%",
    height: Dimensions.get("screen").width / 2,
    borderRadius: Dimensions.get("screen").width * 0.018,
    backgroundColor: "#FE6336"
  },
  card_visa_2: {
    width: "100%",
    height: Dimensions.get("screen").width / 2,
    borderRadius: Dimensions.get("screen").width * 0.018,
    backgroundColor: "#FDFDFD"
  },
  v_of_card: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 10
  },
  v_of_visa: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 23,
    paddingHorizontal: 20
  },
  v_edit_: {
    width: 36,
    height: 19,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  v_edit_2: {
    width: 36,
    height: 19,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: "#000",
    justifyContent: "center",
    alignItems: "center"
  },
  txt_numberCard: {
    color: "#707070",
    fontSize: 10,
    fontFamily: fonts.Avenir.Heavy
  },
  v_edit_card: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  btn_circle_select: {
    width: 18,
    height: 18,
    borderRadius: 100,
    borderColor: "#D5D2D2",
    borderWidth: 1,
    marginLeft: 15
  },
  txt_edit: {
    color: "#fff",
    fontSize: 12
  },
  txt_edit_2: {
    color: "#000",
    fontSize: 12
  },
  v_big_visa: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 60
  },
  v_big_visa_2: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 55
  },
  v_txt_numberCard: {
    width: "100%",
    marginTop: -125,
    paddingLeft: 22
  },
  v_txt_numberCard_2: {
    width: "100%",
    marginTop: 20,
    paddingLeft: 22
  },
  numberCard: {
    color: "#fff",
    fontSize: 14,
    fontFamily: fonts.Avenir.Heavy
  },
  numberCard_2: {
    color: "#000",
    fontSize: 14,
    fontFamily: fonts.Avenir.Heavy
  },
  tile_txtCard: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    marginTop: 27
  },
  v_brinary_of_date: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 22,
    marginTop: 3
  },
  v_num: {
    width: "100%",
    paddingLeft: 22,
    marginTop: 5
  },
  txt_brinary: {
    color: "#fff",
    fontSize: 14,
    fontFamily: fonts.Avenir.Heavy
  },
  txt_brinary_2: {
    color: "#000",
    fontSize: 14,
    fontFamily: fonts.Avenir.Heavy
  },
  v_default: {
    width: "100%",
    paddingRight: 10,
    alignItems: "flex-end"
  },
  card_default: {
    width: 51,
    height: 16,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center"
  },
  txt_def: {
    color: "#FE6336",
    fontSize: 10,
    fontFamily: fonts.Avenir.Heavy
  }
});
