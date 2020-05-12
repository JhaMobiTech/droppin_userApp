import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Container, Content, Header, Card } from "native-base";
import { styles } from "../../styles/paymentMathodStyle";
import { icons } from "../../assets/icons/IconsConfig";
import LinearGradient from "react-native-linear-gradient";

export default class Paymentmathod extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      show_hide_visa: false,
      show_hide_case: false,
      show_hide_tranfer: false
    };
  }
  render() {
    const { show_hide_visa, show_hide_case, show_hide_tranfer } = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          <TouchableOpacity activeOpacity={1} style={styles._btn_back}>
            <Image style={{ width: 18, height: 18 }} source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles._txt_header}>Payment Method</Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <Content style={styles._content}>
          <View style={styles.item}>
            <View style={styles.v_item_card_v}>
              <View style={styles.v_title}>
                <Text style={styles.txt_total_}>Total</Text>
                <Text style={styles.txt_amount}>400,000 LAK</Text>
              </View>
              <View style={styles.v_card_select}>
                <Text style={{ fontSize: 14 }}>CARDS</Text>
                <TouchableOpacity>
                  <Text style={styles.txt_pay_}>Pay with other card</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles._v_number}>
              <View style={styles._v_selet}>
                {show_hide_visa == false ? (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles._cicle_}
                    onPress={() => this.setState({ show_hide_visa: true })}
                  ></TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles._cicle_img}
                    onPress={() => this.setState({ show_hide_visa: false })}
                  >
                    <View style={styles._circle_center}></View>
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles._v_visa}>
                <Text>3127 xxxx xxxx 4192</Text>
                <Image
                  style={{ width: 36, height: 38 }}
                  source={icons.visa_icon}
                />
              </View>
            </View>
            <View style={styles.v_case}>
              <Text style={{ fontSize: 14 }}>CASH</Text>
            </View>
            <View style={styles._v_number}>
              <View style={styles._v_selet}>
                {show_hide_case == false ? (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles._cicle_}
                    onPress={() => this.setState({ show_hide_case: true })}
                  ></TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles._cicle_img}
                    onPress={() => this.setState({ show_hide_case: false })}
                  >
                    <View style={styles._circle_center}></View>
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.v_icon_name}>
                <Image style={styles.img_case} source={icons.case_green} />
                <Text style={styles.txt_case}>Cash on delivery</Text>
              </View>
            </View>
            <View style={styles._v_number_end}>
              <View style={styles._v_selet}>
                {show_hide_tranfer == false ? (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles._cicle_}
                    onPress={() => this.setState({ show_hide_tranfer: true })}
                  ></TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles._cicle_img}
                    onPress={() => this.setState({ show_hide_tranfer: false })}
                  >
                    <View style={styles._circle_center}></View>
                  </TouchableOpacity>
                )}
              </View>
              <View style={styles.v_icon_name}>
                <Image style={styles.tranfer} source={icons.tranfer_orange} />
                <Text style={styles.txt_case}>Transfer money</Text>
              </View>
            </View>
          </View>
        </Content>
        <View style={styles.view_pay}>
          <TouchableOpacity activeOpacity={1}>
            <LinearGradient
              style={styles._v_gradeint}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#ff9100", "#ff3d00"]}
            >
              <Text style={styles._txt_gradeint}>Pay 400,000 LAK</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
