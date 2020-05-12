import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Container, Content, Header, Card, Item } from "native-base";
import { styles } from "../../styles/coinHistoryStyle";
import { icons } from "../../assets/icons/IconsConfig";
import LinearGradient from "react-native-linear-gradient";
const isAndroid = Platform.OS == "android" ? true : false;
export default class Coinhistory extends Component {
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
        <Header style={styles._header} noShadow={true}>
          <TouchableOpacity style={styles.btn_back} onPress={() => goBack()}>
            <Image style={styles.back} source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles.txt_status_header}>Coins</Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <View style={styles.content}>
          <StatusBar
            backgroundColor="#fff"
            translucent={false}
            barStyle="dark-content"
          />
          <View style={styles.v_headerCoin}>
            <Image
              source={icons.coin_step_yellow}
              style={{ width: 20, height: 20, marginRight: 10 }}
            />
            <Text style={styles.txt_coin}>Balance Coins</Text>
          </View>
          <View style={styles.v_qtyCoin}>
            <Text style={styles.txt_qtyCoin_head}>230</Text>
          </View>
          <View style={styles.v_history}>
            <Text style={styles.txt_history}>History</Text>
            <TouchableOpacity style={styles.btn_show_detail}>
              <Text style={styles.txt_show_de}>Show: This week</Text>
              <Image
                style={{ width: 16, height: 14 }}
                source={icons.down_orange}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line}></View>
        <Content style={styles.v_contentRow}>
          <View style={styles.v_pay_coin}>
            <View style={{ flex: 2 }}>
              <Text style={styles.txt_coinOrder}>
                Earn coins from order #12122
              </Text>
              <Text style={styles.txt_coinOrder_2}>DEC 28, 2018 12:20pm</Text>
            </View>
            <View style={styles.v_qty_Coin}>
              <Text style={styles.txt_qtyCoin}>+200</Text>
              <Image
                source={icons.coin_step_yellow}
                style={{ width: 20, height: 20, marginLeft: 10 }}
              />
            </View>
          </View>
          <View style={styles.v_pay_coin}>
            <View style={{ flex: 2 }}>
              <Text style={styles.txt_coinOrder}>Redeem coins</Text>
              <Text style={styles.txt_coinOrder_2}>MARCH 28, 2018 12:20pm</Text>
            </View>
            <View style={styles.v_qty_Coin}>
              <Text style={styles.txt_qtyCoin_del}>-44</Text>
              <Image
                source={icons.coin_step_yellow}
                style={{ width: 20, height: 20, marginLeft: 10 }}
              />
            </View>
          </View>
          <View style={styles.v_pay_coin}>
            <View style={{ flex: 2 }}>
              <Text style={styles.txt_coinOrder}>
                Earn coins from order #12122
              </Text>
              <Text style={styles.txt_coinOrder_2}>DEC 28, 2018 12:20pm</Text>
            </View>
            <View style={styles.v_qty_Coin}>
              <Text style={styles.txt_qtyCoin}>+200</Text>
              <Image
                source={icons.coin_step_yellow}
                style={{ width: 20, height: 20, marginLeft: 10 }}
              />
            </View>
          </View>
          <View style={styles.v_pay_coin}>
            <View style={{ flex: 2 }}>
              <Text style={styles.txt_coinOrder}>Redeem coins</Text>
              <Text style={styles.txt_coinOrder_2}>MARCH 28, 2018 12:20pm</Text>
            </View>
            <View style={styles.v_qty_Coin}>
              <Text style={styles.txt_qtyCoin_del}>-44</Text>
              <Image
                source={icons.coin_step_yellow}
                style={{ width: 20, height: 20, marginLeft: 10 }}
              />
            </View>
          </View>
        </Content>
        <View style={styles.v_btn_click}>
          <TouchableOpacity>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              colors={["#FD843A", "#FF5535"]}
              style={styles.btn_shopWithCoin}
            >
              <Text style={styles.txt_shopWithCoin}>Shop with Coins</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
