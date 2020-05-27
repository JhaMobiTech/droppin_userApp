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

const updatePickupAddress = data => ({
  type: types.update_pickup_address,
  data: data
});

const updateDropoffAddress = data => ({
  type: types.update_dropoff_address,
  data: data
});

const updateAddressFor = data => ({
  type: types.getAddressFor,
  data: data
});

const updateDeliveryCost = data => ({
  type: types.updatePrice,
  data: data
});

const updateTotalDistance = data => ({
  type: types.updateDistance,
  data: data
});

const updateDeliveryItem = data =>({
  type:types.updateDeliveryItem,
  data:data
})

const updateImagePath = data =>({
  type:types.updateImagePath,
  data:data
})

const updateDriverDistance = data =>({
  type:types.updateDriverDistance,
  data:data
})

const updateDeliverDate = data =>({
  type:types.updateDeliverDate,
  data:data
})

const updateDeliverTime = data =>({
  type:types.updateDeliverTime,
  data:data
})


export {
  activeLanguage,
  activeUser,
  activeConnection,
  activeProccess,
  availableAddress,
  defaultAddress,
  deliveryOptions,
  defaultdeliveryOptions,
  updateCart,
  updatePickupAddress,
  updateDropoffAddress,
  updateAddressFor,
  updateDeliveryCost,
  updateTotalDistance,
  updateDeliveryItem,
  updateImagePath,
  updateDriverDistance,
  updateDeliverDate,
  updateDeliverTime,
};
