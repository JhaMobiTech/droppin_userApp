import React from "react";
import Modal from "react-native-modal";
import { View, Text, Image, ActivityIndicator, Dimensions } from "react-native";
// import LottieView from "lottie-react-native";
import { lottieLoader } from "./../../assets/jsons/loading/LottieLoader";
const { width, height } = Dimensions.get("screen");
export const SimpleLoading = visible => {
  return (
    <Modal
      isVisible={visible}
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <ActivityIndicator size={"large"} color={"pink"} />
    </Modal>
  );
};
export const SimpleLoadingHori = () => {
  return (
    <View
      style={{
        width: "100%",
        height: 150,
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <ActivityIndicator
        size={"large"}
        // style={{ width: 200, height: 100 }}
      />
    </View>
  );
};
export const SearchAndLocate = () => {
  return (
    <View
      style={{
        height: 150,
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center"
      }}
    >
      <ActivityIndicator
        size={"large"}
        // style={{ width: 200, height: 100 }}
      />
    </View>
  );
};
