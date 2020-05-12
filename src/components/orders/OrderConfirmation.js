import React, { Component } from "react";
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput} from "react-native";
import {Container, Content, Header} from 'native-base';
import {styles} from '../../styles/orderConfirmationStyle';
import {icons} from '../../assets/icons/IconsConfig';
import LinearGradient from 'react-native-linear-gradient';

export default class OrderConfirmation extends Component {
  render() {
    return (
      <Container>
        <Header style={styles.header}>
          <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
          <TouchableOpacity activeOpacity={1} style={styles._btn_back}>
            <Image style={{width: 18, height: 18}} source={icons.back_dark}/>
          </TouchableOpacity>
          <Text style={styles._txt_header}>Order Confirmation</Text>
          <View style={{width: 30}}></View>
        </Header>
        <Content style={styles._content}>
          <View style={styles._v_item_pin}>
              <View style={styles._v_pin}>
                  <Image
                  style={styles._icon_pin} 
                  source={icons.pin_orange}/>
              </View>
              <View style={{flex: 1, flexDirection: 'column'}}>
                  <View style={styles._v_btn_change}>
                    <Text style={styles._txt_Dvl}>Delivery Address</Text>
                    <TouchableOpacity activeOpacity={1}>
                      <Text style={styles._txt_change}>Change</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flex: 1}}>
                    <Text style={styles._txt_detail}>430/320 Condo chapter one midtown</Text>
                    <Text style={styles._txt_detail}>Ladprao 24 , Bankgkok 11120</Text>
                  </View>
              </View>
          </View>
          <View style={styles._v_item_order}>
            <View style={styles._v_pic}>
              <View style={styles._v_pic_}>
                  <Image 
                  style={{width: 19.96, height: 18.67}} 
                  source={icons.shop_ouline_gray}/>
              </View>
              <View style={styles._v_qty}>
                <Text style={styles._txt_qty}>Nike official store</Text>
              </View>
            </View>
            <View style={styles._v_item_pic}>
              <Image 
              style={styles.pic_style}
              source={{uri: "https://images.asos-media.com/products/nike-air-max-270-react-bauhaus-trainers-in-white/11704865-1-bauhaus?$XXL$&wid=513&fit=constrain"}}/>
              <View style={styles.detail}>
                <View style={styles._detail}>
                  <Text style={styles.txt_n_q}>Nike Air max</Text>
                  <Text style={styles.txt_n_q}>x1</Text>
                </View>
                <View style={styles.v_size_n}>
                  <Text style={styles.txt_size_n}>6 UK</Text>
                  <Image 
                    style={styles.circle_} 
                    source={icons.circle_ful_gray}/>
                  <Text style={styles.txt_size_n}>Black</Text>
                </View>
                <View style={styles.v_price}>
                  <Text style={styles._txt_price}>200,000 LAK</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles._v_item_op}>
              <View style={styles._v_op}>
                  <Text style={styles._txt_option}>Promo Code (Optional)</Text>
              </View>
              <View style={{flex: 1,paddingHorizontal: 20}}>
                <View style={styles._v_input_app}>
                  <View style={styles.v_icon_pro}>
                    <Image
                      style={{width: 24, height: 24}}
                      source={icons.promotion_gray}
                      />
                  </View>
                    <TextInput
                      placeholder='Enter Code'
                      placeholderTextColor='#4A4A4A'
                      //onChangeText={text => onChangeText(text)}
                      style={styles.input_code}
                    />
                    <TouchableOpacity style={styles.btn_apply}>
                      <Text style={styles._txt_apply}>Apply</Text>
                  </TouchableOpacity>
                </View>
              </View>
          </View>
        </Content>
        <View style={styles._v_bottom}>
          <View style={styles._v_total}>
            <Text style={styles._txt_total}>TOTAL</Text>
            <Text style={styles._txt_price_bt}>400,000 LAK</Text>
          </View>
          <View style={styles._v_btn_play}>
            <TouchableOpacity activeOpacity={1}>
              <LinearGradient 
                  style={styles._v_gradeint}
                  start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
                  colors={['#ff9100', '#ff3d00']}>
                  <Text style={styles._txt_gradeint}>Proceed to Payment</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}
