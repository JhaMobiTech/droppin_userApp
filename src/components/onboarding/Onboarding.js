import React, { Component } from "react";
import {
  Platform,
  Dimensions,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  Linking,
  Alert
} from "react-native";
import { StackActions, NavigationActions } from "react-navigation";
import SplashScreen from "react-native-splash-screen";
import AsyncStorage from "@react-native-community/async-storage";
import SwiperFlatList from "react-native-swiper-flatlist";
import { icons } from "./../../assets/icons/IconsConfig";
import { Container, Content, Header } from "native-base";
import { styles } from "./../../styles/onBoardingStyle";
// --------
const { width } = Dimensions.get("screen");
const img = [icons.fashion, icons.fashion, icons.fashion];
export default class Onboarding extends Component {
  componentDidMount() {
    SplashScreen.hide();
  }
  storeData = async () => {
    try {
      await AsyncStorage.setItem("userjourney", "complete");
    } catch (e) {
      // saving error
    }
  };
  render() {
    return (
      <Container>
        <Header noShadow={true} style={styles.header}>
          <View style={styles.empty_box} />
          <View style={styles.header_content}>
            <Image
              source={icons.droppin_logo_org_outline_125}
              style={styles.logo}
            />
            <Text style={styles.header_txt}>Droppin</Text>
          </View>
          <TouchableOpacity
            style={styles.skip_btn}
            onPress={() => this.navigateReset("TabNavigator")}
          >
            <Text style={styles.skip_btn_txt}>Skip</Text>
          </TouchableOpacity>
        </Header>
        <Content contentContainerStyle={{ width: width }}>
          <StatusBar barStyle={"dark-content"} backgroundColor={"#fff"} />
          <View style={{ flex: 1, marginBottom: 20 }}>
            <SwiperFlatList
              index={0}
              showPagination
              paginationActiveColor={"#FE6336"}
              paginationDefaultColor={"#FCDCD3"}
              paginationStyleItem={{ width: 8, height: 8 }}
              paginationStyle={{ marginBottom: -20 }}
            >
              {img.map((item, key) => {
                return (
                  <View key={key} style={{ width: width }}>
                    <Text numberOfLines={3} style={styles.desc_txt}>
                      A fresh approach to shopping with us.
                    </Text>
                    <Image
                      key={key}
                      resizeMode={"contain"}
                      source={item}
                      style={styles.slide_img}
                    />
                  </View>
                );
              })}
            </SwiperFlatList>
          </View>
          <View style={styles.quickly_btn}>
            <TouchableOpacity
              onPress={() => this.navigateReset("Login")}
              activeOpacity={0.8}
              style={[styles.social_btn, { marginRight: 20 }]}
            >
              <Text style={[styles.button_txt, { color: "#FE6336" }]}>
                Log In
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.navigateReset("Registration")}
              activeOpacity={0.8}
              style={[styles.social_btn, { backgroundColor: "#FE6336" }]}
            >
              <Text style={[styles.button_txt, { color: "#fff" }]}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
          {/* -------- */}
          <View style={styles.register_con}>
            <Text style={styles.become}>Become our partner </Text>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => this.gotoWebsite()}
            >
              <Text style={styles.register_txt}> Click</Text>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
  gotoWebsite() {
    Linking.canOpenURL("https://facebook.github.io/react-native/docs/linking")
      .then(supported => {
        if (!supported) {
          Alert.alert(
            "Something went wrong !",
            "Website is unavailable for now."
          );
        } else {
          return Linking.openURL(
            "https://facebook.github.io/react-native/docs/linking"
          );
        }
      })
      .catch(err => console.error("An error occurred", err));
  }
  navigateReset = page => {
    if (page !== "TabNavigator") {
      const resetAction = StackActions.reset({
        index: 1,
        actions: [
          NavigationActions.navigate({ routeName: "TabNavigator" }),
          NavigationActions.navigate({ routeName: page })
        ]
      });

      this.storeData();
      this.props.navigation.dispatch(resetAction);
    } else {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: "TabNavigator" })]
      });

      this.storeData();
      this.props.navigation.dispatch(resetAction);
    }
  };
}
