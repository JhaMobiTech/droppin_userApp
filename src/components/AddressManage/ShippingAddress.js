import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  Alert,
  Platform,
  ScrollView
} from "react-native";
import { checkId } from "./../../checkValue/ValueChecker";
import { Container, Content, Header, Card } from "native-base";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "../../styles/shippingAddressStyle";
import { icons } from "../../assets/icons/IconsConfig";
import { SimpleLoadingHori } from "./../loadingoverlay/AppLoading";
import { exclusiveConnectionFailed } from "./../empty_and_failed/FailedScene";
import { ads, url } from "../../apis/Url";
import { imgPath } from "../../apis/IamgePath";
import {
  setActiveProccess,
  onReload
} from "./../../functions/connectionManage";
import {
  getAvailableAddress,
  fetchAddress,
  updateDefaultAddress,
  deleteAddress
} from "./../../functions/addressManage";
const isAndroid = Platform.OS == "android" ? true : false;
class ShippingAddress extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "loading");
    this.state = {};
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      isAndroid && StatusBar.setBarStyle("dark-content");
      isAndroid && StatusBar.setTranslucent(false);
    });
    if (this.props.user !== null) {
      const { user } = this.props;
      console.log('user ->', user);
      getAvailableAddress(this.props, user._id, user.token);
    } else {
      setActiveProccess(this.props.currentDis, "done");
    }
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles._btn_back_dARK}
            onPress={() => goBack()}
          >
            <Image style={styles._iconBack_dark} source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles._text_header}>Address</Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <Content contentContainerStyle={styles.empty_container}>
          <StatusBar
            backgroundColor="#fff"
            translucent={false}
            barStyle="dark-content"
          />
          {/* <Text>{JSON.stringify(this.props.address)}</Text> */}
          {this.props.proccess == "loading"
            ? SimpleLoadingHori()
            : this.props.proccess == "failed"
            ? exclusiveConnectionFailed(() =>
                onReload(this.props, () =>
                  fetchAddress(this.props.currentDis, this.props.user._id)
                )
              )
            : this.props.address.length > 0
            ? this.props.address[0].customer.length > 0
              ? this.renderAddress()
              : this.renderEmpty()
            : this.renderEmpty()}
        </Content>
      </Container>
    );
  }
  renderEmpty() {
    return (
      <View style={styles.empty_container}>
        <View style={styles._view_icon_cicle}>
          <Image style={styles._iconCicle} source={icons.emty_address} />
        </View>
        <Text style={styles._text_NoAdd}>No Addresses found!</Text>
        <Text style={styles._text_notify}>Looks like you haven’t added a</Text>
        <Text style={styles._text_notify}>default shipping address.</Text>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles._btn_save_Addr}
          onPress={() => this.goAddnew()}
        >
          <Text style={styles._text_save_Addr}>Add a new address</Text>
        </TouchableOpacity>
      </View>
    );
  }
  goAddnew() {
    if (this.props.user !== null) {
      this.props.navigation.navigate("PickLocation");
    } else {
      Alert.alert(this.props.lang.warning, this.props.lang.please_go_login, [
        {
          text: this.props.lang.login,
          onPress: () => this.props.navigation.navigate("Login")
        },
        { text: this.props.lang.cancel, onPress: () => {} }
      ]);
    }
  }
  renderAddress() {
    return (
      <Content contentContainerStyle={styles.container}>
        <Text style={styles.shipping_txt}>Shipping to</Text>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          {this.props.address[0].customer.map((item, key) => {
            return (
              <Card key={key}>
                <TouchableOpacity
                  onPress={() =>
                    updateDefaultAddress(
                      this.props.address[0]._id,
                      item,
                      this.props
                    )
                  }
                  activeOpacity={0.7}
                  style={styles.card_address}
                >
                  <View style={styles.radio_container}>
                    {item.address_status == true && (
                      <View style={styles.radio_dot} />
                    )}
                  </View>
                  <View style={styles.address_detail}>
                    <View
                      style={{
                        flexDirection: "row",
                        alignItems: "center"
                      }}
                    >
                      <Text style={styles.detail_title}>
                        {item.address_title}
                      </Text>
                      {item.address_status == true && (
                        <Text style={styles.default_add_txt}>default</Text>
                      )}
                    </View>

                    <Text style={styles.detail_address}>{item.cus_phone}</Text>
                    {item.address_detail !== "" && (
                      <Text
                        numberOfLines={1}
                        style={[styles.detail_address, { color: "#757575" }]}
                      >
                        {item.address_detail}
                      </Text>
                    )}
                  </View>
                  <View style={styles.option_btn_container}>
                    <TouchableOpacity
                      onPress={() =>
                        this.props.navigation.navigate("EditAddress", {
                          address: item,
                          address_id: checkId(this.props.address[0]._id)
                        })
                      }
                    >
                      <Image
                        source={icons.edit_gray_fill_42x42}
                        style={styles.edit_btn}
                      />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => this.onDeletePressed(item)}
                    >
                      <Image
                        resizeMode={"contain"}
                        source={icons.delete_fill_36x42}
                        style={styles.edit_btn}
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              </Card>
            );
          })}
        </ScrollView>
        <Card style={styles.add_new_card}>
          <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#FD6737", "#FF4033"]}
            style={styles.linearGradient}
          >
            <TouchableOpacity
              style={styles.add_new_touch}
              onPress={() => this.props.navigation.navigate("PickLocation")}
            >
              <Image
                source={icons.add_white_ouline_96}
                style={styles.add_new_icon}
              />
            </TouchableOpacity>
          </LinearGradient>
        </Card>
      </Content>
    );
  }
  onDeletePressed(item) {
    const body = JSON.stringify({
      out_id:
        this.props.address[0]._id !== undefined
          ? this.props.address[0]._id
          : "",
      in_id: item._id
    });
    Alert.alert(
      "Delete address !",
      'Are you sure to delete "' + item.address_title + '" address ?',
      [
        {
          text: "OK",
          onPress: () => deleteAddress(body, this.props)
        },
        { text: "Cancel", onPress: () => {} }
      ]
    );
  }
}
// -------------------------------------
const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    proccess: state.setActiveProccess.proccess,
    user: state.setActiveUser.user,
    address: state.setAddress.address
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShippingAddress);
