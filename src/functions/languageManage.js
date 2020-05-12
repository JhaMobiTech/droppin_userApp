import { activeLanguage } from "../redux/actions/reduceActions";
import AsyncStorage from "@react-native-community/async-storage";
// set Active languange
const setActiveLang = (dispatch, lang) => {
  dispatch(activeLanguage(lang));
};
// get default languange
const getDefaultLang = async (dispatch, keyName) => {
  try {
    const value = await AsyncStorage.getItem(keyName);
    if (value !== null) {
      setActiveLang(dispatch, value);
    }
  } catch (e) {
    // error reading value
  }
};
// change language
const changeLanguage = async (dispatch, keyName) => {
  try {
    await AsyncStorage.setItem("lang", keyName);
    setActiveLang(dispatch, keyName);
  } catch (e) {
    // error reading value
  }
};
export { getDefaultLang, changeLanguage };
