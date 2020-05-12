import {StyleSheet, Dimensions} from 'react-native';
import {fonts} from '../assets/fonts/fontConfig'
const {width, height}=Dimensions.get('screen')
export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        alignItems: 'center',
        //marginTop: 20,
        width: '100%',
        justifyContent: 'space-between'
    },
    _txt_header: {
        fontSize: 18,
        fontFamily: fonts.Poppins.Regular,
        color: '#282C37'
    },
    _content: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 5,
    },
    _btn_back: {
        width: 30, 
        height: 30, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    _v_number: {
        backgroundColor: '#fff',
        width: '100%', 
        height: 52, 
        borderBottomWidth: 6, 
        borderBottomColor: '#f5f5f5',
        borderLeftWidth: 2, 
        borderLeftColor: '#f5f5f5',
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13, 
        borderRightWidth: 2, 
        borderRightColor: '#f5f5f5',
        flexDirection: 'row'
    },
    _cicle_: {
        width: 18,
        height: 18,
        borderRadius: 10,
        borderWidth: 1.5,
        borderColor: '#757F7E'
    },
    _cicle_img: {
        width: 18,
        height: 18,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FE6336',
        borderWidth: 1.5
        
    },
    _v_visa: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingRight: 15
    },
    _v_selet: {
        width: 44, 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    _circle_center: {
        width: 10, 
        height: 10, 
        borderRadius: 10, 
        backgroundColor: '#FE6336'
    },
    v_card_select: {
        width: '100%', 
        height: 40, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingHorizontal: 22
    },
    txt_pay_: {
        color: '#FE6336', 
        fontSize: 13
    },
    txt_total_: {
        color: '#1E2029', 
        fontSize: 18, 
        marginBottom: 10,
        fontFamily: fonts.Poppins.Regular,
        marginTop: 5
    },
    txt_amount: {
        fontSize: 20, fontFamily: fonts.Poppins.Medium
    },
    v_title: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    v_item_card_v: {
        width: '100%', 
        height: 127
    },
    item: {
        paddingHorizontal: 10, 
        width: '100%'
    },
    img_case: {
        width: 29.95, 
        height: 17.95, 
        marginRight: 12
    },
    txt_case: {
        color: '#212121', 
        fontSize: 15
    },
    v_case: {
        width: '100%', 
        height: 40, 
        justifyContent: 'center', 
        paddingLeft: 20
    },
    v_icon_name: {
        flexDirection: 'row', 
        flex: 1, 
        alignItems: 'center'
    },
    tranfer: {
        width: 24, 
        height: 24, 
        marginRight: 15
    },
    _v_number_end: {
        backgroundColor: '#fff',
        width: '100%', 
        height: 52, 
        borderBottomWidth: 6, 
        borderBottomColor: '#f5f5f5',
        borderLeftWidth: 2, 
        borderLeftColor: '#f5f5f5',
        borderBottomLeftRadius: 13,
        borderBottomRightRadius: 13, 
        borderRightWidth: 2, 
        borderRightColor: '#f5f5f5',
        flexDirection: 'row',
        marginTop: 20
    },
    _txt_gradeint: {
        color: '#fff', 
        fontSize: 18
    },
    _v_gradeint: {
        width: '100%', 
        height: 50, 
        borderRadius: 6, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    view_pay: {
        width: '100%', 
        height: 75, 
        paddingHorizontal: 20
    },
});