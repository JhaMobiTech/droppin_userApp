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
import { styles } from "../../styles/profileEditFormStyle";
import { icons } from "../../assets/icons/IconsConfig";
import LinearGradient from "react-native-linear-gradient";
const isAndroid = Platform.OS == "android" ? true : false;
export default class ProfileEditForm extends Component {
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
          <Text style={styles.txt_status_header}>Edit Profile</Text>
          <View style={{ width: 30 }}></View>
        </Header>
        <Content style={styles.content}>
          <StatusBar
            backgroundColor="#fff"
            translucent={false}
            barStyle="dark-content"
          />
          <View style={styles.v_profile}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              activeOpacity={0.8}
            >
              <Image
                style={styles.img_profile}
                source={{
                  uri:
                    "https://www.imaginetricks.com/wp-content/uploads/2017/08/beautiful-girl-profile.jpg"
                }}
              />
              <View style={styles.v_camer}>
                <Image
                  style={{ width: 26, height: 26 }}
                  source={icons.camera_yellow}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.v_item_card}>
            <Card style={styles.v_card}>
              <View style={styles.v_title_text}>
                <Text style={styles.title_name}>Name</Text>
              </View>
              <TextInput
                placeholder={"Jenifer Mss"}
                style={styles.input_name}
              />
              <View style={styles.v_title_text}>
                <Text style={styles.title_name}>Email</Text>
              </View>
              <TextInput
                placeholder={"Jenifer@gmail.com"}
                style={styles.input_name}
              />
              <View style={styles.v_title_text}>
                <Text style={styles.title_name}>Password</Text>
              </View>
              <View style={styles.v_password_change}>
                <TextInput
                  placeholder={"Passsword"}
                  style={styles.input_pass}
                />
                <TouchableOpacity style={styles.btn_change}>
                  <Text style={styles.txt_change}>Change</Text>
                </TouchableOpacity>
              </View>
            </Card>
          </View>
          <View style={styles.v_bottom}>
            <TouchableOpacity style={{ width: "100%" }}>
              <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#FD843A", "#FF5535"]}
                style={styles.btn_next}
              >
                <Text style={styles.txt_next}>Save Change</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}
