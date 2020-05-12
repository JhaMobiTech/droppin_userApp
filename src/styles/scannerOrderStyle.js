import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white"
  },
  back_btn: {
    position: "absolute",
    tintColor: "#fff",
    top: 10,
    left: 10,
    padding: 5
  },
  back_btn_icon: {
    width: 40,
    height: 40,
    tintColor: "#fff"
  },
  header_txt: {
    fontSize: 18,
    color: "gray",
    marginTop: 30,
    marginBottom: 15
  },
  result_container: {
    marginHorizontal: 30
  },
  check_mark: {
    width: 100,
    height: 100,
    alignSelf: "center"
  },
  ok_btn: {
    width: 150,
    height: 45,
    backgroundColor: "#23BEA6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    marginVertical: 30
  },
  ok_txt: {
    color: "#fff",
    fontWeight: "bold"
  },
  more_detail: {
    color: "gray"
  }
});
