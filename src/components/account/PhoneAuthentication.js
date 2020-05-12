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
import { setActiveUser, storeActiveUser } from "./../../functions/userManage";
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
class PhoneAuthentication extends Component {
  state = {
    cus_user: this.props.navigation.getParam("cus_user"),
    onloading: false,
    result: null,
    phoneAuth: null
  };
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
      }
      StatusBar.setBarStyle("dark-content");
    });
    this.onSend();
    // this.signInWithPhone(this.state.cus_user.cus_phone);
  }
  componentWillUnmount() {
    this._navListener.remove();
    // this.unsub();
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
    this.addManualUser();
    try {
      const result = await phoneAuth.confirm(code); // User entered code
      console.log(result);
      this.addManualUser();
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
              {this.props.lang.to} + 856 20 {this.state.cus_user.cus_phone}
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
  addManualUser() {
    const user = this.state.cus_user;
    fetch(ads + url.cus_manual_register, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: user.cus_name,
        phone: user.cus_phone,
        password: user.cus_password,
        email: user.cus_email.toLowerCase(),
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status == 0 && responseJson.message == 'Validation Error.') {
          // setActiveProccess(props.currentDis, "done");
          alert(JSON.stringify(responseJson.data[0].msg));
        } else if (responseJson.status == 0) {
          // setActiveProccess(props.currentDis, "done");
          alert(JSON.stringify(responseJson.message));
        } else {
          storeActiveUser(this.props.currentDis, responseJson.data);
          this.setState({ onloading: false });
          this.props.navigation.dispatch(resetAction);
        }
      })
      .catch(error => {
        this.setState({ onloading: false });
        console.log('error ->', error);
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
      .verifyPhoneNumber("+85620" + this.state.cus_user.cus_phone, 60, true)
      .on(
        "state_changed",
        phoneAuthSnapshot => {
          switch (phoneAuthSnapshot.state) {
            case firebase.auth.PhoneAuthState.CODE_SENT:
              this.setState({ status: this.props.lang.code_sent });
              console.log("------------------------------");
              console.log(phoneAuthSnapshot);
              console.log("------------------------------");
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
              console.log("auto verified on android");
              console.log(phoneAuthSnapshot);
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
            status: "code sent !"
          });
          console.log([phoneAuthSnapshot]);
        }
      );
  }
  signInWithPhone = async phone => {
    try {
      const confirmation = await auth().signInWithPhoneNumber("+85620" + phone);
      this.setState({ result: confirmation });
    } catch (e) {
      console.log(e); // Invalid code
    }
  };
}
// -----------------------------------------
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
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhoneAuthentication);
