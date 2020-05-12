import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { Container, Content, Header, Card } from "native-base";
import { styles } from "../../styles/failedSceneStyle";
import { icons } from "../../assets/icons/IconsConfig";

const exclusiveConnectionFailed = onReload => {
  return (
    <View style={styles.con_view}>
      <Image style={styles.con_img} source={icons.connection_failed_gray_100} />
      <Text style={styles.con_txt}>Connection failed !</Text>
      <Text style={styles.con_txt}>
        Please make sure you are connected to the internet.
      </Text>
      <TouchableOpacity onPress={() => onReload()}>
        <Text style={styles.con_reload_txt}>Reload</Text>
      </TouchableOpacity>
    </View>
  );
};
export { exclusiveConnectionFailed };
