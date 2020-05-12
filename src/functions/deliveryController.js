import {
  deliveryOptions,
  defaultdeliveryOptions
} from "../redux/actions/reduceActions";
import { timeoutPromise, setActiveProccess } from "./connectionManage";
import { ads, url } from "./../apis/Url";
import { Alert } from "react-native";
import {
  isArray,
  isNullnUndifined,
  isObject
} from "./../checkValue/ValueChecker";
// set Active address
const setDeliveryOptions = (dispatch, address) => {
  dispatch(deliveryOptions(address));
};
const getDeliveryOptions = props => {
  try {
    timeoutPromise(
      10000,
      fetch(ads + url.get_delivery_option)
        .then(response => response.json())
        .then(responseJson => {
          if (
            isNullnUndifined(responseJson) === false &&
            isArray(responseJson) === true
          ) {
            setDeliveryOptions(props.currentDis, responseJson);
            updateDefDelivery(props.currentDis, responseJson, 0);
          } else {
            setDeliveryOptions(props.currentDis, []);
          }
        })
        .catch(error => {
          console.log(error);
        }),
      props,
      null
    );
  } catch (err) {
    console.log(err);
  }
};
const updateDefDelivery = (dispatch, data, pos) => {
  if (pos === null) {
    dispatch(defaultdeliveryOptions(data));
  } else {
    const def = data[pos];
    dispatch(defaultdeliveryOptions(def));
  }
};

export { setDeliveryOptions, getDeliveryOptions, updateDefDelivery };
