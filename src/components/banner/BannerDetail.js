import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StatusBar,
  Dimensions,
  ScrollView
} from "react-native";
import { Container, Header, Content } from "native-base";
import { styles } from "../../styles/bannerDetailStyle";
import { icons } from "../../assets/icons/IconsConfig";
import LinearGradient from "react-native-linear-gradient";
import Dash from "react-native-dash";
import { SafeAreaView } from "react-navigation";

const { width, height } = Dimensions.get("screen");
export default class BannerDetail extends Component {
  render() {
    const dataDiscount = [
      {
        logo:
          "https://www.beaulift.co.uk/wp-content/uploads/2013/07/Best-seller-logo.jpg",
        name: "CK Mobile",
        discount_type: "10",
        color: "#00e676",
        status: "Take",
        price: "200,000"
      },
      {
        logo:
          "https://thumbs.dreamstime.com/b/trusted-seller-gold-vector-icon-white-background-88325916.jpg",
        name: "TRUSTED",
        discount_type: "15",
        color: "#ede7f6",
        status: "Full",
        price: "150,000"
      },
      {
        logo:
          "https://serfob.s3.amazonaws.com/media/D2BWNC6J1qhdnWFOPhkpk3ML0iqaR7Nstemp.png",
        name: "WINE Driks",
        discount_type: "15",
        color: "#ede7f6",
        status: "Full",
        price: "69,000"
      }
    ];
    const dataItem_1 = ["a", "b", "c", "d", "e", "f", "g", "h", "i"];
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <SafeAreaView>
          <View style={styles._header}>
            <TouchableOpacity
              style={[styles.btnClick, { width: 90, alignItems: "flex-start" }]}
              onPress={() => goBack()}
            >
              <Image
                resizeMode={"contain"}
                style={styles.iconBack}
                source={icons.back_dark}
              />
            </TouchableOpacity>
            <View style={styles.v_title}>
              <Text numberOfLines={1} style={styles.txt_title}>
                Security Cameras Sale
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity style={styles.btnClick}>
                <Image
                  resizeMode={"contain"}
                  style={styles.iconBack}
                  source={icons.search_white_outline_42}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btn_share}>
                <Image
                  resizeMode={"contain"}
                  style={styles.iconBack}
                  source={icons.share_org_outline_50}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnClick}>
                <Image
                  resizeMode={"contain"}
                  style={styles.iconBack}
                  source={icons.menu_tripple_dot}
                />
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
        <Content style={styles._content}>
          <StatusBar
            backgroundColor={"#fff"}
            translucent={false}
            barStyle="dark-content"
          />
          <Image
            style={styles.img_title}
            source={{
              uri:
                "https://ae01.alicdn.com/kf/HTB1Ftp9eL9TBuNjy1zbq6xpepXaf.jpg"
            }}
          />
          <TouchableOpacity style={styles.itemTitle}>
            <Image
              style={styles.img_first}
              source={{
                uri:
                  "https://3dinsider.com/wp-content/uploads/2019/11/SONY-ALPHA-A7-II-FULL-FRAME-MIRRORLESS-CAMERA.png"
              }}
            />
            <Text style={styles.txt_priceTitle}>LAK 2,400,000</Text>
          </TouchableOpacity>
          <Text style={styles.txt_TopDiscount}>Discount from Top seller</Text>
          <View style={styles.v_discounSell}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ flexDirection: "row" }}
              horizontal={true}
            >
              {dataDiscount.map((item, key) => {
                return (
                  <TouchableOpacity key={key}>
                    <LinearGradient
                      start={{ x: 0.0, y: 0.25 }}
                      end={{ x: 0.5, y: 1.0 }}
                      locations={[0.2, 0.5, 0.6]}
                      colors={["#ffcc80", "#ffe0b2", "#ffcc80"]}
                      style={[
                        styles.btn_sellDis,
                        { marginLeft: key === 0 ? width * 0.03 : 0 }
                      ]}
                    >
                      <View style={styles.v_discount}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.txt_Namesell}>{item.name}</Text>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center"
                            }}
                          >
                            <Text style={styles.txt_number}>
                              {item.discount_type}
                            </Text>
                            <Text style={styles.txt_percentDiscount}>
                              % Discount
                            </Text>
                          </View>
                        </View>
                        <Image
                          style={styles.logo_imgStore}
                          source={{ uri: item.logo }}
                        />
                      </View>
                      <View style={styles.v_dash}>
                        <View style={styles.circle_red}></View>
                        <View
                          style={{ flex: 1, paddingHorizontal: width * 0.01 }}
                        >
                          <Dash
                            dashGap={width * 0.007}
                            dashLength={width * 0.007}
                            dashColor={"#e57373"}
                            dashThickness={0.6}
                            style={{ width: "100%", flexDirection: "row" }}
                          />
                        </View>
                        <View style={styles.circle_red_}></View>
                      </View>
                      <View style={styles.v_btnClick}>
                        <View style={{ flex: 1 }}>
                          <Text style={styles.txt_mini}>Minimum Price</Text>
                          <Text style={styles.txt_mini}>LAK {item.price}</Text>
                        </View>
                        <View
                          style={[
                            styles.v_Take,
                            { backgroundColor: item.color }
                          ]}
                        >
                          <Text style={styles.txt_taked}>{item.status}</Text>
                        </View>
                      </View>
                    </LinearGradient>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          <Text style={styles.txt_dellTitle}>Cameras</Text>
          <View style={styles.v_ListItem}>
            {dataItem_1.map((item, key) => {
              return (
                <TouchableOpacity style={styles.btn_item} key={key}>
                  <Image
                    style={styles.img_item}
                    source={{
                      uri:
                        "https://belize.ai/uploads/566_vip-wireless-belize-gopro-hero6.jpg"
                    }}
                  />
                  <View style={styles.v_detailItem}>
                    <Text style={styles.txt_detailItem} numberOfLines={2}>
                      Images may be subject to copyright. Find out more
                    </Text>
                  </View>
                  <Text style={styles.txt_prices}>LAK 165,000</Text>
                  <View style={styles.appSout}>
                    <View style={styles.v_appSout}>
                      <Text style={styles.txt_appsout}>-50%</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.txt_dellTitle}>Del for you</Text>
          <View style={styles.v_ListItem}>
            {dataItem_1.map((item, key) => {
              return (
                <TouchableOpacity style={styles.btn_item} key={key}>
                  <Image
                    style={styles.img_item}
                    source={{
                      uri:
                        "https://belize.ai/uploads/566_vip-wireless-belize-gopro-hero6.jpg"
                    }}
                  />
                  <View style={styles.v_detailItem}>
                    <Text style={styles.txt_detailItem} numberOfLines={2}>
                      Images may be subject to copyright. Find out more
                    </Text>
                  </View>
                  <Text style={styles.txt_prices}>LAK 165,000</Text>
                </TouchableOpacity>
              );
            })}
          </View>
          <Text style={styles.txt_dellTitle}>This Products for you</Text>
          <View style={styles.v_ListItem}>
            {dataItem_1.map((item, key) => {
              return (
                <TouchableOpacity style={styles.btn_item2Row} key={key}>
                  <Image
                    style={styles.img_item2Row}
                    source={{
                      uri:
                        "https://www.elinz.com.au/assets/webshop/cms/14/6314.jpg?1536733718"
                    }}
                  />
                  <View style={styles.v_detailItem}>
                    <Text style={styles.txt_detailItem} numberOfLines={2}>
                      Images may be subject to copyright. Find out more
                    </Text>
                  </View>
                  <Text style={styles.txt_prices2Row}>LAK 165,000</Text>

                  <View style={styles.v_perceDis}>
                    <Text style={styles.txt_decoletion}>LAK 200,000</Text>
                    <Text style={styles.txt_perDis}>-75%</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </Content>
      </Container>
    );
  }
}
