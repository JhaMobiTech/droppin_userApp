import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StatusBar,
  Alert
} from "react-native";
import auth, { firebase } from "@react-native-firebase/auth";
import { styles } from "./../../styles/phoneInputStyle";
import { Container, Content, Header, Card } from "native-base";
import { icons } from "../../assets/icons/IconsConfig";
import { connect } from "react-redux";
import { SimpleLoading } from "./../loadingoverlay/AppLoading";
class PhoneInput extends React.Component {
  state = {
    phoneNumber: "",
    fbdata: this.props.navigation.getParam("fbdata"),
    status: "",
    onloading: false
  };
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
      }
      StatusBar.setBarStyle("dark-content");
    });

    // alert(JSON.stringify(this.state.fbdata));
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header noShadow={true} style={styles.header}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles._btn_back_dARK}
            onPress={() => goBack()}
          >
            <Image style={styles._iconBack_dark} source={icons.back_dark} />
          </TouchableOpacity>
        </Header>
        <Content contentContainerStyle={styles.content_style}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          <Text style={[styles.phone_veri_txt, { color: "#757575" }]}>
            {this.props.lang.phone_register}
          </Text>
          <Text
            style={{ color: "#9e9e9e", marginTop: 10, textAlign: "center" }}
          >
            {this.props.lang.please_enter_valid_phone_number}
          </Text>
          <View style={styles.phon_box_view}>
            <Text style={styles.country_code}>+856 20 </Text>
            <TextInput
              value={this.state.phoneNumber}
              keyboardType={"phone-pad"}
              autoFocus={true}
              maxLength={8}
              style={styles.phone_box}
              onChangeText={txt => this.setState({ phoneNumber: txt })}
            />
          </View>
          {/* --------- */}

          {/* ------------------------------------------------------ */}
          {/* <Text>user: {JSON.stringify(this.state.user)}</Text>
      <Text>user: {JSON.stringify(this.state.fbuserData)}</Text> */}
          {/* --------- */}

          <TouchableOpacity
            style={styles.verify_btn}
            onPress={() => this.onSend()}
          >
            <Text style={styles.verify_btn_txt}>{this.props.lang.send}</Text>
          </TouchableOpacity>
          {SimpleLoading(this.state.onloading)}
        </Content>
      </Container>
    );
  }
  async onSend() {
    this.setState({ onloading: true });
    if (this.state.phoneNumber == "" || this.state.phoneNumber.length < 8) {
      this.setState({ onloading: false });
      Alert.alert(
        this.props.lang.alert,
        this.props.lang.please_enter_your_phone_number
      );
    } else {
      try {
        const confirmation = await auth().signInWithPhoneNumber(
          "+85620" + this.state.phoneNumber
        );
        this.props.navigation.navigate("PhoneVerification", {
          result: confirmation,
          fbdata: this.state.fbdata,
          phone: this.state.phoneNumber,
          status: "Code sent !"
        });
        this.setState({ onloading: false });
      } catch (e) {
        console.log(e); // Invalid code
        this.setState({ onloading: false });
      }
      // await auth()
      //   .verifyPhoneNumber("+85620" + this.state.phoneNumber)
      //   .on(
      //     "state_changed",
      //     phoneAuthSnapshot => {
      //       switch (phoneAuthSnapshot.state) {
      //         case auth.PhoneAuthState.CODE_SENT:
      //           console.log("1 --- " + JSON.stringify(phoneAuthSnapshot));
      //           this.setState({ status: this.props.lang.code_sent });
      //           break;
      //         case auth.PhoneAuthState.ERROR:
      //           this.setState({ status: this.props.lang.code_send_error });
      //           // console.log();
      //           // console.log(phoneAuthSnapshot.error);
      //           break;
      //         case auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT:
      //           // this.setState({ status: "auto verify on android timed out" });
      //           break;
      //         case auth.PhoneAuthState.AUTO_VERIFIED:
      //           // console.log("auto verified on android");
      //           // console.log(phoneAuthSnapshot);
      //           break;
      //       }
      //     },
      //     error => {
      //       this.setState({ onloading: false });
      //       Alert.alert(
      //         this.props.lang.something_went_wrong,
      //         this.props.lang.can_not_verify_phone_this_time
      //       );
      //     },
      //     phoneAuthSnapshot => {
      //       console.log("1 --- " + JSON.stringify(phoneAuthSnapshot));
      //       this.props.navigation.navigate("PhoneVerification", {
      //         result: phoneAuthSnapshot,
      //         fbdata: this.state.fbdata,
      //         phone: this.state.phoneNumber,
      //         status: this.state.status
      //       });
      //       this.setState({ onloading: false });
      //     }
      //   );
    }
  }
}
const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    curentlang: state.setActiveLanguage.lang
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PhoneInput);
