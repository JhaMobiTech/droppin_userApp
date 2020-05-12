import React, { Component } from 'react';
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Header } from 'native-base';
import { icons } from '../../assets/icons/IconsConfig';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from '../../styles/cashConfirmStyle';

export default class CashConfirm extends Component {
    render() {
        return (
            <Container>
                <Header style={styles.header_}>
                    <Text style={styles.txt_header}>Order </Text>
                    <Text style={styles.txt_header}>#1630</Text>

                </Header>
                <Content style={{ flex: 1, backgroundColor: '#fff' }}>
                    <StatusBar backgroundColor='#FF4B34' barStyle='light-content' />
                    <View style={styles.v_date}>
                        <View style={styles.v_ofdate}>
                            <Image
                                style={styles.img_line}
                                source={icons.line_bug} />
                        </View>
                        <View style={styles.v_txt_date}>
                            <Text style={styles.dat_ta}>Date:</Text>
                            <Text style={styles.dat_ta}>Jul 27, 2019</Text>
                        </View>
                        <View style={styles.v_total}>
                            <Text style={styles.txt_total}>Total Payment:</Text>
                            <Text style={styles.total_price}>200,000 LAK</Text>
                        </View>
                    </View>
                    <Image
                        style={styles.pic_line}
                        source={icons.line_bel2} />
                    <View style={styles.view_icon}>
                        <View style={styles.icon_view}>
                            <Image
                                style={{ width: 80, height: 80 }}
                                source={icons.tick_blue} />
                        </View>
                        <View style={styles.v_big}>
                            <Text style={styles.txt_big}>Waiting for Payment</Text>
                            <Text style={styles.txt_plete}>Please have this amount ready on delivery day</Text>
                        </View>
                        <View style={styles.v_price}>
                            <Text style={styles.txt_price}>200,000 LAK</Text>
                        </View>
                        <View style={styles.v_dele}>
                            <Text style={{ fontSize: 14 }}>Deliver to:</Text>
                            <Text style={styles.v_est}>79/290 Setthasiri Cheangwattana Pakkret 11120</Text>
                        </View>
                        <View style={styles.txt_est}>
                            <Image
                                style={styles.img_line}
                                source={icons.line_bug_wite} />
                        </View>
                    </View>
                    <View style={styles.v_del_}>
                        <View style={styles.v_dell}>
                            <Text style={{ fontSize: 14 }}>Delivery Dates</Text>
                        </View>
                        <View style={styles.v_edt_}>
                            <Text style={{ fontSize: 22 }}>Est. 30 Oct - 31 Oct</Text>
                        </View>
                    </View>
                    <View style={styles.v_lin_bug_w}>
                        <Image
                            style={styles.img_line}
                            source={icons.line_bug_wite}
                        />
                    </View>
                    <View style={styles.v_bottom}>
                        <View style={styles.bottpm}>
                            <View>
                                <Text style={styles.txt_bt}>For more details , track your delivery</Text>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={styles.txt_st}>status under </Text>
                                <Text style={{ fontSize: 13 }}>My Account > My Order</Text>
                            </View>
                        </View>
                        <View style={styles.v_btn}>
                            <TouchableOpacity style={styles.btn_}>
                                <Text style={styles.txt_btn}>View Order</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
                <View style={styles.v_bt_ct}>
                    <TouchableOpacity>
                        <LinearGradient
                            style={styles.gardien}
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={['#FD7238', '#FF4834']}>
                            <Text style={styles.txt_gadien}>Done</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}
