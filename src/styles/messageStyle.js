import {StyleSheet, Dimensions, Platform, StatusBar} from 'react-native';
import {fonts} from '../assets/fonts/fontConfig'
const {width, height}=Dimensions.get('screen')
export const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        marginTop: Platform.OS == "android" ? StatusBar.currentHeight : 0
    },
    _txt_header: {
        fontSize: 18,
        fontFamily: fonts.Poppins.Regular,
        color: '#282C37'
    },
    _content: {
        flex: 1,
        backgroundColor: '#fff',
        //paddingHorizontal: ,
        borderTopWidth: 2,
        borderTopColor: '#f5f5f5'
    },
    _v_search_: {
        width: '100%', 
        paddingHorizontal: 30,
        marginTop: 20
    },
    _view_search: {
        width: '100%', 
        height: 47, 
        borderRadius: 24, 
        borderWidth: 1,
        borderColor: '#E6EAEE', 
        backgroundColor: '#FDFDFD',
        paddingLeft: 35,
        alignItems: 'center', 
        flexDirection: 'row'
    },
    _view_message: {
        flexDirection: 'row',
        paddingHorizontal: 15, 
        marginTop: 20
    },
    _view_img: {
        width: 73, 
        height: 73,
        backgroundColor: '#eeeeee',
        borderRadius: 100
    },
    _img: {
        width: 73, 
        height: 73, 
        borderRadius: 50
    },
    _view_detail: {
        flex: 1, 
        flexDirection: 'column',
        paddingLeft: 13
    },
    _view_txt_name: {
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'flex-end'
    },
    _txt_name_:{
        color: '#4C475A', 
        fontSize: 13
    },
    _txt_name_2:{
        color: '#4D4D4D', 
        fontSize: 11
    },
    _view_txt_detail: {
        flex: 4, 
        flexDirection: 'row',
    },
    _view_detail_txt: {
        flex: 1, 
        justifyContent: 'center'
    },
    txt_det: {
        color: '#111111',
        fontSize: 12
    },
    _view_notify: {
        width: 30, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    _cicle_notify: {
        width: 20, 
        height: 20, 
        borderRadius: 20, 
        backgroundColor: '#FE6336', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    _txt_notitfy: {
        color: '#fff', 
        fontSize: 14
    },
});