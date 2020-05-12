import React, { Component } from "react";
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import { Container, Content, Header, Card } from "native-base";
import { styles } from "../../styles/messageStyle";
import LinearGradient from "react-native-linear-gradient";
import { icons } from "../../assets/icons/IconsConfig";

export default class Feed extends Component {
  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      if (Platform.OS == "android") {
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor("#fff");
      }
      StatusBar.setBarStyle("dark-content");
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const dataMessage = [
      {
        title: "NIKE Store",
        img:
          "https://image.slidesharecdn.com/nikefinalsubmitive-170413140900/95/nike-brand-study-analysis-overall-1-638.jpg?cb=1492093195"
      },
      {
        title: "FALA Store",
        img:
          "https://www.designevo.com/res/templates/thumb_small/purple-and-white-elephant-icon.png"
      },
      {
        title: "ADIDAS Original",
        img:
          "https://pbs.twimg.com/profile_images/1142039178529710080/ZDcUPtSK_400x400.jpg"
      }
    ];
    return (
      <Container>
        <Header style={styles.header} noShadow>
          <Text style={styles._txt_header}>Messages</Text>
        </Header>
        <Content style={styles._content}>
          <StatusBar backgroundColor={"#fff"} />
          <View style={styles._v_search_}>
            <View style={styles._view_search}>
              <Image
                style={{ width: 26, height: 26 }}
                source={icons.search_gray}
              />
              <TextInput
                placeholder="Search message"
                placeholderTextColor="#4D4D4D"
                onChangeText={text => onChangeText(text)}
                //value={value}
                style={{ fontSize: 15, marginLeft: 15 }}
              />
            </View>
          </View>
          {dataMessage.map((item, key) => {
            return (
              <View style={styles._view_message} key={key}>
                <View style={styles._view_img}>
                  <Image style={styles._img} source={{ uri: item.img }} />
                </View>
                <View style={styles._view_detail}>
                  <View style={styles._view_txt_name}>
                    <Text style={styles._txt_name_}>{item.title}</Text>
                    <Text style={styles._txt_name_2}>10.44 AM</Text>
                  </View>
                  <View style={styles._view_txt_detail}>
                    <View style={styles._view_detail_txt}>
                      <Text style={styles.txt_det}>
                        De componentes se Lorem ipsum encuent componente de
                        muestra.
                      </Text>
                    </View>
                    <View style={styles._view_notify}>
                      <View style={styles._cicle_notify}>
                        <Text style={styles._txt_notitfy}>3</Text>
                      </View>
                    </View>
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
