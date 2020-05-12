import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert,
  Animated
} from "react-native";
import auth, { firebase } from "@react-native-firebase/auth";
import { Container, Content, Header } from "native-base";
import { icons } from "../../assets/icons/IconsConfig";
import { SimpleLoading } from "./../loadingoverlay/AppLoading";
import { connect } from "react-redux";
import AsyncStorage from "@react-native-community/async-storage";
import CodeFiled from "react-native-confirmation-code-field";
import { StackActions, NavigationActions } from "react-navigation";
import { storeActiveUser } from "./../../functions/userManage";
// API ------
import { url, ads } from "./../../apis/Url";
import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR
} from "../../styles/phoneVerificationStyle";
const codeLength = 6;
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "TabNavigator" })]
});
class PhoneVerification extends Component {
  state = {
    fbdata: this.props.navigation.getParam("fbdata"),
    phone: this.props.navigation.getParam("phone"),
    phoneAuth: this.props.navigation.getParam("result"),
    status: this.props.navigation.getParam("status"),
    onloading: false
  };
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
      }
      StatusBar.setBarStyle("dark-content");
    });
    // console.log(JSON.stringify(this.state.fbdata));
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  _animationsColor = [...new Array(codeLength)].map(
    () => new Animated.Value(0)
  );
  _animationsScale = [...new Array(codeLength)].map(
    () => new Animated.Value(1)
  );

  onFinishCheckingCode = async code => {
    this.setState({ onloading: true });
    const phoneAuth = this.state.phoneAuth;
    try {
      const result = await phoneAuth.confirm(code); // User entered code
      if (result) {
        this.addFbUser();
      } else {
        alert(JSON.stringify(result));
      }
      // console.log(result);
      this.setState({ onloading: false });
      // Successful login - onAuthStateChanged is triggered
    } catch (e) {
      Alert.alert(
        this.props.lang.verification_failed,
        this.props.lang.pin_code_is_incorrect
      );
      this.setState({ onloading: false });
    }
  };

  animateCell({ hasValue, index, isFocused }) {
    Animated.parallel([
      Animated.timing(this._animationsColor[index], {
        toValue: isFocused ? 1 : 0,
        duration: 250
      }),
      Animated.spring(this._animationsScale[index], {
        toValue: hasValue ? 0 : 1,
        duration: hasValue ? 300 : 250
      })
    ]).start();
  }
  cellProps = ({ /*index, isFocused,*/ hasValue }) => {
    if (hasValue) {
      return {
        style: [styles.input, styles.inputNotEmpty]
      };
    }
    return {
      style: styles.input
    };
  };

  containerProps = { style: styles.inputWrapStyle };

  render() {
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={styles._header} noShadow={true}>
          <TouchableOpacity style={styles.btn_back} onPress={() => goBack()}>
            <Image style={{ width: 18, height: 18 }} source={icons.back_dark} />
          </TouchableOpacity>
        </Header>
        <Content style={styles.content}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          <View style={styles.inputWrapper}>
            <Text style={styles.inputLabel}>
              {this.props.lang.phone_verification}
            </Text>
            <Text style={styles.inputSubLabel}>
              {this.props.lang.please_type_the_validation_code_sent}
            </Text>
            <Text style={styles.inputSubLabel}>
              {this.props.lang.to} + 856 20 {this.state.phone}
            </Text>
            <CodeFiled
              blurOnSubmit={false}
              variant="border-b"
              codeLength={6}
              keyboardType="numeric"
              cellProps={this.cellProps}
              containerProps={this.containerProps}
              onFulfill={this.onFinishCheckingCode}
            />
            <Text>{this.state.status}</Text>
            {/* <View style={styles.wrong_pass_view}>
              <Image
                resizeMode={"contain"}
                source={icons.warning}
                style={styles.warning_img}
              />
              <Text style={styles.warning_txt}>Wrong code !</Text>
            </View> */}
            <Text style={styles.did_not_receive_code}>
              {this.props.lang.dont_you_receive_any_code}
            </Text>
            <TouchableOpacity onPress={() => this.onSend()}>
              <Text style={styles.resend_txt}>
                {this.props.lang.resend_new_code}
              </Text>
            </TouchableOpacity>
          </View>
          {SimpleLoading(this.state.onloading)}
        </Content>
      </Container>
    );
  }
  addFbUser() {
    const user = this.state.fbdata;
    fetch(ads + url.cus_register, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cus_FB: [
          {
            fb_id: user.id !== undefined ? user.id : null,
            cus_name: user.name !== undefined ? user.name : null,
            cus_phone: this.state.phone,
            cus_email: user.email !== undefined ? user.email : null,
            cus_profile_img: user.id !== undefined ? user.id : null
          }
        ]
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        // alert(JSON.stringify(responseJson));
        storeActiveUser(this.props.currentDis, responseJson);
        this.setState({ onloading: false });
        this.props.navigation.dispatch(resetAction);
      })
      .catch(error => {
        this.setState({ onloading: false });
        Alert.alert(
          this.props.lang.something_went_wrong,
          this.props.lang.server_not_response
        );
      });
  }
  async onSend() {
    this.setState({ status: "sending..." });
    await firebase
      .auth()
      .verifyPhoneNumber("+85620" + this.state.phone)
      .on(
        "state_changed",
        phoneAuthSnapshot => {
          switch (phoneAuthSnapshot.state) {
            case firebase.auth.PhoneAuthState.CODE_SENT:
              this.setState({ status: this.props.lang.code_sent });
              break;
            case firebase.auth.PhoneAuthState.ERROR:
              this.setState({ status: this.props.lang.code_send_error });
              // console.log();
              // console.log(phoneAuthSnapshot.error);
              break;
            case firebase.auth.PhoneAuthState.AUTO_VERIFY_TIMEOUT:
              // this.setState({ status: "auto verify on android timed out" });
              break;
            case firebase.auth.PhoneAuthState.AUTO_VERIFIED:
              // console.log("auto verified on android");
              // console.log(phoneAuthSnapshot);
              break;
          }
        },
        error => {
          Alert.alert(
            this.props.lang.something_went_wrong,
            this.props.lang.can_not_verify_phone_this_time
          );
        },
        phoneAuthSnapshot => {
          this.setState({
            phoneAuth: phoneAuthSnapshot,
            status: "Code sent !"
          });
        }
      );
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
export default connect(mapStateToProps, mapDispatchToProps)(PhoneVerification);
