import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert
} from "react-native";
import { Container, Content, Header, Card, Item } from "native-base";
import { styles } from "../../styles/changeLangeguageStyle";
import { icons } from "../../assets/icons/IconsConfig";
import LinearGradient from "react-native-linear-gradient";
import AsyncStorage from "@react-native-community/async-storage";

// -------------------------------------
import { changeLanguage } from "../../functions/languageManage";
class ChangeLangeguage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const dataLangeguage = [
      {
        title: "English",
        hint: "EN",
        img: require("../../assets/icons/Iconfiles/fag/usa_fag.png")
      },
      {
        title: "Lao",
        hint: "LA",
        img: require("../../assets/icons/Iconfiles/fag/lao_fag.png")
      }
      //   {
      //     title: "Thai",
      //     img: require("../../assets/icons/Iconfiles/fag/thai_fag.png")
      //   },
      //   {
      //     title: "Japanese",
      //     img: require("../../assets/icons/Iconfiles/fag/japan_fag.png")
      //   },
      //   {
      //     title: "Chinese",
      //     img: require("../../assets/icons/Iconfiles/fag/china_fag.png")
      //   }
    ];
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={styles._header}>
          <TouchableOpacity style={styles.btn_back} onPress={() => goBack()}>
            <Image style={styles.back} source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles.txt_status_header}>
            {this.props.lang.choose_your_language}
          </Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <Content style={styles.content}>
          <StatusBar
            backgroundColor="#fff"
            translucent={false}
            barStyle="dark-content"
          />
          <View style={styles.v_of_card}>
            {dataLangeguage.map((item, key) => {
              return (
                <Card style={styles.card_1} key={key}>
                  <TouchableOpacity
                    style={styles.btn_selectCard}
                    onPress={() => this.onLangPressed(item.title, item.hint)}
                  >
                    <View style={{ flexDirection: "row" }}>
                      <Image
                        source={item.img}
                        style={{ width: 23, height: 23 }}
                      />
                      <Text style={styles.txt_fag}>{item.title}</Text>
                    </View>
                    <View>
                      <Image
                        style={{
                          width: 27,
                          height: 20,
                          tintColor:
                            this.props.curentlang == item.hint
                              ? "#FE6336"
                              : "#fff"
                        }}
                        source={icons.icon_ok_wite}
                      />
                    </View>
                  </TouchableOpacity>
                </Card>
              );
            })}
          </View>
        </Content>
      </Container>
    );
  }
  onLangPressed(lang) {
    if (lang == "English") {
      changeLanguage(this.props.currentDis, "EN");
    } else if (lang == "Lao") {
      changeLanguage(this.props.currentDis, "LA");
    }
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
export default connect(mapStateToProps, mapDispatchToProps)(ChangeLangeguage);
