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
        flex: 1
    },
    txt_status_header: {
        color: '#4A4A4A',
        fontSize: 22,
        fontFamily: fonts.Avenir.Heavy
    },
    card_1: {
        width: '100%',
        height: 75,
        borderRadius: 8,
        paddingHorizontal: 20,
        marginBottom: 15,
    },
    txt_fag: {
        fontSize: 20,
        color: '#4A4A4A',
        fontFamily: fonts.Avenir.Bold,
        marginLeft: 15
    },
    v_of_card: {
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20
    },
    btn_selectCard: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
})