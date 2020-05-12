import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Container, Content, Header, Card } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "../../styles/notificationStyle";
import { icons } from "../../assets/icons/IconsConfig";
export default class ShippingAddress extends Component {
  state = {};
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("dark-content");
    });
  }
  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={styles.header}>
          <TouchableOpacity
            activeOpacity={1}
            style={styles._btn_back_dARK}
            onPress={() => goBack()}
          >
            <Image style={styles._iconBack_dark} source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles._text_header}>Notification</Text>
          <TouchableOpacity activeOpacity={1} style={styles._btn_back_dARK}>
            <Image
              resizeMode={"contain"}
              style={styles._iconBack_dark}
              source={icons.trash_org_outline_50}
            />
          </TouchableOpacity>
        </Header>
        <Content contentContainerStyle={{ flex: 1 }}>
          <StatusBar translucent={false} backgroundColor={"#fff"} />
          <ScrollView contentContainerStyle={styles.scroll_}>
            <View style={styles.list_view}>
              <Card style={styles.card_}>
                <Image
                  style={styles.image_pro}
                  source={{
                    uri:
                      "https://plyoapp.com/wp-content/uploads/2018/11/nike-logo.png"
                  }}
                />
              </Card>
              <View style={styles.ms_con}>
                <Text style={styles.ms_txt}>
                  Your order #500158052 is now on the way for delivery.
                </Text>

                <Text style={styles.ms_time}>10.44 AM</Text>
              </View>
            </View>
            <View style={styles.list_view}>
              <Card style={styles.card_}>
                <Image
                  style={styles.image_pro}
                  source={{
                    uri:
                      "https://image.flaticon.com/icons/png/512/731/731962.png"
                  }}
                />
              </Card>
              <View style={styles.ms_con}>
                <Text style={styles.ms_txt}>
                  Your order #500158052 is now on the way for delivery.
                </Text>

                <Text style={styles.ms_time}>10.44 AM</Text>
              </View>
            </View>
          </ScrollView>
        </Content>
      </Container>
    );
  }
}
