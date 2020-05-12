import React, { Component } from "react";
import { View, Text, StatusBar, Image, TouchableOpacity, TextInput } from "react-native";
import { Container, Content, Header, Card } from 'native-base';
import { styles } from '../../styles/paymentMathodTranferStyle';
import { icons } from '../../assets/icons/IconsConfig';
import LinearGradient from 'react-native-linear-gradient';
import Cart from "../cart/Cart";

export default class PaymentMathodTranfer extends Component {
  constructor(prop) {
    super(prop);
    this.state = {
      show_hide_visa: false,
      show_hide_case: false,
      show_hide_tranfer: false
    }
  }
  render() {
    const { show_hide_visa, show_hide_case, show_hide_tranfer } = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <TouchableOpacity activeOpacity={1} style={styles._btn_back}>
            <Image style={{ width: 18, height: 18 }} source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles._txt_header}>Payment Method</Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <Content style={styles._content}>
        <StatusBar backgroundColor='#fff' barStyle='dark-content' />
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
            <View style={styles._v_number} >
              <View style={styles._v_selet}>
                {show_hide_visa == false ?
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles._cicle_}
                    onPress={() => this.setState({ show_hide_visa: true })}>
                  </TouchableOpacity> :
                  <TouchableOpacity activeOpacity={1} style={styles._cicle_img} onPress={() => this.setState({ show_hide_visa: false })}>
                    <View style={styles._circle_center}></View>
                  </TouchableOpacity>}
              </View>
              <View style={styles._v_visa}>
                <Text>3127 xxxx xxxx 4192</Text>
                <Image
                  style={{ width: 36, height: 38 }}
                  source={icons.visa_icon} />
              </View>
            </View>
            <View style={styles.v_case}>
              <Text style={{ fontSize: 14 }}>CASH</Text>
            </View>
            <View style={styles._v_number_tran} >
              <View style={{ flexDirection: 'row', width: '100%', height: 47 }}>
                <View style={styles._v_selet}>
                  {show_hide_case == false ?
                    <TouchableOpacity
                      activeOpacity={1}
                      style={styles._cicle_}
                      onPress={() => this.setState({ show_hide_case: true })}>
                    </TouchableOpacity> :
                    <TouchableOpacity activeOpacity={1} style={styles._cicle_img} onPress={() => this.setState({ show_hide_case: false })}>
                      <View style={styles._circle_center}></View>
                    </TouchableOpacity>}
                </View>
                <View style={styles.v_icon_name}>
                  <Image
                    style={styles.img_case}
                    source={icons.case_green} />
                  <Text style={styles.txt_case}>Transfer money</Text>
                </View>
              </View>
              <View style={styles.v_acc_name}>
                <Text style={styles.txt_ac_name}>
                  Account name:
                </Text>
                <Text style={styles.txt_droppin}>
                  Droppin Co.,Ltd.
                </Text>
              </View>
              <View style={styles.cadit}>
                <View style={styles.cadit_icon}>
                  <Image
                    style={{ width: 29, height: 29 }}
                    source={{ uri: "https://www.bcel.com.la:8083/img/logo.png" }} />
                </View>
                <View style={styles.v_number_c}>
                  <Text style={styles.txt_number}>667-2-85801-3</Text>
                  <Card style={styles.v_card_cp}>
                    <Text style={styles.txt_cp}>Coppy</Text>
                  </Card>
                </View>
              </View>
              <View style={styles.v_adpic}>
                <View style={styles.add_pic_v}>
                  <TouchableOpacity>
                    <Image
                      style={{ width: 55, height: 39 }}
                      source={icons.add_photo} />
                  </TouchableOpacity>
                  <Text style={styles.txt_dt_adpic}>อัพโหลดรูปหลักฐานการโอน</Text>
                </View>
              </View>
            </View>
          </View>
        </Content>
        <View style={styles.view_pay}>
          <TouchableOpacity activeOpacity={1}>
            <LinearGradient
              style={styles._v_gradeint}
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#ff9100', '#ff3d00']}>
              <Text style={styles._txt_gradeint}>Pay 400,000 LAK</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
