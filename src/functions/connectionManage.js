import React from "react";
import { activeProccess } from "../redux/actions/reduceActions";
import {
  isStr,
  isArray,
  countArray,
  isNullnUndifined
} from "./../checkValue/ValueChecker";
import { Alert, RefreshControl } from "react-native";
// set Active connection
const setActiveProccess = (dispatch, status) => {
  dispatch(activeProccess(status));
};

const timeoutPromise = (ms, promise, props, message) => {
  return new Promise((resolve, reject) => {
    const timeoutId = setTimeout(() => {
      setActiveProccess(props.currentDis, "failed");
      if (isNullnUndifined(message) === false) {
        alertOptions(message);
      }
    }, ms);
    promise.then(
      res => {
        clearTimeout(timeoutId);
        // resolve(res);
        setActiveProccess(props.currentDis, "done");
      },
      err => {
        clearTimeout(timeoutId);
        // reject(err);
        setActiveProccess(props.currentDis, "failed");
        if (isNullnUndifined(message) == false) {
          alertOptions(message);
        }
      }
    );
  });
};

const alertOptions = message => {
  if (isStr(message)) {
    alert(message);
  } else if (isArray(message) && countArray(message) === 2) {
    if (isStr(message[0]) && isStr(message[1])) {
      Alert.alert(message[0], message[1]);
    } else {
      alert("Connection failed !");
    }
  } else {
    alert("Connection failed !");
  }
};
const onReload = (props, callFunction) => {
  setActiveProccess(props.currentDis, "loading");
  timeoutPromise(10000, callFunction(), props, props.lang.connection_failed);
};
const refreshControl = (refreshing, onRefresh) => {
  return <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />;
};
export {
  setActiveProccess,
  timeoutPromise,
  onReload,
  alertOptions,
  refreshControl
};
