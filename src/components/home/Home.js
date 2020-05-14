import React, { Component } from "react";
import Svg, { Rect, Ellipse, Polygon } from "react-native-svg";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Dimensions,
  Platform,
  RefreshContr
} from "react-native";
import { Container, Content, Header, Card } from "native-base";
import { connect } from "react-redux";
import SwiperFlatList from "react-native-swiper-flatlist";
import { icons } from "../../assets/icons/IconsConfig";
import { styles } from "./../../styles/homeStyle";
import LinearGradient from "react-native-linear-gradient";
import { Pages } from "react-native-pages";
import SplashScreen from "react-native-splash-screen";
import {
  setActiveLang,
  getDefaultLang
} from "./../../functions/languageManage";
import { getActiveUser } from "../../functions/userManage";
import { ads, url } from "../../apis/Url";
import { imgPath } from "../../apis/IamgePath";
import { isUndifined, isNullnUndifined } from "./../../checkValue/ValueChecker";
import {
  timeoutPromise,
  setActiveProccess,
  refreshControl
} from "../../functions/connectionManage";
import { getAvailableAddress } from "./../../functions/addressManage";
import Geolocation from "@react-native-community/geolocation";
const config = {
  skipPermissionRequests: false,
  authorizationLevel: "auto"
};
// const flash = [
//   "https://fgl.scene7.com/is/image/FGLSportsLtd/332446390_01_a-Nike-Womens-LunarSolo-Running-Shoes-Black-White-AA4080-001?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1",
//   "https://www.dhresource.com/0x0s/f2-albu-g5-M01-8C-78-rBVaJFjBDjCAJ4AOAAR87tx4ssU869.jpg/120g-natural-face-mask-mung-beans-mud-oil.jpg",
//   "https://m.mimco.com.au/productimages/MEDIUM/1/13608_24005_42835.jpg",
//   "https://cdn.shopify.com/s/files/1/0068/7108/9225/products/wolf-project-hydrating-sheet-mask_3_2048x.jpg?v=1570552967"
// ];
const flash = [];
const cate = [
  {
    title: "Flash Deals",
    img: icons.flash_deal_red,
    id: 1
  },
  {
    title: "Dropship",
    img: icons.delivery_boy_doorStep,
    id: 2
  },
  {
    title: "Voucher",
    img: icons.promotion_red,
    id: 3
  },
  {
    title: "Top selection",
    img: icons.top_select,
    id: 4
  },
  {
    title: "Categories",
    img: icons.categorie_colors,
    id: 5
  }
];
const { width, height } = Dimensions.get("screen");
const most_width = (width - 30) / 3;
const most_header = most_width / 2;
const most_height = width / 6;
const lifestyle_width = (width - 25) / 2;
const life_header = lifestyle_width / 2;
const lifestyle_long_width = (width - 20) / 1;
const lifestyle_long_header = lifestyle_long_width / 3;
class Home extends Component {
  state = {
    pages: 0,
    mainslide: [],
    exclusive: [],
    allpd: [],
    refreshing: false
  };
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor("#fff");
        StatusBar.setBarStyle("dark-content");
      }
    });

    // Geolocation.setRNConfiguration(config);
    this.getMainSlideData();
    this.getExclusive();
    this.getData();
    this.getAllproducts();
    getDefaultLang(this.props.currentDis, "lang");
    getActiveUser(this.props, "user");
    SplashScreen.hide();
  }
  loadOnRefresh() {
    this.setState({ refreshing: true });
    this.getMainSlideData();
    this.getExclusive();
    this.getAllproducts();
    this.setState({ refreshing: false });
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { pages } = this.state;
    const dataIndicator = ["a", "b"];
    return (
      <Container>
        <Header noShadow={true} style={styles.header}>
          <TouchableOpacity
            style={styles.cart_touch}
            onPress={() => this.props.navigation.navigate("Scanner")}
          >
            <Image
              resizeMode={"contain"}
              source={icons.camera_gray_outline_50}
              style={[styles.cart_icon, { marginRight: 0 }]}
            />
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ flex: 1, height: 35 }}
            onPress={() => this.props.navigation.navigate("MainSearch")}
          >
            <View style={styles.search_container}>
              <Image
                style={styles.search_icon}
                source={icons.search_gray_left_outline_32}
              />
              <Text style={styles.search_input}>Iphone 11 Pro Max</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.cart_touch}
            onPress={() => this.props.navigation.navigate("NotificationList")}
          >
            <Image
              resizeMode={"contain"}
              source={icons.bell_gray_outline_50}
              style={[styles.cart_icon, { marginLeft: 6 }]}
            />
          </TouchableOpacity>
        </Header>
        <Content
          refreshControl={refreshControl(this.state.refreshing, () =>
            this.loadOnRefresh()
          )}
          contentContainerStyle={styles.content}
        >
          <StatusBar
            backgroundColor={"#fff"}
            translucent={false}
            barStyle={"dark-content"}
          />
          <View style={styles.slider_img_con}>
            <View style={{ flex: 1 }}>
              {this.state.mainslide.length > 0 && (
                <SwiperFlatList
                  paginationActiveColor={"#FFCC00"}
                  autoplay
                  autoplayDelay={4}
                  autoplayLoop
                  index={0}
                  // showPagination
                  // paginationStyleItem={{
                  //   width: width * 0.015,
                  //   height: width * 0.015
                  // }}
                >
                  {this.state.mainslide.map((item, key) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          this.props.navigation.navigate("BannerDetail")
                        }
                        style={{ width: width - 20, height: width * 0.4 }}
                        key={key}
                      >
                        <Image
                          source={{
                            uri: item.img
                          }}
                          style={styles.img_slider}
                        />
                      </TouchableOpacity>
                    );
                  })}
                </SwiperFlatList>
              )}
            </View>
          </View>
          <View
            style={{
              width: "100%",
              height: width * 0.17,
              marginTop: 20
            }}
          >
            <Pages
              indicatorColor={"#ff6f00"}
              indicatorStyles={{ width: 10, height: 5 }}
              indicatorOpacity={0.3}
              isDragging={false}
              isDecelerating={true}
              indicatorPosition="none"
              onScrollEnd={event => this.setState({ pages: event })}
            >
              <View style={{ flexDirection: "row" }} key={0}>
                {this.renderCate()}
              </View>
              <View
                style={{ flexDirection: "row", justifyContent: "center" }}
                key={1}
              >
                <Text>ABC </Text>
                <Text> ABC</Text>
              </View>
            </Pages>
          </View>
          <View style={styles.v_indicator}>
            {dataIndicator.map((item, key) => {
              return (
                <View
                  style={[
                    styles.indicator_sun,
                    {
                      backgroundColor: pages == key ? "#ff6f00" : "#e0e0e0",
                      width: pages == key ? width * 0.05 : width * 0.015
                    }
                  ]}
                  key={key}
                ></View>
              );
            })}
          </View>
          {/* render exclusive here-------------------------------- */}
          {this.state.exclusive.length > 0 && (
            <View style={styles.v_shopmore}>
              <Text style={styles.fc_title}>Exclusive Rewards</Text>
              <TouchableOpacity
                style={styles.header_view}
                onPress={() =>
                  this.props.navigation.navigate("ExclusiveRewards")
                }
              >
                <Text style={[styles.shop_more_txt, { marginRight: 3 }]}>
                  See More
                </Text>
                <Image
                  source={icons.arrow_right_org_outline_50}
                  style={styles.header_icon}
                />
              </TouchableOpacity>
            </View>
          )}
          {this.state.exclusive.length > 0 && (
            <View style={[styles.ex_con, { marginTop: 5 }]}>
              {this.renderExclusive()}
            </View>
          )}
          {/* ----------------------------------------------------- */}
          <View style={styles.view_header_main}>
            <View style={styles.header_view}>
              <Image
                resizeMode={"contain"}
                source={icons.flash_red_fill_43}
                style={styles.header_icon}
              />
              <Text style={styles.header_title_flash}>Flash Deals</Text>
            </View>
            <TouchableOpacity
              style={[styles.header_view, { marginRight: 10 }]}
              onPress={() => this.props.navigation.navigate("FlashDeals")}
            >
              <Text style={styles.shop_more_txt}>Shop More</Text>
              <Image
                source={icons.arrow_right_org_outline_50}
                style={styles.header_icon}
              />
            </TouchableOpacity>
          </View>
          {/* <View style={styles.v_flastD}> */}
          <ScrollView
            horizontal={true}
            contentContainerStyle={styles.cate_scroll_}
            showsHorizontalScrollIndicator={false}
          >
            {this.renderFlash()}
          </ScrollView>
          {/* </View> */}
          {/* -------- */}
          <View style={styles.v_shopmore}>
            <Text style={styles.fc_title}>Most Pupular</Text>
            <TouchableOpacity
              style={styles.header_view}
              onPress={() => this.props.navigation.navigate("MostPopular")}
            >
              <Text style={[styles.shop_more_txt, { marginRight: 3 }]}>
                Shop More
              </Text>
              <Image
                source={icons.arrow_right_org_outline_50}
                style={styles.header_icon}
              />
            </TouchableOpacity>
          </View>
          {this.renderNopd()}
          {/* <View style={styles.ex_con}>
            <View style={[styles.most_item, { marginLeft: 10 }]}>
              <Svg width={`${most_width}`} height={`${most_width / 2.7}`}>
                <Rect
                  rx="5"
                  x="0"
                  y="0"
                  width={`${most_width}`}
                  height={`${most_header / 2}`}
                  fill="#b3e5fc"
                />
                <Ellipse
                  cx={`${(most_width + 3) / 2}`}
                  cy={`${most_header / 2}`}
                  rx={`${(most_width + 10) / 2}`}
                  ry={`${width * 0.0375}`}
                  fill="#b3e5fc"
                />
              </Svg>
              <View style={styles.most_item_header}>
                <Text style={styles.most_header_txt}>Electric Bikes</Text>
                <Text style={styles.most_header_desc}>Tranding</Text>
              </View>
              <Image
                source={{
                  uri:
                    "https://files.bikeindex.org/uploads/Pu/147241/large_IMG_9470.JPG"
                }}
                style={styles.most_img}
              />
            </View>
            <View style={styles.most_item}>
              <Svg width={`${most_width}`} height={`${most_width / 2.7}`}>
                <Rect
                  rx="5"
                  x="0"
                  y="0"
                  width={`${most_width}`}
                  height={`${most_header / 2}`}
                  fill="#ffe0b2"
                />
                <Ellipse
                  cx={`${(most_width + 3) / 2}`}
                  cy={`${most_header / 2}`}
                  rx={`${(most_width + 10) / 2}`}
                  ry={`${width * 0.0375}`}
                  fill="#ffe0b2"
                />
              </Svg>
              <View style={styles.most_item_header}>
                <Text style={[styles.most_header_txt, { color: "#FC7E3A" }]}>
                  Hi-Fi Systems
                </Text>
                <Text style={[styles.most_header_desc, { color: "#FC7E3A" }]}>
                  Top selling
                </Text>
              </View>
              <Image
                source={{
                  uri:
                    "https://b-bam.com/wp-content/uploads/2018/07/Chipolo-2-Classic-Bluetooth-Item-Finderseattle-printed-corporate-cell-phone-accessories-1.png"
                }}
                style={styles.most_img}
              />
            </View>
            <View style={styles.most_item}>
              <Svg width={`${most_width}`} height={`${most_width / 2.7}`}>
                <Rect
                  rx="5"
                  x="0"
                  y="0"
                  width={`${most_width}`}
                  height={`${most_header / 2}`}
                  fill="#fbe9e7"
                />
                <Ellipse
                  cx={`${(most_width + 3) / 2}`}
                  cy={`${most_header / 2}`}
                  rx={`${(most_width + 10) / 2}`}
                  ry={`${width * 0.0375}`}
                  fill="#fbe9e7"
                />
              </Svg>
              <View style={styles.most_item_header}>
                <Text style={[styles.most_header_txt, { color: "#f06292" }]}>
                  DEESTONE
                </Text>
                <Text style={[styles.most_header_desc, { color: "#f48fb1" }]}>
                  Brand To List
                </Text>
              </View>
              <Image
                source={{
                  uri:
                    "http://pngimg.com/uploads/lipstick/lipstick_PNG23963.png"
                }}
                style={styles.most_img}
              />
            </View>
          </View> */}
          {/* <View style={styles.most_l}>
            <TouchableOpacity style={styles.most_l_1}>
              <View style={[styles.most_l_2, { paddingLeft: 10 }]}>
                <Text
                  ellipsizeMode={"tail"}
                  numberOfLines={1}
                  style={styles.ml_header}
                >
                  Men's Sport Shoes
                </Text>
                <Text style={styles.ml_like_count}>120 likes</Text>
                <Text style={styles.ml_desc}>Top selling</Text>
              </View>
              <View style={styles.v_img_leng}>
                <Image
                  style={styles.most_l_img}
                  source={{
                    uri:
                      "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.most_l_1}>
              <View style={[styles.most_l_2, { paddingLeft: 10 }]}>
                <Text
                  ellipsizeMode={"tail"}
                  numberOfLines={1}
                  style={styles.ml_header}
                >
                  Collection Watches
                </Text>
                <Text style={styles.ml_like_count}>162 likes</Text>
                <Text style={styles.ml_desc}>Top selling</Text>
              </View>
              <View style={styles.v_img_leng}>
                <Image
                  style={styles.most_l_img}
                  source={{
                    uri:
                      "https://gearpatrol.com/wp-content/uploads/2018/12/A-Guide-To-Watch-Microbrands-gear-patrol-lead-full.jpg"
                  }}
                />
              </View>
            </TouchableOpacity>
          </View> */}
          {/* Espacial */}
          {/* <View style={styles.espacial_view}>
            <View
              style={[
                styles.es_item,
                {
                  borderTopLeftRadius: 12
                }
              ]}
            >
              <View style={styles.es_header}>
                <Image
                  source={icons.like_circle_fill_32}
                  style={styles.es_icon}
                />
                <Text style={styles.es_header_txt}>Top Selection</Text>
              </View>
              <Image
                resizeMode={"contain"}
                style={styles.es_img}
                source={{
                  uri:
                    "https://cdn.shopify.com/s/files/1/1188/2592/products/1_6.png"
                }}
              />
            </View>
            <View
              style={[
                styles.es_item,
                { borderTopRightRadius: 12, marginLeft: 2 }
              ]}
            >
              <View style={styles.es_header}>
                <Image source={icons.balloon_fill_32} style={styles.es_icon} />
                <Text style={styles.es_header_txt}>New For You</Text>
              </View>
              <Image
                resizeMode={"contain"}
                style={styles.es_img}
                source={{
                  uri:
                    "https://www.freepngimg.com/thumb/bag/34521-8-women-bag-transparent.png"
                }}
              />
            </View>
            <View
              style={[
                styles.es_item,
                {
                  borderBottomLeftRadius: 12,
                  marginTop: 2
                }
              ]}
            >
              <View style={styles.es_header}>
                <Image source={icons.dimon_fill_32} style={styles.es_icon} />
                <Text style={styles.es_header_txt}>Featured Brands</Text>
              </View>
              <Image
                resizeMode={"contain"}
                style={styles.es_img}
                source={{
                  uri:
                    "https://www.freeiconspng.com/uploads/solid-wood-dining-room-furniture-27.png"
                }}
              />
            </View>
            <View
              style={[
                styles.es_item,
                {
                  borderBottomRightRadius: 12,
                  marginLeft: 2,
                  marginTop: 2
                }
              ]}
            >
              <View style={styles.es_header}>
                <Image source={icons.store_fill_32} style={styles.es_icon} />
                <Text style={styles.es_header_txt}>Stores You'll love</Text>
              </View>
              <Image
                resizeMode={"contain"}
                style={styles.es_img}
                source={{
                  uri:
                    "https://pngriver.com/wp-content/uploads/2018/04/Download-Cooking-Tools-Free-PNG-Image.png"
                }}
              />
            </View>
          </View> */}
          <View style={styles.v_shopmore}>
            <Text style={styles.fc_title}>Life Style</Text>
            <TouchableOpacity style={styles.header_view}>
              <Text style={[styles.shop_more_txt, { marginRight: 3 }]}>
                See More
              </Text>
              <Image
                source={icons.arrow_right_org_outline_50}
                style={styles.header_icon}
              />
            </TouchableOpacity>
          </View>
          {this.renderNopd()}
          {/* <View style={styles.ex_con}>
            <View style={[styles.most_item, { marginLeft: 10 }]}>
              <Svg width={`${most_width}`} height={`${most_width / 2.7}`}>
                <Rect
                  rx="5"
                  x="0"
                  y="0"
                  width={`${most_width}`}
                  height={`${most_header / 2}`}
                  fill="#fff9c4"
                />
                <Ellipse
                  cx={`${(most_width + 3) / 2}`}
                  cy={`${most_header / 2}`}
                  rx={`${(most_width + 10) / 2}`}
                  ry={`${width * 0.0375}`}
                  fill="#fff9c4"
                />
              </Svg>
              <View style={styles.most_item_header}>
                <Text style={styles.most_header_txt_life_1}>Mininal</Text>
                <Text style={styles.most_header_desc_life_1}>Tranding</Text>
              </View>
              <Image
                source={{
                  uri:
                    "http://becomechic.com/wp-content/uploads/2016/01/Cocoon-Dresses-3.jpg"
                }}
                style={styles.most_img}
              />
            </View>
            <View style={styles.most_item}>
              <Svg width={`${most_width}`} height={`${most_width / 2.7}`}>
                <Rect
                  rx="5"
                  x="0"
                  y="0"
                  width={`${most_width}`}
                  height={`${most_header / 2}`}
                  fill="#b3e5fc"
                />
                <Ellipse
                  cx={`${(most_width + 3) / 2}`}
                  cy={`${most_header / 2}`}
                  rx={`${(most_width + 10) / 2}`}
                  ry={`${width * 0.0375}`}
                  fill="#b3e5fc"
                />
              </Svg>
              <View style={styles.most_item_header}>
                <Text style={[styles.most_header_txt, { color: "#1a237e" }]}>
                  Office
                </Text>
                <Text style={[styles.most_header_desc, { color: "#1a237e" }]}>
                  Top selling
                </Text>
              </View>
              <Image
                source={{
                  uri:
                    "https://images.asos-media.com/products/asos-design-chemise-slim-habillee-en-tissu-stretch-bleu/8745086-1-blue?$XXL$&wid=513&fit=constrain"
                }}
                style={styles.most_img}
              />
            </View>
            <View style={styles.most_item}>
              <Svg width={`${most_width}`} height={`${most_width / 2.7}`}>
                <Rect
                  rx="5"
                  x="0"
                  y="0"
                  width={`${most_width}`}
                  height={`${most_header / 2}`}
                  fill="#a5d6a7"
                />
                <Ellipse
                  cx={`${(most_width + 3) / 2}`}
                  cy={`${most_header / 2}`}
                  rx={`${(most_width + 10) / 2}`}
                  ry={`${width * 0.0375}`}
                  fill="#a5d6a7"
                />
              </Svg>
              <View style={styles.most_item_header}>
                <Text style={[styles.most_header_txt, { color: "#004d40" }]}>
                  Modern Lao
                </Text>
                <Text style={[styles.most_header_desc, { color: "#33691e" }]}>
                  Brand To List
                </Text>
              </View>
              <Image
                source={{
                  uri:
                    "https://scontent.fvte3-1.fna.fbcdn.net/v/t1.0-9/61537082_1738476032922216_4440111923312197632_o.jpg?_nc_cat=105&_nc_ohc=3QVtUFZH8EIAQneffKyGdVBoA2Vho3I60m4aUFv0J4wavd2A-Hl7vC6vw&_nc_ht=scontent.fvte3-1.fna&oh=cf2e24b29a72e0053b985723a827042a&oe=5E407092"
                }}
                style={styles.most_img}
              />
            </View>
          </View>
          <View style={styles.most_l}>
            <TouchableOpacity style={styles.most_l_1}>
              <View style={[styles.most_l_2, { paddingLeft: 10 }]}>
                <Text
                  ellipsizeMode={"tail"}
                  numberOfLines={1}
                  style={styles.ml_header}
                >
                  Street fashion
                </Text>
                <Text style={styles.ml_like_count}>120 likes</Text>
                <Text style={styles.ml_desc}>Top selling</Text>
              </View>
              <View style={styles.v_img_leng}>
                <Image
                  style={styles.most_l_img}
                  source={{
                    uri:
                      "https://i.pinimg.com/originals/c3/58/eb/c358eba25a92b681b0a92803a1e6c39a.jpg"
                  }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.most_l_1}>
              <View style={[styles.most_l_2, { paddingLeft: 10 }]}>
                <Text
                  ellipsizeMode={"tail"}
                  numberOfLines={1}
                  style={styles.ml_header}
                >
                  Makeup no makeup
                </Text>
                <Text style={styles.ml_like_count}>162 likes</Text>
                <Text style={styles.ml_desc}>Top selling</Text>
              </View>
              <View style={styles.v_img_leng}>
                <Image
                  style={styles.most_l_img}
                  source={{
                    uri:
                      "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRZls2Sv-E6pel9qPuHFgzVgWhp5UAEJnof1QR7Sbv-asTPh4s0"
                  }}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: "100%",
              height: width * 0.2,
              paddingHorizontal: 10,
              marginTop: 12
            }}
          >
            <Image
              source={{
                uri:
                  "https://picovico.com/blog/wp-content/uploads/2016/04/The-best-birthday-gift-min.png"
              }}
              style={{ flex: 1, borderRadius: 6 }}
            />
          </View> */}
          <View style={styles.v_shopmore}>
            <Text style={styles.fc_title}>Featured Categories</Text>
            <TouchableOpacity style={styles.header_view}>
              <Text style={[styles.shop_more_txt, { marginRight: 3 }]}>
                See More
              </Text>
              <Image
                source={icons.arrow_right_org_outline_50}
                style={styles.header_icon}
              />
            </TouchableOpacity>
          </View>
          {this.renderNopd()}
          {/* <View style={styles.fc_con}>
            <View style={styles.v_item_cate_1}>
              <View style={{ flex: 1, paddingRight: 2.5 }}>
                <Card style={styles.v_card_3}>
                  <TouchableOpacity
                    style={styles.btn_cate_top}
                    activeOpacity={1}
                  >
                    <View style={{ flex: 1, paddingVertical: 7 }}>
                      <Image
                        source={{
                          uri:
                            "https://scontent.fvte3-1.fna.fbcdn.net/v/t1.0-9/p960x960/43184465_1173135479560053_7195340319938838528_o.jpg?_nc_cat=102&_nc_ohc=pzRCpR7LdpsAQlNwEkSWLW_9-2AJaHex87QuBzve93eOyrv3qHCe1PrOg&_nc_ht=scontent.fvte3-1.fna&oh=0eca2c910af57268bcfc4d9a4b903fb8&oe=5E8743CB"
                        }}
                        style={{ flex: 1, borderRadius: 7 }}
                      />
                    </View>
                    <View style={styles.v_top_cate}>
                      <Text style={styles.txt_name_cate_1}>
                        Mobile & Electronic
                      </Text>
                      <Text style={styles.txt_title_top}>Top Selling</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              </View>
              <View style={{ flex: 1, paddingLeft: 2.5 }}>
                <Card style={styles.v_card_3}>
                  <TouchableOpacity
                    style={styles.btn_cate_top}
                    activeOpacity={1}
                  >
                    <View style={{ flex: 1, paddingVertical: 7 }}>
                      <Image
                        source={{
                          uri:
                            "https://dimg.dillards.com/is/image/DillardsZoom/nav2/lancme-teint-idole-foundation-collection/05810453_zi.jpg"
                        }}
                        style={{ flex: 1, borderRadius: 7 }}
                      />
                    </View>
                    <View style={styles.v_top_cate}>
                      <Text style={styles.txt_name_cate_2}>Cosmetic</Text>
                      <Text style={styles.txt_title_top}>Top Selling</Text>
                    </View>
                  </TouchableOpacity>
                </Card>
              </View>
            </View>
            <View style={styles.v_item_cate_2}>
              <Card style={styles.v_card_3}>
                <TouchableOpacity style={styles.btn_card_3} activeOpacity={1}>
                  <View style={{ flex: 2, paddingVertical: 7 }}>
                    <Image
                      source={{
                        uri:
                          "https://dimg.dillards.com/is/image/DillardsZoom/nav2/lancme-teint-idole-foundation-collection/05810453_zi.jpg"
                      }}
                      style={styles.img_item_2}
                    />
                  </View>
                  <View style={styles.v_txt_title_item_2}>
                    <Text style={styles.txt_name_cate_3}>Fashion Men</Text>
                    <Text style={styles.txt_title_top}>Top Selling</Text>
                  </View>
                </TouchableOpacity>
              </Card>
              <Card style={styles.v_card_3}>
                <TouchableOpacity style={styles.btn_card_3} activeOpacity={1}>
                  <View style={{ flex: 2, paddingVertical: 7 }}>
                    <Image
                      source={{
                        uri:
                          "https://i.pinimg.com/originals/bf/01/01/bf01017f54dce502a0a4e650ac853e3d.jpg"
                      }}
                      style={styles.img_item_2}
                    />
                  </View>
                  <View style={styles.v_txt_title_item_2}>
                    <Text style={styles.txt_name_cate_4}>Fashion Women</Text>
                    <Text style={styles.txt_title_top}>Top Selling</Text>
                  </View>
                </TouchableOpacity>
              </Card>
              <Card style={styles.v_card_3}>
                <TouchableOpacity style={styles.btn_card_3} activeOpacity={1}>
                  <View style={{ flex: 2, paddingVertical: 7 }}>
                    <Image
                      source={{
                        uri:
                          "https://static.zumiez.com/skin/frontend/delorum/default/images/Champion-Shoes-Neon-Black-Kids-072629-750x466.jpg"
                      }}
                      style={styles.img_item_2}
                    />
                  </View>
                  <View style={styles.v_txt_title_item_2}>
                    <Text style={styles.txt_name_cate_5}>Shose Women</Text>
                    <Text style={styles.txt_title_top}>Top Selling</Text>
                  </View>
                </TouchableOpacity>
              </Card>
            </View>
          </View> */}
          <View style={styles.v_shopmore}>
            <Text style={styles.fc_title}>More To Love</Text>
            <TouchableOpacity style={styles.header_view}>
              <Text style={[styles.shop_more_txt, { marginRight: 3 }]}>
                Shop More
              </Text>
              <Image
                source={icons.arrow_right_org_outline_50}
                style={styles.header_icon}
              />
            </TouchableOpacity>
          </View>
          <View>
            <ScrollView contentContainerStyle={styles.all_pd_con}>
              {this.state.allpd.length > 0
                ? this.renderProductItems()
                : this.renderNopd()}
            </ScrollView>
          </View>
        </Content>
      </Container>
    );
  }
  renderCate() {
    const padd = (width - 170) / 10;
    const styleMenu = {
      width: padd * 2 + 30
    };
    return cate.map((item, key) => {
      return (
        <TouchableOpacity
          onPress={() => {
            if (item.id == 1) {
              this.props.navigation.navigate("FlashDeals");
            } else if (item.id == 2) {
              this.props.navigation.navigate("DropShip");
            } else if (item.id == 3) {
              this.props.navigation.navigate("Voucher");
            } else if (item.id == 4) {
              this.props.navigation.navigate("AllCategories");
            } else {
              this.props.navigation.navigate("AllCategories");
            }
          }}
          key={key}
          style={[
            styles.view_of_cate,
            styleMenu,
            { marginLeft: key == 0 ? 10 : 0 }
          ]}
        >
          <Image source={item.img} style={styles.cate_img} />
          <Text numberOfLines={1} style={styles.cate_txt}>
            {item.title}
          </Text>
        </TouchableOpacity>
      );
    });
  }
  renderExclusive() {
    return this.state.exclusive.map((item, key) => {
      if (key < 3) {
        return (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => this.props.navigation.navigate(item.ex_target)}
            key={key}
            style={[
              styles.ex_item,
              {
                marginLeft: key == 0 ? 10 : 0,
                backgroundColor: item.ex_bgcolor
              }
            ]}
          >
            <Image
              source={{
                uri: item.ex_img
              }}
              style={styles.ex_icon}
            />
            <Text style={[styles.ex_txt, { color: item.ex_txtcolor }]}>
              {item.ex_header}
            </Text>
            <View style={styles.rew_con}>
              <LinearGradient
                colors={item.ex_btncolor}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.gradient}
              >
                <Image source={icons.coin_gold_fill_43} style={styles.coins} />
                <Text style={styles.coins_txt}>{item.ex_btntxt}</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>
        );
      } else {
        return;
      }
    });
  }
  renderFlash() {
    const widths = (width - 35) / 4;
    const styleMenu = {
      width: widths,
      height: widths * 1.5,
      marginRight: 5,
      borderRadius: 12
    };
    return this.renderNopd()
    // return flash.map((item, key) => {
    //   return (
    //     <TouchableOpacity
    //       onPress={() => this.props.navigation.navigate("ProductDetail")}
    //       activeOpacity={0.8}
    //       key={key}
    //       style={[
    //         styleMenu,
    //         { marginLeft: key == 0 ? 10 : 0 },
    //         styles.flash_con
    //       ]}
    //     >
    //       <Image
    //         resizeMode={"center"}
    //         style={[styles.flash_img, { height: widths }]}
    //         source={{
    //           uri: item
    //         }}
    //       />
    //       <View style={{ position: "absolute", right: 0 }}>
    //         <Svg height={`${width * 0.045}`} width={`${width * 0.1}`}>
    //           <Polygon
    //             points={`${width * 0.0175},0 ${width * 0.045},0 ${width *
    //               0.045},${width * 0.045} ${width * 0.0175},${width *
    //               0.045} 0,${width * 0.0225}`}
    //             fill="#ff9800"
    //           />
    //           <Rect
    //             x={`${width * 0.0175}`}
    //             y={`0`}
    //             rx={`${width * 0.015}`}
    //             width={`${width * 0.0825}`}
    //             height={`${width * 0.045}`}
    //             fill="#ff9800"
    //           />
    //         </Svg>
    //         <Text style={styles.discount_txt}>-60%</Text>
    //       </View>
    //       <View style={styles.sold_out}>
    //         <Text style={styles.sold_txt}>1290 Sold</Text>
    //       </View>
    //       <Text style={styles.current_price}>₭25,000</Text>
    //     </TouchableOpacity>
    //   );
    // });
  }

  renderProductItems() {
    return this.state.allpd.map((item, key) => {
      // --------------------------------------------------------------------
      const itemStyle = {
        width: width > 511 ? (width - 60) / 3 : (width - 46) / 2
      };
      const img_w = width > 511 ? (width - 60) / 3 : (width - 46) / 2;
      // --------------------------------------------------------------------
      return (
        <Card key={key} style={[itemStyle, styles.all_pd_card]}>
          <TouchableOpacity
            onPress={() =>
              this.props.navigation.navigate("ProductDetail", { id: item._id })
            }
            style={[itemStyle, styles.all_pd_touchable_op]}
            activeOpacity={0.8}
          >
            <View style={styles.all_pd_image_view}>
              <Image
                style={[
                  styles.all_pd_img,
                  { height: img_w * 0.81, width: img_w }
                ]}
                source={{
                  uri: item.pd_img[0],
                  cache: "only-if-cached"
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
                {item.pd_name}
              </Text>
              <Text style={styles.pop_pd_price}>
                {/* {item.option !== undefined ? "have" : "No"} */}
                {isNullnUndifined(item.option) === false &&
                isNullnUndifined(item.option.product_option) === false
                  ? item.option.product_option.detail[0].detail.detail.length >
                    0
                    ? item.option.product_option.detail[0].detail.detail[0]
                        .price + " LAK"
                    : item.option.product_option.detail[0].price + " LAK"
                  : "undefined"}
              </Text>
            </View>
          </TouchableOpacity>
        </Card>
      );
    });
  }
  renderNopd() {
    return (
      <View
        style={{ width: width, height: width / 2, justifyContent: "center" }}
      >
        <Text style={{ alignSelf: "center" }}>No product</Text>
      </View>
    );
  }
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("lang");
      if (value !== null) {
        setActiveLang(this.props.currentDis, value);
      }
    } catch (e) {
      // error reading value
    }
  };
  getMainSlideData() {
    try {
      timeoutPromise(
        10000,
        fetch(ads + url.user_get_all_main_slider)
          .then(response => response.json())
          .then(responseJson => {
            // alert(JSON.stringify(responseJson));
            this.setState({ mainslide: responseJson.data });
            setActiveProccess(this.props.currentDis, "done");
          })
          .catch(error => {
            // console.log(error);
            setActiveProccess(this.props.currentDis, "failed");
          }),
        this.props,
        null
      );
    } catch (err) {
      // console.log(err);
      setActiveProccess(this.props.currentDis, "failed");
    }
  }
  getExclusive() {
    try {
      timeoutPromise(
        10000,
        fetch(ads + url.user_get_exclusive)
          .then(response => response.json())
          .then(responseJson => {
            // alert(JSON.stringify(responseJson));
            this.setState({ exclusive: responseJson });
            setActiveProccess(this.props.currentDis, "done");
          })
          .catch(error => {
            console.log(error);
            setActiveProccess(this.props.currentDis, "failed");
          }),
        this.props,
        null
      );
    } catch (err) {
      console.log(err);
      setActiveProccess(this.props.currentDis, "failed");
    }
  }
  getAllproducts() {
    try {
      timeoutPromise(
        10000,
        fetch(ads + url.get_all_product)
          .then(response => response.json())
          .then(responseJson => {
            // alert(JSON.stringify(responseJson));
            this.setState({ allpd: responseJson });
            setActiveProccess(this.props.currentDis, "done");
          })
          .catch(error => {
            console.log(error);
            setActiveProccess(this.props.currentDis, "failed");
          }),
        this.props,
        null
      );
    } catch (err) {
      console.log(err);
      setActiveProccess(this.props.currentDis, "failed");
    }
  }
}
const mapStateToProps = state => {
  return {
    user: state.setActiveUser.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Home);
