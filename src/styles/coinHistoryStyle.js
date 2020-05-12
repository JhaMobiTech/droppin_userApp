import { StyleSheet, Dimensions } from 'react-native';
import { fonts } from '../assets/fonts/fontConfig';

export const styles = StyleSheet.create({
    _header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff'
    },
    back: {
        width: 18,
        height: 18
    },
    btn_back: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        backgroundColor: '#fff',
        width: '100%'
    },
    txt_status_header: {
        color: '#4A4A4A',
        fontSize: 22,
        fontFamily: fonts.Avenir.Heavy
    },
    v_headerCoin: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        paddingRight: 20
    },
    txt_coin: {
        color: '#4A4A4A',
        fontSize: 20,
        fontFamily: fonts.Avenir.Roman
    },
    txt_qtyCoin_head: {
        color: '#F5A722',
        fontSize: 40,
        fontFamily: fonts.Poppins.Medium
    },
    v_qtyCoin: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -5
    },
    v_history: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20
    },
    txt_history: {
        color: '#000',
        fontSize: 17,
        fontFamily: fonts.Avenir.Heavy
    },
    btn_show_detail: {
        width: 159,
        height: 35,
        borderRadius: 4,
        borderWidth: 1,
        borderColor: '#FE6336',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    txt_show_de: {
        color: '#FE6336',
        fontFamily: fonts.Poppins.Regular,
        fontSize: 14
    },
    line: {
        width: '100%',
        height: 0.5,
        backgroundColor: '#eeeeee',
        marginTop: 15
    },
    v_pay_coin: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 20

    },
    v_contentRow: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 20,
        marginBottom: 20
    },
    txt_coinOrder: {
        color: '#000',
        fontSize: 13,
        fontFamily: fonts.Avenir.Medium
    },
    txt_coinOrder_2: {
        color: '#9e9e9e',
        fontSize: 12,
        fontFamily: fonts.Avenir.Medium
    },
    txt_qtyCoin: {
        color: '#06C358',
        fontSize: 20,
        fontFamily: fonts.Avenir.Medium
    },
    txt_qtyCoin_del: {
        color: 'red',
        fontSize: 20,
        fontFamily: fonts.Avenir.Medium
    },
    v_qty_Coin: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    btn_shopWithCoin: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt_shopWithCoin: {
        color: '#fff',
        fontSize: 16,
        fontFamily: fonts.Avenir.Heavy
    },
    v_btn_click: {
        width: '100%',
        marginBottom: 20,
        paddingHorizontal: 27,
        justifyContent: 'center'
    },
})