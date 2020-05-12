import { Platform } from "react-native";
export const fonts = {
  Poppins: {
    // Bold: "Poppins-Bold",
    // Italic: "Poppins-Italic",
    // Medium: "Poppins-Medium",
    // Regular: "Poppins-Regular"
    Bold: Platform.OS == "ios" ? "Avenir-Black" : "Avenir Black",
    Italic: Platform.OS == "ios" ? "Avenir-Heavy" : "avenir Heavy",
    Medium: Platform.OS == "ios" ? "Avenir-Medium" : "Avenir Medium",
    Regular: Platform.OS == "ios" ? "Avenir-Roman" : "Avenir Roman"
  },
  Avenir: {
    Black: Platform.OS == "ios" ? "Avenir-Black" : "Avenir Black",
    Heavy: Platform.OS == "ios" ? "Avenir-Heavy" : "avenir Heavy",
    Medium: Platform.OS == "ios" ? "Avenir-Medium" : "Avenir Medium",
    Roman: Platform.OS == "ios" ? "Avenir-Roman" : "Avenir Roman"
  }
};
