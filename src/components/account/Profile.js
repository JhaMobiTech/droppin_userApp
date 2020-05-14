import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Dimensions,
  SafeAreaView,
  Platform,
  Alert
} from "react-native";
import { withNavigationFocus } from "react-navigation";
import { connect } from "react-redux";
import { Container, Content, Header, Card } from "native-base";
import { icons } from "../../assets/icons/IconsConfig";
import { styles } from "../../styles/profileStyle";
import { url, ads } from "./../../apis/Url";
import { imgPath } from "./../../apis/IamgePath";
import Svg, {
  Rect,
  Ellipse,
  Polygon,
  Defs,
  LinearGradient as LinearGradients,
  Stop,
  Circle
} from "react-native-svg";
import { removeActiveUser, getUserDetails } from "./../../functions/userManage";
const isAndroid = Platform.OS == "android" ? true : false;

class Profile extends Component {
  state = {
    user: "Hello",
  };
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("light-content");
      isAndroid && StatusBar.setTranslucent(true);
      isAndroid && StatusBar.setBackgroundColor("transparent");
    });
    this.setUserData();
  }

  setUserData = () => {
    const { user } = this.props;
    if (user !== null) {
      getUserDetails(user._id, user.token, this.props).then((userObject) => {
        userObject && this.setState({ user: userObject });
      })
    }
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const dataReason = [
      // {
      //   title: this.props.lang.my_coin,
      //   img: require("../../assets/icons/Iconfiles/next/donla_orange.png"),
      //   target: "Coinhistory"
      // },
      {
        title: this.props.lang.edit_profile,
        img: require("../../assets/icons/Iconfiles/next/edit_blue.png"),
        target: "ProfileEditForm"
      },
      // {
      //   title: this.props.lang.wallet,
      //   img: require("../../assets/icons/Iconfiles/next/current_orange.png"),
      //   target: "MyWallet"
      // },
      {
        title: this.props.lang.address,
        img: require("../../assets/icons/Iconfiles/next/home_red.png"),
        target: "ShippingAddress"
      },
      {
        title: this.props.lang.language,
        img: require("../../assets/icons/Iconfiles/next/lg_green.png"),
        target: "ChangeLangeguage"
      },
      {
        title: this.props.lang.logout,
        img: require("../../assets/icons/Iconfiles/next/logout_orange.png"),
        target: "TabNavigator"
      }
    ];
    const { width, height } = Dimensions.get("screen");
    const { user } = this.state;
    return (
      <Container>
        <View style={styles.v_all_}>
          <Svg
            height={`${width * 0.79}`}
            style={{ width: "100%" }}
            width={`${width}`}
          >
            <Defs>
              <LinearGradients id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <Stop offset="0" stopColor="#FD6937" stopOpacity="1" />
                <Stop offset="1" stopColor="#FE5635" stopOpacity="1" />
              </LinearGradients>
            </Defs>
            <Ellipse
              cx={`${width / 2}`}
              cy={`${width / 6.5}`}
              rx={`${width / 1.2}`}
              ry={`${width / 1.7}`}
              fill="url(#grad)"
            />
          </Svg>
        </View>
        <View style={{ marginTop: -275, flexDirection: "row" }}>
          <View>
            <Svg height="220" width="220">
              <Circle cx="75" cy="100" r="120" fill="#FF3E06" />
            </Svg>
          </View>
          <View style={{ marginTop: -80 }}>
            <Svg height="220" width="200">
              <Circle cx="110" cy="70" r="110" fill="#FD6E34" />
            </Svg>
            <Svg
              height="180"
              width="190"
              style={{ marginTop: -70, marginLeft: -40, opacity: 0.2 }}
            >
              <Circle cx="100" cy="100" r="90" fill="pink" />
            </Svg>
          </View>
        </View>

        {this.props.user !== null
          ? this.haveAccount(this.props.user)
          : this.noAccount()}

        <View style={styles.v_card_1}>
          <Card style={styles.card_1}>
            <View style={styles.card_3_item}>
              <TouchableOpacity style={styles.btn_3_item}>
                <Image style={styles.icon_h} source={icons.heart_orange} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.whishlist}
                </Text>
                <Text style={styles.txt_w}>{user && user.wish_list ? user.wish_list : 0}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card_3_item}>
              <TouchableOpacity style={styles.btn_3_item}>
                <Image style={styles.icon_f} source={icons.follow_orange} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.following}
                </Text>
                <Text style={styles.txt_w}>{user && user.following ? user.following : 0}</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.card_3_item}>
              <TouchableOpacity style={styles.btn_3_item}>
                <Image style={styles.icon_co} source={icons.coupong_orange} />
                <Text style={styles.txt_name_ic}>
                  {this.props.lang.voucher}
                </Text>
                <Text style={styles.txt_w}>{user && user.voucher ? user.voucher : 0}</Text>
              </TouchableOpacity>
            </View>
          </Card>
        </View>
        <Content style={styles.content}>
          <StatusBar
            backgroundColor={"transparent"}
            translucent={true}
            barStyle={"light-content"}
          />
          <Card style={styles.card_2}>
            <TouchableOpacity
              style={styles.btn_my}
              onPress={() => this.props.navigation.navigate("MyOrder")}
            >
              <View style={styles.v_icon_name}>
                <Image style={styles.v_icons} source={icons.car_ping} />
                <Text style={styles.txt_my}>
                  {this.props.lang.my_order} ({ user && user.orders ? user.orders : 0 })
                </Text>
              </View>
              <Image
                style={{ width: 9, height: 14 }}
                source={icons.next_gray}
              />
            </TouchableOpacity>
          </Card>
          <Card style={styles.card_3}>
            {/* ITME_1 */}
            {dataReason.map((item, key) => {
              if (this.props.user !== null) {
                if (item.title !== this.props.lang.logout) {
                  return (
                    <View style={styles.v_all_select} key={key}>
                      <TouchableOpacity
                        style={styles.btn_my}
                        onPress={() => {
                          if (item.target !== "TabNavigator") {
                            this.props.navigation.navigate(item.target);
                          }
                        }}
                      >
                        <View style={styles.v_icon_name}>
                          <Image style={styles.v_icons} source={item.img} />
                          <Text style={styles.txt_my_coin}>{item.title}</Text>
                        </View>
                        <Image
                          style={{ width: 9, height: 14 }}
                          source={icons.next_gray}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                } else {
                  if (item.title == this.props.lang.logout) {
                    return (
                      <View style={styles.v_all_select} key={key}>
                        <TouchableOpacity
                          style={styles.btn_my}
                          onPress={() => this.onLogoutPressed()}
                        >
                          <View style={styles.v_icon_name}>
                            <Image style={styles.v_icons} source={item.img} />
                            <Text style={styles.txt_my_coin}>{item.title}</Text>
                          </View>
                          <Image
                            style={{ width: 9, height: 14 }}
                            source={icons.next_gray}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  }
                }
              } else {
                if (item.title !== this.props.lang.logout) {
                  return (
                    <View style={styles.v_all_select} key={key}>
                      <TouchableOpacity
                        style={styles.btn_my}
                        onPress={() => {
                          if (item.target !== "TabNavigator") {
                            if (item.target !== "ChangeLangeguage") {
                              Alert.alert(
                                this.props.lang.alert,
                                "You need to login to see your personal information !",
                                [
                                  {
                                    text: "Go login",
                                    onPress: () =>
                                      this.props.navigation.navigate("Login")
                                  },
                                  { text: "Cancel", onPress: () => {} }
                                ]
                              );
                            } else {
                              this.props.navigation.navigate(item.target);
                            }
                          }
                        }}
                      >
                        <View style={styles.v_icon_name}>
                          <Image style={styles.v_icons} source={item.img} />
                          <Text style={styles.txt_my_coin}>{item.title}</Text>
                        </View>
                        <Image
                          style={{ width: 9, height: 14 }}
                          source={icons.next_gray}
                        />
                      </TouchableOpacity>
                    </View>
                  );
                }
              }
            })}
          </Card>
        </Content>
      </Container>
    );
  }
  haveAccount(user) {
    return (
      <View style={styles.v_all_pr}>
        <View style={styles.v_profile}>
          <Image
            style={styles.profile}
            source={{
              uri:
                this.props.user.fb_id !== undefined
                  ? `http://graph.facebook.com/${this.props.user.fb_id}/picture?type=square`
                  : this.props.user.cus_profile_img !== undefined
                  ? ads + imgPath.shop_image + this.props.user.cus_profile_img
                  : "www.wxp.com/"
            }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 5 }}>
          <View style={styles.v_v}>
            <Text style={styles.name_pro}>{user.name}</Text>
          </View>
          <View style={{ flex: 1, marginTop: 1 }}>
            <TouchableOpacity style={styles.v_card_cion}>
              <Image source={icons.cion_yellow} style={styles.icon_cion} />
              <Text style={styles.txt_cion}>3,000</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
  noAccount() {
    return (
      <View style={styles.v_all_profile}>
        <View style={styles.v_img_pro}>
          <Image style={{ width: 64, height: 64 }} source={icons.not_profile} />
        </View>
        <View style={styles.btn_login}>
          <TouchableOpacity
            style={styles.login_st}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.txt_login}>{this.props.lang.login}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signup}
            onPress={() => this.props.navigation.navigate("Registration")}
          >
            <Text style={styles.txt_signup}>{this.props.lang.register}</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
  onLogoutPressed() {
    Alert.alert(
      this.props.lang.logout + " !",
      this.props.lang.are_you_sure_to_logout,
      [
        {
          text: `${this.props.lang.ok}`,
          onPress: () => removeActiveUser(this.props.currentDis, "user")
        },
        { text: `${this.props.lang.cancel}`, onPress: () => {} }
      ]
    );
  }
}
const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    curentlang: state.setActiveLanguage.lang,
    user: state.setActiveUser.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
// export default Profile;
