import { StyleSheet, Dimensions } from "react-native";
import { fonts } from "./../assets/fonts/fontConfig";
const { height, width } = Dimensions.get("screen");
export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    marginBottom: 20
  },
  header_txt: {
    fontFamily: fonts.Poppins.Bold,
    color: "#FE6336",
    fontSize: 25
  },

  logo: {
    width: 35,
    height: 35,
    marginBottom: 10,
    marginRight: 5
  },
  header_content: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  empty_box: {
    width: 70,
    height: 50
  },
  skip_btn: {
    paddingHorizontal: 20
  },
  skip_btn_txt: {
    color: "#FE6336",
    fontFamily: fonts.Poppins.Medium,
    fontSize: 18
  },
  desc_txt: {
    fontFamily: fonts.Poppins.Bold,
    fontSize: 24,
    color: "#272755",
    marginHorizontal: 20,
    marginBottom: 10,
    width: width - 40
  },
  slide_img: {
    width: width,
    height: width - 150
  },
  quickly_btn: {
    width: width - 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 20,
    paddingBottom: 3
  },
  social_btn: {
    width: 155,
    height: 52,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    shadowColor: "#e0e0e0",
    shadowOpacity: 1,
    shadowOffset: {
      height: 1,
      width: 1
    },
    elevation: 1,
    borderWidth: 1,
    borderColor: "#FE6336"
    // marginTop: 20
  },
  button_txt: {
    fontFamily: fonts.Poppins.Bold
  },
  register_con: {
    marginTop: 40,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 20
  },
  register_txt: {
    color: "#FE6336",
    fontSize: 13,
    fontFamily: fonts.Poppins.Bold
  },
  become: {
    fontSize: 13,
    fontFamily: fonts.Poppins.Regular
  },
  wrapper: {
    width: width,
    height: width - 100
  }
});
