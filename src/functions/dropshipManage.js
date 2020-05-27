import React from "react";
import { activeProccess,updatePickupAddress,updateDropoffAddress ,
    updateAddressFor,updateDeliveryCost,updateTotalDistance,updateDeliveryItem,
    updateImagePath,updateDriverDistance,updateDeliverDate,updateDeliverTime
} from "../redux/actions/reduceActions";
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

const pickupAddressAction = (dispatch, status) => {
  dispatch(updatePickupAddress(status));
};


const dropoffAddressAction = (dispatch, status) => {
  dispatch(updateDropoffAddress(status));
};

const setAddressForAction = (dispatch, status) => {
  dispatch(updateAddressFor(status));
};

const setDeliveryCost = (dispatch, status) => {
    dispatch(updateDeliveryCost(status));
};

const setTotalDistance = (dispatch, status) => {
    dispatch(updateTotalDistance(status));
};

const setDeliveryItem = (dispatch,status)=>{
    dispatch(updateDeliveryItem(status));
}

const setImagePath = (dispatch,status)=>{
    dispatch(updateImagePath(status));
}

const setDriverDistance = (dispatch,status)=>{
  dispatch(updateDriverDistance(status));
}


const setDeliverDate = (dispatch,status)=>{
  dispatch(updateDeliverDate(status));
}

const setDeliverTime = (dispatch,status)=>{
  dispatch(updateDeliverTime(status));
}

export {
    pickupAddressAction,
    dropoffAddressAction,
    setAddressForAction,
    setDeliveryCost,
    setTotalDistance,
    setDeliveryItem,
    setImagePath,
    setDriverDistance,
    setDeliverDate,
    setDeliverTime,
};
