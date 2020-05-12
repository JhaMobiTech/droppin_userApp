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
import { styles } from "../../styles/voucherStyle";
import { icons } from "../../assets/icons/IconsConfig";
import LinearGradient from "react-native-linear-gradient";

export default class Voucher extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onlyStock_hide: 0
    };
  }
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      // if (Platform.OS == "android") {
      //     StatusBar.setTranslucent(false);
      //     StatusBar.setBackgroundColor("#fff");
      // }
      StatusBar.setBarStyle("dark-content");
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const dataItem = [
      {
        name: "I Gadget",
        detail: "Get 10% voucher for every purchase from our shop",
        img:
          "https://images.squarespace-cdn.com/content/v1/528cdce5e4b02c1243218c42/1573682176008-CWI3B94CQTEAZQ53DXZR/ke17ZwdGBToddI8pDm48kK_97XZKSFfaqITFlElAJv1Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-umWErXUBzoz_GGw7ePhW5fFSoHHNPSrQQptajRmNjwsw/scb-web-brands.jpg"
      },
      {
        name: "Cloth Shop",
        detail: "Get 10% voucher for every purchase from our shop",
        img:
          "https://images.squarespace-cdn.com/content/v1/54330327e4b0a5f2195c8fdd/1414605192812-EAW65CJOIHBIFMWI9082/ke17ZwdGBToddI8pDm48kPhSXJ7lmhI_skzTMTbp5upZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpyTzL3hLiXHcTbSeXcdtwdWiTtwAYH9smHf1XGqL_0tRnHYiw4HbXO9NUKwQGJyxaI/dryel.jpg?format=500w"
      },
      {
        name: "Lotto Brand",
        detail: "Get 10% voucher for every purchase from our shop",
        img:
          "https://redpetal.co.za/wp-content/uploads/sites/3/2016/03/bico.jpg"
      },
      {
        name: "Online Shop",
        detail: "Get 10% voucher for every purchase from our shop",
        img: "https://www.fitnesstown.ca/sitecm/i/360_athletics.jpg"
      },
      {
        name: "Apex Shoe",
        detail: "Get 10% voucher for every purchase from our shop",
        img:
          "https://cdn.shopify.com/s/files/1/0466/4817/files/File_05-05-2015_18_59_58_large.jpeg?2545017669841021369"
      },
      {
        name: "Bata Store",
        detail: "Get 10% voucher for every purchase from our shop",
        img:
          "https://images.squarespace-cdn.com/content/v1/528cdce5e4b02c1243218c42/1573682157264-RRSV5DKZZP5ENGE0JODQ/ke17ZwdGBToddI8pDm48kK_97XZKSFfaqITFlElAJv1Zw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7Xj1nVWs2aaTtWBneO2WM-umWErXUBzoz_GGw7ePhW5fFSoHHNPSrQQptajRmNjwsw/rmb-web-brands.jpg"
      }
    ];
    const { goBack } = this.props.navigation;
    return (
      <Container>
        <Header style={styles._header} noShadow={true}>
          <TouchableOpacity style={styles.btn_back} onPress={() => goBack()}>
            <Image style={styles.back} source={icons.back_dark} />
          </TouchableOpacity>
          <Text style={styles.txt_status_header}>Voucher</Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <View style={styles.line}></View>
        <Content style={styles.content} showsVerticalScrollIndicator={false}>
          <StatusBar translucent={false} backgroundColor="#fff" />
          {dataItem.map((item, key) => {
            return (
              <View style={styles.v_item} key={key}>
                <View style={{ width: 77, height: 77 }}>
                  <Image source={{ uri: item.img }} style={styles.img} />
                </View>
                <View style={styles.v_detail}>
                  <View style={styles.v_nameBrand}>
                    <Text style={styles.txt_nameBrand}>{item.name}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={styles.txt_brand_detail}>{item.detail}</Text>
                  </View>
                </View>
                <View style={styles.v_get_item}>
                  <View style={styles.v_percent}>
                    <Text style={styles.txt_percent}>10%</Text>
                  </View>
                  <View style={styles.v_btn_coll}>
                    <TouchableOpacity>
                      <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        colors={["#FD843A", "#FF5535"]}
                        style={styles.btn_collect}
                      >
                        <Text style={styles.txt_collect}>Collect</Text>
                      </LinearGradient>
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
