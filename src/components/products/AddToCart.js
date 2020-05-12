import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import Modal from "react-native-modalbox";
import { Container, Content, Header, Card, Footer } from "native-base";
import { getCart, setCart } from "./../../functions/cartController";
// checking value
import {
  isNullnUndifined,
  checkUndifined,
  isObject,
  isArray,
  countArray
} from "./../../checkValue/ValueChecker";
import { icons } from "../../assets/icons/IconsConfig";
import { styles } from "../../styles/productDetailStyle";
const { width, height } = Dimensions.get("screen");
const data = [
  "https://milanos-shoes.gr/image/cache/catalog/shoes/Adam_s/921_18005__1__700x700-700x700.jpg",
  "https://cf.shopee.ph/file/39511199f221cfed9a55205bb7491831",
  "https://www.brooksrunning.com/dw/image/v2/aaev_prd/on/demandware.static/-/Sites-BrooksCatalog/default/dwbb729ac9/images/ProductImages/120283/120283_097_l_WR.jpg?sw=900"
];
// const option1 = ["2", "4", "6", "8", "10"];
export const AddToCart = (props, state, refs, renderOptions, qtyOptions) => {
  const {
    quantity,
    actionBtn,
    product,
    base_price,
    option1,
    option2,
    op1,
    op2,
    stock
  } = state;
  return (
    <Modal
      entry={"bottom"}
      style={styles.atc_modal_container}
      coverScreen={true}
      ref={"addtocart"}
      position={"bottom"}
      swipeToClose={false}
    >
      <View style={styles.atc_modal_header}>
        <View style={styles.atc_img_box}>
          <Card style={styles.atc_card}>
            <Image
              resizeMode={"cover"}
              style={styles.atc_img}
              source={{
                uri:
                  isNullnUndifined(product) === false
                    ? isArray(product.pd_img) === true
                      ? product.pd_img[0]
                      : "http://images.fastcompany.com/upload/Simple.jpg"
                    : "http://images.fastcompany.com/upload/Simple.jpg"
              }}
            />
          </Card>
          <View style={styles.atc_pd_detail_box}>
            <Text style={styles.atc_modal_header_txt}>
              {isNullnUndifined(product) === false && isObject(product) === true
                ? product.pd_name
                : "undefined name"}
            </Text>
            <Text style={[styles.active_time, { alignSelf: "center" }]}>
              {isNullnUndifined(op1) === false ? op1.stock : 0} items in stock
            </Text>
            <Text style={styles.atc_modal_price_txt}>
              {isNullnUndifined(op1) === false ? op1.price : 0} LAK
              {/* {base_price.length == 1
                ? base_price[0] + " LAK"
                : base_price[1] == base_price[0]
                ? base_price[0] + " LAK"
                : base_price[1] + " LAK - " + base_price[0] + " LAK"} */}
            </Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.close_modal_touch}
          onPress={() => refs.addtocart.close()}
        >
          <Image
            source={icons.multiply_black_outline_50}
            style={styles.heart_icon}
          />
        </TouchableOpacity>
      </View>
      {/* <Text>{JSON.stringify(product.pd_img)}</Text> */}
      <ScrollView contentContainerStyle={{ width: width, paddingBottom: 10 }}>
        <View
          style={[styles.md_divider, { marginHorizontal: 0, width: width }]}
        />
        {option2 !== null && (
          <View>
            <Text style={styles.atc_option_1_title}>
              {op2 !== null && isNullnUndifined(op2.title) === false
                ? op2.titleHeader
                : "*"}
            </Text>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ marginLeft: 16 }}
            >
              {isArray(option2) === true &&
                countArray(option2) > 0 &&
                renderOptions(option2, op2, 2)}
            </ScrollView>
          </View>
        )}

        {option1 !== null && (
          <View>
            <Text style={[styles.atc_option_1_title, { marginTop: 10 }]}>
              {op1 !== null && isNullnUndifined(op1.title) === false
                ? op1.titleHeader
                : "*"}
            </Text>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{ marginLeft: 16 }}
            >
              {isArray(option1) === true &&
                countArray(option1) > 0 &&
                renderOptions(option1, op1, 1)}
            </ScrollView>
          </View>
        )}

        <View
          style={[
            styles.md_divider,
            {
              marginHorizontal: 0,
              width: width,
              marginTop: 15,
              marginBottom: 10
            }
          ]}
        />
        <View style={styles.atc_qty_box}>
          <Text style={styles.atc_qty_title}>{props.lang.quantity}</Text>
          <View style={styles.atc_manage_qty}>
            <TouchableOpacity
              style={styles.atc_plus_touch}
              onPress={() => qtyOptions(op1, "-")}
            >
              <Image
                source={icons.minus_gray_outline_48}
                style={styles.heart_icon}
              />
            </TouchableOpacity>
            <Text style={styles.atc_qty_txt_value}>{quantity}</Text>
            <TouchableOpacity
              style={styles.atc_plus_touch}
              onPress={() => qtyOptions(op1, "+")}
            >
              <Image
                source={icons.plus_gray_outile_50}
                style={styles.heart_icon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      {actionBtn === "ATC" ? (
        <TouchableOpacity
          style={styles.atc_add_to_cart}
          onPress={() => addToCartFunc("ATC", state, props, refs)}
        >
          <Text style={styles.atc_buy_now_txt}> {props.lang.add_to_cart}</Text>
        </TouchableOpacity>
      ) : actionBtn === "BN" ? (
        <TouchableOpacity style={styles.atc_add_to_cart} onPress={() => {}}>
          <Text style={styles.atc_buy_now_txt}> {props.lang.buy_now}</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.atc_btn_view}>
          <TouchableOpacity
            style={[styles.atc_add_to_cart, { width: (width - 48) / 2 }]}
            onPress={() => {}}
          >
            <Text style={styles.atc_buy_now_txt}> {props.lang.buy_now}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.atc_add_to_cart,
              {
                width: (width - 48) / 2,
                marginLeft: 16,
                backgroundColor: "#ff5722"
              }
            ]}
            onPress={() => {}}
          >
            <Text style={styles.atc_buy_now_txt}>{props.lang.add_to_cart}</Text>
          </TouchableOpacity>
        </View>
      )}
    </Modal>
  );
};
const addToCartFunc = async (action, state, props, refs) => {
  const { product, option1, quantity, option2, op1 } = state;
  if (isNullnUndifined(props.cart) === false && isObject(props.cart) === true) {
    var { cus_id, items } = props.cart;
    var new_cart = props.cart;
    if (isArray(items) === true) {
      // check same shop
      const shop = await items.find(
        item => item.seller_id === product.seller_id._id
      );

      if (isObject(shop) === true) {
        var index_items = await items.findIndex(
          item => item.seller_id === shop.seller_id
        );
        var pd_items = shop.product_items;
        if (isArray(pd_items) === true) {
          // check same product
          var allitem = await pd_items.find(item => item.pd_id === product._id);
          var pd_item_index = await pd_items.findIndex(
            item =>
              item.pd_option.op1_id === option1[0]._id &&
              item.pd_option.op2_id === option2[0]._id
          );
          // console.log(pd_item_index);
          if (isObject(allitem) === true) {
            var pd = allitem.pd_option;
            // check same option
            if (pd.op2_id === option2[0]._id && pd.op1_id === option1[0]._id) {
              var currQty = allitem.pd_quantity;
              if (quantity + currQty > op1.stock) {
                allitem["pd_quantity"] = op1.stock;
              } else {
                allitem["pd_quantity"] = currQty + quantity;
              }
              // console.log(allitem);
              pd_items[pd_item_index] = allitem;
              items[index_items]["product_items"] = pd_items;
              new_cart["items"] = items;

              // console.log(new_cart);
              setCart(props.currentDis, new_cart);
            } else {
              console.log("not same 1");
            }
          } else {
            console.log("not same 2");
          }
        } else {
          console.log("not same 3");
        }
      } else {
        console.log("not same 4");
      }
    }
  } else {
    const item = {
      seller_id:
        isNullnUndifined(product) === false &&
        (isNullnUndifined(product.seller_id._id) === false) === true
          ? product.seller_id._id
          : null,
      product_items: [
        {
          pd_id: product._id,
          pd_quantity: quantity,
          pd_option: {
            op1_id: isNullnUndifined(option1) === false ? option1[0]._id : null,
            op2_id: isNullnUndifined(option2) === false ? option2[0]._id : null
          }
        }
      ]
    };
    var cart = {
      cus_id: isNullnUndifined(props.user) === false ? props.user._id : null,
      items: [item]
    };
    // console.log(state.quantity);
    setCart(props.currentDis, cart);
    refs.addtocart.close();
  }
};
