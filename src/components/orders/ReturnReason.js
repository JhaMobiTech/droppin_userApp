import React, { Component } from "react";
import { View, Text, Image, StatusBar, TouchableOpacity } from 'react-native';
import { Container, Content, Header, Card } from 'native-base';
import { styles } from '../../styles/returnReasonStyle';
import { icons } from '../../assets/icons/IconsConfig';
import LinearGradient from 'react-native-linear-gradient';

export default class ReturnReason extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectColor: 0
        }
    }
    render() {
        const dataReason = ['My order had missing', 'Incorrect items ', 'My order was damaged ', 'I had an issue with courier '];
        const { selectColor } = this.state;
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
                        <Text style={styles.txt_status_header}>Select an issue</Text>
                    </View>
                    <View style={{ paddingHorizontal: 20, marginTop: 20 }}>
                        {dataReason.map((item, key) => {
                            return (

                                <Card style={{ marginBottom: 10, borderRadius: 8 }} key={key}>
                                    <TouchableOpacity style={styles.card_1} onPress={() => this.setState({ selectColor: key })}>
                                        <Text style={[styles.txt_status_item, { color: selectColor == key ? '#FE6336' : '#000' }]}>{item}</Text>
                                        <Image style={{ width: 19, height: 19, tintColor: selectColor == key ? '#FE6336' : '#fff' }}
                                            source={icons.circle_ok_orange} />
                                    </TouchableOpacity>
                                </Card>

                            )
                        })}
                    </View>
                </Content>
                <View style={styles.v_bottom}>
                    <TouchableOpacity style={{ width: '100%' }}>
                        <LinearGradient
                            start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                            colors={['#FD843A', '#FF5535']}
                            style={styles.btn_next}>
                            <Text style={styles.txt_next}>Next</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Container>
        )
    }
}