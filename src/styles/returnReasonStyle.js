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
    card_1: { 
        width: '100%', 
        height: 75, 
        borderRadius: 8, 
        flexDirection: 'row', 
        alignItems: 'center',
        paddingLeft: 27,
        paddingRight: 15,
        justifyContent: 'space-between',
        
    },
    select_imtem: {
        width: 19,
        height: 19,
        borderWidth: 2,
        borderRadius: 20,
        borderColor: '#FE6336'
    },
    txt_status_item: {
        color: '#000', 
        fontSize: 18,
        fontFamily: fonts.Avenir.Medium
    },
    v_bottom: {
        width: '100%',
        height: 63,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 29,
    },
    txt_next: {
        color: '#fff',
        fontSize: 16,
        fontFamily: fonts.Avenir.Heavy
    },
    btn_next: { 
        width: '100%', 
        height: 50, 
        borderRadius: 5, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
})