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
        backgroundColor: '#F6F7FA',
    },
    _btn_back: {
        width: 30, 
        height: 30, 
        alignItems: 'center', 
        justifyContent: 'center'
    },
    card_: {
        width: width-40, 
        height: 201, 
        borderRadius: 13.2
    },
    line_: {
        borderBottomWidth: 1, 
        borderBottomColor: '#D8D8D8', 
        width: '90%', 
        height: 10
    },
    v_to_card: {
        width: '100%', 
        paddingHorizontal: 17, 
        marginTop: 26
    },
    v_logo_visa: {
        width: '100%', 
        height: 48, 
        alignItems: 'flex-end', 
        justifyContent: 'flex-end', 
        paddingRight: 16
    },
    visa: {
        width: 47.4, 
        height: 29.1
    },
    v_number: {
        width: '100%', 
        height: 53
    },
    name_card: {
        width: '100%', 
        height: 20, 
        justifyContent: 'center', 
        paddingLeft: 13
    },
    txt_name: {
        color: '#757F7E', 
        fontSize: 12.5
    },
    v_format: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        paddingHorizontal: 13
    },
    format_txt: {
        fontSize: 15, 
        color: '#4A4A4A'
    },
    name_for_c: {
        width: '100%', 
        height: 82, 
        paddingHorizontal: 13, 
        flexDirection: 'row'
    },
    of_name: {
        flex: 1, 
        justifyContent: 'center', 
    },
    txt_holder: {
        color: '#757F7E', 
        fontSize: 12.41, 
        marginBottom: 6
    },
    txt_mm: {
        color: '#3F3F3F', 
        fontSize: 11.4
    },
    txt_ex: {
        color: '#757F7E', 
        fontSize: 12.41, 
        marginBottom: 4
    },
    v_ww: {
        width: 75, 
        justifyContent: 'center', 
    },
    txt_mmyy: {
        color: '#eeeeee', 
        fontSize: 12.4
    },
    cvv: {
        width: 60, 
        justifyContent: 'center', 
    },
    txt_cvv: {
        color: '#757F7E', 
        fontSize: 12.4
    },
    view_pay: {
        width: '100%', 
        height: 75, 
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
    _cicle_: {
        width: 18.62,
        height: 18.62,
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: '#FE6336'
    },
    _cicle_img: {
        width: 18.62,
        height: 18.62,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FE6336',
        borderWidth: 1.5
        
    },
    _circle_center: {
        width: 18,
        height: 18,
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FE6336'
    }
});