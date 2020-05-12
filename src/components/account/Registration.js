import React, { Component } from "react";
import {
  View,
  TextInput,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Alert
} from "react-native";
import { Container, Content, Header } from "native-base";
import { icons } from "../../assets/icons/IconsConfig";
import { styles } from "../../styles/registrationStyle";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { ads, url } from "../../apis/Url";
import {
  setActiveProccess,
  timeoutPromise,
  onReload
} from "./../../functions/connectionManage";
import auth, { firebase } from "@react-native-firebase/auth";
class Registration extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis && this.props.currentDis, "done");
    this.state = {
      name: "",
      email: "",
      phone: "",
      password: "",
      confirm_password: "",
      validPhone: null,
      validName: null
    };
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
      }
      StatusBar.setBarStyle("dark-content");
    });
    this.unsub = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        await auth().signOut();
      }
    });
  }
  componentWillUnmount() {
    this._navListener.remove();
    this.unsub();
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={styles._header} noShadow={true}>
          <TouchableOpacity style={styles.btn_back} onPress={() => goBack()}>
            <Image style={{ width: 18, height: 18 }} source={icons.back_dark} />
          </TouchableOpacity>
          <View></View>
          <View></View>
        </Header>
        <Content style={styles.content}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          <View style={styles.v_header}>
            <Text style={styles.txt_header}>{this.props.lang.register}</Text>
          </View>
          <View style={styles.v_input}>
            <View style={styles.input_type}>
              <Image
                source={icons.avatar_dark}
                style={{ width: 14, height: 17 }}
              />
              <TextInput
                style={styles.txt_type}
                placeholder={`${this.props.lang.name}`}
                placeholderTextColor="#9e9e9e"
                value={this.state.name}
                onChangeText={txt => {
                  this.setState({ name: txt });
                  setActiveProccess(this.props.currentDis && this.props.currentDis, "loading");
                  // timeoutPromise(
                  //   10000,
                  //   // this.checkValidUserName(txt),
                  //   this.props,
                  //   null
                  // );
                }}
              />
            </View>
            {this.state.validName !== true && this.state.validName !== null && (
              <Text
                style={{
                  color: "red",
                  textAlign: "right",
                  alignSelf: "flex-end",
                  marginTop: 3
                }}
              >
                {this.state.validName == false
                  ? "ຊື່ນີ້ຖືກນໍາໃຊ້ແລ້ວ !"
                  : this.state.validName}
              </Text>
            )}
            <View style={styles.input_type}>
              <Image
                source={icons.mail_dark}
                style={{ width: 18, height: 12 }}
              />
              <TextInput
                style={styles.txt_type}
                placeholder={`${this.props.lang.email}`}
                placeholderTextColor="#9e9e9e"
                value={this.state.email}
                onChangeText={txt => this.setState({ email: txt })}
              />
            </View>
            <View style={styles.input_type}>
              <Image
                source={icons.phone_dark}
                style={{ width: 17, height: 17 }}
              />
              <Text style={{ color: "#9e9e9e", marginLeft: 10 }}>+85620 -</Text>

              <TextInput
                style={[styles.txt_type, { marginLeft: 0 }]}
                placeholder={` ${this.props.lang.phone_number}`}
                placeholderTextColor="#9e9e9e"
                value={this.state.phone}
                onChangeText={txt => {
                  this.setState({ phone: txt });
                  // this.checkValidPhone(txt);
                }}
                maxLength={8}
                keyboardType={"phone-pad"}
                returnKeyType={"next"}
              />
            </View>
            {this.state.validPhone !== true && this.state.validPhone !== null && (
              <Text
                style={{
                  color: "red",
                  textAlign: "right",
                  alignSelf: "flex-end",
                  marginTop: 3
                }}
              >
                {this.state.validPhone == false
                  ? "ເບີນີ້ຖືກນໍາໃຊ້ແລ້ວ !"
                  : this.state.validPhone}
              </Text>
            )}
            <View style={styles.input_type}>
              <Image
                source={icons.lock_dark}
                style={{ width: 14, height: 18 }}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.txt_type}
                placeholder={`${this.props.lang.password}`}
                placeholderTextColor="#9e9e9e"
                value={this.state.password}
                onChangeText={txt => this.setState({ password: txt })}
              />
            </View>
            <View style={styles.input_type}>
              <Image
                source={icons.lock_cf_dark}
                style={{ width: 14, height: 20 }}
              />
              <TextInput
                secureTextEntry={true}
                style={styles.txt_type}
                placeholder={`${this.props.lang.confirm_password}`}
                placeholderTextColor="#9e9e9e"
                value={this.state.confirm_password}
                onChangeText={txt => this.setState({ confirm_password: txt })}
              />
            </View>
          </View>
          <View style={styles.v_register}>
            <TouchableOpacity onPress={() => this.onRegistrationPressed()}>
              <LinearGradient
                style={styles.btn_register}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ff9100", "#ff3d00"]}
              >
                <Text
                  style={styles.txt_register}
                >{`${this.props.lang.register}`}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          <View style={styles.txt_click}>
            <Text style={styles.txt_by}>
              By clicking Register you accept our
            </Text>
          </View>
          <TouchableOpacity style={styles.btn_click}>
            <Text style={styles.txt_tem}>
              Terms of Service and Privacy Policy
            </Text>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
  onRegistrationPressed() {
    const { name, email, password, confirm_password, phone } = this.state;
    if (name == "") {
      Alert.alert(
        this.props.lang.warning,
        this.props.lang.name + this.props.lang.is_required
      );
    } else if (email == "") {
      Alert.alert(
        this.props.lang.warning,
        this.props.lang.email + this.props.lang.is_required
      );
    } else if (phone == "") {
      Alert.alert(
        this.props.lang.warning,
        this.props.lang.phone_number + this.props.lang.is_required
      );
    } else if (phone.length < 8) {
      Alert.alert(
        this.props.lang.warning,
        this.props.lang.phone_number + this.props.lang.must_be_8
      );
    } else if (password == "") {
      Alert.alert(
        this.props.lang.warning,
        this.props.lang.password + this.props.lang.is_required
      );
    } else if (password !== confirm_password) {
      Alert.alert(
        this.props.lang.warning,
        this.props.lang.confirm_password + this.props.lang.is_not_match
      );
    } else {
      if (this.state.validPhone == false) {
        alert("This phone has been used !");
      } else if (this.state.validName == false) {
        alert("This name has been used !");
      } else {
        // firebase.auth().signOut();
        this.props.navigation.navigate("PhoneAuthentication", {
          cus_user: {
            cus_name: this.state.name,
            cus_email: this.state.email,
            cus_phone: this.state.phone,
            cus_password: this.state.password
          }
        });
      }
    }
  }
  checkValidUserName(name) {
    return fetch(ads + url.check_name, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        cus_name: name
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson === "OK") {
          this.setState({ validName: true });
        } else {
          this.setState({ validName: false });
        }
        setActiveProccess(this.props.currentDis && this.props.currentDis, "done");
      })
      .catch(error => {
        console.log(error);
        setActiveProccess(this.props.currentDis && this.props.currentDis, "failed");
      });
  }
  checkValidPhone(phoneNum) {
    if (phoneNum.length < 8) {
      this.setState({ validPhone: "ທ່ານປ້ອນເບີໂທບໍ່ຄົບ !" });
    } else {
      // fetch(ipdp + url.check_phone, {});
      setActiveProccess(this.props.currentDis && this.props.currentDis, "loading");
      timeoutPromise(
        10000,
        fetch(ads + url.check_phone, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            cus_phone: phoneNum
          })
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson === "OK") {
              this.setState({ validPhone: true });
            } else {
              this.setState({ validPhone: false });
            }
            setActiveProccess(this.props.currentDis && this.props.currentDis, "done");
          })
          .catch(error => {
            console.log(error);
            setActiveProccess(this.props.currentDis && this.props.currentDis, "failed");
          }),
        this.props,
        null
      );
    }
  }
}
// redux ------------------------------------------------------------------
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
export default connect(mapStateToProps, mapDispatchToProps)(Registration);
