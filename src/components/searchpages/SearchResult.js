import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StatusBar,
  Keyboard
} from "react-native";
import { SearchAndLocate } from "./../loadingoverlay/AppLoading";
import { exclusiveConnectionFailed } from "./../empty_and_failed/FailedScene";
import {
  setActiveProccess,
  timeoutPromise,
  onReload
} from "./../../functions/connectionManage";
import AsyncStorage from "@react-native-community/async-storage";
import { Container, Content, Header } from "native-base";
import { styles } from "./../../styles/mainSearchStyle";
import { icons } from "../../assets/icons/IconsConfig";
import { connect } from "react-redux";
import { ads, url } from "../../apis/Url";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from "react-native-popup-menu";
import {
  isNullnUndifined,
  isUndifined,
  isObject
} from "./../../checkValue/ValueChecker";
import { imgPath } from "../../apis/IamgePath";
const dataSearch = ["Nike Shop", "Adidas Shirt", "Airpod"];
const dataBtnSearch = [
  "PM 2.5 Mask",
  "iPhone 11",
  "Mamypoko",
  "Adidas",
  "Nike",
  "Adidas Step boy"
];
class SearchResult extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "done");
    this.state = {
      searchText: this.props.navigation.getParam("keyword"),
      searchResult: [],
      history: [],
      resultfor: "",
      isType: true,
      bestmatch: "Best Match"
    };
  }
  updateSearch = search => {
    this.setState({ search: search });
  };
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("dark-content");
    });
    this.getData();
    this.keyboardDidShowListener = Keyboard.addListener("keyboardDidShow", () =>
      this.setState({ isType: true })
    );
    this.keyboardDidHideListener = Keyboard.addListener("keyboardDidHide", () =>
      this.setState({ isType: false })
    );
  }
  componentWillUnmount() {
    this._navListener.remove();
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }
  render() {
    const { searchResult, searchText, history, isType } = this.state;
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={styles._header} noShadow={true}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles._btn_back_dARK}
            onPress={() => goBack()}
          >
            <Image style={styles._iconBack_dark} source={icons.back_dark} />
          </TouchableOpacity>
          <View style={styles.search}>
            <View style={styles.search_input}>
              <Text>{this.state.searchText}</Text>
            </View>
          </View>
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
        <Content style={styles.container}>
          <StatusBar
            backgroundColor="#fff"
            translucent={false}
            barStyle="dark-content"
          />
          <View style={styles.filter_con}>
            <View style={styles.filter_btn}>
              <Menu>
                <MenuTrigger>
                  <View style={styles.best_match_con}>
                    <Text style={styles.best_match_txt}>
                      {this.state.bestmatch}
                    </Text>
                    <Image
                      source={icons.arrow_down_50_black}
                      style={styles.arrow_down_}
                    />
                  </View>
                </MenuTrigger>
                <MenuOptions>
                  <MenuOption
                    onSelect={() => this.setState({ bestmatch: "Best Match" })}
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
            </View>
            <View style={styles.filter_header_dv} />
            <View style={styles.filter_btn}>
              <TouchableOpacity style={styles.filter_touch_able}>
                <Text style={styles.best_match_txt}>Filter</Text>
                <Image
                  source={icons.arrow_down_50_black}
                  style={styles.arrow_down_}
                />
              </TouchableOpacity>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
  renderNoResult() {
    return (
      <View
        style={{ height: 200, justifyContent: "center", alignItems: "center" }}
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
  renderSearchResult(result) {
    return result.map((item, key) => {
      return (
        <View style={styles.v_item_} key={key}>
          <View style={styles.v_img_heart}>
            <Image
              source={{ uri: item.pd_img[0] }}
              style={{ width: "100%", height: "100%" }}
            />
            <View style={styles.v_btn_heart}>
              <TouchableOpacity>
                <Image
                  style={{ width: 21, height: 21 }}
                  source={icons.circle_heart_wite}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.V_itemDetail}>
            <View style={styles.v_nameImg}>
              <Text numberOfLines={2} style={styles.txt_nameItem}>
                {item.pd_name}
              </Text>
              <Text
                numberOfLines={1}
                style={[styles.txt_nameItem, { fontSize: 10, color: "gray" }]}
              >
                {item.pd_desc}
              </Text>
            </View>
            <View style={styles.v_price_}>
              <Text style={styles.txt_price}>
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
            <View style={styles.v_btn_status}>
              <TouchableOpacity
                style={styles.btn_addBag}
                onPress={() =>
                  this.props.navigation.navigate("ProductDetail", {
                    id: item._id
                  })
                }
              >
                <Text style={styles.txt_addBag}>More Detail</Text>
              </TouchableOpacity>
              <Text style={styles.txt_date}>{item.stock}</Text>
            </View>
          </View>
        </View>
      );
    });
  }
  renderRecent() {
    return (
      <View style={styles.v_header}>
        <View style={styles.v_recentText}>
          <Text style={styles.txt_recant}>{this.props.lang.recent_search}</Text>
          <TouchableOpacity onPress={() => this.clearRecent()}>
            <Text style={{ color: "gray" }}>Clear</Text>
          </TouchableOpacity>
        </View>
        {this.state.history.length > 0 &&
          this.state.history
            .slice()
            .reverse()
            .map((item, key) => {
              return (
                <TouchableOpacity
                  onPress={async () => {
                    this.setState({ searchText: item, isType: false });
                    this.onSearch(item);
                    Keyboard.dismiss();
                  }}
                  style={styles.v_phonhub}
                  key={key}
                >
                  <Text style={styles.txt_phonhub}>{item}</Text>
                  <TouchableOpacity onPress={() => this.onDeleteHistory(key)}>
                    <Image
                      style={{ width: 23, height: 23 }}
                      source={icons.close_gray}
                    />
                  </TouchableOpacity>
                </TouchableOpacity>
              );
            })}
      </View>
    );
  }
  onSearch(text) {
    this.setState({ resultfor: text });
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
    this.onSubmit(text);
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
        // alert(JSON.stringify(responseJson));
        this.setState({ searchResult: responseJson });
        setActiveProccess(this.props.currentDis, "done");
      })
      .catch(error => {
        console.log(error);
        setActiveProccess(this.props.currentDis, "failed");
      });
  }
  getData = async () => {
    try {
      const value = await AsyncStorage.getItem("history");
      if (value !== null) {
        this.setState({ history: JSON.parse(value) });
      } else {
        this.setState({ history: [] });
      }
    } catch (e) {
      // error reading value
    }
  };
  async onSubmit(text) {
    const history = this.state.history;
    let b;
    let a = history.slice();
    if (text.length > 0) {
      if (a.length > 0) {
        for (let i = 0; i < a.length; i++) {
          if (text == a[i]) {
            b = i;
          }
        }
        if (a.length >= 20) {
          if (b !== undefined) {
            a.splice(b, 1);
          } else {
            a.splice(0, 1);
          }
        } else {
          if (b !== undefined) {
            a.splice(b, 1);
          }
        }
        a.push(text);
        await this.setState({ history: a });
      } else {
        a.push(text);
        await this.setState({ history: a });
      }
      this.storeHistory(this.state.history);
    }
  }
  storeHistory = async data => {
    try {
      await AsyncStorage.setItem("history", JSON.stringify(data));
    } catch (e) {
      // saving error
    }
  };
  onDeleteHistory(index) {
    const history = this.state.history;
    let a = history.slice().reverse();
    a.splice(index, 1);
    this.setState({ history: a.reverse() });
    this.storeHistory(a.reverse());
  }
  async clearRecent() {
    try {
      await AsyncStorage.removeItem("history");
    } catch (e) {
      // saving error
    }
    this.getData();
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
export default connect(mapStateToProps, mapDispatchToProps)(SearchResult);
