import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Container, Content, Header, Card } from "native-base";
import { styles } from "../../styles/walletStyle";
import { icons } from "../../assets/icons/IconsConfig";
import LinearGradient from "react-native-linear-gradient";
const isAndroid = Platform.OS == "android" ? true : false;
export default class MyWallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectColor: 0
    };
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("dark-content");
      isAndroid && StatusBar.setTranslucent(false);
      isAndroid && StatusBar.setBackgroundColor("#fff");
    });
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={styles._header}>
          <TouchableOpacity style={styles.btn_back} onPress={() => goBack()}>
            <Image style={styles.back} source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles.txt_status_header}>Wallet</Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <Content style={styles.content}>
          <StatusBar
            backgroundColor="#fff"
            translucent={false}
            barStyle="dark-content"
          />
          <View style={styles.v_txt_header2}>
            <Text style={styles.txt_header2}>Saved Card (2)</Text>
          </View>
          <View style={styles.v_of_card}>
            <Card style={styles.card_visa}>
              <View style={styles.v_of_visa}>
                <View style={{ flex: 1 }}>
                  <Image
                    source={icons.visa_wite}
                    style={{ width: 64, height: 18.6 }}
                  />
                </View>
                <View style={styles.v_edit_card}>
                  <TouchableOpacity style={styles.v_edit_}>
                    <Text style={styles.txt_edit}>Edit</Text>
                  </TouchableOpacity>
                  <View style={{ marginLeft: 15 }}>
                    <Image
                      source={icons.tick_wite}
                      style={{ width: 21.5, height: 21.1 }}
                    />
                  </View>
                </View>
              </View>
              <View style={styles.v_big_visa}>
                <Image
                  source={icons.visa_big_wite}
                  style={{ width: 293, height: 91 }}
                />
              </View>
              <View style={styles.v_txt_numberCard}>
                <Text style={styles.txt_numberCard}>CARD NUMBER</Text>
              </View>
              <View style={styles.v_num}>
                <Text style={styles.numberCard}>9720 **** **** **** </Text>
              </View>
              <View style={styles.tile_txtCard}>
                <View style={{ flex: 2.5 }}>
                  <Text style={styles.txt_numberCard}>NAME ON CARD</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.txt_numberCard}>EXPRIES ON</Text>
                </View>
              </View>
              <View style={styles.v_brinary_of_date}>
                <View style={{ flex: 2.5 }}>
                  <Text style={styles.txt_brinary}>BRITTANY ANDERSON</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.txt_brinary}>03/24</Text>
                </View>
              </View>
              <View style={styles.v_default}>
                <Card style={styles.card_default}>
                  <Text style={styles.txt_def}>Default</Text>
                </Card>
              </View>
            </Card>
          </View>

          <View style={styles.v_of_card}>
            <Card style={styles.card_visa_2}>
              <View style={styles.v_big_visa_2}>
                <Image
                  source={icons.master_card}
                  style={{ width: 287, height: 171 }}
                />
              </View>
              <View
                style={{
                  width: "100%",
                  marginTop: -205,
                  paddingHorizontal: 20,
                  flexDirection: "row"
                }}
              >
                <View style={{ flex: 1 }}>
                  <Image
                    style={{ width: 45, height: 27 }}
                    source={icons.card_logo}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end"
                  }}
                >
                  <TouchableOpacity style={styles.v_edit_2}>
                    <Text style={styles.txt_edit_2}>Edit</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={styles.btn_circle_select}
                  ></TouchableOpacity>
                </View>
              </View>
              <View style={styles.v_txt_numberCard_2}>
                <Text style={styles.txt_numberCard}>CARD NUMBER</Text>
              </View>
              <View style={styles.v_num}>
                <Text style={styles.numberCard_2}>9720 **** **** **** </Text>
              </View>
              <View style={styles.tile_txtCard}>
                <View style={{ flex: 2.5 }}>
                  <Text style={styles.txt_numberCard}>NAME ON CARD</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.txt_numberCard}>EXPRIES ON</Text>
                </View>
              </View>
              <View style={styles.v_brinary_of_date}>
                <View style={{ flex: 2.5 }}>
                  <Text style={styles.txt_brinary_2}>BRITTANY ANDERSON</Text>
                </View>
                <View style={{ flex: 1 }}>
                  <Text style={styles.txt_brinary_2}>12/22</Text>
                </View>
              </View>
            </Card>
          </View>
        </Content>
        <View style={styles.v_bottom}>
          <TouchableOpacity>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#FD843A", "#FF5535"]}
              style={styles.btn_next}
            >
              <Text style={{ fontSize: 30, color: "#fff" }}>+</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
