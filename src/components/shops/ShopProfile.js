import React, { Component } from "react";
import Svg, {
  Rect,
  Ellipse,
  Polygon,
  Defs,
  LinearGradient as LinearGradients,
  Stop,
  Circle
} from "react-native-svg";
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  StatusBar,
  Image,
  ImageBackground,
  Platform,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { ads, url } from "../../apis/Url";
import { imgPath } from "../../apis/IamgePath";
import { connect } from "react-redux";
import LinearGradient from "react-native-linear-gradient";
const all = [
  "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$",
  "https://media.kohlsimg.com/is/image/kohls/2375536_Black_White_Pink_Gaze?wid=320&hei=320&op_sharpen=1",
  "https://cdn.shopify.com/s/files/1/0022/4008/6074/products/V815HCC_800x.jpg?v=1554350825",
  "https://cdn.shopify.com/s/files/1/2017/9999/products/tech_trucker_400x.jpg?v=1551471684"
];
const cate = ["All", "Shoes", "Pants", "Shirt", "Trouser"];
const pop = [
  "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256.jpg",
  "https://ii2.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
  "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100495158-847__1&recipeName=350",
  "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256.jpg",
  "https://ii2.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
  "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100495158-847__1&recipeName=350"
];
const promo = [
  "https://myvoucher.online/wp-content/uploads/zalora-HK-promotions-1.jpg",
  "https://cdn.macrumors.com/article-new/2019/10/instacart_apple_pay_promo.jpg",
  "https://img.freepik.com/vector-gratis/muestra-banner-viajes-plano_23-2148186538.jpg?size=626&ext=jpg"
];
const img = {
  uri:
    "https://www.gearhungry.com/wp-content/uploads/2018/07/best-nike-sneakers-faq3.jpg"
};
import { icons } from "./../../assets/icons/IconsConfig";
import { Container, Content, Header, Card, Col } from "native-base";
import { styles } from "./../../styles/shopProfileStyle";

const { width, height } = Dimensions.get("screen");
const most_width = (width - 30) / 3;
const most_header = most_width / 2;
class ShopProfile extends Component {
  state = {
    selectCate: 0,
    res_id: this.props.navigation.getParam("_id"),
    seller: null,
    allpd: []
  };
  componentDidMount() {
    this.getSeller();
    this.getAllproduct();
  }
  render() {
    const { selectCate, seller, res_id, allpd } = this.state;
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Content>
          <StatusBar translucent={true} backgroundColor={"transparent"} />
          <ImageBackground
            source={{
              uri:
                seller !== null
                  ? ads + imgPath.shop_image + seller.sell_img
                  : ads + imgPath.shop_image
            }}
            style={styles.man_header}
          >
            <TouchableOpacity
              activeOpacity={1}
              style={styles._btn_back_dARK}
              onPress={() => goBack()}
            >
              <Image style={styles._iconBack_dark} source={icons.back_dark} />
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={1} style={styles._btn_back_dARK}>
              <Image
                style={styles._iconBack_dark}
                source={icons.search_white_outline_42}
              />
            </TouchableOpacity>
          </ImageBackground>
          <View style={styles.shop_detail_box}>
            <Card style={styles.img_shop_card}>
              <Image
                resizeMode={"cover"}
                source={{
                  uri:
                    seller !== null
                      ? ads + imgPath.shop_image + seller.sell_img
                      : ads + imgPath.shop_image
                }}
                style={styles.shop_img}
              />
            </Card>
            <View style={styles.shop_name_box}>
              <Text style={styles.shop_name_txt}>
                {seller !== null ? seller.sell_name : ""}
              </Text>
              <Text style={styles.shop_follower}>
                {this.props.lang.follower}: 12,000
              </Text>
            </View>
            <Card style={styles.follow_touch}>
              <TouchableOpacity style={styles.follow_touch_btn}>
                <Text style={styles.follow_txt}>{this.props.lang.follow}</Text>
              </TouchableOpacity>
            </Card>
          </View>
          <Card style={styles.menu_tab}>
            <View style={styles.tab_item_box}>
              <View style={styles.tab_sub_con}>
                <Text style={[styles.menu_tab_txt, { color: "#FE6336" }]}>
                  {this.props.lang.shop_front}
                </Text>
                <View style={styles.tab_underline} />
              </View>
            </View>
            <View style={styles.divider_vertical} />
            <Text style={[styles.menu_tab_txt, { flex: 4 }]}>
              {" "}
              {this.props.lang.product}
            </Text>
            <View style={styles.divider_vertical} />
            <Text
              style={[styles.menu_tab_txt, { flex: 3, textAlign: "right" }]}
            >
              {this.props.lang.review}
            </Text>
          </Card>
          <View style={styles.promo_header}>
            <Text style={styles.promo_txt}> {this.props.lang.promotion}</Text>
            <View style={styles.see_all_box}>
              <Text style={styles.see_all_txt}> {this.props.lang.see_all}</Text>
              <View
                style={{ width: 5, height: 9, backgroundColor: "#FE6336" }}
              />
            </View>
          </View>
          <View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              {promo.map((item, key) => {
                return (
                  <ImageBackground
                    borderRadius={6.34}
                    key={key}
                    source={{ uri: item }}
                    style={[
                      styles.promo_card,
                      { marginLeft: key == 0 ? 16 : 0 }
                    ]}
                  >
                    <TouchableOpacity
                      activeOpacity={0.8}
                      style={styles.see_more_box}
                    >
                      <Text style={styles.see_more_txt}>
                        {" "}
                        {this.props.lang.see_more}
                      </Text>
                      <View style={styles.go_right}>
                        <Image
                          borderRadius={0.91}
                          source={icons.right_forward_white_50_outline}
                          style={styles.go_right_img}
                        />
                      </View>
                    </TouchableOpacity>
                  </ImageBackground>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.promo_header}>
            <Text style={styles.promo_txt}>
              {" "}
              {this.props.lang.popular_item}
            </Text>
            <View style={styles.see_all_box}>
              <Text style={styles.see_all_txt}>
                {" "}
                {this.props.lang.shop_front}
              </Text>
              <View
                style={{ width: 5, height: 9, backgroundColor: "#FE6336" }}
              />
            </View>
          </View>
          <View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              {pop.map((item, key) => {
                return (
                  <Card
                    style={[styles.pop_card, { marginLeft: key == 0 ? 16 : 0 }]}
                    key={key}
                  >
                    <Image
                      resizeMode={"cover"}
                      source={{ uri: item }}
                      style={styles.pop_img}
                    />
                    <View style={styles.pop_detail_box}>
                      <Text
                        numberOfLines={1}
                        ellipsizeMode={"tail"}
                        style={styles.pop_pd_name}
                      >
                        Man Shirt and ladies jeans
                      </Text>
                      <Text style={styles.pop_pd_price}>120,000 LAK</Text>
                    </View>
                  </Card>
                );
              })}
            </ScrollView>
          </View>
          <View style={styles.promo_header}>
            <Text style={styles.promo_txt}>{this.props.lang.all_product}</Text>
            <View style={styles.see_all_box}>
              <Text style={styles.see_all_txt}>{this.props.lang.see_all}</Text>
              <View
                style={{ width: 5, height: 9, backgroundColor: "#FE6336" }}
              />
            </View>
          </View>
          <View>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              {cate.map((item, key) => {
                return (
                  <TouchableOpacity
                    key={key}
                    activeOpacity={0.8}
                    onPress={() => this.setState({ selectCate: key })}
                    style={[
                      styles.cate_touch,
                      {
                        marginLeft: key == 0 ? 16 : 0,
                        backgroundColor: selectCate == key ? "#FF4F34" : "#fff",
                        borderColor: selectCate == key ? "#FF4F34" : "#C9CFE5",
                        borderWidth: selectCate == key ? 0 : 1
                      }
                    ]}
                  >
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={
                        key == selectCate
                          ? ["#FC983C", "#FF4F34"]
                          : ["#fff", "#fff"]
                      }
                      style={styles.linearGradient}
                    >
                      <Text
                        style={[
                          styles.cate_txt,
                          {
                            color: selectCate == key ? "#fff" : "#C9CFE5"
                          }
                        ]}
                      >
                        {item}
                      </Text>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <ScrollView contentContainerStyle={styles.all_pd_con}>
            {allpd.length > 0 ? this.renderProductItems() : <View />}
          </ScrollView>
          <View style={styles.promo_header}>
            <Text style={styles.promo_txt}>{this.props.lang.review}</Text>
            <View style={styles.see_all_box}>
              <Text style={styles.see_all_txt}>{this.props.lang.see_all}</Text>
              <View
                style={{ width: 5, height: 9, backgroundColor: "#FE6336" }}
              />
            </View>
          </View>
          <View style={styles.rw_container}>
            <View style={styles.rw_rate_num_con}>
              <Text style={styles.rw_rate_num}>5.0</Text>
              <Text style={styles.of5}>{this.props.lang.out_of} 5</Text>
            </View>
            <View style={styles.rw_rate_detail}>
              <View style={styles.star_percent}>
                <View style={styles.rw_gray_star_con}>
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                </View>
                <View style={styles.star_percent_container}>
                  <View style={styles.star_percent_value} />
                </View>
              </View>
              {/* ---------- */}
              <View style={styles.star_percent}>
                <View style={styles.rw_gray_star_con}>
                  <Image style={styles.rw_gray_star} />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                </View>
                <View style={styles.star_percent_container}>
                  <View style={styles.star_percent_value} />
                </View>
              </View>
              {/* ---------- */}
              <View style={styles.star_percent}>
                <View style={styles.rw_gray_star_con}>
                  <Image style={styles.rw_gray_star} />
                  <Image style={styles.rw_gray_star} />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                </View>
                <View style={styles.star_percent_container}>
                  <View style={styles.star_percent_value} />
                </View>
              </View>
              {/* ---------- */}
              <View style={styles.star_percent}>
                <View style={styles.rw_gray_star_con}>
                  <Image style={styles.rw_gray_star} />
                  <Image style={styles.rw_gray_star} />
                  <Image style={styles.rw_gray_star} />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                </View>
                <View style={styles.star_percent_container}>
                  <View style={styles.star_percent_value} />
                </View>
              </View>
              {/* ---------- */}
              <View style={styles.star_percent}>
                <View style={styles.rw_gray_star_con}>
                  <Image style={styles.rw_gray_star} />
                  <Image style={styles.rw_gray_star} />
                  <Image style={styles.rw_gray_star} />
                  <Image style={styles.rw_gray_star} />
                  <Image
                    source={icons.star_gray_fill_32}
                    style={styles.rw_gray_star}
                  />
                </View>
                <View style={styles.star_percent_container}>
                  <View style={styles.star_percent_value} />
                </View>
              </View>
              <Text style={styles.rating_count_txt}>
                25 {this.props.lang.rating}
              </Text>
            </View>
          </View>
          {/* content review */}
          <View>
            <View style={styles.review_box}>
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/53/54/f7/5354f750a2816333f42efbeeacb4e244.jpg"
                }}
                style={styles.rw_img}
              />
              <View style={styles.rw_detail_box}>
                <View style={styles.rw_detail}>
                  <Text style={styles.rw_name}>Erika Iwata</Text>
                  <Text style={styles.rw_time}>
                    2 {this.props.lang.day_ago}
                  </Text>
                </View>
                <View style={[styles.rating_container, { marginVertical: 3 }]}>
                  <Image
                    style={styles.rating_star}
                    source={icons.star_yello_fill_32}
                  />
                  <Image
                    style={styles.rating_star}
                    source={icons.star_yello_fill_32}
                  />
                  <Image
                    style={styles.rating_star}
                    source={icons.star_yello_fill_32}
                  />
                  <Image
                    style={styles.rating_star}
                    source={icons.star_yello_fill_32}
                  />
                  <Image
                    style={styles.rating_star}
                    source={icons.star_yello_fill_32}
                  />
                </View>
                <Text style={styles.rw_text_review}>
                  Really love this products
                </Text>
              </View>
            </View>
            <View style={[styles.review_box, { borderBottomWidth: 0 }]}>
              <Image
                source={{
                  uri:
                    "https://cdn.shopify.com/s/files/1/2017/9999/products/tech_trucker_400x.jpg?v=1551471684"
                }}
                style={styles.rw_img_pd}
              />
              <View style={styles.rw_detail_box}>
                <View style={styles.rw_detail_pd}>
                  <Text style={styles.rw_name}>Purchased</Text>
                  <Text style={styles.rw_brand_txt}>Nike Air max</Text>
                  <Text style={styles.rw_time}>200,000 LAK </Text>
                </View>
              </View>
            </View>
          </View>
          <View>
            <View style={styles.review_box}>
              <Image
                source={{
                  uri:
                    "https://i.pinimg.com/originals/53/54/f7/5354f750a2816333f42efbeeacb4e244.jpg"
                }}
                style={styles.rw_img}
              />
              <View style={styles.rw_detail_box}>
                <View style={styles.rw_detail}>
                  <Text style={styles.rw_name}>Erika Iwata</Text>
                  <Text style={styles.rw_time}>
                    2 {this.props.lang.day_ago}
                  </Text>
                </View>
                <View style={[styles.rating_container, { marginVertical: 3 }]}>
                  <Image
                    style={styles.rating_star}
                    source={icons.star_yello_fill_32}
                  />
                  <Image
                    style={styles.rating_star}
                    source={icons.star_yello_fill_32}
                  />
                  <Image
                    style={styles.rating_star}
                    source={icons.star_yello_fill_32}
                  />
                  <Image
                    style={styles.rating_star}
                    source={icons.star_yello_fill_32}
                  />
                  <Image
                    style={styles.rating_star}
                    source={icons.star_yello_fill_32}
                  />
                </View>
                <Text style={styles.rw_text_review}>
                  Really love this products
                </Text>
              </View>
            </View>
            <View style={[styles.review_box, { borderBottomWidth: 0 }]}>
              <Image
                source={{
                  uri:
                    "https://cdn.shopify.com/s/files/1/2017/9999/products/tech_trucker_400x.jpg?v=1551471684"
                }}
                style={styles.rw_img_pd}
              />
              <View style={styles.rw_detail_box}>
                <View style={styles.rw_detail_pd}>
                  <Text style={styles.rw_name}>Purchased</Text>
                  <Text style={styles.rw_brand_txt}>Nike Air max</Text>
                  <Text style={styles.rw_time}>200,000 LAK </Text>
                </View>
              </View>
            </View>
          </View>
        </Content>
        <Card style={styles.chat_touch}>
          <TouchableOpacity activeOpacity={0.7}>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              colors={["#FC9A3C", "#FE5035"]}
              style={styles.chat_btn}
            >
              <Image
                source={icons.chat_buble_white_fill_50}
                style={styles.chat_btn_img}
              />
            </LinearGradient>
          </TouchableOpacity>
        </Card>
      </Container>
    );
  }
  renderProductItems() {
    return this.state.allpd.map((item, key) => {
      // --------------------------------------------------------------------
      const itemStyle = {
        width: width > 511 ? (width - 60) / 3 : (width - 46) / 2
      };
      const img_w = width > 511 ? (width - 60) / 3 : (width - 46) / 2;
      // --------------------------------------------------------------------
      if (key < 6) {
        return (
          <Card key={key} style={[itemStyle, styles.all_pd_card]}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("ProductDetail", {
                  id: item._id
                })
              }
              style={[itemStyle, styles.all_pd_touchable_op]}
            >
              <View style={styles.all_pd_image_view}>
                <Image
                  style={[
                    styles.all_pd_img,
                    { height: img_w * 0.81, width: img_w }
                  ]}
                  source={{
                    uri: item.pd_img[0]
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
                <Text style={styles.pop_pd_price}>120,000 LAK</Text>
              </View>
            </TouchableOpacity>
          </Card>
        );
      }
    });
  }
  getSeller() {
    fetch(ads + url.seller_get_detail_by_id + this.state.res_id)
      .then(response => response.json())
      .then(responseJson => {
        // alert(JSON.stringify(responseJson));
        this.setState({ seller: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }
  getAllproduct() {
    fetch(ads + url.seller_get_all_pd_by_id + this.state.res_id)
      .then(response => response.json())
      .then(responseJson => {
        // alert(JSON.stringify(responseJson));
        this.setState({ allpd: responseJson });
      })
      .catch(error => {
        console.error(error);
      });
  }
}
const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    curentlang: state.setActiveLanguage.lang
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShopProfile);
