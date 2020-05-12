import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StatusBar,
  TextInput,
  ScrollView,
  Dimensions
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Container, Content, Header, Card } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "../../styles/exclusiveStyle";
import { icons } from "../../assets/icons/IconsConfig";
import { ads, url } from "../../apis/Url";
import { imgPath } from "../../apis/IamgePath";
import { SimpleLoadingHori } from "./../loadingoverlay/AppLoading";
import { exclusiveConnectionFailed } from "./../empty_and_failed/FailedScene";
import {
  setActiveProccess,
  timeoutPromise,
  onReload
} from "./../../functions/connectionManage";
const { width, height } = Dimensions.get("screen");
class ExclusiveRewards extends Component {
  constructor(props) {
    super(props);
    setActiveProccess(this.props.currentDis, "loading");
    this.state = {
      exclusive: []
    };
  }

  componentDidMount() {
    this._navListener = this.props.navigation.addListener("didFocus", () => {
      StatusBar.setBarStyle("dark-content");
    });
    timeoutPromise(
      10000,
      this.getExclusive(),
      this.props,
      this.props.lang.connection_failed
    );
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  render() {
    const { exclusive, connection } = this.state;
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
          <Text style={styles._text_header}>Exclusive Rewards</Text>
          <View style={styles._iconBack_dark} />
        </Header>
        <Content contentContainerStyle={{ flex: 1 }}>
          <StatusBar translucent={false} backgroundColor={"#fff"} />
          <View>
            <ScrollView contentContainerStyle={styles.all_pd_con}>
              {this.props.proccess == "loading" ? (
                <View style={{ width: width - 32 }}>{SimpleLoadingHori()}</View>
              ) : this.props.proccess == "failed" ? (
                exclusiveConnectionFailed(() =>
                  onReload(this.props, () => this.getExclusive())
                )
              ) : exclusive.length > 0 ? (
                this.renderExclusive()
              ) : (
                <View
                  style={{
                    flex: 1,
                    height: 200,
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                >
                  <Text>No challege aviable now</Text>
                </View>
              )}
            </ScrollView>
          </View>
        </Content>
      </Container>
    );
  }
  renderExclusive() {
    return this.state.exclusive.map((item, key) => {
      return (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => this.props.navigation.navigate(item.ex_target)}
          key={key}
          style={[
            styles.ex_item,
            {
              backgroundColor: item.ex_bgcolor
            }
          ]}
        >
          <Image
            source={{
              uri: item.ex_img
            }}
            style={styles.ex_icon}
          />
          <Text style={[styles.ex_txt, { color: item.ex_txtcolor }]}>
            {item.ex_header}
          </Text>
          <View style={styles.rew_con}>
            <LinearGradient
              colors={item.ex_btncolor}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.gradient}
            >
              <Image source={icons.coin_gold_fill_43} style={styles.coins} />
              <Text style={styles.coins_txt}>{item.ex_btntxt}</Text>
            </LinearGradient>
          </View>
        </TouchableOpacity>
      );
    });
  }
  getExclusive() {
    return fetch(ads + url.user_get_exclusive)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ exclusive: responseJson });
        setActiveProccess(this.props.currentDis, "done");
      })
      .catch(error => {
        setActiveProccess(this.props.currentDis, "failed");
        console.log(error);
      });
  }
}

const mapStateToProps = state => {
  return {
    proccess: state.setActiveProccess.proccess,
    lang: state.setActiveLanguage.data
  };
};
const mapDispatchToProps = dispatch => {
  return {
    currentDis: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExclusiveRewards);
