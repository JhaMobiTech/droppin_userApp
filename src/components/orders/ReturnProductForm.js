import React, { Component } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Card } from 'native-base';
import { styles } from '../../styles/returnProductFormStyle';
import { icons } from '../../assets/icons/IconsConfig';
import LinearGradient from 'react-native-linear-gradient';

export default class ReturnProductForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectColor: 0
    }
  }
  render() {
    return (
      <Container>
        <Header style={styles._header}>
          <TouchableOpacity style={styles.btn_back}>
            <Image
              style={styles.back}
              source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles.txt_status_header}>Order #1630</Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <Content style={styles.content}>
          <StatusBar backgroundColor='#fff' barStyle='dark-content' />
          <View style={styles.v_txt_header}>
            <Text style={styles.txt_status_header}>Fill the form</Text>
          </View>
          <View style={styles.v_txt_myorder}>
            <Text style={styles.txt_mod}>My order was damaged</Text>
          </View>
          <View style={styles.v_detail_my}>
            <Text style={styles.txt_detail}>
              If your order arrived damaged in any way,
              Please let us know here. We’ll review your
              order and make adjustments as necessary.
              We’re sorry.
            </Text>
          </View>
          <View style={styles.v_item}>
            <View style={styles.v_img}>
              <Image
                style={{ width: 71, height: 78, borderRadius: 3.62 }}
                source={{ uri: "https://img1.cfcdn.club/fc/d0/fcc70398e894af8e1d892fb79164ebd0_350x350.jpg" }} />
            </View>
            <View style={{ flex: 1, marginLeft: 15 }}>
              <View style={styles.v_nameItem}>
                <Text style={styles.txt_nameItem}>Nike Air max</Text>
              </View>
              <View style={styles.v_price}>
                <Text style={styles.txt_price}>200,000 LAK</Text>
              </View>
              <View style={styles.v_qty}>
                <Text style={styles.txt_qty}>x1</Text>
              </View>
            </View>
          </View>
          <View style={styles.v_stay_upload}>
            <Text style={styles.txt_upload}>Please upload photo</Text>
          </View>
          <View style={styles.v_add_img}>
            <TouchableOpacity>
              <Image
                source={icons.add_img_dark}
                style={styles.add_img}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.add_img_dark}
                style={styles.add_img}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={icons.add_img_dark}
                style={styles.add_img}
              />
            </TouchableOpacity>
          </View>
        </Content>
        <View style={styles.v_bottom}>
          <TouchableOpacity style={{ width: '100%' }}>
            <LinearGradient
              start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
              colors={['#FD843A', '#FF5535']}
              style={styles.btn_next}>
              <Text style={styles.txt_next}>Done</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Container>
    )
  }
}