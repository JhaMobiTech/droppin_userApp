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
    select_imtem: {
        width: 19,
        height: 19,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#FE6336'
    },
    v_txt_header: {
        width: '100%',
        alignItems: 'center'
    },
    v_item: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
        paddingHorizontal: 20
    },
    v_img: {
        width: 71,
        height: 78,
        borderRadius: 3.62,
        backgroundColor: '#B9B5B5',
        marginLeft: 15
    },
    txt_nameItem: {
        color: '#4A4A4A',
        fontSize: 14.24,
        fontFamily: fonts.Avenir.Medium
    },
    txt_price: {
        color: '#FE6336',
        fontSize: 11,
        fontFamily: fonts.Avenir.Heavy
    },
    v_nameItem: { 
        width: '100%', 
        height: 25, 
        justifyContent: 'flex-end' 
    },
    v_price: { 
        width: '100%', 
        height: 20, 
        justifyContent: 'center' 
    },
    txt_qty: {
        color: '#000',
        fontFamily: fonts.Avenir.Heavy,
        fontSize: 16
    },
    v_qty: { 
        width: '100%', 
        height: 32, 
        justifyContent: 'center'
    },
    v_bottom: {
        width: '100%',
        height: 63,
        flexDirection: 'row',
        borderTopWidth: 5,
        borderTopColor: '#fafafa',
        marginBottom: 20,
        paddingHorizontal: 20
    },
    txt_selectAll: {
        marginLeft: 15, 
        color: '#4A4A4A',
        fontSize: 13,
        fontFamily: fonts.Avenir.Medium
    },
    btn_return: {
        width: 118, 
        height: 44, 
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txt_return: {
        color: '#fff',
        fontSize: 15,
        fontFamily: fonts.Poppins.Bold
    }
})