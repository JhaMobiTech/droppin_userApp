import {
  availableAddress,
  defaultAddress
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
const setAvailableAddress = (dispatch, address) => {
  dispatch(availableAddress(address));
};
// add new address
const addNewAddress = (body, props) => {
  setActiveProccess(props.currentDis, "loading");
  timeoutPromise(
    10000,
    insertAddress(body, props),
    props,
    props.lang.add_data_failed
  );
};
// insert address
const insertAddress = (body, props) => {
  return fetch(ads + url.user_set_address, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: body
  })
    .then(response => response.json())
    .then(responseJson => {
      // console.log(responseJson);
      if (responseJson.warning === undefined) {
        setAvailableAddress(props.currentDis, responseJson);
        setActiveProccess(props.currentDis, "done");
        props.navigation.navigate("ShippingAddress");
      } else {
        setActiveProccess(props.currentDis, "done");
        Alert.alert(props.lang.warning, "Address is limited at 5 places.");
      }
    })
    .catch(error => {
      setActiveProccess(props.currentDis, "failed");
      Alert.alert(
        props.lang.something_went_wrong,
        props.lang.server_not_response
      );
    });
};
// get Available address
const getAvailableAddress = (props, user_id, token) => {
  timeoutPromise(
    10000,
    fetchAddress(props.currentDis, user_id, token),
    props,
    props.lang.connection_failed
  );
};
// fetch available address
const fetchAddress = (dispatch, user_id, token) => {
  console.log('token ->', token);
  return fetch(ads + url.user_get_address + user_id, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
  })
    .then(response => response.json())
    .then(responseJson => {
      console.log('responseJson-addrs ->', responseJson);
      if (isArray(responseJson) === true) {
        if (responseJson.length > 0) {
          setAvailableAddress(dispatch, responseJson);
          findDefaultAddress(responseJson, dispatch);
        } else {
          setAvailableAddress(dispatch, []);
        }
      } else {
        setAvailableAddress(dispatch, []);
      }
      setActiveProccess(dispatch, "done");
    })
    .catch(error => {
      setActiveProccess(dispatch, "failed");
      console.log('error-fetchAddress ->', error);
    });
};
// update default address
const updateDefaultAddress = (_id, item, props) => {
  setActiveProccess(props.currentDis, "loading");
  timeoutPromise(
    10000,
    updateStatusAddress(_id, item, props.currentDis),
    props,
    props.lang.connection_failed
  );
};
// update address status
const updateStatusAddress = (_id, item, dispatch) => {
  return fetch(ads + url.user_update_address_status, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      out_id: _id,
      in_id: item._id,
      default_address: true
    })
  })
    .then(response => response.json())
    .then(responseJson => {
      if (isArray(responseJson) === true) {
        if (responseJson.length > 0) {
          setAvailableAddress(dispatch, responseJson);
          findDefaultAddress(responseJson, dispatch);
        } else {
          setAvailableAddress(dispatch, []);
        }
      } else {
        setAvailableAddress(dispatch, []);
      }
      setActiveProccess(dispatch, "done");
    })
    .catch(error => {
      setActiveProccess(dispatch, "failed");
      Alert.alert(
        "Something went wrong !",
        "Can not set default address !, Please try again."
      );
    });
};
// find default address
const findDefaultAddress = async (response, dispatch) => {
  if (isNullnUndifined(response[0].customer) === false) {
    const add = response[0].customer;
    let obj = add.find(o => o.address_status === true);
    // console.log(obj);
    if (isObject(obj) === true) {
      dispatch(defaultAddress(obj));
    } else {
      dispatch(defaultAddress(null));
    }
  }
};
// delete address
const deleteAddress = (body, props) => {
  setActiveProccess(props.currentDis, "loading");
  timeoutPromise(
    10000,
    deleteAddressItem(body, props.currentDis),
    props,
    props.lang.connection_failed
  );
};
// delete address item
const deleteAddressItem = (body, dispatch) => {
  return fetch(ads + url.user_delete_address, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: body
  })
    .then(response => response.json())
    .then(responseJson => {
      setAvailableAddress(dispatch, responseJson);
      setActiveProccess(dispatch, "done");
    })
    .catch(error => {
      setActiveProccess(dispatch, "failed");
      Alert.alert(
        "Something went wrong !",
        "Can not delete address !, Please try again."
      );
    });
};
// update address
const updateAddress = (body, props) => {
  setActiveProccess(props.currentDis, "loading");
  timeoutPromise(
    10000,
    updateAddressItem(body, props),
    props,
    props.lang.connection_failed
  );
};
// update address item
const updateAddressItem = async (body, props) => {
  try {
    return fetch(ads + url.user_update_address, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(response => response.json())
      .then(responseJson => {
        setAvailableAddress(props.currentDis, responseJson);
        setActiveProccess(props.currentDis, "done");
        props.navigation.navigate("ShippingAddress");
      })
      .catch(error => {
        setActiveProccess(props.currentDis, "failed");
        Alert.alert(
          "Something went wrong !",
          "Can not update address !, Please try again."
        );
      });
  } catch (error) {
    setActiveProccess(props.currentDis, "failed");
    Alert.alert(
      "Something went wrong !",
      "Can not update address !, Please try again."
    );
  }
};
export {
  getAvailableAddress,
  setAvailableAddress,
  fetchAddress,
  updateDefaultAddress,
  addNewAddress,
  deleteAddress,
  updateAddress
};
