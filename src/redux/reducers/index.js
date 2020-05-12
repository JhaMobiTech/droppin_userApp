import { combineReducers } from "redux";
import {
  setActiveLanguage,
  setActiveUser,
  setActiveConnection,
  setActiveProccess,
  setAddress,
  setDefaultAddress,
  setDeliveryOptions,
  setDefDeliveryOptions,
  updateCart
} from "./reducers";
const rootReducer = combineReducers({
  setActiveLanguage: setActiveLanguage,
  setActiveUser: setActiveUser,
  setActiveConnection: setActiveConnection,
  setActiveProccess: setActiveProccess,
  setAddress: setAddress,
  setDefaultAddress: setDefaultAddress,
  setDeliveryOptions: setDeliveryOptions,
  setDefDeliveryOptions: setDefDeliveryOptions,
  updateCart: updateCart
});
export default rootReducer;
