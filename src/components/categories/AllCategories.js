import React, { Component } from "react";
import { connect } from "react-redux";
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
import { styles } from "./../../styles/allCategoriesStyle";
import { ads, url } from "../../apis/Url";
import { imgPath } from "../../apis/IamgePath";
import { SimpleLoadingHori } from "./../loadingoverlay/AppLoading";
import { emptySubcate } from "./../empty_and_failed/EmptyScene";
import { exclusiveConnectionFailed } from "./../empty_and_failed/FailedScene";
import {
  setActiveProccess,
  timeoutPromise,
  onReload
} from "./../../functions/connectionManage";
const { width, height } = Dimensions.get("screen");
class AllCategories extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "loading");
    this.state = {
      selectedCate: 0,
      allcate: [],
      subcate: []
    };
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("dark-content");
    });
    timeoutPromise(
      10000,
      this.getAllCate(),
      this.props,
      this.props.lang.connection_failed
    );
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { selectedCate, allcate, subcate } = this.state;
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header}>
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => goBack()}
              activeOpacity={1}
              style={styles._btn_back_dARK}
            >
              <Image style={styles._iconBack_dark} source={icons.back_dark} />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.actionbar_title}>Categories</Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Image
              source={icons.search_left_outline_42}
              style={styles.search_icon}
            />
          </View>
        </Header>
        <Content contentContainerStyle={{ flex: 1, alignItems: "center" }}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          {this.props.proccess == "loading" ? (
            SimpleLoadingHori()
          ) : this.props.proccess == "failed" ? (
            exclusiveConnectionFailed(() =>
              onReload(this.props, () => this.getAllCate())
            )
          ) : allcate.length > 0 ? (
            <View style={styles.content}>
              <View style={styles.tab_container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  {this.renderAllCate(selectedCate)}
                </ScrollView>
              </View>
              <View style={styles.detail}>
                <ScrollView contentContainerStyle={styles.all_pd_con}>
                  {subcate.length > 0 ? this.renderSubcate() : emptySubcate()}
                </ScrollView>
              </View>
            </View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text>Empty Categories</Text>
            </View>
          )}
        </Content>
      </Container>
    );
  }
  renderAllCate(selectedCate) {
    return this.state.allcate.map((item, key) => {
      return (
        <TouchableOpacity
          onPress={() =>
            this.setState({ selectedCate: key, subcate: item.sub_cat })
          }
          key={key}
          style={[
            styles.tab_box,
            {
              backgroundColor: selectedCate == key ? "#fff" : "#F8F8F8",
              borderLeftWidth: selectedCate == key ? 4 : 0,
              borderLeftColor: "#FE6336"
            }
          ]}
        >
          <Image
            resizeMode={"contain"}
            source={{ uri: ads + imgPath.cate_main_img + item.cat_img }}
            style={styles.tab_icon}
          />
          <Text numberOfLines={2} style={styles.cate_text}>
            {item.cat_name}
          </Text>
        </TouchableOpacity>
      );
    });
  }
  renderSubcate() {
    return this.state.subcate.map((item, key) => {
      // --------------------------------------------------------------------

      const box_h = width > 511 ? (width - 152) / 3 : (width - 137) / 2;
      const itemStyle = {
        width: width > 511 ? (width - 152) / 3 : (width - 137) / 2,
        height: box_h * 1.17
      };
      const img_w = width > 511 ? (width - 60) / 3 : (width - 46) / 2;
      // --------------------------------------------------------------------
      return (
        <View key={key} style={[itemStyle, styles.all_pd_card]}>
          <TouchableOpacity
            style={[itemStyle, styles.all_pd_touchable_op]}
            // onPress={() => this.refs.addtocart.open()}
          >
            <View style={styles.all_pd_image_view}>
              <Image
                style={[
                  styles.all_pd_img,
                  { height: box_h * 0.81, width: box_h }
                ]}
                source={{
                  uri: item.img
                }}
                resizeMode={"contain"}
              />
            </View>
            <View style={styles.pop_detail_box}>
              <Text>{item.subCat_name}</Text>
            </View>
          </TouchableOpacity>
        </View>
      );
    });
  }
  getAllCate() {
    return fetch(ads + url.get_all_cate)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson[0].sub_cat !== undefined) {
          this.setState({
            allcate: responseJson,
            subcate: responseJson[0].sub_cat
          });
        } else {
          this.setState({ allcate: responseJson });
        }
        setActiveProccess(this.props.currentDis, "done");
      })
      .catch(error => {
        setActiveProccess(this.props.currentDis, "failed");
        console.log(error);
      });
  }
}

const mapStateToProps = state => {
  return {
    proccess: state.setActiveProccess.proccess,
    lang: state.setActiveLanguage.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(AllCategories);
