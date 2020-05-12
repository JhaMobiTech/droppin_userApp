import { StyleSheet } from 'react-native';
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
        flex: 1
    },
    txt_status_header: {
        color: '#4A4A4A',
        fontSize: 22,
        fontFamily: fonts.Avenir.Heavy
    },
    v_txt_header: {
        width: '100%',
        alignItems: 'center'
    },
    v_bottom: {
        width: '100%',
        height: 63,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 29,
    },
    btn_next: {
        width: '100%',
        height: 50,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txt_next: {
        color: '#fff',
        fontSize: 16,
        fontFamily: fonts.Avenir.Heavy
    },
    txt_mod: {
        color: '#4A4A4A',
        fontSize: 17,
        fontFamily: fonts.Avenir.Heavy
    },
    txt_detail: {
        color: '#4A4A4A',
        fontFamily: fonts.Avenir.Black,
        fontSize: 14
    },
    v_item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        paddingHorizontal: 12
    },
    v_img: {
        width: 71,
        height: 78,
        borderRadius: 3.62,
        backgroundColor: '#B9B5B5',
        marginLeft: 15
    },
    v_nameItem: {
        width: '100%',
        height: 25,
        justifyContent: 'flex-end'
    },
    txt_nameItem: {
        color: '#4A4A4A',
        fontSize: 14.24,
        fontFamily: fonts.Avenir.Medium
    },
    v_price: {
        width: '100%',
        height: 20,
        justifyContent: 'center'
    },
    txt_price: {
        color: '#FE6336',
        fontSize: 11,
        fontFamily: fonts.Avenir.Heavy
    },
    v_qty: {
        width: '100%',
        height: 32,
        justifyContent: 'center'
    },
    txt_qty: {
        color: '#000',
        fontFamily: fonts.Avenir.Heavy,
        fontSize: 16
    },
    txt_upload: {
        color: '#000',
        fontSize: 18,
        fontFamily: fonts.Avenir.Medium
    },
    add_img: {
        width: 98,
        height: 98,
        marginRight: 15,
        borderRadius: 8
    },
    v_add_img: {
        width: '100%',
        paddingHorizontal: 27,
        marginTop: 20,
        flexDirection: 'row'
    },
    v_stay_upload: {
        width: '100%',
        paddingHorizontal: 27,
        marginTop: 35
    },
    v_txt_myorder: {
        width: '100%',
        paddingLeft: 27,
        marginTop: 20
    },
    v_detail_my: {
        width: '100%',
        paddingHorizontal: 27,
        marginTop: 10
    },
})