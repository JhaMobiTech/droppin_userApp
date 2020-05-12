import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView
} from "react-native";
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
import { addNewAddress } from "./../../functions/addressManage";
// var address = require("./address.json");
class NewAddress extends Component {
  state = {
    selected: 0,
    address: [],
    marker: this.props.navigation.getParam("marker_address"),
    label: "",
    fullname: "",
    phone: "",
    detail: "",
    ative: false
  };
  render() {
    const { goBack } = this.props.navigation;
    const { selected, makedef, onAdd, address } = this.state;
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
          <Text style={styles._text_header}>Add new address</Text>
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
                numberOfLines={3}
                textAlignVertical={"top"}
                onChangeText={txt => this.setState({ detail: txt })}
                value={this.state.detail}
                style={[styles.text_input, { height: 120, paddingVertical: 5 }]}
              />
            </View>
            <View style={styles.address_box_detail}>
              <View style={styles.address_header}>
                <Text style={styles.address_txt}>Marker Address</Text>
                <Image
                  source={icons.md_maps_org_outline_30}
                  style={styles.add_new_icon}
                />
              </View>
              <Text>{JSON.stringify(this.state.marker)}</Text>
            </View>
            {/* <TouchableOpacity
              style={styles.makedef_con}
              activeOpacity={0.5}
              onPress={() => this.setState({ makedef: !makedef })}
            >
              <View>
                <View style={styles.radio_container}>
                  {makedef && <View style={styles.radio_dot} />}
                </View>
              </View>
              <Text style={{ marginLeft: 15 }}>
                Make default shipping address
              </Text>
            </TouchableOpacity> */}
            {/* <Modal style={styles.modal} isVisible={onAdd}>
              <View style={styles.modal_content}>
                <Text style={styles.add_label}>Add label</Text>
                <TextInput
                  style={styles.add_new_address}
                  placeholder={"Name"}
                />
                <TouchableOpacity style={styles.done}>
                  <Text style={styles.done_txt}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.exit}
                  onPress={() => this.setState({ onAdd: !onAdd })}
                >
                  <Image
                    style={styles.add_new_icon}
                    source={icons.multiply_gray_outline_48}
                  />
                </TouchableOpacity>
              </View>
            </Modal> */}
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
    const { label, fullname, phone } = this.state;
    if (label == "") {
      alert("Label is required !");
    } else if (fullname == "") {
      alert("Full name could not be empty !");
    } else if (phone == "") {
      alert("Phone number is required !");
    } else {
      const body = JSON.stringify({
        cus_id: this.props.user._id,
        address_title: this.state.label,
        address_detail: this.state.detail,
        address_status: false,
        address_late_long: [
          {
            latitude: this.state.marker.latitude,
            longtitude: this.state.marker.longitude
          }
        ],
        cus_fname: this.state.fullname,
        cus_phone: this.state.phone
      });
      addNewAddress(body, this.props);
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
export default connect(mapStateToProps, mapDispatchToProps)(NewAddress);
