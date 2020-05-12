import React from "react";
import { View } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { StackActions, NavigationActions } from "react-navigation";

const goHome = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "TabNavigator" })]
});
const goJourney = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "Onboarding" })]
});

export default class LoadingData extends React.Component {
  componentDidMount() {
    this.checkJourey();
  }

  checkJourey = async () => {
    try {
      const value = await AsyncStorage.getItem("userjourney");
      if (value === "complete") {
        this.props.navigation.dispatch(goHome);
      } else {
        this.props.navigation.dispatch(goJourney);
      }
    } catch (e) {
      this.props.navigation.dispatch(goHome);
    }
  };
  render() {
    return <View></View>;
  }
}
