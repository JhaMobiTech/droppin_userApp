import React, { Component } from "react";
import {
  LoginManager,
  AccessToken,
  LoginButton,
  GraphRequest,
  GraphRequestManager
} from "react-native-fbsdk";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  SafeAreaView,
  Platform,
  Alert
} from "react-native";
import { connect } from "react-redux";
import MapView, { Marker } from "react-native-maps";
import { Container, Content, Header, Card } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
import { styles } from "../../styles/loginStyle";
import { icons } from "../../assets/icons/IconsConfig";
import { SimpleLoading } from "./../loadingoverlay/AppLoading";
import { StackActions, NavigationActions } from "react-navigation";
import { storeActiveUser, manualLoggin } from "./../../functions/userManage";
import {
  setActiveProccess,
  timeoutPromise,
  onReload
} from "./../../functions/connectionManage";
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "TabNavigator" })]
});
// API ------
import { url, ads } from "./../../apis/Url";
class Login extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "done");
    this.state = {
      hide_pass: true,
      isloading: false,
      username: "",
      password: ""
    };
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
      }
      StatusBar.setBarStyle("dark-content");
    });
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { goBack } = this.props.navigation;
    const { selected, makedef, onAdd } = this.state;
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
        <Content contentContainerStyle={styles.content}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          {/* ---------- */}
          <Text style={styles.text_login_style}>{this.props.lang.login}</Text>
          <View style={styles.text_input_container}>
            <TextInput
              value={this.state.username}
              style={styles.txt_input}
              underlineColorAndroid="transparent"
              placeholder={`${this.props.lang.user_name}`}
              placeholderTextColor="#979899"
              autoCapitalize="none"
              onChangeText={txt => this.setState({ username: txt })}
            />
          </View>
          {/* <View style={styles.warning_container}>
            <Image
              resizeMode={"contain"}
              source={icons.warning}
              style={styles.warning_img_container}
            />
            <Text style={styles.txt_warning}>Wrong Email</Text>
          </View> */}
          {/* ------------- */}
          <View style={styles.text_input_container}>
            <TextInput
              value={this.state.password}
              secureTextEntry={this.state.hide_pass}
              style={styles.txt_input}
              underlineColorAndroid="transparent"
              placeholder={`${this.props.lang.password}`}
              placeholderTextColor="#979899"
              autoCapitalize="none"
              onChangeText={txt => this.setState({ password: txt })}
            />
            <TouchableOpacity
              style={styles.eye_touch}
              onPress={() =>
                this.setState({ hide_pass: !this.state.hide_pass })
              }
            >
              <Image source={icons.eyepassword} style={styles.eye_icon} />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.warning_container}>
            <Image
              resizeMode={"contain"}
              source={icons.warning}
              style={styles.warning_img_container}
            />
            <Text style={styles.txt_warning}>Wrong Password</Text>
          </View> */}
          <View style={styles.forget_container}>
            <TouchableOpacity>
              <Text style={styles.forget_txt}>
                {this.props.lang.forget_password}
              </Text>
            </TouchableOpacity>
          </View>
          {/*     button------ */}

          {this.props.proccess == "failed" && (
            <View
              style={[styles.warning_container, { justifyContent: "center" }]}
            >
              <Image
                resizeMode={"contain"}
                source={icons.warning}
                style={styles.warning_img_container}
              />
              <Text style={styles.txt_warning}>
                Internet connection failed !
              </Text>
            </View>
          )}
          <TouchableOpacity
            style={styles.submit_touch}
            onPress={() => this.onLoginPressed()}
          >
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#FE892C", "#FE892C", "#FF5E41"]}
              style={styles.submit_button}
            >
              <Text style={styles.submit_txt}>{this.props.lang.login}</Text>
            </LinearGradient>
          </TouchableOpacity>
          {/* ---------- */}
          <View style={styles.quick_container}>
            <View style={styles.seperate} />
            <Text style={styles.quickly_txt}>
              {this.props.lang.quickly_login_with}
            </Text>
            <View style={styles.seperate} />
          </View>
          <View style={styles.quickly_btn}>
            <TouchableOpacity
              onPress={() => this.handleFacebookLogin()}
              activeOpacity={0.8}
              style={[styles.social_btn, { marginRight: 20 }]}
            >
              <Image source={icons.facebook_320} style={styles.social_icon} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.8} style={styles.social_btn}>
              <Image
                source={icons.google_icon_520}
                style={styles.social_icon}
              />
            </TouchableOpacity>
          </View>
          {/* -------- */}
          <View style={styles.register_con}>
            <Text style={{ fontSize: 13 }}>{this.props.lang.not_a_member}</Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.props.navigation.navigate("Registration")}
            >
              <Text style={styles.register_txt}>
                {this.props.lang.register}
              </Text>
            </TouchableOpacity>
          </View>
          {SimpleLoading(this.props.proccess == "loading" ? true : false)}
        </Content>
      </Container>
    );
  }
  onLoginPressed() {
    if (this.state.username == "") {
      Alert.alert(
        this.props.lang.warning,
        this.props.lang.user_name + this.props.lang.is_required
      );
    } else if (this.state.password == "") {
      Alert.alert(
        this.props.lang.warning,
        this.props.lang.password + this.props.lang.is_required
      );
    } else {
      // setActiveProccess(this.props.currentDis, "loading");
      timeoutPromise(
        10000,
        manualLoggin(this.state.username, this.state.password, this.props),
        this.props,
        [this.props.lang.alert, this.props.lang.connection_failed]
      );
    }
  }

  // Login with facebook ------
  handleFacebookLogin = () => {
    // Attempt a login using the Facebook login dialog asking for default permissions.
    if (Platform.OS === "android") {
      LoginManager.setLoginBehavior("web_only");
    }
    // LoginManager.logOut();
    LoginManager.logInWithPermissions([
      "email"
      // "user_gender",
      // "user_birthday"
    ]).then(
      result => {
        if (result.isCancelled) {
          console.log("Login cancelled");
        } else {
          this.setState({ isloading: true });
          AccessToken.getCurrentAccessToken().then(data => {
            // console.log("Data: " + data.accessToken);
            const infoRequest = new GraphRequest(
              "me/",
              {
                accessToken: data.accessToken,
                parameters: {
                  fields: {
                    string:
                      "email,name,first_name,middle_name,last_name,birthday"
                  }
                }
              },
              (error, result) => {
                if (error) {
                  this.setState({ isloading: false });
                  Alert.alert(
                    this.props.lang.something_went_wrong,
                    this.props.lang.can_not_login_by_fb
                  );
                } else {
                  this.checkAccount(result);
                }
              }
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
          });
        }
      },
      error => {
        this.setState({ isloading: false });
        Alert.alert(
          this.props.login_failed,
          this.props.lang.can_not_login_by_fb
        );
      }
    );
  };

  checkAccount(result) {
    if (result !== undefined && result !== null && result.id !== undefined) {
      fetch(ads + url.check_fb_account_by_id, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          fb_id: result.id
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          console.log("Hello" + JSON.stringify(responseJson));
          if (responseJson == "NO") {
            this.setState({ isloading: false });
            this.props.navigation.navigate("PhoneInput", {
              fbdata: result
            });
          } else {
            storeActiveUser(this.props.currentDis, responseJson);
            this.setState({ isloading: false });
            this.props.navigation.dispatch(resetAction);
          }
        })
        .catch(error => {
          // console.error(error);
          this.setState({ isloading: false });
          Alert.alert(
            this.props.lang.something_went_wrong,
            this.props.there_is_error_while_checking_data
          );
        });
    } else {
      this.setState({ isloading: false });
    }
  }
}
const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    curentlang: state.setActiveLanguage.lang,
    proccess: state.setActiveProccess.proccess
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
