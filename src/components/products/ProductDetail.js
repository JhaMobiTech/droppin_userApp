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
import { Container, Content, Header, Card, Footer } from "native-base";
import Swiper from "react-native-swiper";
import { icons } from "../../assets/icons/IconsConfig";
import { styles } from "./../../styles/productDetailStyle";
import LinearGradient from "react-native-linear-gradient";
import { connect } from "react-redux";
import { ads, url } from "../../apis/Url";
import { imgPath } from "../../apis/IamgePath";
import SwiperFlatList from "react-native-swiper-flatlist";
import { SimpleLoading } from "./../loadingoverlay/AppLoading";
import { exclusiveConnectionFailed } from "./../empty_and_failed/FailedScene";
import { DeliveryOption } from "./DeliveryOption";
import { AddToCart } from "./AddToCart";
import {
  getCart,
  setCart,
  getCartItemCount
} from "./../../functions/cartController";
import {
  getDeliveryOptions,
  updateDefDelivery
} from "./../../functions/deliveryController";
import {
  setActiveProccess,
  timeoutPromise
} from "./../../functions/connectionManage";
import {
  isNullnUndifined,
  isUndifined,
  isArray,
  isObject,
  isNumber,
  isStr
} from "./../../checkValue/ValueChecker";
const data = [
  "https://milanos-shoes.gr/image/cache/catalog/shoes/Adam_s/921_18005__1__700x700-700x700.jpg",
  "https://cf.shopee.ph/file/39511199f221cfed9a55205bb7491831",
  "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwbb729ac9/images/ProductImages/120283/120283_097_l_WR.jpg?sw=900"
];
const option1 = ["2", "4", "6", "8", "10"];
class ProductDetail extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "loading");
    this.state = {
      _id: this.props.navigation.getParam("id"),
      selectedopt: 0,
      selectDeliver: false,
      selectedAdd: 0,
      actionBtn: "ATC",
      product: null,
      address: [],
      stock: 0,
      base_price: [],
      defee: 0,
      // option -----
      op1: null,
      op2: null,
      option1: null,
      option2: null,
      quantity: 1
    };
  }
  async componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setBackgroundColor("#fff");
      }
      StatusBar.setBarStyle("dark-content");
    });
    getCart(this.props.currentDis);
    timeoutPromise(
      10000,
      this.getProductDetail(),
      this.props,
      this.props.lang.connection_failed
    );
    getDeliveryOptions(this.props);
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { width, height } = Dimensions.get("screen");
    const {
      selectedopt,
      selectedAdd,
      actionBtn,
      product,
      base_price,
      op1,
      op2
    } = this.state;
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header noShadow={true} style={styles.header}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles._btn_back_dARK}
            onPress={() => goBack()}
          >
            <Image style={styles._iconBack_dark} source={icons.back_dark} />
          </TouchableOpacity>
          {/* <Text style={styles._text_header}>Addresses</Text> */}
          <View style={styles.header_right}>
            <TouchableOpacity
              style={styles.cart_touch}
              onPress={() => this.props.navigation.navigate("Cart")}
            >
              <ImageBackground
                source={icons.cart_org_outline_42}
                style={styles.cart_icon}
              >
                {/* cart item count */}
                {isObject(this.props.cart) === true && (
                  <View style={styles.cart_count_box}>
                    <Text style={styles.cart_count_txt}>
                      {getCartItemCount(this.props.cart)}
                    </Text>
                  </View>
                )}
              </ImageBackground>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cart_touch}>
              <Image
                resizeMode={"contain"}
                source={icons.share_org_outline_50}
                style={styles.cart_icon}
              />
            </TouchableOpacity>
          </View>
        </Header>
        <Content>
          <SafeAreaView>
            <StatusBar backgroundColor="#fff" translucent={false} />
            {/* <Text>{JSON.stringify(this.state.product)}</Text> */}
            <View style={styles.product_img}>
              {this.state.product !== null && (
                <SwiperFlatList
                  paginationActiveColor={"#FFCC00"}
                  index={0}
                  paginationStyleItem={{ width: 3, height: 3 }}
                >
                  {this.state.product.pd_img.map((item, key) => {
                    return (
                      <Image
                        key={key}
                        source={{
                          uri: item
                        }}
                        style={styles.product_img}
                      />
                    );
                  })}
                </SwiperFlatList>
              )}
            </View>
            <Card
              noShadow={true}
              shouldRasterizeIOS={true}
              style={styles.product_header}
            >
              <View style={styles.product_name_con}>
                <Text style={styles.product_name_txt}>
                  {product !== null ? product.pd_name : ""}
                </Text>
                <TouchableOpacity style={styles.cart_touch}>
                  <Image
                    resizeMode={"contain"}
                    source={icons.heart_org_outline_50}
                    style={styles.heart_icon}
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.pd_price}>
                {base_price.length == 1
                  ? base_price[0] + " LAK"
                  : base_price[1] == base_price[0]
                  ? base_price[0] + " LAK"
                  : base_price[1] + " LAK - " + base_price[0] + " LAK"}
              </Text>
              <View style={styles.rating_container}>
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
                <Text style={styles.rating_avg}>5.0</Text>
                <View style={styles.divider} />
                <Text>12 {this.props.lang.sold}</Text>
              </View>
              <TouchableOpacity style={styles.add_to_wishlist_btn}>
                <Image
                  resizeMode={"contain"}
                  source={icons.heart_orange_outline_80}
                  style={styles.heart_icon}
                />
              </TouchableOpacity>
            </Card>
            <View style={styles.divider_horizontal} />
            {/* Delivery box --------------------------------- */}
            <View style={styles.delivery_box}>
              <TouchableOpacity
                onPress={() => this.refs.selectDeliver.open()}
                activeOpacity={0.6}
                style={styles.header_adress}
              >
                <Text style={styles.delivery_txt}>
                  {this.props.lang.delivery} (2)
                </Text>
                <View style={styles.pick_address}>
                  <Text style={styles.delivery_fee_txt}>
                    {this.calculateDelFee()} LAK
                  </Text>
                  <Image
                    resizeMode={"cover"}
                    source={icons.right_arrow_back_50}
                    style={styles.pick_address_icon}
                  />
                </View>
              </TouchableOpacity>
              <View style={styles.adress_detail}>
                <Image
                  style={styles.car_icon}
                  source={icons.free_delivery_truck_green}
                />
                <View style={styles.adress_detail_txt_con}>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode={"tail"}
                    style={styles.add_txt}
                  >
                    {/* {JSON.stringify(op1)} */}
                    Enjoy free shipping with minimum purchase of 250,000 LAK
                    from{" "}
                    <Text style={styles.shop_name}>
                      {" "}
                      {product !== null ? product.seller_id.sell_name : ""}
                    </Text>
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.divider_horizontal} />
            {/* Viriations ---------------------------------------- */}
            {this.state.op1 !== null && (
              <View style={styles.delivery_box}>
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.header_adress}
                  onPress={() => {
                    this.setState({ actionBtn: "ALL" });
                    this.refs.addtocart.open();
                  }}
                >
                  <View style={styles.viriate_title}>
                    <Text style={styles.delivery_txt}>
                      {this.props.lang.variation}
                    </Text>
                    <Text style={styles.option_txt}>
                      {op2 !== null && op2.titleHeader + ": " + op2.title}{" "}
                      {op1 !== null && op1.titleHeader + ": " + op1.title}
                    </Text>
                  </View>
                  <View style={styles.pick_address}>
                    <Image
                      resizeMode={"cover"}
                      source={icons.right_arrow_back_50}
                      style={styles.pick_address_icon}
                    />
                  </View>
                </TouchableOpacity>
                <View style={styles.adress_detail}>
                  <ScrollView
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                  >
                    {this.state.option1 !== null ? (
                      this.renderOptions(this.state.option1, op1, 1)
                    ) : this.state.option2 !== null ? (
                      this.renderOptions(this.state.option2, op2, 2)
                    ) : (
                      <View />
                    )}
                  </ScrollView>
                </View>
              </View>
            )}
            <View style={styles.divider_horizontal} />
            {/* Shop detail--------------------------------------------- */}
            <View style={styles.shop}>
              <View style={styles.shop_info}>
                <View style={styles.shop_info_box}>
                  <Image
                    style={styles.shop_img}
                    source={{
                      uri:
                        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_f4bTliElMCl4HTCLvlKak3TssMJF-9FgnDw0xGfr0J0EzIXT&s",
                      cache: "only-if-cached"
                    }}
                  />
                  <View>
                    <Text style={styles.shop_name_2}>
                      {product !== null ? product.seller_id.sell_name : ""}
                    </Text>
                    <Text style={styles.active_time}>
                      Active 19 minutes ago
                    </Text>
                  </View>
                </View>
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.view_shop}
                  onPress={() =>
                    this.props.navigation.navigate("ShopProfile", {
                      _id: product !== null ? product.seller_id._id : null
                    })
                  }
                >
                  <Text style={styles.view_shop_txt}>
                    {this.props.lang.view_shop}
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Sub detail is here ---------------- */}
              <View style={styles.shop_detail}>
                {/* product */}
                <View style={styles.shop_detail_box}>
                  <View style={styles.shop_detail_box_sub}>
                    <Image
                      source={icons.menu_black_outline_48}
                      style={styles.detail_icon}
                    />
                    <Text style={styles.detail_txt}>300</Text>
                  </View>
                  <Text>{this.props.lang.product}</Text>
                </View>

                <View style={styles.divider_2} />
                {/* rating */}
                <View style={styles.shop_detail_box}>
                  <View style={styles.shop_detail_box_sub}>
                    <Image
                      source={icons.star_black_outline_48}
                      style={styles.detail_icon}
                    />
                    <Text style={styles.detail_txt}>4.7</Text>
                  </View>
                  <Text>{this.props.lang.rating}</Text>
                </View>

                <View style={styles.divider_2} />
                {/* chat */}
                <View style={styles.shop_detail_box}>
                  <View style={styles.shop_detail_box_sub}>
                    <Image
                      source={icons.chat_black_outline_48}
                      style={styles.detail_icon}
                    />
                    <Text style={styles.detail_txt}>92%</Text>
                  </View>
                  <Text>{this.props.lang.chat_response}</Text>
                </View>
              </View>
            </View>
            <View style={styles.divider_horizontal} />
            {/* Rating Average--------------------------------------------- */}
            {/* Header */}
            <View style={styles.avg_view}>
              <View style={styles.avg_header}>
                <ImageBackground
                  resizeMode={"center"}
                  source={icons.star_yello_fill_75}
                  style={styles.star_bg}
                >
                  <Text style={styles.star_rating}>4.0</Text>
                </ImageBackground>
                <View style={styles.avg_header_txt}>
                  <Text style={styles.avg_rating_txt}>
                    {this.props.lang.average_rating}
                  </Text>
                  <Text style={styles.base_on}>
                    {this.props.lang.based_on} 329 ratings
                  </Text>
                </View>
              </View>

              <View style={styles.see_all}>
                <Text>{this.props.lang.see_all}</Text>
                <View style={styles.box} />
              </View>
            </View>
            {/* content */}
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
                  {option1.map((item, key) => {
                    return (
                      <Image
                        key={key}
                        style={styles.rating_star}
                        source={icons.star_yello_fill_32}
                      />
                    );
                  })}
                </View>
                <Text style={styles.rw_text_review}>
                  Really love this products
                </Text>
              </View>
            </View>
            {/* Product detail----------------- */}
            <View style={styles.divider_horizontal} />
            <View style={styles.pd_detail_box}>
              <View style={styles.pd_detail}>
                <Text>{this.props.lang.product_detail}</Text>
              </View>
              <View style={styles.pd_sub_detail}>
                {/* ---------- */}
                <View style={styles.item_detail_box}>
                  <View style={styles.header_pd_item_detail} />
                  <Text style={styles.item_detail_text}>
                    Approx. model measurements: height: 5'10"; bust: 31-1/2";
                    waist: 24"; hips: 35"
                  </Text>
                </View>
                {/* ---------- */}
                <View style={styles.item_detail_box}>
                  <View style={styles.header_pd_item_detail} />
                  <Text style={styles.item_detail_text}>
                    Back zipper closure
                  </Text>
                </View>
                {/* ---------- */}
                <View style={styles.item_detail_box}>
                  <View style={styles.header_pd_item_detail} />
                  <Text style={styles.item_detail_text}>Short length</Text>
                </View>
                {/* ---------- */}
                <View style={styles.item_detail_box}>
                  <View style={styles.header_pd_item_detail} />
                  <Text style={styles.item_detail_text}>
                    High neckline; fit & flare silhouette
                  </Text>
                </View>
                {/* ---------- */}
                <View style={styles.item_detail_box}>
                  <View style={styles.header_pd_item_detail} />
                  <Text style={styles.item_detail_text}>Cutaway shoulders</Text>
                </View>
              </View>
            </View>
            <View style={[styles.divider_horizontal, { height: 2 }]} />
            {/* Shipping return -------------------- */}
            <View style={styles.pd_detail_box}>
              <View style={styles.pd_detail}>
                <Text>{this.props.lang.shipping_and_return}</Text>
              </View>
              <View style={styles.pd_sub_detail}>
                {/* ---------- */}
                <View style={styles.item_detail_box}>
                  <View style={styles.header_pd_item_detail} />
                  <Text style={styles.item_detail_text}>
                    Select items are excluded from international shipping
                    Exclusions & Details
                  </Text>
                </View>
                {/* ---------- */}
                <View style={styles.item_detail_box}>
                  <View style={styles.header_pd_item_detail} />
                  <Text style={styles.item_detail_text}>
                    Free shipping applies to domestic leg only, additional
                    shipping fees and duties may apply at checkout.
                  </Text>
                </View>
                {/* ---------- */}
                <View style={styles.item_detail_box}>
                  <View style={styles.header_pd_item_detail} />
                  <Text style={styles.item_detail_text}>
                    Returns are accepted at any store within 180 days from
                    purchase date. Last Act items must be returned within 30
                    days from purchase date.
                  </Text>
                </View>
                {/* ---------- */}
                <View style={styles.item_detail_box}>
                  <View style={styles.header_pd_item_detail} />
                  <Text style={styles.item_detail_text}>
                    For complete details, read our Shipping and Return policies.
                  </Text>
                </View>
              </View>
            </View>
          </SafeAreaView>
          {DeliveryOption(
            this.props,
            this.refs,
            this.state,
            this.onSelectAddress
          )}
          {AddToCart(
            this.props,
            this.state,
            this.refs,
            this.renderOptions,
            this.qtyOtion
          )}
          {/* {SimpleLoading(this.props.proccess == "loading" ? true : false)} */}
        </Content>
        <SafeAreaView>
          <View style={styles.footer_btn}>
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate("ShopProfile", {
                  _id: product !== null ? product.seller_id._id : null
                })
              }
              activeOpacity={0.8}
              style={styles.btn_store}
            >
              <Image
                resizeMode={"contain"}
                style={styles.footer_icon_store}
                source={icons.store_dark}
              />
              <Text style={styles.footer_title_chat_store}>
                {this.props.lang.store}
              </Text>
            </TouchableOpacity>
            <View style={styles.line_btns}></View>
            <TouchableOpacity activeOpacity={0.8} style={styles.btn_store}>
              <Image
                resizeMode={"contain"}
                style={styles.footer_icon}
                source={icons.chat_dark_message}
              />
              <Text style={styles.footer_title_chat_store}>
                {" "}
                {this.props.lang.chat}
              </Text>
            </TouchableOpacity>
            <View style={styles.v_btn_bynow_addCart}>
              <View style={styles.v_btn_2_season}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ actionBtn: "BN" });
                    this.refs.addtocart.open();
                  }}
                  activeOpacity={0.7}
                  style={styles.btn_by_now}
                >
                  <Text
                    maxFontSizeMultiplier={16}
                    minimumFontScale={9}
                    style={styles.buy_new_txt}
                  >
                    {this.props.lang.buy_now}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={[styles.v_btn_2_season, { flex: 3 }]}>
                <TouchableOpacity
                  activeOpacity={0.9}
                  style={styles.btn_add_to_card}
                  onPress={() => {
                    this.setState({ actionBtn: "ATC" });
                    this.refs.addtocart.open();
                  }}
                >
                  <Image
                    style={[styles.footer_icon_add_toCart, { marginRight: 10 }]}
                    source={icons.cart_add_org_fill_50}
                  />
                  <Text style={styles.footer_title_chat}>
                    {this.props.lang.add_to_cart}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </Container>
    );
  }
  onSelectAddress = (key, data) => {
    this.setState({ selectedAdd: key });
    updateDefDelivery(this.props.currentDis, data, null);
  };
  getProductDetail() {
    return fetch(ads + url.get_product_by_id + this.state._id)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ product: responseJson });
        this.getStock();
        this.setdefaultPdop(responseJson);
        setActiveProccess(this.props.currentDis, "done");
      })
      .catch(error => {
        setActiveProccess(this.props.currentDis, "failed");
        console.log(error);
      });
  }
  qtyOtion = async (selectedItem, action) => {
    const { quantity, stock, item, op1 } = this.state;
    if (action == "+") {
      if (quantity < op1.stock) {
        await this.setState({ quantity: this.state.quantity + 1 });

        if (op1 !== null && op1.price !== undefined) {
          var total = op1.price * this.state.quantity;
          this.setState({ base_price: [total] });
        }
      }
    } else if (action == "-") {
      if (this.state.quantity > 1) {
        await this.setState({ quantity: this.state.quantity - 1 });

        if (op1 !== null && op1.price !== undefined) {
          var total = op1.price * this.state.quantity;
          this.setState({ base_price: [total] });
        }
      }
    }
  };
  // get sup option
  getStock() {
    const { suboption, product } = this.state;
    var count = 0;
    var prices = [];
    if (
      isNullnUndifined(product.option.product_option.detail[0].price) === true
    ) {
      product.option.product_option.detail.map(async (item, key) => {
        await item.detail.detail.map(async (item2, key2) => {
          count = count + item2.stock;
          prices.push(item2.price);
        });
      });
      var base_price = [
        Math.max.apply(null, prices),
        Math.min.apply(null, prices)
      ];
      this.setState({ stock: count, base_price: base_price });
    } else {
      product.option.product_option.detail.map(async (item2, key) => {
        count = count + item2.stock;
        prices.push(item2.price);
      });
      var base_price = [
        Math.max.apply(null, prices),
        Math.min.apply(null, prices)
      ];
      this.setState({ stock: count, base_price: base_price });
    }
  }
  // calculate price from distance
  calculateDelFee = () => {
    const def = this.props.defdelivery;
    if (isObject(def) === true && def !== null) {
      if (isUndifined(def.delivery_opPrice) === false) {
        return def.delivery_opPrice;
      } else {
        return "none";
      }
    } else {
      return 0;
    }
  };
  // set default product option
  setdefaultPdop = async response => {
    if (response !== null && isObject(response) === true) {
      if (isNullnUndifined(response.option) === false) {
        const op_1 = response.option.product_option;
        if (isNullnUndifined(op_1) === false && isObject(op_1) === true) {
          const detail = op_1.detail;

          if (isNullnUndifined(detail) === false && isArray(detail) === true) {
            if (
              isObject(detail[0]) === true &&
              isNullnUndifined(detail[0].price) === false
            ) {
              let instock = await detail.find(o => o.stock > 0);
              if (instock.stock > 0) {
                let index = await detail.findIndex(
                  obj => obj.stock === instock.stock
                );
                this.setState({
                  op1: {
                    titleHeader:
                      isNullnUndifined(op_1.title) === false ? op_1.title : "",
                    ...detail[index],
                    pos: index
                  },
                  option1: detail
                });
              }
            } else {
              const op_2 = detail[0].detail;
              this.setState({
                op2: {
                  titleHeader:
                    isNullnUndifined(op_1.title) === false ? op_1.title : "",
                  ...detail[0],
                  pos: 0
                },
                option2: detail
              });
              if (
                isNullnUndifined(op_2) === false &&
                isObject(op_2.detail) === true
              ) {
                const obj = op_2.detail;
                if (isNullnUndifined(obj) === false && isArray(obj)) {
                  if (
                    isNullnUndifined(obj[0]) === false &&
                    isObject(obj[0]) === true
                  ) {
                    let instock = await obj.find(o => o.stock > 0);
                    if (instock.stock > 0) {
                      let index = await obj.findIndex(
                        objs => objs.stock === instock.stock
                      );
                      // console.log("index " + index);
                      // console.log(instock);
                      this.setState({
                        op1: {
                          titleHeader:
                            isNullnUndifined(op_2.title) === false
                              ? op_2.title
                              : "",
                          ...obj[index],
                          pos: index
                        },
                        option1: obj
                      });
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  };
  // renderoption Product
  renderOptions = (data, op, pos) => {
    return data.map((item, key) => {
      return (
        <View
          key={key}
          style={[
            styles.option_item,
            {
              borderWidth:
                (isNullnUndifined(op) === false && op.pos == key) === true
                  ? 1
                  : 0,
              borderColor:
                (isNullnUndifined(op) === false && op.pos == key) === true
                  ? "#FE6336"
                  : "#fff"
            }
          ]}
        >
          <TouchableOpacity
            disabled={(pos === 1 && item.stock < 1) === true ? true : false}
            style={styles.option_touch}
            onPress={async () => this.onOptionPressed(pos, item, key)}
          >
            <Text style={{ color: item.stock <= 0 ? "gray" : "#000" }}>
              {item.title}
            </Text>
          </TouchableOpacity>
        </View>
      );
    });
  };
  onOptionPressed = async (pos, item, key) => {
    const title1 = this.state.op1.titleHeader;
    if (pos === 1) {
      this.setState({
        selectedopt: key,
        op1: {
          titleHeader: isStr(title1) === true ? title1 : "",
          ...item,
          pos: key
        },
        quantity: 1
      });
    } else if (pos === 2) {
      const title2 = this.state.op2.titleHeader;
      if (
        isNullnUndifined(item) === false &&
        isObject(item) === true &&
        isNullnUndifined(item.detail) === false &&
        isNullnUndifined(item.detail.detail) === false &&
        isArray(item.detail.detail) === true
      ) {
        let subobj = item.detail.detail;
        let instock = await subobj.find(o => o.stock > 0);
        if (instock.stock > 0) {
          let index = await subobj.findIndex(
            obj => obj.stock === instock.stock
          );
          this.setState({
            selectedopt: key,
            op2: {
              titleHeader: isStr(title2) === true ? title2 : "",
              ...item,
              pos: key
            },
            op1: {
              titleHeader: isStr(title1) === true ? title1 : "",
              ...subobj[index],
              pos: index
            },
            option1: subobj,
            quantity: 1
          });
        }
      }
    }
  };
}

// -------------------------------------
const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    curentlang: state.setActiveLanguage.lang,
    proccess: state.setActiveProccess.proccess,
    defaddress: state.setDefaultAddress.defaddress,
    user: state.setActiveUser.user,
    deliveries: state.setDeliveryOptions.deliveries,
    defdelivery: state.setDefDeliveryOptions.defdelivery,
    cart: state.updateCart.cart
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
