import React, { Component } from "react";
import { styles } from "../../styles/myOrderStyle";
import {
  TouchableOpacity,
  View,
  Text,
  StatusBar,
  Image,
  TextInput,
  ScrollView
} from "react-native";
import { icons } from "../../assets/icons/IconsConfig";
import LinearGradient from "react-native-linear-gradient";
import Modal from "react-native-modalbox";

export default class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      comment: "",
      star: -1
    };
  }
  toggleModal = () => {
    this.refs.rating.open();
  };

  render() {
    return (
      <View style={styles.body_current}>
        {/* <View style={styles.item_ht_1}>
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
            <TouchableOpacity
              style={styles.btn_review}
              onPress={() => this.toggleModal()}
            >
              <Image
                source={icons.star_orange}
                style={{ width: 12.98, height: 12.42 }}
              />
              <Text style={styles.txt_v4_1}>Review</Text>
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
            <Text style={styles.recode}>You Rated 5 Stars</Text>
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
        {this.modalReview()} */}
      </View>
    );
  }
  modalReview() {
    const starReview = ["a", "b", "c", "d", "e"];
    return (
      <Modal
        style={styles.modal_container}
        coverScreen={true}
        ref={"rating"}
        backdropOpacity={0.6}
        onBackdropPress={this.toggleModal}
      >
        <View style={styles.viewModal_1}>
          <View style={styles.v_imgHeader}>
            <View style={{ marginTop: 5, alignItems: "center" }}>
              <Text style={styles.txt_headModal}>Review</Text>
              <Text style={styles.txt_numberOrder}>Order#323232</Text>
            </View>
          </View>
          {/* <ScrollView> */}
          <View style={styles.v_star}>
            {starReview.map((item, key) => {
              return (
                <TouchableOpacity
                  key={key}
                  onPress={() => this.setState({ star: key })}
                >
                  <Image
                    style={{
                      width: 40,
                      height: 40,
                      tintColor: this.state.star >= key ? "orange" : "#e0e0e0"
                    }}
                    source={icons.star_gray_64}
                  />
                </TouchableOpacity>
              );
            })}
          </View>
          <View style={styles.v_selectStar}>
            <Text style={styles.txt_seclectStar}>You rare </Text>
            <Text style={styles.txt_seclectStar}>
              {this.state.star < 0 ? 0 : this.state.star + 1}
            </Text>
            <Text style={styles.txt_seclectStar}> Stars</Text>
          </View>
          <View style={{ width: "100%", height: 122, paddingHorizontal: 25 }}>
            <TextInput
              multiline={true}
              textAlignVertical="top"
              placeholder="Comment"
              placeholderTextColor="#707070"
              value={this.state.comment}
              style={styles.inPut_style}
              onChangeText={txt => this.setState({ comment: txt })}
              maxLength={500}
            />
          </View>
          <View style={styles.v_txt_selectPhoto}>
            <Text style={styles.txt_upload_photo}>Upload Photos</Text>
          </View>
          <View style={styles.v_select_img}>
            <TouchableOpacity>
              <Image style={styles.add_img_} source={icons.add_img_dark} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.add_img_} source={icons.add_img_dark} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.add_img_} source={icons.add_img_dark} />
            </TouchableOpacity>
          </View>
          <View style={styles.v_btn_done}>
            <TouchableOpacity>
              <LinearGradient
                style={styles.btn_Done}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                colors={["#ff9100", "#ff3d00"]}
              >
                <Text style={styles.txt_Done}>Done</Text>
              </LinearGradient>
            </TouchableOpacity>
          </View>
          {/* </ScrollView> */}
        </View>
      </Modal>
    );
  }
}
