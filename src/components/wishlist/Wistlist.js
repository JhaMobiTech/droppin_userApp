import React, { Component } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity, TextInput } from 'react-native';
import { Container, Content, Header, Card, Item } from 'native-base';
import { styles } from '../../styles/wistlistStyle';
import { icons } from '../../assets/icons/IconsConfig';
import LinearGradient from 'react-native-linear-gradient';

export default class Wistlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onlyStock_hide: 0,
        }
    }
    render() {
        const dataItem = [
            {
                title: "J By Jasper Conran Spot Print Wrap Dress Bright Blue",
                url: "http://www.shopking.com.bd/upload/front/product_image/54-63.jpg",
                stock: "Only 3 left in stock"
            },
            {
                title: "J By Jasper Conran Spot Print Wrap Dress Bright Blue",
                url: "https://www.renesas.com/img/featured/grid/wireless-charging-grid.jpg",
                stock: "Only 5 left in stock"
            },
            {
                title: "Men's T-Race Digital Quartz Watch T048.417.37.057.00",
                url: "https://media.the-digital-picture.com/Images/Review/Canon-EOS-5D-Mark-IV.jpg",
                stock: "Only 2 left in stock"
            },
            {
                title: "Tropical Print Casual Tee Black",
                url: "https://static.independent.co.uk/s3fs-public/thumbnails/image/2019/11/06/16/best-womens-ski-snowboard-jackets-2019-indybest-0.jpg?w968h681",
                stock: "Only 6 left in stock"
            }
        ];
        const dataUnlike = [
            {
                title: "Boys Feather Print ShirtWhite",
                url: "https://valetmag.com/gr/daily/personal_shopper/sales_deals/llbean_mens_sherpa_lined_waxed_cotton_jacket_sale_111119/art-affordable_mens_waxed_canvas_winter_jacket.jpg"
            },
            {
                title: "Lacoste Carnaby EVO 118 3 SPW Lace-Up Low Top Sneaker",
                url: "https://media.endclothing.com/media/f_auto,q_auto:eco,w_400,h_400/prodmedia/media/catalog/product//1/4/14-11-2019_fuckingawesome_sponsoredfarodeojacket_black_fa0434-blk_tc_m3.jpg"
            }
        ];
        return (
            <Container>
                <Header style={styles._header} noShadow={true}>
                    <TouchableOpacity style={styles.btn_back}>
                        <Image
                            style={styles.back}
                            source={icons.back_dark} />
                    </TouchableOpacity>
                    <Text style={styles.txt_status_header}>Wishlist</Text>
                    <View style={{ width: 30 }}></View>
                </Header>
                <View style={styles.line}></View>
                <Content style={styles.content} showsVerticalScrollIndicator={false}>
                    <StatusBar backgroundColor='#fff' barStyle='dark-content' />
                    <View style={styles.v_removeItem}>
                        <Text style={styles.txt_qty_item}>4 items</Text>
                        <TouchableOpacity style={styles.btn_remove_all}>
                            <Text style={styles.txt_remove}>Remove all</Text>
                            <Image
                                source={icons.circle_close_orange}
                                style={{ width: 11, height: 11, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                    {dataItem.map((item, key) => {
                        return (
                            <View style={styles.v_item_} key={key}>
                                <View style={styles.v_img_heart}>
                                    <Image
                                        source={{ uri: item.url }}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <View style={styles.v_btn_heart}>
                                        <TouchableOpacity>
                                            <Image
                                                style={{ width: 21, height: 21 }}
                                                source={icons.circle_heart_wite} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.V_itemDetail}>
                                    <View style={styles.v_nameImg}>
                                        <Text style={styles.txt_nameItem}>{item.title}</Text>
                                    </View>
                                    <View style={styles.v_price_}>
                                        <Text style={styles.txt_price}>100,000 LAK</Text>
                                    </View>
                                    <View style={styles.v_btn_status}>
                                        <TouchableOpacity style={styles.btn_addBag}>
                                            <Text style={styles.txt_addBag}>+ ADD TO BAG</Text>
                                        </TouchableOpacity>
                                        <Text style={styles.txt_date}>{item.stock}</Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                    <View style={styles.v_removeUnlike}>
                        <Text style={styles.txt_unlike}>Currently out of stock</Text>
                        <TouchableOpacity style={styles.btn_remove_all}>
                            <Text style={styles.txt_remove}>Remove all</Text>
                            <Image
                                source={icons.circle_close_orange}
                                style={{ width: 11, height: 11, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>
                    {dataUnlike.map((item, key) => {
                        return (
                            <View style={styles.v_item_} key={key}>
                                <View style={styles.v_img_heart}>
                                    <Image
                                        source={{ uri: item.url }}
                                        style={{ width: '100%', height: '100%' }}
                                    />
                                    <View style={styles.v_btn_heart}>
                                        <TouchableOpacity>
                                            <Image
                                                style={{ width: 21, height: 21 }}
                                                source={icons.circle_heart_dark} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={styles.V_itemDetail}>
                                    <View style={styles.v_nameImg}>
                                        <Text style={styles.txt_nameItem}>{item.title}</Text>
                                    </View>
                                    <View style={styles.v_price_}>
                                        <Text style={styles.txt_price_2}>$20</Text>
                                    </View>
                                    <View style={styles.v_btn_status}>
                                        <TouchableOpacity style={styles.btn_notify}>
                                            <Image 
                                            source={icons.notify_dark}
                                            style={{width: 13.8, height: 11.7, marginRight: 5}}/>
                                            <Text style={styles.txt_notify}>NOTIFY ME</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })}

                </Content>
            </Container>
        )
    }
}