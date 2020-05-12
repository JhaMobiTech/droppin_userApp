import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  Dimensions
} from "react-native";
import Modal from "react-native-modalbox";
import {
  Container,
  Content,
  Header,
  Card,
  Footer,
  Tab,
  Tabs,
  ScrollableTab
} from "native-base";
import Swiper from "react-native-swiper";
import { icons } from "../../assets/icons/IconsConfig";
import { styles } from "./../../styles/reDeemStyle";
import LinearGradient from "react-native-linear-gradient";
const num = ["2", "4", "6", "8", "10"];
const data = [
  "https://milanos-shoes.gr/image/cache/catalog/shoes/Adam_s/921_18005__1__700x700-700x700.jpg",
  "https://cf.shopee.ph/file/39511199f221cfed9a55205bb7491831",
  "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwbb729ac9/images/ProductImages/120283/120283_097_l_WR.jpg?sw=900"
];
const option1 = ["All products", "Fashion", "Toy", "Electronic", "Fitness"];

const { width, height } = Dimensions.get("screen");
export default class Redeem extends Component {
  state = {
    selectedopt: 0,
    selectDeliver: false,
    selectedAdd: 0,
    actionBtn: "ATC"
  };
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor("#fff");
      }
      StatusBar.setBarStyle("dark-content");
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { selectedopt, selectedAdd, actionBtn } = this.state;
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header noShadow={true} style={styles.header}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => goBack()}
              activeOpacity={1}
              style={styles._btn_back_dARK}>
              <Image style={styles._iconBack_dark} source={icons.back_dark} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1 }}>
            <Text style={styles.actionbar_title}>Redeem</Text>
          </View>
          <View style={styles.coin_container}>
            <Image source={icons.coin_gold_fill_43} style={styles.coin} />
            <Text style={styles.coin_num}>3,000</Text>
          </View>
        </Header>
        <Content>
          <StatusBar backgroundColor="#fff" />
          <Tabs
            renderTabBar={() => <ScrollableTab />}
            tabBarUnderlineStyle={styles.tb_underline}
          >
            {option1.map((item, key) => {
              return (
                <Tab
                  tabStyle={styles.tab_style}
                  activeTabStyle={styles.active_tab}
                  textStyle={styles.tab_title}
                  activeTextStyle={styles.active_title}
                  key={key}
                  heading={item}
                >
                  <ScrollView contentContainerStyle={styles.all_pd_con}>
                    {this.renderProductItems()}
                  </ScrollView>
                </Tab>
              );
            })}
          </Tabs>
          {/* Modal Add to cart-------------------- */}
          <Modal
            entry={"bottom"}
            style={styles.atc_modal_container}
            coverScreen={true}
            ref={"addtocart"}
            position={"bottom"}
          >
            <View style={styles.atc_modal_header}>
              <View style={styles.atc_img_box}>
                <Card style={styles.atc_card}>
                  <Image
                    style={styles.atc_img}
                    source={{
                      uri:
                        "https://assets.adidas.com/images/w_600,f_auto,q_auto:sensitive,fl_lossy/5559590095864abeb592a817001eb61f_9366/adi_Ease_Shoes_Black_C75611_01_standard.jpg"
                    }}
                  />
                </Card>
                <View style={styles.atc_pd_detail_box}>
                  <Text style={styles.atc_modal_header_txt}>
                    Orange Multi , 8
                  </Text>
                  <View style={styles.coin_container_3}>
                    <Image
                      source={icons.coin_gold_fill_43}
                      style={styles.coin_3}
                    />
                    <Text style={styles.coin_num_3}>20</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={styles.close_modal_touch}
                onPress={() => this.refs.addtocart.close()}
              >
                <Image
                  source={icons.multiply_black_outline_50}
                  style={styles.heart_icon}
                />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View
                style={[
                  styles.md_divider,
                  { marginHorizontal: 0, width: width }
                ]}
              />
              <Text style={styles.atc_option_1_title}>Size</Text>
              <View>
                <ScrollView horizontal={true}>
                  {num.map((item, key) => {
                    return (
                      <TouchableOpacity
                        style={[
                          styles.atc_option_1_touch,
                          { marginLeft: key == 0 ? 16 : 0 }
                        ]}
                        key={key}
                      >
                        <Text style={styles.atc_option_1_txt}>{item}</Text>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
              <Text style={[styles.atc_option_1_title, { marginTop: 30 }]}>
                Color
              </Text>
              <View>
                <ScrollView horizontal={true}>
                  {data.map((item, key) => {
                    return (
                      <View
                        key={key}
                        style={[
                          styles.option_item,
                          {
                            borderWidth: key == selectedopt ? 1 : 0,
                            borderColor:
                              key == selectedopt ? "#FE6336" : "#fff",
                            marginLeft: key == 0 ? 16 : 0
                          }
                        ]}
                      >
                        <TouchableOpacity
                          style={styles.option_touch}
                          onPress={() => this.setState({ selectedopt: key })}
                        >
                          <Image
                            resizeMode={"contain"}
                            source={{ uri: item }}
                            style={styles.option_item_img}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })}
                </ScrollView>
              </View>
              <View
                style={[
                  styles.md_divider,
                  {
                    marginHorizontal: 0,
                    width: width,
                    marginTop: 30,
                    marginBottom: 10
                  }
                ]}
              />
              <View style={styles.atc_qty_box}>
                <Text style={styles.atc_qty_title}>Quantity</Text>
                <View style={styles.atc_manage_qty}>
                  <TouchableOpacity style={styles.atc_plus_touch}>
                    <Image
                      source={icons.plus_gray_outile_50}
                      style={styles.heart_icon}
                    />
                  </TouchableOpacity>
                  <Text style={styles.atc_qty_txt_value}>1</Text>
                  <TouchableOpacity style={styles.atc_plus_touch}>
                    <Image
                      source={icons.minus_gray_outline_48}
                      style={styles.heart_icon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <TouchableOpacity
                style={styles.atc_add_to_cart}
                onPress={() => { }}
              >
                <LinearGradient
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  colors={["#FB983C", "#FE4E34"]}
                  style={[
                    styles.option_touch,
                    { width: "100%", borderRadius: 10 }
                  ]}
                >
                  <Text style={styles.atc_buy_now_txt}>Add to Cart</Text>
                </LinearGradient>
              </TouchableOpacity>
            </ScrollView>
          </Modal>
        </Content>
      </Container>
    );
  }
  renderProductItems() {
    return data.map((item, key) => {
      // --------------------------------------------------------------------
      const itemStyle = {
        width: width > 511 ? (width - 60) / 3 : (width - 46) / 2
      };
      const img_w = width > 511 ? (width - 60) / 3 : (width - 46) / 2;
      // --------------------------------------------------------------------
      return (
        <Card key={key} style={[itemStyle, styles.all_pd_card]}>
          <TouchableOpacity
            style={[itemStyle, styles.all_pd_touchable_op]}
            onPress={() => this.refs.addtocart.open()}
          >
            <View style={styles.all_pd_image_view}>
              <Image
                style={[
                  styles.all_pd_img,
                  { height: img_w * 0.81, width: img_w }
                ]}
                source={{
                  uri: item
                }}
                resizeMode={"cover"}
              />
            </View>
            <View style={styles.pop_detail_box}>
              <Text
                numberOfLines={1}
                ellipsizeMode={"tail"}
                style={styles.pop_pd_name}
              >
                Man Shirt and ladies jeans
              </Text>
              <View style={styles.coin_container}>
                <Image
                  resizeMode={"stretch"}
                  source={icons.coin_gold_fill_43}
                  style={styles.coin_2}
                />
                <Text style={styles.coin_num_2}>20</Text>
              </View>
            </View>
          </TouchableOpacity>
        </Card>
      );
    });
  }
}
