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
    v_bottom: {
        width: '100%',
        height: 63,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        paddingHorizontal: 29,
        marginTop: 15
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
    v_profile: {
        width: '100%',
        //alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 25
    },
    img_profile: {
        width: 80,
        height: 80,
        borderRadius: 50
    },
    v_camer: {
        marginLeft: -23,
        marginTop: 50
    },
    v_item_card: {
        width: '100%',
        paddingHorizontal: 17,
        marginTop: 25
    },
    v_card: {
        width: '100%',
        //height: 268,
        borderRadius: 11,
        backgroundColor: '#fff',
        paddingTop: 15,
        paddingBottom: 5,
        paddingHorizontal: 13
    },
    title_name: {
        color: '#4A4A4A',
        fontSize: 12,
        fontFamily: fonts.Poppins.Medium
    },
    input_name: {
        width: '100%',
        height: 42,
        borderColor: '#979797',
        borderRadius: 3.84,
        borderWidth: 0.51,
        paddingHorizontal: 13,
        fontSize: 15,
        color: '#000',
        fontFamily: fonts.Avenir.Medium,
        marginBottom: 15
    },
    input_pass: {
        flex: 1,
        color: '#000',
        fontSize: 15,
        fontFamily: fonts.Avenir.Medium,
    },
    btn_change: {
        width: 60,
        height: '100%',
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    txt_change: {
        color: '#FE6336',
        fontSize: 13,
        fontFamily: fonts.Poppins.Bold
    },
    v_password_change: {
        width: '100%',
        height: 42,
        borderColor: '#979797',
        borderRadius: 3.84,
        borderWidth: 0.51,
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15,
        paddingHorizontal: 13
    },
    v_title_text: {
        width: '100%',
        height: 27,
        justifyContent: 'center'
    },
})