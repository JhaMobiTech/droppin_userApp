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
class MainSearch extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "done");
    this.state = {
      searchText: "",
      searchResult: [],
      history: [],
      resultfor: "",
      isType: true
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
            <Image
              source={icons.search_dark}
              style={{ width: 17, height: 17 }}
            />
            <TextInput
              autoFocus={true}
              value={this.state.searchText}
              onChangeText={txt => this.setState({ searchText: txt })}
              returnKeyType={"search"}
              placeholder={"Search Products"}
              style={styles.search_input}
              onSubmitEditing={() => this.onSearch(this.state.searchText)}
            />
          </View>
          <TouchableOpacity
            onPress={() => {
              if (
                this.state.searchText !== " " &&
                this.state.searchText !== ""
              ) {
                this.onSearch();
              }
            }}
            accessible={false}
          >
            <Image
              source={icons.search_dark}
              style={{ width: 17, height: 17 }}
            />
          </TouchableOpacity>
        </Header>
        <Content style={styles.container} scrollEnabled={false}>
          <StatusBar
            backgroundColor="#fff"
            translucent={false}
            barStyle="dark-content"
          />
          {this.renderRecent()}
        </Content>
      </Container>
    );
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
    this.props.navigation.navigate("AllProduct", { keyword: text });
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
        // console.log(JSON.stringify(b));
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
export default connect(mapStateToProps, mapDispatchToProps)(MainSearch);
