import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import Modal from "react-native-modalbox";
import { Container, Content, Header, Card, Footer } from "native-base";
import { icons } from "../../assets/icons/IconsConfig";
import { styles } from "./../../styles/productDetailStyle";
import { isNullnUndifined, isObject } from "../../checkValue/ValueChecker";

export const DeliveryOption = (props, refs, state, changeAddress) => {
  const { selectedAdd, selectDeliver } = state;
  return (
    <Modal
      entry={"bottom"}
      style={styles.modal_container}
      coverScreen={true}
      ref={"selectDeliver"}
      position={"bottom"}
    >
      <View style={styles.modal_header}>
        <Text style={styles.modal_header_txt}>
          {props.lang.delivery_option}
        </Text>
        <TouchableOpacity
          style={styles.close_modal_touch}
          onPress={() => refs.selectDeliver.close()}
        >
          <Image
            source={icons.multiply_black_outline_50}
            style={styles.heart_icon}
          />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          refs.selectDeliver.close();
          props.navigation.navigate("ShippingAddress");
        }}
        activeOpacity={0.7}
        style={styles.modal_address}
      >
        <Text style={styles.delivery_to_txt}>{props.lang.delivery_to}</Text>
        <View style={styles.modal_addr_sub}>
          <Image
            resizeMode={"contain"}
            source={icons.pin_orange}
            style={[styles.heart_icon, { paddingHorizontal: 20 }]}
          />
          <Text
            style={styles.modal_addr_txt}
            numberOfLines={1}
            ellipsizeMode={"tail"}
          >
            {renderAddress(props.defaddress)}
          </Text>
          <Image
            resizeMode={"cover"}
            source={icons.right_arrow_back_50}
            style={styles.pick_address_icon}
          />
        </View>
      </TouchableOpacity>
      <View style={styles.md_divider} />
      {props.deliveries.length > 0 ? (
        props.deliveries.map((item, key) => {
          return (
            <Card style={styles.deliv_card} key={key}>
              <TouchableOpacity
                onPress={() => changeAddress(key, item)}
                activeOpacity={0.8}
                style={{ flex: 1, flexDirection: "row" }}
              >
                <View>
                  <View style={styles.radio_container}>
                    {selectedAdd == key && <View style={styles.radio_dot} />}
                  </View>
                </View>
                <View style={styles.md_addr_standard}>
                  <Text style={styles.standard_txt}>
                    {item.delivery_opName} {item.delivery_opTime}{" "}
                  </Text>
                  <Text style={styles.md_addr_pricing}>
                    {item.delivery_opPrice} LAK
                  </Text>
                  <View style={styles.md_addr_standard_sub}>
                    <Image
                      source={icons.free_delivery_truck_green}
                      style={styles.car_icon}
                    />
                    <Text style={styles.enjoy_txt}>
                      Enjoy free shipping with minimum purchase
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </Card>
          );
        })
      ) : (
        <View />
      )}
      <View style={styles.deliv_service}>
        <Text style={styles.deliv_service_txt}>
          {props.lang.delivery_service}
        </Text>
        <View>
          <Text style={styles.deliv_service_sub_txt}>
            • Fulfilled by Droppin
          </Text>
        </View>
      </View>
    </Modal>
  );
};
const renderAddress = defaddress => {
  // console.log(defaddress);
  if (isNullnUndifined(defaddress) === false && isObject(defaddress)) {
    return (
      defaddress.address_title +
      ", " +
      defaddress.cus_fname +
      ", " +
      defaddress.cus_phone
    );
  } else {
    return "No default address selected !";
  }
};
