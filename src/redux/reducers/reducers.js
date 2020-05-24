import { types } from "./../actions/actionTypes";
import { intials } from "./intialStates";
// ---language data -------
const la = require("./../../assets/jsons/languages/la.json");
const en = require("./../../assets/jsons/languages/en.json");
const setActiveLanguage = (state = intials.activeLanguage, action) => {
  switch (action.data) {
    case "LA":
      return { ...state, lang: "LA", data: la };
    case "EN":
      return { ...state, lang: "EN", data: en };
    default:
      return state;
  }
};
const setActiveUser = (state = intials.activeUser, action) => {
  switch (action.type) {
    case types.updateUserData:
      return { ...state, user: action.data }; 
    default:
      return state;
  }
};
const setActiveConnection = (state = intials.activeConnection, action) => {
  switch (action.type) {
    case types.updateConnection:
      return { ...state, online: action.data };
    default:
      return state;
  }
};
const setActiveProccess = (state = intials.activeProccess, action) => {
  switch (action.type) {
    case types.updateProcess:
      return { ...state, proccess: action.data };
    default:
      return state;
  }
};
const setAddress = (state = intials.availableAddress, action) => {
  switch (action.type) {
    case types.updateAvailableAddress:
      return { ...state, address: action.data };
    default:
      return state;
  }
};
const setDefaultAddress = (state = intials.defaultAddress, action) => {
  switch (action.type) {
    case types.updateDefaultAddress:
      return { ...state, defaddress: action.data };
    default:
      return state;
  }
};
const setDeliveryOptions = (state = intials.delivery_option, action) => {
  switch (action.type) {
    case types.updateDeliveryOptions:
      return { ...state, deliveries: action.data };
    default:
      return state;
  }
};
const setDefDeliveryOptions = (state = intials.def_delivery_option, action) => {
  switch (action.type) {
    case types.udate_def_del_op:
      return { ...state, defdelivery: action.data };
    default:
      return state;
  }
};
const updateCart = (state = intials.cartItem, action) => {
  switch (action.type) {
    case types.update_cart:
      return { ...state, cart: action.data };
    default:
      return state;
  }
};

const setDropShipDetails = (state = intials.dropShipDetails, action) => {
  switch (action.type) {
    case types.update_pickup_formatted_address:
      return { ...state, pickup_formatted_address: action.data };
    case types.update_pickup_latitude:
      return { ...state, pickup_latitude: action.data };
    case types.update_pickup_longitude:
      return { ...state, pickup_longitude: action.data };
    default:
      return state;
  }
};

export {
  setActiveLanguage,
  setActiveUser,
  setActiveConnection,
  setActiveProccess,
  setAddress,
  setDefaultAddress,
  setDeliveryOptions,
  setDefDeliveryOptions,
  setDropShipDetails,
  updateCart
};
