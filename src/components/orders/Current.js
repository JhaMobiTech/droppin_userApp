import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../../styles/myOrderStyle";
import { icons } from "../../assets/icons/IconsConfig";
import LinearGradient from "react-native-linear-gradient";

export default class Current extends Component {
  render() {
    return (
      <View style={styles.body_current}>
        {/* <View style={styles.item_cr}>
          <View style={styles.v_top1}>
            <Text style={styles.txt_v1}>ORDER NUMBER</Text>
            <Text style={styles.txt_v1}>ORDER DATE</Text>
          </View>
          <View style={styles.v_top2}>
            <Text style={styles.txt_v2}>902343576124</Text>
            <Text style={styles.txt2_v2}>5 August, 2019</Text>
          </View>
          <View style={styles.v_top3}>
            <View style={styles.v_show_hide}>
              <View style={styles.v_v3}>
                <Image
                  style={{ width: 19, height: 10 }}
                  source={icons.instrance}
                />
                <Text style={styles.txt_v3}>In transit</Text>
              </View>
              <View style={styles.v_v3_2}>
                <Text style={styles.txt_v3_1}>2 Items</Text>
                <Image style={styles.circle} source={icons.circle_gray} />
                <Text style={styles.txt_v3_1}>200,000 LAK</Text>
              </View>
            </View>
          </View>
          <View style={styles.v_top4}>
            <TouchableOpacity style={styles.btn_track}>
              <Image
                source={icons.droppin_orange}
                style={{ width: 10, height: 14.29 }}
              />
              <Text style={styles.txt_v4_1}>Track Order</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <LinearGradient
                style={styles.btn_scan}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ff9100", "#ff3d00"]}
              >
                <Image
                  style={{ width: 16, height: 14 }}
                  source={icons.camera_wite}
                />
                <Text style={styles._txt_ck}>Scan to receive</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.item_cr_2}>
          <View style={styles.v_top1}>
            <Text style={styles.txt_v1}>ORDER NUMBER</Text>
            <Text style={styles.txt_v1}>ORDER DATE</Text>
          </View>
          <View style={styles.v_top2}>
            <Text style={styles.txt_v2}>902343576124</Text>
            <Text style={styles.txt2_v2}>5 August, 2019</Text>
          </View>
          <View style={styles.v_top3}>
            <View style={styles.v_show_hide}>
              <View style={styles.v_v3}>
                <Image
                  style={{ width: 19, height: 10 }}
                  source={icons.instrance}
                />
                <Text style={styles.txt_v3}>Out for Delivery</Text>
              </View>
              <View style={styles.v_v3_2}>
                <Text style={styles.txt_v3_1}>2 Items</Text>
                <Image style={styles.circle} source={icons.circle_gray} />
                <Text style={styles.txt_v3_1}>200,000 LAK</Text>
              </View>
            </View>
          </View>
          <View style={styles.v_top4}>
            <TouchableOpacity style={styles.btn_track}>
              <Image
                source={icons.droppin_orange}
                style={{ width: 10, height: 14.29 }}
              />
              <Text style={styles.txt_v4_1}>Track Order</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                this.props.order_props.navigation.navigate("ScannerOrder")
              }
            >
              <LinearGradient
                style={styles.btn_scan}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ff9100", "#ff3d00"]}
              >
                <Image
                  style={{ width: 16, height: 14 }}
                  source={icons.camera_wite}
                />
                <Text style={styles._txt_ck}>Scan to receive</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.item_cr_3}>
          <View style={styles.v_top1}>
            <Text style={styles.txt_v1}>ORDER NUMBER</Text>
            <Text style={styles.txt_v1}>ORDER DATE</Text>
          </View>
          <View style={styles.v_top2}>
            <Text style={styles.txt_v2}>902343576124</Text>
            <Text style={styles.txt2_v2}>5 August, 2019</Text>
          </View>
          <View style={styles.v_top3}>
            <View style={styles.drivered}>
              <View style={styles.v_txt_dri}>
                <View style={styles.v_drivered_ss}>
                  <Image style={styles.img_yes} source={icons.yes_green} />
                  <Text style={styles.txt_date}>Delivered</Text>
                </View>
                <Text style={styles.txt_date}>16 Aug 19 , 9:47am</Text>
              </View>
              <View style={styles.v_v3_2}>
                <Text style={styles.txt_v3_1}>2 Items</Text>
                <Image style={styles.circle} source={icons.circle_gray} />
                <Text style={styles.txt_v3_1}>200,000 LAK</Text>
              </View>
            </View>
          </View>
          <View style={styles.v_top4}>
            <TouchableOpacity style={styles.btn_track}>
              <Image
                source={icons.droppin_orange}
                style={{ width: 10, height: 14.29 }}
              />
              <Text style={styles.txt_v4_1}>Track Order</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <LinearGradient
                style={styles.btn_scan}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ff9100", "#ff3d00"]}
              >
                <Image
                  style={{ width: 16, height: 14 }}
                  source={icons.camera_wite}
                />
                <Text style={styles._txt_ck}>Scan to receive</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </View> */}
      </View>
    );
  }
}
