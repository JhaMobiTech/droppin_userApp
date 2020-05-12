import { activeUser } from "../redux/actions/reduceActions";
import AsyncStorage from "@react-native-community/async-storage";
import { ads, url } from "./../apis/Url";
import { isObject, isNullnUndifined } from "./../checkValue/ValueChecker";
import { StackActions, NavigationActions } from "react-navigation";
import { setActiveProccess } from "./connectionManage";
import { getAvailableAddress } from "./addressManage";
import { Alert } from 'react-native';
const resetAction = StackActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: "TabNavigator" })]
});
// set Active user
const setActiveUser = (dispatch, user) => {
  dispatch(activeUser(user));
};
const storeActiveUser = async (dispatch, user) => {
  try {
    await AsyncStorage.setItem("user", JSON.stringify(user));
    setActiveUser(dispatch, user);
  } catch (e) {
    // error reading value
  }
};
// get default languange
const getActiveUser = async (props, keyName) => {
  try {
    const value = await AsyncStorage.getItem(keyName);
    // console.log("Value: " + value);
    if (value !== null) {
      const user = JSON.parse(value);
      setActiveUser(props.currentDis, user);
      if (isObject(user) === true) {
        if (isNullnUndifined(user._id) === false) {
          getAvailableAddress(props, user._id);
        }
      }
    } else {
      setActiveUser(props.currentDis, null);
    }
  } catch (e) {
    // error reading value
  }
};
// remove user
const removeActiveUser = async (dispatch, keyName) => {
  try {
    await AsyncStorage.removeItem(keyName);
    setActiveUser(dispatch, null);
  } catch (e) {
    // error reading value
  }
};
const manualLoggin = (username, password, props) => {
  return fetch(ads + url.login_manual, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      email: username.toLowerCase(),
      password: password
    })
  })
    .then(response => response.json())
    .then(responseJson => {
      // console.log("Hello" + JSON.stringify(responseJson));
      if (responseJson.status == 0 && responseJson.message == 'Validation Error.') {
        // setActiveProccess(props.currentDis, "done");
        alert(JSON.stringify(responseJson.data[0].msg));
      } else if (responseJson.status == 0) {
        // setActiveProccess(props.currentDis, "done");
        alert(JSON.stringify(responseJson.message));
      } else {
        storeActiveUser(props.currentDis, responseJson.data);
        setActiveProccess(props.currentDis, "done");
        props.navigation.dispatch(resetAction);
      }
    })
    .catch(error => {
      setActiveProccess(props.currentDis, "failed");
      Alert.alert(
        props.lang.something_went_wrong,
        props.there_is_error_while_checking_data
      );
    });
};

const getUserDetails = (user_id, token, props) => {
  return fetch(ads + url.user_details + user_id, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      // console.log("getUserDetails" + JSON.stringify(responseJson));
      const UserDataRecord = responseJson.data
      return UserDataRecord
    })
    .catch(error => {
      // console.log('error-getUserDetails ->', JSON.stringify(error));
      setActiveProccess(props.currentDis, "failed");
      Alert.alert(
        props.lang.something_went_wrong,
        props.there_is_error_while_checking_data
      );
    });
};

export {
  getActiveUser,
  removeActiveUser,
  setActiveUser,
  storeActiveUser,
  manualLoggin,
  getUserDetails
};
