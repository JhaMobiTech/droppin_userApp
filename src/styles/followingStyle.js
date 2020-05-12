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
        width: '100%',
        paddingTop: 25
    },
    txt_status_header: {
        color: '#4A4A4A',
        fontSize: 22,
        fontFamily: fonts.Avenir.Heavy
    },
    v_item: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 25,
        alignItems: 'center',
        marginBottom: 30
    },
    v_get_item: {
        width: 82,
        height: 77,
        justifyContent: 'center',
        alignItems: 'center'
    },
  
    btn_collect: {
        width: 81,
        height: 32,
        borderRadius: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },

    txt_collect: {
        color: '#fff',
        fontSize: 12,
        fontFamily: fonts.Poppins.Bold
    },
    v_detail: {
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20
    },
    txt_nameBrand: {
        color: '#4C475A',
        fontSize: 18,
        fontFamily: fonts.Avenir.Medium
    },
    v_nameBrand: {
        width: '100%',
        justifyContent: 'center',
        marginTop: 5
    },
    img: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    },
})