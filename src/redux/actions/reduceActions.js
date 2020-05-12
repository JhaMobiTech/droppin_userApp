import { types } from "./actionTypes";
const activeLanguage = data => ({
  type: types.udateActiveLanguage,
  data: data
});
const activeUser = data => ({
  type: types.updateUserData,
  data: data
});
const activeConnection = data => ({
  type: types.updateConnection,
  data: data
});
const activeProccess = data => ({
  type: types.updateProcess,
  data: data
});
const availableAddress = data => ({
  type: types.updateAvailableAddress,
  data: data
});
const defaultAddress = data => ({
  type: types.updateDefaultAddress,
  data: data
});
const deliveryOptions = data => ({
  type: types.updateDeliveryOptions,
  data: data
});
const defaultdeliveryOptions = data => ({
  type: types.udate_def_del_op,
  data: data
});
const updateCart = data => ({
  type: types.update_cart,
  data: data
});

export {
  activeLanguage,
  activeUser,
  activeConnection,
  activeProccess,
  availableAddress,
  defaultAddress,
  deliveryOptions,
  defaultdeliveryOptions,
  updateCart
};
