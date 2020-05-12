import React, { Component } from "react";
import {
  Modal,
  Text,
  TouchableOpacity,
  View,
  Alert,
  StatusBar,
  Image,
  PermissionsAndroid,
  TouchableHighlight,
  Linking
} from "react-native";
import { CameraKitCameraScreen } from "react-native-camera-kit";
import { isNullnUndifined } from "./../../checkValue/ValueChecker";
import { icons } from "../../assets/icons/IconsConfig";
import { styles } from "./../../styles/scannerOrderStyle";
class ScannerOrder extends Component {
  constructor() {
    super();
    this.state = {
      qrvalue: "",
      opneScanner: false
    };
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor("transparent");
        StatusBar.setBarStyle("dark-content");
      }
    });
    this.onOpneScanner();
  }

  onOpenlink() {
    Linking.openURL(this.state.qrvalue);
  }

  onBarcodeScan(qrvalue) {
    //called after te successful scanning of QRCode/Barcode
    this.setState({ qrvalue: qrvalue });
    this.setState({ opneScanner: false });
  }

  onOpneScanner() {
    //To Start Scanning
    if (this.state.qrvalue === "") {
      if (Platform.OS === "android") {
        //Calling the camera permission function
        this.requestCameraPermission();
      } else {
        this.setState({ qrvalue: "" });
        this.setState({ opneScanner: true });
      }
    }
  }
  requestCameraPermission = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.CAMERA,
      {
        title: "ກະລຸນາອະນຸຍາດ",
        message: "ອະນຸຍາດໃຫ້ເຂົ້າເຖິງກອ້ງເພື່ອສະແກນຄິວອາໂຄດ"
      }
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      //If CAMERA Permission is granted
      this.setState({ qrvalue: "" });
      this.setState({ opneScanner: true });
    } else {
      alert("CAMERA permission denied");
    }
  };
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <View style={{ flex: 1 }}>
        <StatusBar hidden={true} />

        {this.state.qrvalue !== "" ? (
          <View style={styles.container}>
            <Image
              source={icons.check_mark_green_256}
              style={styles.check_mark}
            />
            <Text style={styles.header_txt}>Confirm Received !</Text>
            <Text style={styles.more_detail}>Your order was received.</Text>
            <Text style={styles.more_detail}>
              For more details, Please check under History tab.
            </Text>
            <TouchableOpacity style={styles.ok_btn} onPress={() => goBack()}>
              <Text style={styles.ok_txt}>OK</Text>
            </TouchableOpacity>
            {/* </View> */}
          </View>
        ) : (
          <CameraKitCameraScreen
            showFrame={true}
            scanBarcode={true}
            laserColor={"#FF3D00"}
            frameColor={"#00C853"}
            colorForScannerFrame={"black"}
            onReadCode={event =>
              this.onBarcodeScan(event.nativeEvent.codeStringValue)
            }
          />
        )}
        <TouchableOpacity onPress={() => goBack()} style={styles.back_btn}>
          <Image
            source={icons.multiply_black_outline_50}
            style={styles.back_btn_icon}
          />
        </TouchableOpacity>
      </View>
    );
  }
  onScanComplete = event => {
    if (isNullnUndifined(event.nativeEvent.codeStringValue) === false) {
      // alert(event.nativeEvent.codeStringValue);
      this.props.navigation.navigate("MyOrder");
    }
  };
}
export default ScannerOrder;
