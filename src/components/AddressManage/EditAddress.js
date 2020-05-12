import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import {
  isObject,
  checkUndifined,
  checkId
} from "./../../checkValue/ValueChecker";
import MapView, { Marker } from "react-native-maps";
import { Container, Content, Header, Card } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modal";
import { styles } from "../../styles/newAddressStyle";
import { icons } from "../../assets/icons/IconsConfig";
import { connect } from "react-redux";
import { url, ads } from "./../../apis/Url";
import { imgPath } from "./../../apis/IamgePath";
import { SimpleLoading } from "./../../components/loadingoverlay/AppLoading";
import { updateAddress } from "./../../functions/addressManage";
// var address = require("./address.json");
class EditAddress extends Component {
  state = {
    address: this.props.navigation.getParam("address"),
    address_id: this.props.navigation.getParam("address_id"),
    label: "",
    fullname: "",
    phone: "",
    detail: ""
  };
  componentDidMount() {
    const { address } = this.state;
    if (isObject(address) == true) {
      this.setState({
        label: checkUndifined(address.address_title)
          ? address.address_title
          : "",
        fullname: checkUndifined(address.cus_fname) ? address.cus_fname : "",
        phone: checkUndifined(address.cus_phone) ? address.cus_phone : "",
        detail: checkUndifined(address.address_detail)
          ? address.address_detail
          : "",
        makedef: checkUndifined(address.address_status)
          ? address.address_status
          : false
      });
    }
  }
  render() {
    const { goBack } = this.props.navigation;
    const { address, makedef } = this.state;
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
          <Text style={styles._text_header}>Update address</Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <Content contentContainerStyle={{ flex: 1 }}>
          <StatusBar
            backgroundColor="#fff"
            translucent={false}
            barStyle="dark-content"
          />
          <ScrollView>
            <View style={styles.form}>
              <Text style={[styles.form_header]}>Address label</Text>
              <TextInput
                onChangeText={txt => this.setState({ label: txt })}
                value={this.state.label}
                style={styles.text_input}
              />
              <Text style={[styles.form_header, { marginTop: 20 }]}>
                Full name
              </Text>
              <TextInput
                onChangeText={txt => this.setState({ fullname: txt })}
                value={this.state.fullname}
                style={styles.text_input}
              />
              <Text style={[styles.form_header, { marginTop: 20 }]}>
                Phone number
              </Text>
              <TextInput
                onChangeText={txt => this.setState({ phone: txt })}
                value={this.state.phone}
                style={styles.text_input}
              />
              <Text style={[styles.form_header, { marginTop: 20 }]}>
                Address detail: (optional)
              </Text>
              <TextInput
                multiline={true}
                numberOfLines={3}
                textAlignVertical={"top"}
                onChangeText={txt => this.setState({ detail: txt })}
                value={this.state.detail}
                style={[styles.text_input, { height: 120, paddingVertical: 5 }]}
              />
            </View>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.save_btn}
              onPress={() => this.onSavePressed()}
            >
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#FBAE3E", "#FF4033"]}
                style={styles.linearGradient}
              >
                <Text style={styles.save_btn_txt}>Save Address</Text>
              </LinearGradient>
            </TouchableOpacity>
          </ScrollView>
          {SimpleLoading(this.props.proccess == "loading" ? true : false)}
        </Content>
      </Container>
    );
  }
  onSavePressed() {
    const { label, fullname, phone, address, detail, address_id } = this.state;
    if (label == "") {
      alert("Label is required !");
    } else if (fullname == "") {
      alert("Full name could not be empty !");
    } else if (phone == "") {
      alert("Phone number is required !");
    } else {
      const body = JSON.stringify({
        address_title: label,
        address_detail: detail,
        address_late_long: checkUndifined(address.address_late_long)
          ? address.address_late_long
          : [],
        cus_fname: fullname,
        cus_phone: phone,
        out_id:
          checkUndifined(address_id) && checkId(address_id) ? address_id : "",
        in_id:
          checkUndifined(address._id) && checkId(address._id) ? address._id : ""
      });
      Alert.alert("Update address !", "Are you sure to update this address ?", [
        {
          text: "Update",
          onPress: () => updateAddress(body, this.props)
        },
        { text: "Cancel", onPress: () => {} }
      ]);
    }
  }
}
// --------------------------------------------------------

const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    proccess: state.setActiveProccess.proccess,
    user: state.setActiveUser.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(EditAddress);
