import React, { Component } from "react";
import {View, Text, StatusBar, Image, TouchableOpacity, TextInput} from "react-native";
import {Container, Content, Header, Card} from 'native-base';
import {styles} from '../../styles/paywithotherStyle';
import {icons} from '../../assets/icons/IconsConfig';
import LinearGradient from 'react-native-linear-gradient';

var NumberFormat = require('react-number-format');

export default class PayWithOrtherCard extends Component {
  constructor(prop){
    super(prop);
    this.state = {
      show_hide_save: false,
    }
  }
  
  render() {
    const {show_hide_save} = this.state;
    return (
      <Container>
        <Header style={styles.header}>
          <StatusBar backgroundColor='#fff' barStyle='dark-content'/>
          <TouchableOpacity activeOpacity={1} style={styles._btn_back}>
            <Image style={{width: 18, height: 18}} source={icons.back_dark}/>
          </TouchableOpacity>
          <Text style={styles._txt_header}>Pay with other card</Text>
          <View style={{width: 30}}></View>
        </Header>
        <Content style={styles._content}>
            <View style={styles.v_to_card}>
                <Card style={styles.card_}>
                    <View style={styles.v_logo_visa}>
                        <Image 
                        style={styles.visa}
                        source={icons.master_logo}/>
                    </View>
                    <View style={styles.v_number}>
                        <View style={styles.name_card}>
                            <Text style={styles.txt_name}>Card Number</Text>
                        </View>
                        <View style={styles.v_format}>
                            <NumberFormat
                                value={4233444444444418}
                                displayType={'text'}
                                mask={' _ '}
                                format="#   #   #   #      #   #   #   #      #   #   #   #       #   #   #   #"
                                onValueChange={text => this.setState({num2: text})}
                                renderText={text => (
                                <Text style={styles.format_txt}>{text}</Text>
                                )}
                            />
                        </View>
                    </View>
                    <View style={styles.name_for_c}>
                        <View style={styles.of_name}>
                            <Text style={styles.txt_holder}>Card Holder</Text>
                            <Text style={styles.txt_mm}>CHONNISA KEDSARINNIRAT</Text>
                            <View style={styles.line_}></View>
                        </View>
                        <View style={styles.v_ww}>
                            <Text style={styles.txt_ex}>Expiry</Text>
                            <Text style={styles.txt_mmyy}>MM/YY</Text>
                            <View style={styles.line_}></View>
                        </View>
                        <View style={styles.cvv}>
                            <Text style={styles.txt_cvv}>CVV</Text>
                            <Text></Text>
                            <View style={styles.line_}></View>
                        </View>
                    </View>
                </Card>
            </View>
            <View style={{width: '100%', marginTop: 26, flexDirection: 'row', paddingHorizontal: 21}}>
                {show_hide_save == false ? 
                <TouchableOpacity 
                  activeOpacity={1} 
                  style={styles._cicle_} 
                  onPress={()=> this.setState({show_hide_save: true})}>
                </TouchableOpacity> :
                <TouchableOpacity activeOpacity={1} style={styles._cicle_img} onPress={()=> this.setState({show_hide_save: false})}>
                    <View style={styles._circle_center}>
                      <Image 
                      style={{width: 17, height: 17}}
                      source={icons.icon_ok_wite}/>
                    </View>
                </TouchableOpacity>}
                <Text style={{marginLeft: 15, color: '#212121', fontSize: 13.45}}>Save this card for instant transaction in future</Text>
            </View>
        </Content>
        <View style={styles.view_pay}>
        <TouchableOpacity activeOpacity={1}>
          <LinearGradient 
              style={styles._v_gradeint}
              start={{x: 0, y: 0}} end={{x: 1, y: 0}} 
              colors={['#ff9100', '#ff3d00']}>
              <Text style={styles._txt_gradeint}>Pay 400,000 LAK</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </Container>
    );
  }
}
