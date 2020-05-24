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
  setDropShipDetails,
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
  setDropShipDetails:setDropShipDetails,
  updateCart: updateCart
});
export default rootReducer;
