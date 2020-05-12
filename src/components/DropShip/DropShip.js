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
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import { Container, Content, Header, Card } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";
import { styles } from "../../styles/dropShipStyle";
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
      pickUpAddress: "",
      dropOffAdress: ""
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
          <Text style={styles.text_header_style}>{this.props.lang.dropship}</Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles._btn_back_dARK}
            onPress={() => console.log("on bill clicked")}
          >
            <Image style={styles._iconBill_dark} source={icons.bill_dark} />
          </TouchableOpacity>
        </Header>
        <Content contentContainerStyle={styles.content}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          {/* ---------- */}
          <Image style={styles.deliveryBoy} source={icons.deliveryBoy} />
          <View style={styles.text_input_container}>
            <Image source={icons.pickUp} style={styles.pickUp} />
          
            <TextInput
              value={this.state.username}
              style={styles.txt_input}
              underlineColorAndroid="transparent"
              placeholder={`${this.props.lang.pick_up_location}`}
              placeholderTextColor="#979899"
              autoCapitalize="none"
              onChangeText={txt => this.setState({ pickUpAddress: txt })}
            />
          </View>
          <View style={styles.text_input_container}>
          <Image source={icons.dropPlace} style={styles.dropPlace} />
            <TextInput
              value={this.state.password}
              style={styles.txt_input}
              underlineColorAndroid="transparent"
              placeholder={`${this.props.lang.dropPlace}`}
              placeholderTextColor="#979899"
              autoCapitalize="none"
              onChangeText={txt => this.setState({ dropOffAdress: txt })}
            />
          </View>

          <View style={styles.v_card_1}>
              
          <Card style={styles.card_1}>
{/*             
          <Text style={styles.txt_name_item_details}>
                  {this.props.lang.item_details}
                </Text> */}
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> console.log("on document clicked")}>
                <Image style={styles.icon_h} source={icons.documents} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.documents}
                </Text>
               
              </TouchableOpacity>
            </View>
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> console.log("on food clicked")}>
                <Image style={styles.icon_f} source={icons.foods} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.foods}
                </Text>
                
              </TouchableOpacity>
            </View>
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> console.log("on cloths clicked")}>
                <Image style={styles.icon_co} source={icons.cloths} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.cloths}
                </Text>
                
              </TouchableOpacity>
            </View>
            <View style={styles.card_1_item}>
              <TouchableOpacity style={styles.btn_3_item} onPress={()=> console.log("on more clicked")}>
                <Image style={styles.icon_co} source={icons.more} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.more}
                </Text>
                
              </TouchableOpacity>
            </View>
          </Card>
        </View>



        <View style={styles.v_card_2}>
          <Card style={styles.card_2}>
            <View style={styles.card_2_item}>
              <Text style={styles.txt_upload_header_name}>
                {this.props.lang.upload_photo_header}
              </Text>
              <TouchableOpacity style={styles.btn_3_item}>
                <Image style={styles.icon_cam} source={icons.upload_photo} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.upload_photo}
                  </Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>

        <View style={styles.v_card_3}>
          <Card style={styles.card_3}>
          <Text style={styles.total_price_txt}>{this.props.lang.total_price}</Text>
            <View style={styles.card_3_item}>
            
            <TouchableOpacity
            style={styles.schedule_touch}
            onPress={() => this.onLoginPressed()}
           >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#2695F8", "#2695F8", "#2695F8"]}
                style={styles.schedule_button}
              >
              <Text style={styles.schedule_txt}>{this.props.lang.schedule_button}</Text>
            </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.deliver_touch}
            onPress={() => this.onLoginPressed()}
           >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#FE892C", "#FE892C", "#FE892C"]}                
                style={styles.deliver_button}
              >
              <Text style={styles.deliver_txt}>{this.props.lang.deliver_now_button}</Text>
            </LinearGradient>
            </TouchableOpacity>

            

            </View>
            <Text style={styles.total_amt_txt}>455 LAK</Text>
          </Card>
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
