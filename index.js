/**
 * @format
 */
import 'react-native-gesture-handler';
import React from "react";
import { MenuProvider } from "react-native-popup-menu";
import { AppRegistry, StatusBar, View, Text } from "react-native";
import AppNavigator from "./src/navigation/AppNavigator";
import { name as appName } from "./app.json";
import { Provider } from "react-redux";
import { store } from "./src/redux/store/store";

import App from './test'
import app from './src/components/map/'
const Myapp = () => {
  return (
    <Provider store={store}>
      <MenuProvider>
        <AppNavigator />
      </MenuProvider>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Myapp);
