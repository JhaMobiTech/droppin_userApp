import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "../assets/fonts/fontConfig";
const { width, height } = Dimensions.get("screen");
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
  txt_header: {
    fontSize: 18,
    color: "#282C37",
    fontFamily: fonts.Poppins.Regular
  },
  content: {
    backgroundColor: "#F9F9F9",
    flex: 1
  },
  underLine: {
    borderBottomColor: "#FE6336",
    borderBottomWidth: 3
  },
  acctiveText: {
    color: "#000",
    fontSize: 16,
    fontFamily: fonts.Poppins.Bold
  },
  txt_Text: {
    fontSize: 16,
    fontFamily: fonts.Poppins.Bold,
    color: "#CCCCCC"
  },
  body_current: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    paddingHorizontal: 20
  },
  // Page Current
  item_cr: {
    width: "100%",
    height: 131,
    borderRadius: 6,
    backgroundColor: "#fff",
    marginTop: 22,
    borderWidth: 0.5,
    borderColor: "#F6F6F6"
  },
  item_cr_2: {
    width: "100%",
    height: 131,
    borderRadius: 6,
    backgroundColor: "#fff",
    marginTop: 14,
    borderWidth: 0.5,
    borderColor: "#F6F6F6"
  },
  v_drivered_ss: {
    flexDirection: "row",
    alignItems: "center"
  },
  img_yes: {
    width: 10,
    height: 8,
    marginRight: 10
  },
  item_cr_3: {
    width: "100%",
    height: 159,
    borderRadius: 6,
    backgroundColor: "#fff",
    marginTop: 14,
    borderWidth: 0.5,
    borderColor: "#F6F6F6"
  },
  item_ht_1: {
    width: "100%",
    height: 159,
    borderRadius: 6,
    backgroundColor: "#fff",
    marginTop: 22,
    borderWidth: 0.5,
    borderColor: "#F6F6F6"
  },
  v_top1: {
    width: "100%",
    height: 32,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: 15
  },
  txt_v1: {
    color: "#919191",
    fontFamily: fonts.Poppins.Bold,
    fontSize: 10
  },
  v_top2: {
    width: "100%",
    height: 23,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15
  },
  txt_v2: {
    color: "#000",
    fontSize: 14,
    fontFamily: fonts.Poppins.Bold
  },
  txt2_v2: {
    color: "#000",
    fontSize: 14,
    fontFamily: fonts.Poppins.Regular
  },
  v_top3: {
    width: "100%",
    // height: 32,
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 23,
    paddingRight: 15,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#F9F9F9"
  },
  txt_v3: {
    color: "#F5A623",
    fontSize: 12,
    fontFamily: fonts.Poppins.Regular,
    marginLeft: 10
  },
  v_v3: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1
  },
  v_v3_2: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end"
  },
  txt_v3_1: {
    color: "#4A4A4A",
    fontSize: 12
  },
  circle: {
    width: 5,
    height: 5,
    marginLeft: 5,
    marginRight: 5
  },
  v_top4: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15
  },
  btn_track: {
    width: 106,
    height: 26,
    borderWidth: 1,
    borderColor: "#FE6336",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 7
  },
  btn_review: {
    width: 106,
    height: 26,
    borderWidth: 1,
    borderColor: "#FE6336",
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 7,
    paddingRight: 25
  },
  txt_v4_1: {
    color: "#FE6336",
    fontSize: 11,
    fontFamily: fonts.Poppins.Regular
  },
  btn_scan: {
    width: 125,
    height: 26,
    borderRadius: 4,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  },
  _txt_ck: {
    color: "#fff",
    fontSize: 11,
    fontFamily: fonts.Poppins.Bold
  },
  v_show_hide: {
    flex: 1,
    height: 32,
    flexDirection: "row"
  },
  drivered: {
    flex: 1,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row"
  },
  v_txt_dri: {
    flex: 1,
    //alignItems: 'center',
    justifyContent: "center"
  },
  txt_date: {
    color: "#06C358",
    fontSize: 10,
    fontFamily: fonts.Poppins.Regular
  },
  recode: {
    color: "#8E8E8E",
    fontSize: 11,
    fontFamily: fonts.Poppins.Medium
  },
  viewModal_1: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    paddingBottom: 20
  },
  modal_container: {
    width: width - 60,
    height: height - 100,
    borderRadius: 16
  },
  txt_headModal: {
    color: "#fff",
    fontSize: 18,
    fontFamily: fonts.Poppins.Bold
  },
  txt_numberOrder: {
    color: "#fff",
    fontSize: 18,
    fontFamily: fonts.Avenir.Medium
  },
  v_imgHeader: {
    width: "100%",
    backgroundColor: "#FD7138",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },
  img_style: {
    width: "100%",
    height: "100%",
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16
  },
  v_star: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15
  },
  v_selectStar: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  txt_seclectStar: {
    color: "#373A3D",
    fontSize: 14,
    fontFamily: fonts.Poppins.Bold
  },
  inPut_style: {
    flex: 1,
    borderColor: "#DCDCDC",
    borderWidth: 1,
    borderRadius: 13,
    paddingHorizontal: 10,
    justifyContent: "flex-start"
  },
  txt_upload_photo: {
    color: "#000",
    fontSize: 14,
    fontFamily: fonts.Poppins.Regular
  },
  add_img_: {
    width: 78,
    height: 78,
    borderRadius: 8,
    marginRight: 10
  },
  btn_Done: {
    width: "100%",
    height: 44,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center"
  },
  txt_Done: {
    color: "#fff",
    fontSize: 18,
    fontFamily: fonts.Poppins.Bold
  },
  v_btn_done: {
    width: "100%",
    paddingHorizontal: 26,
    marginTop: 25
  },
  v_select_img: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: 26,
    marginTop: 8
  },
  v_txt_selectPhoto: {
    width: "100%",
    paddingLeft: 30,
    marginTop: 15
  }
});
