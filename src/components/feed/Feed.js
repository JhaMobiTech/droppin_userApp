import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView
} from "react-native";
import { Container, Content, Header } from "native-base";
import { styles } from "../../styles/feedStyle";
import LinearGradient from "react-native-linear-gradient";
import { icons } from "../../assets/icons/IconsConfig";

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btn2Reason: 0
    };
  }
  
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
      }
      StatusBar.setBarStyle("dark-content");
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const data = ["a", "b", "c", "d"];
    const btnReason = ["Following", "Explor"];
    const { btn2Reason } = this.state;
    return (
      <Container>
        <Header style={styles.header} noShadow>
          <Text style={styles._txt_header}>Feed</Text>
        </Header>
        <View style={styles.v_2_btn}>
          {btnReason.map((item, key) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                style={[
                  styles.btn_2_reason,
                  { backgroundColor: btn2Reason == key ? "#ff6d00" : "#e3f2fd" }
                ]}
                onPress={() => this.setState({ btn2Reason: key })}
                key={key}
              >
                <Text
                  style={[
                    styles.txt_now,
                    { color: btn2Reason == key ? "#fff" : "#000" }
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
        <Content style={styles._content}>
          <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
          {data.map((item, key) => {
            return (
              <View
                style={[styles._view_item, { marginTop: key == 0 ? 0 : 10 }]}
                key={key}
              >
                <View style={styles._item_header}>
                  <View style={styles._view_logo}>
                    <Image
                      style={styles._pic_}
                      source={{
                        uri:
                          "https://www.licenseglobal.com/sites/default/files/Nike%20Swoosh%20Logo.png"
                      }}
                    />
                  </View>
                  <View style={styles._txt_item}>
                    <View style={styles._txt_name_icon}>
                      <View style={styles._v_txt_2}>
                        <Text style={styles._txt_name_}>Nike Store</Text>
                      </View>
                      <View style={styles._v_txt}>
                        <Text style={styles._txt_name_2}>30 Aug 2019</Text>
                      </View>
                    </View>
                  </View>

                  <LinearGradient
                    style={styles._btn_ck}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    colors={["#ff9100", "#ff3d00"]}
                  >
                    <TouchableOpacity
                      style={styles._btn_follow}
                      activeOpacity={0.7}
                    >
                      <Text style={styles._txt_follow}>+ FOLLOW</Text>
                    </TouchableOpacity>
                  </LinearGradient>
                </View>
                <View style={styles._view_txt_detail}>
                  <Text style={styles._txt_detail}>#RecomendedForYou</Text>
                  <Text style={styles._txt_detail}>#women</Text>
                  <Text style={styles._txt_detail}>#top</Text>
                </View>
                <View style={styles._view_pic}>
                  <Image
                    style={styles._pic_big}
                    source={{
                      uri:
                        "https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/ptaa9xwuqkmxbh1saqwc/air-max-97-lx-mens-shoe-lSKTM4.jpg"
                    }}
                  />
                </View>
                <View style={styles._view_status_}>
                  <Text style={styles._txt_status_}>Cool sweater in sky</Text>
                </View>
                <View style={styles._view_likeed_}>
                  <View style={styles._liked_v}>
                    <TouchableOpacity
                      style={{ flexDirection: "row" }}
                      activeOpacity={0.8}
                    >
                      <Image style={styles.like_} source={icons.like_gray} />
                      <Text style={styles.txt_v}>1.6k</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity
                      style={{ flexDirection: "row" }}
                      activeOpacity={0.8}
                    >
                      <Image style={styles.like_} source={icons.comment_gray} />
                      <Text style={styles.txt_v}>40</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          })}
        </Content>
      </Container>
    );
  }
}
