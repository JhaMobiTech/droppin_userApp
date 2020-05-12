import React, { Component } from "react";
import { createBottomTabNavigator, BottomTabBar } from "react-navigation-tabs";
import { createAppContainer } from "react-navigation";
import { Image, Platform, Text } from "react-native";
import { icons } from "./../../assets/icons/IconsConfig";

//----- Screens -----------------
import Home from "../home/Home";
import Feed from "../feed/Feed";
import Message from "../message/Message";
import Cart from "../cart/Cart";
import Profile from "../account/Profile";
import { connect } from "react-redux";
import CustomTitle from "./CustomTitle";

export default createBottomTabNavigator(
  {
    Home: Home,
    Feed: Feed,
    // Message: Message,
    Cart: Cart,
    Profile: Profile
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        // let IconComponent = Ionicons;
        let iconName;
        if (routeName === "Home") {
          iconName = icons.home_gray_outline_50x50;
        } else if (routeName === "Feed") {
          iconName = icons.feed_gray_outline_50x50;
        } else if (routeName === "Message") {
          iconName = icons.message_gray_outline_50x50;
        } else if (routeName === "Cart") {
          iconName = icons.cart_gray_outline_50x50;
        } else if (routeName === "Profile") {
          iconName = icons.profile_gray_outline_50x50;
        }
        // You can return any component that you like here!
        return (
          <Image
            source={iconName}
            style={{
              width: 24,
              height: 24,
              tintColor: focused ? "#FF4747" : "#666666"
            }}
          />
        );
      },
      tabBarLabel: ({ tintColor }) => (
        <CustomTitle states={navigation.state} tintColor={tintColor} />
      )
    }),
    tabBarOptions: {
      activeTintColor: "tomato",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 12
      },
      style: {
        height: 60,
        borderTopWidth: 1,
        borderTopColor: "#f5f5f5"
      }
    }
  }
);
