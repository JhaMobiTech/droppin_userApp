import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  Platform
} from "react-native";
import {
  getCart,
  setCart,
  getCartItemCount
} from "./../../functions/cartController";
import { connect } from "react-redux";
import { Container, Content, Header, Card } from "native-base";
import { styles } from "../../styles/cartStyle";
import LinearGradient from "react-native-linear-gradient";
import { icons } from "../../assets/icons/IconsConfig";
import { isNullnUndifined, isObject } from "../../checkValue/ValueChecker";
const isAndroid = Platform.OS == "android" ? true : false;
class Cart extends Component {
  constructor(prop) {
    super(prop);
    this.state = {};
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("dark-content");
      isAndroid && StatusBar.setTranslucent(false);
      isAndroid && StatusBar.setBackgroundColor("#fff");
    });
    getCart(this.props.currentDis);
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const data = ["a", "b"];
    return (
      <Container>
        <Header style={styles.header} noShadow={true}>
          {/* <StatusBar backgroundColor='#fff' barStyle='dark-content'/> */}
          <Text style={styles._txt_header}>{this.props.lang.my_cart} (2)</Text>
          {/* <Text style={styles._txt_header}>(2)</Text> */}
        </Header>
        <Content style={styles._content}>
          <StatusBar backgroundColor={"#fff"} />
          <View>
            {/* render cart items */}
            {this.renderCartItems()}
            {/* render recommend item here */}
            {/* {this.renderRecommendItems()} */}
          </View>
        </Content>
        <View style={styles._v_checkout}>
          <View style={styles._v_select_all_item}>
            {false == false ? (
              <TouchableOpacity
                activeOpacity={1}
                style={styles._cicle_}
                onPress={() => this.setState({ show_hide_all: true })}
              ></TouchableOpacity>
            ) : (
              <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.setState({ show_hide_all: false })}
              >
                <Image
                  source={icons.select}
                  style={{ width: 19, height: 19 }}
                />
              </TouchableOpacity>
            )}
            <Text style={styles._txt_sl_all}>{this.props.lang.select_all}</Text>
          </View>
          <View style={{ flex: 1, marginRight: 20 }}>
            <View style={styles._v_dt_check}>
              <Text style={styles._txt_subtotal}>
                {this.props.lang.subtotal}
              </Text>
            </View>
            <View style={styles._v_ck_price}>
              <Text style={styles._txt_ck_price}>400,000 LAK</Text>
            </View>
          </View>
          <View style={styles._v_btn_ck}>
            <TouchableOpacity>
              <LinearGradient
                style={styles._btn_ck}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ff9100", "#ff3d00"]}
              >
                <Text style={styles._txt_ck}>{this.props.lang.check_out}</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
  renderCartItems = () => {
    const cart = this.props.cart;
    if (isNullnUndifined(cart) === false && isObject(cart) === true) {
      const items = cart.items;
      return items.map((item, key) => {
        return (
          <View style={styles._item}>
            <View style={styles._item_head}>
              <View style={styles._view_head_item}>
                {false == false ? (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles._cicle_}
                    onPress={() => this.setState({ show_hide: true })}
                  ></TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this.setState({ show_hide: false })}
                  >
                    <Image
                      source={icons.select}
                      style={{ width: 19, height: 19 }}
                    />
                  </TouchableOpacity>
                )}
                <View style={styles._view_item_seller}>
                  <Image
                    style={styles._item_seller}
                    source={{
                      uri:
                        "https://assets.prizelabs.com/_productassets/manualimg/1281+-+Nike.png"
                    }}
                  />
                </View>
              </View>
              <View style={styles._view_name_dt}>
                <Text style={styles._txt_name_item}>Nike Shop</Text>
                <TouchableOpacity>
                  <Text style={styles._txt_edit}>{this.props.lang.edit}</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles._shop}>
              <View style={styles._select}>
                {false == false ? (
                  <TouchableOpacity
                    activeOpacity={1}
                    style={styles._cicle_}
                    onPress={() => this.setState({ show_hide_sel: true })}
                  ></TouchableOpacity>
                ) : (
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => this.setState({ show_hide_sel: false })}
                  >
                    <Image
                      source={icons.select}
                      style={{ width: 19, height: 19 }}
                    />
                  </TouchableOpacity>
                )}
                <View style={styles._pic_}>
                  <Image
                    style={styles._picture}
                    source={{
                      uri:
                        "https://assets.myntassets.com/dpr_2,q_60,w_210,c_limit,fl_progressive/assets/images/10393993/2019/9/18/d16ffa3f-3ba1-4977-99d0-8c24025cbcd81568810675943-ADIDAS-Men-Black-Hyperon-10-Running-Shoes-3411568810674699-1.jpg"
                    }}
                  />
                </View>
              </View>
              <View style={styles._txt_all}>
                <View style={{ flex: 0.5 }}>
                  <Text style={styles._txt_picName}>Nike Air max </Text>
                </View>
                <View style={styles._v_price}>
                  <Text style={styles._txt_price}>200,000 LAK </Text>
                </View>
                <View style={{ flex: 1 }}>
                  <View style={styles._v_dl_add}>
                    <TouchableOpacity style={styles._v_dl}>
                      <Image source={icons.line_gray} style={styles._icon_dl} />
                    </TouchableOpacity>
                    <View style={styles._v_qty}>
                      <Text style={styles._txt_qty}>1</Text>
                    </View>
                    <TouchableOpacity style={styles._v_add}>
                      <Text style={styles._txt_add}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      });
    }
  };
  renderRecommendItems = () => {
    return (
      <Card style={styles._v_c_Like}>
        <View style={styles._v_line}>
          <View style={{ flex: 1 }}>
            <View style={styles._line_}></View>
          </View>
          <View style={styles._v_txt_line}>
            <Text style={styles._txt_l}>
              {this.props.lang.you_may_also_like}
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <View style={styles._line_}></View>
          </View>
        </View>
        <View style={styles._v_item_b}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <Card style={styles._v_c_b}>
              <Image
                style={styles._v_item_b_}
                source={{
                  uri:
                    "https://www.sportsshoesad.com/img/p/adidas-original-nmd-unisex-black-red-white.jpg"
                }}
              />
              <View style={styles._v_dt_item}>
                <Text style={styles._txt_name_b}>
                  Man Shirt and ladies jeans
                </Text>
              </View>
              <View style={styles._v_price_b}>
                <Text style={styles._txt_price_b}>120,000 LAK</Text>
              </View>
            </Card>
            <Card style={styles._v_c_b}>
              <Image
                style={styles._v_item_b_}
                source={{
                  uri:
                    "https://shop.r10s.jp/tonneau/cabinet/adidas/04588212/imgrc0070672510.jpg"
                }}
              />
              <View style={styles._v_dt_item}>
                <Text style={styles._txt_name_b}>
                  Man Shirt and ladies jeans
                </Text>
              </View>
              <View style={styles._v_price_b}>
                <Text style={styles._txt_price_b}>120,000 LAK</Text>
              </View>
            </Card>
            <Card style={styles._v_c_b}>
              <Image
                style={styles._v_item_b_}
                source={{
                  uri:
                    "https://www.shelflife.co.za/editor_uploads/https---hypebeast_com-image-2019-10-adidas-continental-80-makers-lab-alex-nash-release-info-5.jpg"
                }}
              />
              <View style={styles._v_dt_item}>
                <Text style={styles._txt_name_b}>
                  Man Shirt and ladies jeans
                </Text>
              </View>
              <View style={styles._v_price_b}>
                <Text style={styles._txt_price_b}>120,000 LAK</Text>
              </View>
            </Card>
          </ScrollView>
        </View>
      </Card>
    );
  };
}
const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    curentlang: state.setActiveLanguage.lang,
    cart: state.updateCart.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
