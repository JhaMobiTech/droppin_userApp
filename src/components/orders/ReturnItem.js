import React, { Component } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Tabs, Tab, FooterTab, Item } from 'native-base';
import { styles } from '../../styles/returnItemStyle';
import { icons } from '../../assets/icons/IconsConfig';
import LinearGradient from 'react-native-linear-gradient';

export default class ReturnItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_hide: false,
            show_hide_all: false
        }
    }
    render() {
        const data = ['a', 'b'];
        const { show_hide, show_hide_all } = this.state;
        return (
            <Container>
                <Header style={styles._header}>
                    <TouchableOpacity style={styles.btn_back}>
                        <Image
                            style={styles.back}
                            source={icons.back_dark} />
                    </TouchableOpacity>
                    <Text style={styles.txt_status_header}>Order #1630</Text>
                    <View style={{ width: 30 }}></View>
                </Header>
                <Content style={styles.content}>
                    <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                    <View style={styles.v_txt_header}>
                        <Text style={styles.txt_status_header}>Select item to return</Text>
                    </View>

                    {data.map((item, key) => {
                        return (
                            <View style={styles.v_item} key={key}>
                                {show_hide == false ?
                                    <TouchableOpacity style={styles.select_imtem} onPress={() => this.setState({ show_hide: true })}>
                                    </TouchableOpacity> :
                                    <TouchableOpacity onPress={() => this.setState({ show_hide: false })}>
                                        <Image style={{ width: 19, height: 19 }}
                                            source={icons.select} />
                                    </TouchableOpacity>}
                                <View style={styles.v_img}>
                                    <Image
                                        style={{ width: 71, height: 78, borderRadius: 3.62 }}
                                        source={{ uri: "https://img1.cfcdn.club/fc/d0/fcc70398e894af8e1d892fb79164ebd0_350x350.jpg" }} />
                                </View>
                                <View style={{ flex: 1, marginLeft: 15 }}>
                                    <View style={styles.v_nameItem}>
                                        <Text style={styles.txt_nameItem}>Nike Air max</Text>
                                    </View>
                                    <View style={styles.v_price}>
                                        <Text style={styles.txt_price}>200,000 LAK</Text>
                                    </View>
                                    <View style={styles.v_qty}>
                                        <Text style={styles.txt_qty}>x1</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </Content>
                <View style={styles.v_bottom}>
                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                        {show_hide_all == false ?
                            <TouchableOpacity style={styles.select_imtem} onPress={() => this.setState({ show_hide_all: true })}>
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => this.setState({ show_hide_all: false })}>
                                <Image style={{ width: 19, height: 19 }}
                                    source={icons.select} />
                            </TouchableOpacity>}
                        <Text style={styles.txt_selectAll}>Select All (2)</Text>
                    </View>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <LinearGradient
                                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                                colors={['#FD843A', '#FF5535']}
                                style={styles.btn_return}>
                                <Text style={styles.txt_return}>Return</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </View>
            </Container>
        )
    }
}