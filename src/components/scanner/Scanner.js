import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Alert,
  StatusBar,
  Image
} from "react-native";
import { CameraKitCameraScreen } from "react-native-camera-kit";
import { icons } from "../../assets/icons/IconsConfig";
class Scanner extends Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor("transparent");
        StatusBar.setBarStyle("dark-content");
      }
    });
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />

        <CameraKitCameraScreen
          scanBarcode={true}
          laserColor={"#fff"}
          frameColor={"#fff"}
          showFrame={true}
          colorForScannerFrame={"black"}
          onReadCode={event => {
            alert(event.nativeEvent.codeStringValue);
          }}
        />
        <TouchableOpacity
          onPress={() => goBack()}
          style={{
            position: "absolute",
            tintColor: "#fff",
            top: 10,
            left: 10,
            padding: 5
          }}
        >
          <Image
            source={icons.multiply_black_outline_50}
            style={{
              width: 40,
              height: 40,
              tintColor: "#fff"
            }}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
export default Scanner;
