import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, Dimensions } from "react-native";
import Scroller from "./Scroller";
import { icons } from "./src/assets/icons/IconsConfig";
import CheckBox from '@react-native-community/checkbox'
export default class App extends React.Component {
  state = {
    animation: new Animated.Value(0),
  };
  handleOpen = () => {
    console.log('state animation open',this.state.animation)
    Animated.timing(this.state.animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  handleClose = () => {
    console.log('state animation close',this.state.animation)
    Animated.timing(this.state.animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };
  render() {
    const screenHeight = Dimensions.get("window").height;
    const { width, height } = Dimensions.get("screen");
    const backdrop = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0, 0.01],
            outputRange: [screenHeight, 0],
            extrapolate: "clamp",
          }),
        },
      ],
      opacity: this.state.animation.interpolate({
        inputRange: [0.01, 0.5],
        outputRange: [0, 1],
        extrapolate: "clamp",
      }),
    };

    const slideUp = {
      transform: [
        {
          translateY: this.state.animation.interpolate({
            inputRange: [0.01, 1],
            outputRange: [0, -1 * screenHeight],
            extrapolate: "clamp",
          }),
        },
      ],
    };

    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleOpen}>
          <Text>Open</Text>
        </TouchableOpacity>

        <Animated.View style={[StyleSheet.absoluteFill, styles.cover, backdrop]}>
          <View style={[styles.sheet]}>
            <Animated.View style={[styles.popup, slideUp]}>
              <Text style={{alignItems:'center',fontSize:22,marginTop:10}}>Payment Method</Text>
              <Text style={{left:30,top:50,position:'absolute',alignContent:'flex-start',fontWeight:'bold'}}>Cash</Text>
              <View style={{flex:1,alignItems:'center',flexDirection:'row',left:-15,top:-25}}>
                <Image source={icons.cash1} style={{width:50,height:30}}/>
                <Text style={{paddingLeft:20,fontSize:15,marginRight:40}}>Collect from Pick-up</Text>
                <CheckBox />
              </View>

              <View style={{flex:1,alignItems:'center',flexDirection:'row',left:-15,top:-140}}>
                <Image source={icons.cash1} style={{width:50,height:30}}/>
                <Text style={{paddingLeft:20,fontSize:15,marginRight:35}}>Collect from Drop-off</Text>
                <CheckBox />
              </View>
              <View style={{
                top:-180,
                borderStyle: 'dashed',
                marginLeft:5,
                marginRight:5,
                width:width,
                borderBottomWidth:2,
                borderColor:'#777777',}}/>
              <Text style={{paddingLeft:20,fontSize:15,marginRight:35,left:-120,top:-190}}>Subtotal</Text>
              <Text style={{paddingLeft:20,fontSize:15,marginRight:35,right:-120,top:-210}}>2222 lak</Text>

              

              <TouchableOpacity onPress={this.handleClose}>
                <Text>Close</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cover: {
    backgroundColor: "rgba(0,0,0,.5)",
  },
  sheet: {
    position: "absolute",
    top: Dimensions.get("window").height,
    left: 0,
    right: 0,
    height: "100%",
    justifyContent: "flex-end",
  },
  popup: {
    backgroundColor: "#FFF",
    marginHorizontal: 5,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    minHeight: 400,
  },
});