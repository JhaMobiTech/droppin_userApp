import AsyncStorage from "@react-native-community/async-storage";
import { updateCart } from "../redux/actions/reduceActions";
import { timeoutPromise, setActiveProccess } from "./connectionManage";
import { ads, url } from "./../apis/Url";
import { Alert } from "react-native";
import {
  isArray,
  isNullnUndifined,
  isObject
} from "./../checkValue/ValueChecker";
// get cart item
const getCart = async dispatch => {
  try {
    const value = await AsyncStorage.getItem("cart");
    if (value !== null) {
      const cart = JSON.parse(value);
      if (isObject(cart) === true) {
        dispatch(updateCart(cart));
      }
    }
  } catch (e) {
    console.log("get cart error " + JSON.stringify(e));
  }
};
// set cart item
const setCart = async (dispatch, data) => {
  try {
    await AsyncStorage.setItem("cart", JSON.stringify(data));
    getCart(dispatch);
  } catch (e) {
    console.log("set cart error " + JSON.stringify(e));
  }
};
const getCartItemCount = cart => {
  if (
    isNullnUndifined(cart) === false &&
    isNullnUndifined(cart.items) === false
  ) {
    // let count = 0;
    // try {
    //   return items.length;
    // await items.map(async (item, key) => {
    //   if (
    //     isNullnUndifined(item.product_items) &&
    //     isArray(item.product_items) === true
    //   ) {
    //     console.log("Hello items: " + item);
    //     return item.product_itemslenght;
    //   } else {
    //     return 0;
    //   }
    // });
    // } catch (err) {
    //   return 0;
    // }
    return cart.items.length;
  } else {
    return 0;
  }
};

export { getCart, setCart, getCartItemCount };
