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
        backgroundColor: '#F0F0F0'
    },
    _btn_back: {
        width: 30, 
        height: 30, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    _v_item_pin: {
        width: '100%', 
        height: 104, 
        flexDirection: 'row', 
        backgroundColor: '#fff', 
        marginTop: 3
    },
    _v_pin: {
        width: 65, 
        height: '100%', 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    _icon_pin: {
        width: 26.67, 
        height: 30
    },
    _v_btn_change: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        paddingRight: 20
    },
    _txt_Dvl: {
        color: '#293340', 
        fontSize: 15, 
        fontWeight: 'normal'
    },
    _txt_change: {
        color: '#FE6336', 
        fontSize: 13
    },
    _txt_detail: {
        color: '#293340', 
        fontSize: 15
    },
    _txt_price: {
        color: '#000', 
        fontSize: 14,
        fontFamily: fonts.Poppins.Bold
    },
    _v_item_order: {
        width: '100%', 
        height: 146, 
        backgroundColor: '#fff', 
        marginTop: 11,
        marginBottom: 11
    },
    _v_pic: {
        width: '100%', 
        height: 49, 
        flexDirection: 'row', 
        alignItems: 'center',
        paddingLeft: 10
    },
    _v_pic_: {
        width: 44, 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    _v_qty: {
        flex: 1, 
        justifyContent: 'center'
    },
    _txt_qty: {
        color: '#293340', 
        fontSize: 15
    },
    _v_item_pic: {
        width: '100%', 
        height: 78, 
        flexDirection: 'row', 
        paddingLeft: 15
    },
    pic_style: {
        width: 71, 
        height: '100%', 
        borderRadius: 3.6
    },
    detail: {
        flex: 1, 
        flexDirection: 'column',
    },
    _detail: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        paddingLeft: 17, 
        paddingRight: 23
    },
    txt_n_q: {
        fontSize: 16
    },
    v_size_n: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingLeft: 17
    },
    txt_size_n: {
        color: '#485465', 
        fontSize: 14
    },
    circle_: {
        width: 7, 
        height: 7, 
        marginLeft: 7, 
        marginRight: 7
    },
    v_price: {
        flex: 1, 
        paddingLeft: 17, 
        justifyContent: 'center'
    },
    _txt_option: {
        fontSize: 15, 
        color: '#1A1A1A',
        fontFamily: fonts.Poppins.Bold
    },
    _v_item_op: {
        width: '100%', 
        height: 112, 
        backgroundColor: '#fff'
    },
    _v_op: {
        width: '100%', 
        height: 47, 
        paddingHorizontal: 18, 
        justifyContent: 'center',
        paddingTop: 8
    },
    _txt_apply: {
        color: '#FE6336', 
        fontSize: 13,
        fontFamily: fonts.Poppins.Bold
    },
    input_code: {
        flex: 1,
        fontSize: 14, 
        marginLeft: -5,
        fontFamily: fonts.Poppins.Medium,
    },
    _v_input_app: {
        width: '100%', 
        height: 46, 
        borderColor: '#B7B7B7', 
        borderRadius: 6, 
        borderWidth: 0.5, 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingRight: 5
    },
    v_icon_pro: {
        width: 50, 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    btn_apply: {
        width: 50, 
        height: '100%', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    _v_bottom: {
        width: '100%', 
        height: 155, 
        backgroundColor: '#fff', 
        flexDirection: 'column'
    },
    _v_btn_play: {
        width: '100%', 
        height: 68, 
        paddingHorizontal: 20
    },
    _v_gradeint: {
        width: '100%', 
        height: 50, 
        borderRadius: 6, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    _txt_gradeint: {
        color: '#fff', 
        fontSize: 18
    },
    _v_total: {
        flex: 1, 
        flexDirection: 'row', 
        alignItems: 'flex-end', 
        justifyContent: 'space-between', 
        paddingLeft: 22, 
        paddingBottom: 18, 
        paddingRight: 30
    },
    _txt_total: {
        color: '#293340', 
        fontSize: 16
    },
    _txt_price_bt: {
        color: '#FE6336', 
        fontSize: 20
    },
});