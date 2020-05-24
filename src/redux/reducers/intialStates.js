const en = require("./../../assets/jsons/languages/en.json");
import{Animated} from 'react-native'
export const intials = {
  activeLanguage: {
    lang: "EN",
    data: en
  },
  activeUser: {
    user: null
  },
  activeConnection: {
    online: true
  },
  activeProccess: {
    proccess: "done"
  },
  availableAddress: {
    address: []
  },
  defaultAddress: {
    defaddress: null
  },
  delivery_option: {
    deliveries: []
  },
  def_delivery_option: {
    defdelivery: null
  },
  cartItem: {
    cart: null
  },
  dropShipDetails:{
    date:new Date(),
    time:'00.00.00',
    showCalendar:false,
    showClock:false,
    showIOSCalendar:false,
    imagePath:null,
    imageName:null,
    isloading: false,
    showPlacesList:null,

    
    pickup_formatted_address: "",
    pickup_latitude:null,
    pickup_longitude:null,
    dropOffAdress: "",
    dropOffLat:null,
    dropOffLng:null,
    selected_item:null,
    modalVisible:false,
    animation: new Animated.Value(0),
    AddressFor:null,
    totalDistance:null
  },
};
