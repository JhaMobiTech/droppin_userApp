import React, { Component } from "react";
import Svg, {
  Rect,
  Ellipse,
  Polygon,
  Defs,
  LinearGradient as LinearGradients,
  Stop
} from "react-native-svg";
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
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Swiper from "react-native-swiper";
import { icons } from "../../assets/icons/IconsConfig";
import { styles } from "./../../styles/flashDealStyle";
import { ads, url } from "../../apis/Url";
import LinearGradient from "react-native-linear-gradient";
import {
  timeoutPromise,
  setActiveProccess,
  refreshControl
} from "../../functions/connectionManage";
const data = [
  "https://milanos-shoes.gr/image/cache/catalog/shoes/Adam_s/921_18005__1__700x700-700x700.jpg",
  "https://cf.shopee.ph/file/39511199f221cfed9a55205bb7491831",
  "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwbb729ac9/images/ProductImages/120283/120283_097_l_WR.jpg?sw=900"
];
export default class FlashDeals extends Component {
  state = {
    index: 0,
    routes: [
      { key: "0", title: "Picked For You" },
      { key: "1", title: "Consumer And Electronics" },
      { key: "2", title: "Health" },
      { key: "3", title: "Cars" },
      { key: "4", title: "Cloths" }
    ]
  };
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      // if (Platform.OS == "android") {
      //   StatusBar.setTranslucent(true);
      //   StatusBar.setBackgroundColor("transparent");
      // }
      StatusBar.setBarStyle("light-content");
    });
    this.getFlashDeals();
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  getFlashDeals = () => {
    try { 
      timeoutPromise(
        10000,
        fetch(ads + url.get_all_flash_deals)
          .then(response => response.json())
          .then(responseJson => {
            // alert(JSON.stringify(responseJson));
            console.log('responseJson-getFlashDeals ->', responseJson);
            // this.setState({ allpd: responseJson });
            // setActiveProccess(this.props.currentDis, "done");
          })
          .catch(error => {
            console.log('error ->', error);
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

  render() {
    const { width, height } = Dimensions.get("screen");
    const { selectedopt, selectedAdd, actionBtn } = this.state;
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Svg height={`${width * 0.67}`} style={styles.svg} width={`${width}`}>
          <Defs>
            <LinearGradients id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0" stopColor="#FDB13E" stopOpacity="1" />
              <Stop offset="1" stopColor="#FF5C45" stopOpacity="1" />
            </LinearGradients>
          </Defs>
          <Ellipse
            cx={`${width / 2}`}
            cy={`${width / 4}`}
            rx={`${width / 1.3}`}
            ry={`${width / 2.4}`}
            fill="url(#grad)"
          />
        </Svg>
        <Header hasTabs={true} noShadow={true} style={styles.header}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => goBack()}
              activeOpacity={1}
              style={styles._btn_back_dARK}
            >
              <Image style={styles._iconBack_dark} source={icons.back_dark} />
            </TouchableOpacity>
          </View>
          <Text style={styles._text_header}>Flash Deals</Text>
          <View style={styles.header_right}>
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
          <StatusBar
            translucent={true}
            backgroundColor={"transparent"}
            barStyle="light-content"
          />
          {/* <TabView
            navigationState={this.state}
            renderScene={props => this.renderScene()}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get("window").width }}
            renderTabBar={props => (
              <TabBar
                tabStyle={{ width: "auto" }}
                scrollEnabled={true}
                {...props}
                indicatorStyle={{
                  backgroundColor: "white",
                  paddingHorizontal: 5
                }}
                style={{ backgroundColor: "tranparent" }}
                labelStyle={{
                  color: "#fff",
                  textTransform: "capitalize",
                  textAlign: "center"
                }}
              />
            )}
          /> */}
          {this.renderScene()}
        </Content>
      </Container>
    );
  }
  renderScene = () => {
    return (
      <View>
        <ScrollView
          horizontal={true}
          contentContainerStyle={styles.sub_cate_scrollview}
        >
          <TouchableOpacity
            style={[styles.sub_cate, { backgroundColor: "#fff" }]}
          >
            <Text style={[styles.sub_txt_color, { color: "#FF4747" }]}>
              NOW
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sub_cate}>
            <Text style={styles.sub_txt_color}>UPCOMING</Text>
          </TouchableOpacity>
        </ScrollView>
        <ScrollView contentContainerStyle={styles.all_pd_con}>
          {this.renderProductItems()}
        </ScrollView>
      </View>
    );
  };
  renderProductItems() {
    return data.map((item, key) => {
      return (
        <Card key={key} style={styles.all_pd_card}>
          <ImageBackground
            resizeMode={"stretch"}
            source={icons.header_card_board_red_320}
            style={styles.poster_}
          >
            <Text style={styles.flash_txt}>Flash Sales</Text>
            <View style={styles.count_down_time}>
              <View style={styles.num_bound}>
                <Text style={styles.num}>0</Text>
              </View>
              <View style={styles.num_bound}>
                <Text style={styles.num}>0</Text>
              </View>
              <Text style={styles.double_qote}>:</Text>
              <View style={styles.num_bound}>
                <Text style={styles.num}>0</Text>
              </View>
              <View style={styles.num_bound}>
                <Text style={styles.num}>0</Text>
              </View>
            </View>
          </ImageBackground>
          <Image
            resizeMode={"contain"}
            source={{ uri: item }}
            style={styles.pd_img}
          />
          <Text numberOfLines={1} style={styles.pd_name}>
            Nike Air Max
          </Text>
          <Text style={styles.pd_price}>100,000 LAK</Text>
          <View style={styles.progress_1}>
            <View style={styles.progress_2} />
          </View>
          <Text style={styles.left_item}>8 sold</Text>
        </Card>
      );
    });
  }
}
