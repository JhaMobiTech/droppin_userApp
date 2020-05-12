import { StyleSheet } from 'react-native';
import { fonts } from '../assets/fonts/fontConfig';

export const styles = StyleSheet.create({
    header_: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#FF4B34',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    content: {
        flex: 1,
        backgroundColor: '#F5F5F5'
    },
    btn_close_: {
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15
    },
    btn_close: {
        width: 32,
        height: 32,
        marginLeft: 5
    },
    txt_header: {
        color: '#fff',
        fontSize: 22
    },
    v_date: {
        width: '100%',
        height: 70,
        backgroundColor: '#FF4B34',
        paddingHorizontal: 21
    },
    v_ofdate: {
        width: '100%',
        alignItems: 'center',
        marginTop: -10,
        paddingHorizontal: 20
    },
    img_line: {
        width: '100%',
        height: 7,

    },
    v_txt_date: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    dat_ta: {
        color: '#fff',
        fontSize: 16
    },
    v_total: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    txt_total: {
        color: '#fff',
        fontSize: 16
    },
    total_price: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    pic_line: {
        width: '100%',
        height: 14
    },
    itemTracking: {
        width: '100%',
        height: 343,
        backgroundColor: '#ffff',
        marginTop: 10
    },
    txt_itemTrack: {
        color: '#000',
        fontSize: 16,
        fontFamily: fonts.Poppins.Bold
    },
    v_tracking: {
        width: '100%',
        height: 30,
        marginTop: 20,
        paddingLeft: 20
    },
    txt_itemTrack_2: {
        color: '#919191',
        fontSize: 10,
        fontFamily: fonts.Poppins.Bold
    },
    v_tracking_2: {
        width: '100%',
        height: 25,
        paddingLeft: 20,
        justifyContent: 'center'
    },
    v_number: {
        width: '100%',
        paddingLeft: 20,
        justifyContent: 'center'
    },
    stepIndicator: {
        marginVertical: 50,
        paddingHorizontal: 20
    },
    rowItem: {
        flex: 3,
        paddingVertical: 20
    },
    title: {
        flex: 1,
        fontSize: 20,
        color: '#333333',
        paddingVertical: 16,
        fontWeight: '600'
    },
    body: {
        flex: 1,
        fontSize: 15,
        color: '#606060',
        lineHeight: 24,
        marginRight: 8
    },
    txt_number: {
        color: '#000',
        fontSize: 14
    },
    txt_item: {
        fontSize: 16,
        color: '#000',
        fontFamily: fonts.Poppins.Bold
    },
    txt_nameIcon: {
        fontSize: 16,
        fontFamily: fonts.Poppins.Regular,
        color: '#000'
    },
    txt_size: {
        fontSize: 14,
        color: '#485465',
        fontFamily: fonts.Poppins.Regular
    },
    txt_price: {
        color: '#000',
        fontSize: 14,
        fontFamily: fonts.Poppins.Bold
    },
    v_iconcircle: {
        width: 7,
        height: 7,
        marginHorizontal: 10,
        tintColor: '#485465'
    },
    v_body_item: {
        flex: 1.5,
        flexDirection: 'row',
        alignItems: 'center'
    },
    v_total: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10
    },
    v_itemBody: {
        width: '100%',
        height: 78,
        paddingHorizontal: 15,
        flexDirection: 'row',
        marginTop: 5,
        marginBottom: 10
        
    },
    body_item: {
        width: 70,
        height: '100%'
    },
    v_itemHead: { 
        width: '100%', 
        height: 43, 
        paddingLeft: 20, 
        justifyContent: 'flex-end',
        
    },
    v_item_header: { 
        width: '100%', 
        backgroundColor: '#fff', 
        marginTop: 10 ,
        marginBottom: 20,
        paddingBottom: 15
    },
})