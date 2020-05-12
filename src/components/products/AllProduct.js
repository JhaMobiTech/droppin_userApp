import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ActionSheetIOS,
  Platform,
  ScrollView,
  Dimensions,
  SafeAreaView
} from "react-native";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import Modal from "react-native-modal";
import { Container, Content, Header, Card } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import MultiSlider from "@ptomasroos/react-native-multi-slider";
import { styles } from "../../styles/allProductStyle";
import { icons } from "../../assets/icons/IconsConfig";
import { connect } from "react-redux";
import { ads, url } from "../../apis/Url";
const gender = ["Male", "Female", "Baby"];
import {
  setActiveProccess,
  timeoutPromise,
  onReload
} from "./../../functions/connectionManage";
import { SearchAndLocate } from "./../loadingoverlay/AppLoading";
import {
  isNullnUndifined,
  isUndifined,
  isObject
} from "./../../checkValue/ValueChecker";
import { imgPath } from "../../apis/IamgePath";
const brand = [
  "Adidas",
  "Lotto",
  "Nike",
  "Apex",
  "Reebook",
  "Puma",
  "G-shock",
  "NIP"
];
const size = ["S", "M", "L", "XL"];
const color = ["#FFB5B5", "#EDB5FF", "#C8B5FF", "#B5DDFF", "#FFDB92"];
const pop = [
  "https://scene7.zumiez.com/is/image/zumiez/pdp_hero/Champion-Men-s-Rally-Pro-Black-%26-White-Shoes-_298256.jpg",
  "https://ii2.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/87344_XXX_v1.tif&qlt=50&wid=650&cvt=jpeg",
  "https://images.costco-static.com/ImageDelivery/imageService?profileId=12026540&imageId=100495158-847__1&recipeName=350"
];
const { width, height } = Dimensions.get("screen");
// ---------

var min = 50000;
var max = 1000000;
class AllProduct extends Component {
  state = {
    menu_width: null,
    openfilter: false,
    minp: 50000,
    maxp: 1000000,
    values: null,
    option1: 0,
    option2: 0,
    brandSelected: 0,
    genderSelected: 0,
    bestmatch: "Best Match",
    searchText: this.props.navigation.getParam("keyword"),
    searchResult: []
  };
  componentDidMount() {
    this.onSearch(this.state.searchText);
  }
  render() {
    const {
      menu_width,
      openfilter,
      maxp,
      minp,
      option1,
      option2,
      brandSelected,
      genderSelected,
      searchResult
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
          <TouchableOpacity
            activeOpacity={1}
            style={styles.search_container}
            onPress={() => this.props.navigation.navigate("MainSearch")}
          >
            {/* <View style={styles.search_input}> */}
            <Text style={{ marginLeft: 10 }}>{this.state.searchText}</Text>
            {/* </View> */}
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Keyboard.dismiss()}
            accessible={false}
          >
            <Image
              style={styles._iconBack_dark}
              source={icons.cart_gray_outline_50x50}
            />
          </TouchableOpacity>
        </Header>
        <Content contentContainerStyle={{ flex: 1 }}>
          <StatusBar backgroundColor="#fff" barStyle="dark-content" />
          {/* filter ----------------------- */}
          <View>
            <View style={styles.option_menu_con}>
              <TouchableOpacity
                onLayout={event =>
                  this.setState({
                    menu_width: event.nativeEvent.layout.width
                  })
                }
                activeOpacity={0.7}
                style={[styles.option_con, styles.filter_]}
              >
                <Menu>
                  <MenuTrigger>
                    <View
                      style={[
                        styles.menu_trigle,
                        {
                          width: menu_width !== null ? menu_width - 36 : 100
                        }
                      ]}
                    >
                      <Text style={styles.option_text}>Best Match</Text>
                      <Image
                        style={styles.arrow_down_icon}
                        source={icons.arrow_down_50_black}
                      />
                    </View>
                  </MenuTrigger>
                  <MenuOptions>
                    <MenuOption
                      onSelect={() =>
                        this.setState({ bestmatch: "Best Match" })
                      }
                      text="Best Match"
                    />
                    <MenuOption
                      onSelect={() =>
                        this.setState({ bestmatch: "Price (low to high)" })
                      }
                      text="Price (low to high)"
                    />
                    <MenuOption
                      onSelect={() =>
                        this.setState({ bestmatch: "Price (High to low)" })
                      }
                      text="Price (High to low)"
                    />
                    <MenuOption
                      onSelect={() =>
                        this.setState({ bestmatch: "Date (New to Old)" })
                      }
                      text="Date (New to Old)"
                    />
                  </MenuOptions>
                </Menu>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.setState({ openfilter: !openfilter })}
                activeOpacity={0.7}
                style={[styles.option_con, styles.filter_]}
              >
                <Text style={styles.option_text}>Filter</Text>
                <Image
                  style={styles.arrow_down_icon}
                  source={icons.arrow_down_50_black}
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* filter ----------------------- */}
          <View>
            {this.props.proccess == "loading"
              ? SearchAndLocate()
              : searchResult.length > 0
              ? this.renderProducts(menu_width, openfilter)
              : this.renderNoResult()}
          </View>
          {/* ---------------- */}
          <Modal
            coverScreen={true}
            backdropColor={"#979797"}
            style={styles.md_filter}
            animationIn="slideInRight"
            animationOut="slideOutRight"
            isVisible={this.state.openfilter}
          >
            <SafeAreaView>
              <ScrollView>
                <View style={styles.md_view}>
                  <View style={styles.md_header_container}>
                    <Text style={styles.md_header_txt}>Filter (2) </Text>
                    <TouchableOpacity
                      onPress={() => this.setState({ openfilter: false })}
                    >
                      <Image
                        source={icons.multiply_gray_outline_48}
                        style={styles.x_close}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.x_reset_touch,
                      { alignItems: "flex-end", marginRight: 13, marginTop: 10 }
                    ]}
                  >
                    <Text style={styles.reset_txt}>Reset</Text>
                  </TouchableOpacity>
                  <Text style={styles.option_header}>Price</Text>
                  <View style={styles.price_length_con}>
                    <Text style={styles.price_length_txt}>{minp} LAK</Text>
                    <Text style={styles.price_length_txt}>{maxp} LAK</Text>
                  </View>
                  <View
                    style={{
                      width: width / 2 - 32,
                      marginLeft: 16,
                      alignItems: "center"
                    }}
                  >
                    <MultiSlider
                      containerStyle={styles.slider_style}
                      sliderLength={width / 2 - 44}
                      enabledOne={true}
                      enabledTwo={true}
                      step={50000}
                      max={1000000}
                      min={100000}
                      onValuesChange={ext => {
                        this.setState({
                          values: ext,
                          minp: ext[0],
                          maxp: ext[1]
                        });
                      }}
                      values={[minp, maxp]}
                    />
                  </View>
                  <Text style={styles.option_header}>Size</Text>
                  <View>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={styles.option_scroll}
                    >
                      {size.map((item, key) => {
                        return (
                          <TouchableOpacity
                            key={key}
                            onPress={() => this.setState({ option1: key })}
                            style={[
                              styles.option_touch,
                              {
                                backgroundColor:
                                  option1 == key ? "#FE6336" : "#E6EAEE"
                                // marginLeft: key == 0 ? 16 : 0
                              }
                            ]}
                          >
                            <Text
                              style={[
                                styles.option_text,
                                {
                                  color: key == option1 ? "#E6EAEE" : "#111111"
                                }
                              ]}
                            >
                              {item}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  </View>
                  <Text style={[styles.option_header, { marginTop: 20 }]}>
                    Color
                  </Text>
                  <View>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={styles.option_scroll}
                    >
                      {color.map((item, key) => {
                        return (
                          <TouchableOpacity
                            key={key}
                            onPress={() => this.setState({ option1: key })}
                            style={[
                              styles.option_touch,
                              {
                                backgroundColor: item
                              }
                            ]}
                          >
                            {/* <Text
                          style={[
                            styles.option_text,
                            { color: key == option1 ? "#E6EAEE" : "#111111" }
                          ]}
                        >
                          {item}
                        </Text> */}
                          </TouchableOpacity>
                        );
                      })}
                    </ScrollView>
                  </View>
                  <Text style={[styles.option_header, { marginTop: 20 }]}>
                    Review
                  </Text>
                  <View>
                    <ScrollView
                      horizontal={true}
                      contentContainerStyle={styles.option_scroll}
                    >
                      <TouchableOpacity style={styles.star_touch}>
                        <Image
                          source={icons.star_yello_fill_75}
                          style={styles.rw_star}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.star_touch}>
                        <Image
                          source={icons.star_yello_fill_75}
                          style={styles.rw_star}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.star_touch}>
                        <Image
                          source={icons.star_yello_fill_75}
                          style={styles.rw_star}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.star_touch}>
                        <Image
                          source={icons.star_yello_fill_75}
                          style={styles.rw_star}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity style={styles.star_touch}>
                        <Image
                          source={icons.star_yello_fill_75}
                          style={styles.rw_star}
                        />
                      </TouchableOpacity>
                    </ScrollView>
                  </View>
                  <Text style={[styles.option_header, { marginTop: 20 }]}>
                    Brand
                  </Text>
                  <View>
                    <ScrollView contentContainerStyle={styles.brand_scroll}>
                      <View style={styles.brand_view}>
                        {brand.map((item, key) => {
                          return (
                            <TouchableOpacity
                              key={key}
                              onPress={() =>
                                this.setState({ brandSelected: key })
                              }
                              style={[
                                styles.brand_touch,
                                {
                                  backgroundColor:
                                    brandSelected == key ? "#FE6336" : "#E6EAEE"
                                }
                              ]}
                            >
                              <Text
                                style={[
                                  styles.brand_txt,
                                  {
                                    color:
                                      key == brandSelected ? "#fff" : "#111111"
                                  }
                                ]}
                              >
                                {item}
                              </Text>
                            </TouchableOpacity>
                          );
                        })}
                      </View>
                    </ScrollView>
                  </View>
                  <Text style={[styles.option_header, { marginTop: 20 }]}>
                    Gender
                  </Text>
                  <ScrollView contentContainerStyle={styles.brand_scroll}>
                    <View style={styles.brand_view}>
                      {gender.map((item, key) => {
                        return (
                          <TouchableOpacity
                            key={key}
                            onPress={() =>
                              this.setState({ genderSelected: key })
                            }
                            style={[
                              styles.brand_touch,
                              {
                                backgroundColor:
                                  genderSelected == key ? "#FE6336" : "#E6EAEE"
                              }
                            ]}
                          >
                            <Text
                              style={[
                                styles.brand_txt,
                                {
                                  color:
                                    key == genderSelected ? "#fff" : "#111111"
                                }
                              ]}
                            >
                              {item}
                            </Text>
                          </TouchableOpacity>
                        );
                      })}
                    </View>
                  </ScrollView>
                  <TouchableOpacity>
                    <LinearGradient
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      colors={["#FC933B", "#FF4C34"]}
                      style={styles.apply_gra}
                    >
                      <Text style={styles.apply_txt}>Apply</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>
              </ScrollView>
            </SafeAreaView>
          </Modal>
        </Content>
      </Container>
    );
  }
  renderProducts(menu_width, openfilter) {
    return (
      <ScrollView
        // stickyHeaderIndices={[0]}
        contentContainerStyle={[
          styles.all_pd_con,
          { marginLeft: 0, marginRight: 0 }
        ]}
      >
        <View style={styles.promo_header}>
          <Text style={styles.promo_txt}>
            Found {this.state.searchResult.length} Products
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: 16,
            marginBottom: 20
          }}
        >
          {this.renderProductItems()}
        </View>
      </ScrollView>
    );
  }
  renderProductItems() {
    return this.state.searchResult.map((item, key) => {
      // --------------------------------------------------------------------
      const itemStyle = {
        width: width > 511 ? (width - 60) / 3 : (width - 46) / 2
      };
      const img_w = width > 511 ? (width - 60) / 3 : (width - 46) / 2;
      // --------------------------------------------------------------------
      return (
        <Card key={key} style={[itemStyle, styles.all_pd_card]}>
          <TouchableOpacity style={[itemStyle, styles.all_pd_touchable_op]}>
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
    });
  }
  onChangePriceLength = () => {};
  renderNoResult() {
    return (
      <View
        style={{
          height: 200,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center"
        }}
      >
        <Image
          style={{ width: 60, height: 60 }}
          source={icons.empty_box_gray_100}
        />
        <Text style={{ color: "gray", fontSize: 12, marginTop: 20 }}>
          No result found
        </Text>
      </View>
    );
  }
  onSearch(text) {
    if (text.length > 0) {
      setActiveProccess(this.props.currentDis, "loading");
      try {
        timeoutPromise(
          10000,
          this.searchProduct(text),
          this.props,
          this.props.lang.connection_failed
        );
      } catch (err) {
        console.log(err);
      }
    } else {
      alert("Empty text !");
    }
  }
  searchProduct(text) {
    return fetch(ads + url.search_product_by_name, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pd_name: text
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ searchResult: responseJson });
        setActiveProccess(this.props.currentDis, "done");
      })
      .catch(error => {
        console.log(error);
        setActiveProccess(this.props.currentDis, "failed");
      });
  }
}
// --------------------------------------------------------
const mapStateToProps = state => {
  return {
    lang: state.setActiveLanguage.data,
    curentlang: state.setActiveLanguage.lang,
    proccess: state.setActiveProccess.proccess
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllProduct);
