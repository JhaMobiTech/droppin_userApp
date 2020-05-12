import React, { Component } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from "react-native";
import { Container, Content, Header, Tabs, Tab, FooterTab } from "native-base";
import { styles } from "../../styles/myOrderStyle";
import { icons } from "../../assets/icons/IconsConfig";
import { fonts } from "../../assets/fonts/fontConfig";
import History from "./History";
import Current from "./Current";

class MyOrder extends Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(false);
        StatusBar.setBackgroundColor("transparent");
        StatusBar.setBarStyle("dark-content");
      }
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
          <Text style={styles.txt_header}>My Orders</Text>
          <View></View>
        </Header>
        <Content style={styles.content}>
          <StatusBar
            backgroundColor={"#fff"}
            translucent={false}
            barStyle={"dark-content"}
          />
          <Tabs tabMargin={50} tabBarUnderlineStyle={[styles.underLine]}>
            <Tab
              tabStyle={{ backgroundColor: "#fff" }}
              activeTabStyle={{ backgroundColor: "#fff" }}
              activeTextStyle={styles.acctiveText}
              textStyle={styles.txt_Text}
              heading="Current (3)"
            >
              <Current order_props={this.props} />
            </Tab>
            <Tab
              tabStyle={{ backgroundColor: "#fff" }}
              activeTabStyle={{ backgroundColor: "#fff" }}
              activeTextStyle={styles.acctiveText}
              textStyle={styles.txt_Text}
              heading="History (46)"
            >
              <History order_props={this.props} />
            </Tab>
          </Tabs>
        </Content>
      </Container>
    );
  }
}
export default MyOrder;
