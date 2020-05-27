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
    
    imageName:null,
    isloading: false,
    showPlacesList:null,
    address_for:'',

    
    pickup_formatted_address: "",
    dropoff_formatted_address: "",
    distance:null,
    price:null,
    delivery_item:null,
    imagePath:null,
    driverDistance:null,
    deliverDate:null,
    deliverTime:null,
    
    modalVisible:false,
    animation: new Animated.Value(0),
    AddressFor:null,
    totalDistance:null
  },
};
