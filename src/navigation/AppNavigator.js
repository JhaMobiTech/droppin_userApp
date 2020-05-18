import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AsyncStorage from "@react-native-community/async-storage";

// --Component here -----------------------
import TabNavigator from "./../components/MainBottomTab/TabNavigator";

// Account -------
import ChangeLangeguage from "./../components/account/ChangeLangeguage";
import ForgotPassword from "./../components/account/ForgotPassword";
import Login from "./../components/account/Login";
import PhoneVerification from "./../components/account/PhoneVerification";
import PhoneAuthentication from "./../components/account/PhoneAuthentication";
import Profile from "./../components/account/Profile";
import ProfileEditForm from "./../components/account/ProfileEditForm";
import Registration from "./../components/account/Registration";
import PhoneInput from "./../components/account/PhoneInput";

// --Address-------------------------------------
import ShippingAddress from "./../components/AddressManage/ShippingAddress";
import PickLocation from "./../components/AddressManage/PickLocation";
import NewAddress from "./../components/AddressManage/NewAddress";
import EditAddress from "./../components/AddressManage/EditAddress";

// cart ---------
import Cart from "./../components/cart/Cart";

// Category -----
import AllCategories from "./../components/categories/AllCategories";

// coins---------
import Redeem from "./../components/coins/Redeem";
import Coinhistory from "./../components/coins/Coinhistory";
import ExclusiveRewards from "./../components/coins/ExclusiveRewards";

// feed ---------
import Feed from "./../components/feed/Feed";

// flash deals -----
import FlashDeals from "./../components/flashdeals/FlashDeals";

// following
import Following from "./../components/following/Following";

// Home -------------
import Home from "./../components/home/Home";
import Scanner from "../components/scanner/Scanner";

// message
import Chatboard from "./../components/message/Chatboard";
import Message from "./../components/message/Message";

// notification -----
import NotificationList from "./../components/notifications/NotificationList";

//onboard ----
import Onboarding from "./../components/onboarding/Onboarding";

// order ----
import Current from "./../components/orders/Current";
import History from "./../components/orders/History";
import MyOrder from "./../components/orders/MyOrder";
import OrderConfirmation from "./../components/orders/OrderConfirmation";
import OrderIssue from "./../components/orders/OrderIssue";
import ProccessingOrder from "./../components/orders/ProccessingOrder";
import ReturnItem from "./../components/orders/ReturnItem";
import ReturnProductForm from "./../components/orders/ReturnProductForm";
import ReturnReason from "./../components/orders/ReturnReason";
import ScannerOrder from "./../components/orders/ScannerOrder";

// Payment -----
import AddPayment from "./../components/payment/AddPayment";
import CashConfirm from "./../components/payment/CashConfirm";
import ConfirmPayment from "./../components/payment/ConfirmPayment";
import PaymentMathod from "./../components/payment/PaymentMathod";
import PaymentMathodTranfer from "./../components/payment/PaymentMathodTranfer";
import PaySuccess from "./../components/payment/PaySuccess";
import PayWithOrtherCard from "./../components/payment/PayWithOrtherCard";

// Product -------------------------------------
import ProductDetail from "./../components/products/ProductDetail";
import AllProduct from "./../components/products/AllProduct";

// search page
import MainSearch from "./../components/searchpages/MainSearch";
import SearchResult from "./../components/searchpages/SearchResult";

//-shop ------
import ShopProfile from "./../components/shops/ShopProfile";

// voucher ----
import Voucher from "./../components/voucher/Voucher";

// wallet -----
import MyWallet from "./../components/wallet/MyWallet";

// wishlist -----
import Wishlist from "./../components/wishlist/Wistlist";
import LoadingData from "./../components/onboarding/LoadingData";

//  top selection
import MostPopular from "./../components/topselection/MostPopular";

// banner
import BannerDetail from "./../components/banner/BannerDetail";

import DropShip from '../components/DropShip/DropShip'
import Summary from '../components/DropShip/Summary'
import OrderDetail from '../components/DropShip/OrderDetail'
const AppNavigator = createStackNavigator(
  {
    // Onboarding
    Onboarding: Onboarding,
    LoadingData: LoadingData,

    //tab
    TabNavigator: TabNavigator,

    // acc
    ChangeLangeguage: ChangeLangeguage,
    ForgotPassword: ForgotPassword,
    Login: Login,
    PhoneVerification: PhoneVerification,
    PhoneAuthentication: PhoneAuthentication,
    Profile: Profile,
    ProfileEditForm: ProfileEditForm,
    Registration: Registration,
    PhoneInput: PhoneInput,

    // add -------
    ShippingAddress: ShippingAddress,
    PickLocation: PickLocation,
    NewAddress: NewAddress,
    EditAddress: EditAddress,

    // cart ------
    Cart: Cart,

    // Cate ------
    AllCategories: AllCategories,

    // coins -----
    Redeem: Redeem,
    Coinhistory: Coinhistory,
    ExclusiveRewards: ExclusiveRewards,

    // feed -------
    Feed: Feed,

    // Flash Deals ---
    FlashDeals: FlashDeals,

    // following
    Following: Following,

    // home
    Home: Home,
    Scanner: Scanner,

    // message
    Chatboard: Chatboard,
    Message: Message,

    // notification
    NotificationList: NotificationList,

    // order
    CurrentOrder: Current,
    HistoryOrder: History,
    MyOrder: MyOrder,
    OrderConfirmation: OrderConfirmation,
    OrderIssue: OrderIssue,
    ProccessingOrder: ProccessingOrder,
    ReturnItem: ReturnItem,
    ReturnProductForm: ReturnProductForm,
    ReturnReason: ReturnReason,
    ScannerOrder: ScannerOrder,

    // payment
    AddPayment: AddPayment,
    CashConfirm: CashConfirm,
    ConfirmPayment: ConfirmPayment,
    PaymentMathod: PaymentMathod,
    PaymentMathodTranfer: PaymentMathodTranfer,
    PaySuccess: PaySuccess,
    PayWithOrtherCard: PayWithOrtherCard,

    // product
    ProductDetail: ProductDetail,
    AllProduct: AllProduct,

    // search page
    MainSearch: MainSearch,
    SearchResult: SearchResult,

    // shop
    ShopProfile: ShopProfile,

    // voucher
    Voucher: Voucher,

    // wallet
    MyWallet: MyWallet,

    // wish list
    Wishlist: Wishlist,

    // topselection
    MostPopular: MostPopular,

    // banner
    BannerDetail: BannerDetail,

    //Dropship
    DropShip:DropShip,
    Summary:Summary,
    OrderDetail:OrderDetail,
  },
  {
    initialRouteName: "LoadingData",
    headerMode: "none"
  }
);
export default createAppContainer(AppNavigator);
