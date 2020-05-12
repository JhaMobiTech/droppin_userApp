import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity, ListView } from 'react-native';
import { Container, Content, Header } from 'native-base';
import { icons } from '../../assets/icons/IconsConfig';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../../styles/processingStyle';
import StepIndicator from 'react-native-step-indicator';




export default class ProccessingOrder extends Component {
  constructor() {
    super();

  }
  render() {
    const data = ['a', 'b'];
    return (
      <Container style={{backgroundColor: '#F2F2F2'}}>
        <View style={{ width: '100%', height: 90 }}>
          <LinearGradient
            style={styles.header_}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#FD7838", "#FE4C34"]}
          >
            <TouchableOpacity style={styles.btn_close_}>
              <Image
                source={icons.close_wite}
                style={styles.btn_close} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginLeft: -23 }}>
              <Text style={styles.txt_header}>Order </Text>
              <Text style={styles.txt_header}>#1630</Text>
            </View>
            <View></View>
          </LinearGradient>
          <View style={styles.v_ofdate}>
            <Image
              style={styles.img_line}
              source={icons.line_b} />
          </View>
        </View>

        <View style={{ width: '100%' }}>
          <LinearGradient
            style={styles.v_date}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            colors={["#FD7838", "#FE4C34"]}
          >
            <View style={styles.v_txt_date}>
              <Text style={styles.dat_ta}>Date:</Text>
              <Text style={styles.dat_ta}>Jul 27, 2019</Text>
            </View>
            <View style={styles.v_total}>
              <Text style={styles.txt_total}>Total Payment:</Text>
              <Text style={styles.total_price}>200,000 LAK</Text>
            </View>
          </LinearGradient>
        </View>
        <Image
          style={styles.pic_line}
          source={icons.line_an}
        />

        <View style={styles.itemTracking}>
          <View style={styles.v_tracking}>
            <Text style={styles.txt_itemTrack}>Order Tracking</Text>
          </View>
          <View style={styles.v_tracking_2}>
            <Text style={styles.txt_itemTrack_2}>TRACKING NUMBER:</Text>
          </View>
          <View style={styles.v_number}>
            <Text style={styles.txt_number}>902343576124</Text>
          </View>
          <View style={{ flex: 1 }}>

          </View>
        </View>
        <Content style={styles.content} showsVerticalScrollIndicator={false}>
          <StatusBar
            barStyle='light-content'
            translucent={true}
            backgroundColor="transparent"
          />
          <View style={styles.v_item_header}>
            <View style={styles.v_itemHead}>
              <Text style={styles.txt_item}>2 Items</Text>
            </View>
            {data.map((item, key) => {
              return (
                <View style={styles.v_itemBody} key={key}>
                  <View style={styles.body_item}>
                    <Image
                      style={{ flex: 1, borderRadius: 4 }}
                      source={{ uri: "https://www.tmlewin.co.uk/on/demandware.static/-/Sites-tmluk-Library/default/dw6589927a/images/home/carousel/five-for-offer__homepage--carousel-mobile.jpg" }} />
                  </View>
                  <View style={{ flex: 1, marginLeft: 15 }}>
                    <View style={styles.v_total}>
                      <Text style={styles.txt_nameIcon}>Nike Air max</Text>
                      <Text style={styles.txt_nameIcon}>x 1</Text>
                    </View>
                    <View style={styles.v_body_item}>
                      <Text style={styles.txt_size}>6 UK</Text>
                      <Image
                        style={styles.v_iconcircle}
                        source={icons.circle_gray}
                      />
                      <Text style={styles.txt_size}>Black</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={styles.txt_price}>200,000 LAK</Text>
                    </View>
                  </View>
                </View>
              )
            })}

          </View>
        </Content>
      </Container>
    )
  }
}
