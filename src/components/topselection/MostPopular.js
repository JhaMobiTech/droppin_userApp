import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  Dimensions,
  StatusBar,
  ScrollView,
  Animated
} from "react-native";

import { styles } from "./../../styles/mostPopularStyle";
import { Container, Content, Header } from "native-base";
import { icons } from "./../../assets/icons/IconsConfig";
import { Colors } from "react-native/Libraries/NewAppScreen";
const { width, height } = Dimensions.get("screen");
const HEADER_MAX_HEIGHT = width / 2;
const HEADER_MIN_HEIGHT = 60;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;
var product_size = [
  { label: "ນ້ອຍ", value: 25000 },
  { label: "ກາງ", value: 30000 },
  { label: "ໃຫຍ່", value: 45000 }
];
const isAndroid = Platform.OS == "android" ? true : false;
export default class MostPopular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0)
    };
  }
  // componentDidMount() {
  //   this._navListener = this.props.navigation.addListener("didFocus", () => {
  //     StatusBar.setBarStyle("dark-content");
  //     isAndroid && StatusBar.setTranslucent(false);
  //     isAndroid && StatusBar.setBackgroundColor("#fff");
  //   });
  // }
  // componentWillUnmount() {
  //   this._navListener.remove();
  // }
  render() {
    const dataTop3 = [
      {
        imgTop: icons.undub1,
        imgs:
          "http://www.liviatiana.com/wp-content/uploads/2016/06/Comfortable-Wedge-Sandals-for-Summer-1-1440x898.jpg",
        selled: "2,053",
        pricered: "29,000",
        priceout: "35,000"
      },
      {
        imgTop: icons.undub2,
        imgs:
          "https://teespig.com/wp-content/uploads/2019/12/Womens-March-2020-Santa-Barbara-T-Shirts.jpg",
        selled: "423",
        pricered: "120,000",
        priceout: "250,000"
      },
      {
        imgTop: icons.undub3,
        imgs:
          "https://cdn-incname.hihonor.com/pms//pages/templateContent/U44yENF2vwhshXJeZdPO.jpg",
        selled: "370",
        pricered: "47,000",
        priceout: "55,000"
      }
    ];
    const dataRecommend = [
      {
        img:
          "https://ae01.alicdn.com/kf/HTB1FCrtajzuK1RjSspeq6ziHVXaY/ENNIS-2019-Ladies-Leather-Loafers-Shoes-Women-Suede-Flat-Casual-Shoes-Round-Toe-Sweet-Flats-Fashion.jpg",
        name: "Shoose women"
      },
      {
        img:
          "https://cdn.shopify.com/s/files/1/0849/2944/products/NORTH-Relogio-Masculino-Fashion-Watches-Men-Famous-Brand-Watch-Sports-Man-Quartz-Wristwatch-Luxury-whatch-Men_615e152f-9ddd-4136-b770-6fa71f1f4b6f_1024x1024.jpg?v=1571714119",
        name: "M-Watch"
      },
      {
        img:
          "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxASERUSEhIVFhITERcaFxgVFRUYFxgRFRUXFhcXFRUaHSggGBolGxYVIjEhJSkrLi4uFx8zOTMtNyotLi0BCgoKDg0OGxAQGi0lHx8tKy0rKy03MCswKzYtKzUrLS8tLi8rLTcrLSswLS0tLi83Ly8wLi8uKzcwNy0wNystK//AABEIAOkA2QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwEEBQYIAwL/xABLEAABAwIDBAYFCAYIBQUAAAABAAIDBBEFEiETMVGBBgciQWFxFDJygpEjQlJzoaKxwRVTYmODkjNDk8LD0dPwRHSz0uEINFSjsv/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACYRAQEAAgAGAQMFAAAAAAAAAAABAhEDBBIhQVExExRhQnGBwfD/2gAMAwEAAhEDEQA/AJxRWWMYpDSwunnfkjYNTv1OgAA1JJsAAovxTrlfcinpBl7nTPNz5sbu/mKCXUUCzdbWKO3ejt9mJ3955VhUdY+Lv/4rL7EcQ/FpKLp0Si5jq+l2JPHaraj3ZXM//BCw7sbnk9eeV3g+Z7j9pQdXzVUbPWe1vtOA/FYyo6V4cw2fW0zTwM8V/hmuuYNm062Bv3r7DAhp1HhmO0dSSKephlI3iORjiBxIBuFkVydBK+N7ZI3FkjDdrmmzmuHeCukegmP+nUMU7rbSxbKBoNqzRxA7gdHAcHBBsCIiIIiICIiAiIgIiICIiAiIgIiICIiCN+u3NsKYfMNSb8M+yfkv95Qq4LofrQw3b4ZPYduECZvG8RzOt5szjmufaodq43OAPxUWPFERFUcLiyx76TwNxuI3H/JZFbB0QrsPidIa2Aygtbs7AODXAnMC0kA3uNddyI1uBpDQDwXost0nraWacvpYTDEWAZCGjti93BrSQ0EW08FikUUqdRGJ2dU0pO/LMzz/AKOT/CUVrYerzE/RsTp3k2a9+yf7Moyj7+Q8kR0iiIqgiIgIiICIiAiIgIiICIiAiIgIiIPmRgcC0i4III4g6ELl/GKAwSSQG96ed8evewOOR3MWPNdRKCetugMeJvNuzVU7Xg/vYuw4edmsPvIrQkQoooiIgKqIgL5ffeCQRuI3gjcR4r6QoOouj+JCppYagf1sTHHwcQMw5G45LIKO+pDE9pQvgJ7VPMQPq5flAf5jIOSkRVkREQEREBEWC6S9MMPoAPSqhsbnC4ZYueRxDGgm3jayDOoo7d10YL+tlPlC/wDML4PXZg305v7E/wCaCR0UcM66sIO7bm37ofm5VPXPhf0aj+zb/wB6CRkUau66sM/V1J9yP/UXweu3Dv1FV/JF/qIJNRRlD12Ye5wGwqhc7y2H/UW+YDjdPWQienkD4zpuILXDe1zTq1w4FBkUREBRt14YfelhqgNaaoAcf3U3YP3xGpJWL6U4UKujnpu+WFzW+D7XYeTg08kHMlQyziPH7CvNe0gdlYXAhwGVwO8PboQfFeKiiqiIoiIgIiqg3nqYxLZYiYiezUwub/Ej7bfu7T4qeFythdeaeohqBf5GZjzbva1wLm823HNdTxvDgHA3BAIPEHUKpX0iIiCIiDDdL8fZQUc1U+x2bOy0/OkOjG83EcrrkDFsSmqZpJ5nl8sry5xPE9w4ACwA7gAFMnX1ju3nZh7HdiACSax3zPHybT7LCT74USHD4/pfaFucPKzcS2RjCVRZT9HM+kfiE/RjfpH7FfpZHVHhQN0OvDcrwK7oMKGU9o7/AAV3HhAN+3awJ1HDuHEqfTyNxiUWx1PRYMsPSoSTGxxAdezngnZ3GhcNL91z5ryg6NF4uJ4hpftEiwsDr467vAqdFNsJFvudw1PkNSpo6hNpepBvk2cJI7hI4yEc8u/yCh6GAZ8t7i5ud3YZq74mzea6Q6q8G9Hw9jnC0lSds7iA8DIPCzA3TiSsq3BERAREQc49OcPMGIVkVtDLtmeLJhnNvAOc4e6taUtddeFAS01YPnB1PJ4g3fH/AIvxCiZ7bEjgVFgiBEUREQVREQUcF0P1XYn6RhkBJu6JuydxvF2W38SwMPNc8qUuojE7OqaUneGzMHiPk5P8JEqX0RFUFYY/i0dJTS1Mp7EMZcfEjc0eJNgPEq/URdduOZ3w4ew6C089uAJELD5uBcR+y1axx6rqJbpkuqbB59hNiEwBqq+QuJOlo7nde9gXefZa3fuW8ybQ2Ho7CTa9yLAX4232/PwvzrFXTMFmSyNA7myPaPsKuY8erW7quoH8eX8My9OXLW+WJnrw6JfhtOd8MZ82NP5LwkwCid61LAfOGM/koHj6XYiN1ZNzff8AG6uGdO8VG6rfzZCfxYs/bZ+164mo9FsO/wDhU39hF/2rzd0Qw0/8HByjaPwCi+n6e4mALzhxt3xR/wB1oV2zrGxAfqT5xn8nBT6Ofs6o3mt6I4W0AmjjJc5rQGgg3cbdx7hc+QK0Lrbw2gooo208DWTyEm4c82YOyBYutq4/cKu2dZlZ3xQH3Xj++o86fY9LWVOdwAflaA1t8oceywC+ul3O94qXHLCbq7l+Hl0FwT0urih3tkkAd/y8RzSnwzEOF+Nl1A0ACw0A/BQ71EYUdrUVX9VGxtPH4nsvefsj/nPBTGuDQiIgIiINY6ysM9Iw2oaBd8bNqy2/NEc9h4kAjmuearUh3c5oPPvXVjmggg7iNfJcw45hxp5Zqcj/ANvUPYPqibsPNuU80WMWFVUCqooqqiqgIiIC2Dq+xP0bE6Z5Nmvk2T/ZlGQX8A4sPurX18yXtoSCNxG8HuI8UHWaLHdHcSFTSw1A/rYWuPg4jtDkbjksiqyt8RrY4IpJpDljiY57jwa0En7AuZqqvkqZpaqX+kqJC+x+azdGzyawNClDrvxy0cWHsPanO0mt3U8Z0afbfYeTHKLF6+Ww/U553wIiL1uYqtFzbiqL1phdwQZFERYV8yPDQXHcASfILVBKXOdIQSRcgDU7STRoHEhl9PELMdIKgNYGX9bU+w3U/ks51VdGH1VZE5wGypnNnmv3yuuYmDTWxa3kw8V5OYy3dOmE8pp6DYF6DQQU/wA9rLyeMzzmfyzEgeACzyIvO2IiICIiAoT64MM2de2QDs1VP/8AdDofumNTYtC65sPz0LZwO1SzMf8Aw3nZuHldzT7qCCVVelU2zzwOo8jqvMKNCqiICIiAhREE2dSGJ7SifAd9PMbfVy9sH+fafBSFNK1jS5xAa0EkncGgXJPJQV1NYlssRMRPZqYXN/iR/KN+6JBzW59dWOmKkbRsNpKxxa629tMzWU8+yz3jwWpN3UZqKsYxd1bVTVjr2mf8mD82nZ2YxbuuO0fFxVqgFtBuCL6eGPTNOFuxERaQV1Qt1J8Faq/o22b5lKPdEVpidRkjcR6x0b7R0H+fJc7dTasHXSiWY39Qf9OPV3xdYc1OnUphToqAzvvmq5TIBwiHYZbzsXX4OHBQ90KwH0ypjg1yyyAOIuCKaLWQ37iSHAHjlXTtJTMijZHG0NjjY1rWjc1jQGtA8AAF863d27/D1REUBERAREQFZ4zQNqKeWB3qyxPYfDM0i/K91eIg5TnY4NbmFnsJY8cHsNiD/vuXgFt/WPhmwxGqYBZsuWdnv+v98SLUAor6RERRERARFVBcYXXGnqIZ274pmP07w1wLhzFxzWW6VY56fXTVQ/o77KC/6iMntW7szszuYWt1JNg0es82H5nkLlZCNgaA0bgLDyC9XLYbvV6cuJfD6REXtchERAWUY2wA4BWFM27h8fgsipQWv49OXPEbd7bAfWP0HwGqzs0ga0uO5oJPJa1QRvlluBmeXWaOM8xs0Dyabe8vNzGWpr26YTumLqQwMNbLVkaaQxfVssXkebso82FSosd0ewptJSxU7d0UYBPF+97ubi481kV43QREQEREBERAREQRZ124fb0WqA3PdC/2ZBmZfwBa/wDmUQSNsSOBXR/WHhfpOG1EYF3CPOwDfniO0aB55bc1zpUm9nfSaDz3FRY+AioFVFF9RsLiGtBc47gASSfADUrJ4MyjD2Oqi50VnZmR+tcA5RcEbzbvG/estB0iEXYo4WQtke+z3jPKA61wD6oAytABzd/ErVmvlnHKZd4t6HobUuGaYspowbF07spAte4ZvP2LFYrFAx4bA9zwGnM42sXh7hdlgOyWhpG/1t6vpnbaB20L3VDZXG8jnuAjJDn2B7MZc433XJB4gLDVrQxtg4OedGhurcxNhd3fx0v5qK9+j+HSVU+WMXI7I4AaZ3H7B9netsx7oeaaHaZ3FzQC5rmFt2kgXb5E7l7dVr4onSsOXaGNmQOeGFzc/wAtleSAH5STvHfwVz026QRGEUkOzPbc6QxWyC7gQwEEhztGkkaXvvXrw68c5hPia3+due8LLve/Hpo6Ii9bkIiILyhZvPJXSylB0Xq3Ma7ZFrCwOD3aNIdu18b96xdY0xlzXCzmOLSODgbEfFY6pV0xHSGpAYGce072G6/abfBbX1N4EZaxsjx2aZu1f/zEtwxp8hc/wwtCml201z6t7/wo+7m63xK6G6qsH9HoGPcPlKk7Z3GzwMg/kDTbi4rwcXLqy27YzUbiiIuaiIiAiIgIiICIiChC5j6RYb6PUVFPawgqHBv1Ljmj+6W/FdOqFOubDcldHMB2amAtP1sJ382ujHuosRu1fS+QvoKKuG0btC+zGnvfcXHg3efgrqB0QaRmBF/nhxO6/ZiBtzc63gsc5xJuTc+KIi8lrybWG61i6xtb6LBZo+BVjTjPKXHUM+2R288gfvL5nkytJ7+4cSdAFkqDDyIS64sy2a9+09x1tzK9PLcO5Zb9OXFzmE7+XvDVANyujY8a2vcG58Qf96K2XpBC57g1jS5x3Ab1SaFzDZ7XNPBwIPwK9kuO9b7ub4Re1HT7R4ZnYy9+1I7KwWBOpsd9rDiSAvELQLJdHMPFRVRQkgNe8ZiTazBq7XjYG3isasphUMZBzuLb7ja404jepleyxNzI5/SQWNywMZkFyACBwbv8jbuGqiTrbxra1TmNPZiGybbvkuc55G491fVPWVEDQ6GpIFh2WyEWJ7jHey0vH53SS5AbuGgP72TeTxsNfivFlh07y3+FwxmPaebu+f8Afwvug+Cel1MUIHZmkAd4U0Ny8+F7Ot4lq6ga0AAAWAGg8FFnUjggDZasjTSGH6tli8jzdlHmwqVF53YREQEREBERAREQEREBaJ1y4btMO2oHappWSC30Cdm/lZ+b3VvatsTomTwyQv8AUljcx3svaWn8UHK847XgdfiqBXOMYfNSzOp5xaWI23aOb817eLTvB/MFeVFBJK8RxMfJIdzWNLnedh3eKjT4VY2lzgxjS57jZrWgucTwa0ak+Skbo31SVMtn1smwZ+rjIdKfAu1Yz73Jb9VUmH4JRTVEULW7OO5cdZJH7mNMh1N3EC17C6Jtz1U0kkdQYpWljobFzTa4e4AtBt3gG9t40usvQtbIwsLw3KS7XvGWxsOSwLal7y6SR2aWV7nvdxkebuK9Wyr6PL2cOd48vHwvEna6vitx6GRMMhe4gaWF724m9tQDuuFkOk0jpDHSxdt8r2gAHebgC1wLXd+BWjR1ThoHEa30NteSy3R7HNhWQ1MmaQRu1F+0Wlrmm1+8BxI8Qvn5chcua+4yu9fE/adm204z0AbBSPmFSHzRAuezLlGUEB2W5zaZgbka3G64WoUlDJLfZtBI7szQT7IJBcfAXW4dM+nUM8Jp6QSCN4bndIfmtOYMjbckAm1zwaBZW+EYPG2B7nyR7URm0cjXalwHbYRYZhfTfuX1eXxyzl6nm5rmMeDJrz/Xy1SSle1+R7HMdwc0tNuNir8Cyy3ROjjlnfLP2qenY4uvexAvYcdTc2H0Ss3Fg9DUbUtEtMY48+rmyMyHMbkXu09k6ZtFjiZzHKz15duHvLGW9t+Gl1EwY1zzuaCf/C1vDonySXAzPJytH0p5jaw8QDb3lf8ASGpAaGd3rO9lu4cz+C2zqcwIy1jXvHZpW7V/D0iS4YD5an+GF5OYy3denbCJq6O4U2kpYqdu6KMAni/e93NxceayKIuDYiIgIiICIiAiIgIiICIiCyxLCKaoAFRBFKBu2jGvt5XGi+6DDoIG5YYo4m8I2NaOYAV0iAoJ/wDUR0ovJDh8Z0jtLN7ZuI2HyF3W/abwU3YjWMhhkmebMijc9x/ZY0uP2BcZ47iklXUy1Mp7c0jnHwudGjwAsB4AIPuLEuIt5LMUuL/Iuibaz3XJBIJb2Tlc3v1Y0gnd2vpaaqqgrpOJZ8s9LZmyq9ZCdmX5m6NzZe1mLNps8263r6WvfQmy1SKtePHz/wA1kYsZJYI3OcGA3DSTlBN93xPxPFdpxZWellmyq/pMRmHYbI4A6WvcDyB3clg45gdxWwYJTRmJ0r9fWtaRoLA1oyksNy4OcQ3d3HVdevyzcZe1Z3CMZ2MT4TG18cnrC5a4i2WwcN3f3byr6oxmH0d8cQkD5S0PMhBJY3X1hv3AWsNCeK1MTDirbEK3slrd7tL+e+yxl0/NVYySbabMfVvmP1Ue4c3W+1dDdVOD+j0DHuHylSdq7jlcBsx/IAbcXFQh0IwX0upihHqzyDN4U0Vy4+F7Pt4kLqBrQAABYAWA8AvJbu7dVURFAREQEREBERAREQEREBERAREQYnpZh76ihqYGevLTSsbfdncwhtzwvZcc1VJJG5zXtIcwkOBFi1wNiHDeCCu3FrHSvoFQYhd00eWa2ksdmyabrm1ne8Cg5DRS10q6lqyG76cipjHc3sSgeLDo7kSTwUZVmGyROLHtc17TYteC1wPAtPf4ILJFUi29UQe1K0l2hI424LNR1RG8XVlSw5R4nevZWWwZBlS099vNeUxLnZW7yQ1vtO3nkLnkrRZHC6dzn2a27hZjBxmlsLDxsQPeVuVsSRMnUjgoAlqyNNIYfq2WLyPMho9wqVVjejmEtpKWGnbuijAJ4v3vdzcXHmsksqIiICIiAiIgIiICIiAiIgIiICIiAi+S8cU2g4hB9LFY90co61mSpgZILWBIs8ey8Wc3kVk9oOITOOKCF+lPUfoX0M1/3U39yQbvIgeaijFejNRRy5amF8Tu7MLtPi140dyuPFdf5xxXjW0kMzDHKxkkbt7XtDmnzB0QcfW/33fFUU9dJepujmu+kkNPIfm+vET5HtD4kDgosx/oDidITtKcvZ3SQ3ew+dhdvvBvkg1lpA1O4a/+OZUm9TeBGasY9wu2lbtX8DUSXDBy7R/hhabgHResqpA2KB7jfuByA/SkkIAFv93K6P6E9GWYfTCEHNI45pX/AEpCADb9kAADy4koM+iIgIiICIiAiIgIiICIiAiIgIiICEIiDydTtPcvM0TFcogtDQN8fiqfo9vEq8RBZfo8fSKp+j/2ir5EFl6CfplVFEQb5zdXiILcU7vplerGkd6+0QEREBERAREQEREBERB//9k=",
        name: "Oppo-Mobile phone"
      },
      {
        img:
          "https://ae01.alicdn.com/kf/H542ddbf9141c4d8eaea38511837d45bcO/Authentic-Original-Brand-new-Coach-Signature-Mini-Surrey-PVC-Leather-Satchel-handbag-Women-s-Bag-Crossbody.jpg",
        name: "Womens bag"
      },
      {
        img:
          "https://vader-prod.s3.amazonaws.com/1573160973-matein-mlassic-backpack-1573160962.jpg",
        name: "Backpack"
      },
      {
        img:
          "https://www.goodgamingshop.com/wp-content/uploads/2018/03/14100407_1ea7612f-78ce-4c56-a67f-c2dec65e1624_1126_1142.jpg",
        name: "Hyper-x"
      }
    ];
    const dataTop3_10 = [
      {
        num: 4,
        imgs:
          "http://www.liviatiana.com/wp-content/uploads/2016/06/Comfortable-Wedge-Sandals-for-Summer-1-1440x898.jpg",
        selled: "2,053",
        pricered: "29,000",
        priceout: "35,000"
      },
      {
        num: 5,
        imgs:
          "https://teespig.com/wp-content/uploads/2019/12/Womens-March-2020-Santa-Barbara-T-Shirts.jpg",
        selled: "423",
        pricered: "120,000",
        priceout: "250,000"
      },
      {
        num: 6,
        imgs:
          "https://cdn-incname.hihonor.com/pms//pages/templateContent/U44yENF2vwhshXJeZdPO.jpg",
        selled: "370",
        pricered: "47,000",
        priceout: "55,000"
      },
      {
        num: 7,
        imgs:
          "https://cdn-incname.hihonor.com/pms//pages/templateContent/U44yENF2vwhshXJeZdPO.jpg",
        selled: "370",
        pricered: "47,000",
        priceout: "55,000"
      },
      {
        num: 8,
        imgs:
          "https://cdn-incname.hihonor.com/pms//pages/templateContent/U44yENF2vwhshXJeZdPO.jpg",
        selled: "370",
        pricered: "47,000",
        priceout: "55,000"
      },
      {
        num: 9,
        imgs:
          "https://cdn-incname.hihonor.com/pms//pages/templateContent/U44yENF2vwhshXJeZdPO.jpg",
        selled: "370",
        pricered: "47,000",
        priceout: "55,000"
      },
      {
        num: 10,
        imgs:
          "https://cdn-incname.hihonor.com/pms//pages/templateContent/U44yENF2vwhshXJeZdPO.jpg",
        selled: "370",
        pricered: "47,000",
        priceout: "55,000"
      }
    ];
    const dataYouMayLike = [
      {
        img:
          "https://goallexpress.com/wp-content/uploads/2019/06/Fashion-2019-new-luxury-brand-summer-women-scarf-quality-soft-silk-scarves-female-shawls-Foulard-cover.jpg",
        priced: "17,000",
        priceout: "35,000"
      },
      {
        img:
          "https://merkado.ae/2914-large_default/sexy-red-women-girls-lip-gloss-waterproof-tattoo-magic-color-peel-mask-long-lasting-makeup-lips.jpg",
        priced: "12,000",
        priceout: "20,000"
      },
      {
        img:
          "https://www.ibyte.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/3/5/35664-05-notebook-dell-inspiron-i15-3567-a30c-intel-core-7-i5-4gb-1tb-tela-led-15-6-cinza-min.jpg",
        priced: "1,900,000",
        priceout: "2,500,000"
      },
      {
        img:
          "https://ae01.alicdn.com/kf/HTB1xsXDSFXXXXbhXFXXq6xXFXXXM/2018-rockshox-BOXXER-mountain-bike-front-fork-decals-bicycle-rockshox-front-fork-stickers.jpg",
        priced: "120,000",
        priceout: "245,000"
      },
      {
        img:
          "https://www.nikonrumors.co/wp-content/uploads/2019/10/nikon-z50-ad.jpg",
        priced: "2,400,000",
        priceout: "3,500,000"
      },
      {
        img:
          "https://www.dhresource.com/0x0/f2/albu/g1/M00/79/D9/rBVaGFX2ckqAIpnFAAKcUzvvBko836.jpg",
        priced: "45,000",
        priceout: "75,000"
      },
      {
        img:
          "https://www.dhresource.com/0x0/f2/albu/g7/M01/B7/F7/rBVaSVucfeuAfow5AAH7Rf93ZI4554.jpg",
        priced: "245,000",
        priceout: "305,000"
      }
    ];
    // const { loading, resinfo, menu, cate, foodmenu, page, scrollended, selectedMenu, pddetail } = this.state;
    const { goBack } = this.props.navigation;

    const headerbg = this.state.scrollY.interpolate({
      inputRange: [0, 100, 200, 300],
      outputRange: ["transparent", "#f5f5f5", "#fafafa", "#fff"]
    });
    const iconColor = this.state.scrollY.interpolate({
      inputRange: [0, 100, 200, 300],
      outputRange: ["#fff", "#bdbdbd", "#616161", "#000"]
    });
    const headerText = this.state.scrollY.interpolate({
      inputRange: [0, 100, 200, 300],
      outputRange: ["transparent", "#bdbdbd", "#616161", "#212121"]
    });
    return (
      <Container>
        <Content
          style={styles.contents}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.state.scrollY } } }
          ])}
        >
          <StatusBar
            backgroundColor={"transparent"}
            barStyle={"dark-content"}
            translucent={true}
          />
          <View style={{ width: "100%" }}>
            <Image
              style={styles.img_most}
              // source={icons.bg_most}
              source={{
                uri:
                  "https://cdn1.vectorstock.com/i/1000x1000/86/15/blue-dark-tech-background-vector-21048615.jpg"
              }}
            />
            <View style={styles.v_allItem}>
              {dataTop3.map((item, key) => {
                return (
                  <TouchableOpacity style={styles.v_undub} key={key}>
                    <View style={styles.v_photoUndub}>
                      <Image
                        style={styles.img_undubTop}
                        source={{ uri: item.imgs }}
                      />
                      <View style={styles.v_undub_1}>
                        <Text style={styles.txt_top30}>HOT</Text>
                      </View>
                      <View style={styles.v_imgUndub}>
                        <Image
                          style={styles.img_undubAppsout}
                          source={item.imgTop}
                        />
                      </View>
                    </View>
                    <View style={styles.v_detailProTop}>
                      <Text style={styles.txt_detail} numberOfLines={2}>
                        {/* {JSON.stringify(statusBarx)} */}
                        Korkokenkien lestimme antavat parasta mahdollista tukea
                        naisten korkokengille.
                      </Text>
                      <Text style={styles.txt_selled}>
                        30 ວັນທີ່ຜ່ານມາຂາຍໄປແລ້ວ {item.selled} ອັນ
                      </Text>
                      <View style={styles.v_price_cart}>
                        <Text style={styles.txt_price}>
                          LAK {item.pricered}
                        </Text>
                        <Text style={styles.txt_price_io}>
                          LAK {item.priceout}
                        </Text>
                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                          <TouchableOpacity>
                            <Image
                              style={[
                                styles.img_add_cart,
                                { tintColor: "#3f51b5" }
                              ]}
                              source={icons.add_cart}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <View style={styles.v_naenum}>
                <Text style={styles.txt_naenum}>Recommend products</Text>
                <View style={styles.v_scrollNaenum}>
                  <ScrollView
                    contentContainerStyle={{ flexDirection: "row" }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                  >
                    {dataRecommend.map((item, key) => {
                      return (
                        <TouchableOpacity style={styles.itemnaenum} key={key}>
                          <Image
                            style={styles.img_naenum}
                            source={{ uri: item.img }}
                          />
                          <Text style={styles.txt_theNaenum} numberOfLines={1}>
                            {item.name}
                          </Text>
                        </TouchableOpacity>
                      );
                    })}
                  </ScrollView>
                </View>
              </View>
              {dataTop3_10.map((item, key) => {
                return (
                  <TouchableOpacity style={styles.v_undub} key={key}>
                    <View style={styles.v_photoUndub}>
                      <Image
                        style={styles.img_undubTop}
                        source={{ uri: item.imgs }}
                      />
                      <View style={styles.v_imgUndub}>
                        <View style={styles.v_10_top}>
                          <Text style={styles.txt_top_10}>{item.num}</Text>
                        </View>
                      </View>
                    </View>
                    <View style={styles.v_detailProTop}>
                      <Text style={styles.txt_detail} numberOfLines={2}>
                        Korkokenkien lestimme antavat parasta mahdollista tukea
                        naisten korkokengille.
                      </Text>
                      <Text style={styles.txt_selled}>
                        30 ວັນທີ່ຜ່ານມາຂາຍໄປແລ້ວ {item.selled} ອັນ
                      </Text>
                      <View style={styles.v_price_cart}>
                        <Text style={styles.txt_price}>
                          LAK {item.pricered}
                        </Text>
                        <Text style={styles.txt_price_io}>
                          LAK {item.priceout}
                        </Text>
                        <View style={{ flex: 1, alignItems: "flex-end" }}>
                          <TouchableOpacity>
                            <Image
                              style={[
                                styles.img_add_cart,
                                { tintColor: "#3f51b5" }
                              ]}
                              source={icons.add_cart}
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
              <Text style={styles.txt_youLikeMay}>You may like</Text>
              <View style={styles.v_youmay}>
                {dataYouMayLike.map((item, key) => {
                  return (
                    <TouchableOpacity style={styles.item_youMay} key={key}>
                      <Image
                        style={styles.item_youMayLike}
                        source={{ uri: item.img }}
                      />
                      <View style={styles.v_detailLike}>
                        <Text
                          style={styles.txt_detail_youMay}
                          numberOfLines={2}
                        >
                          Basic Info Product Description Customer Question &
                          Answer Ask
                        </Text>
                      </View>
                      <View style={styles.v_pricreOut}>
                        <Text style={styles.txt_like_may}>
                          LAK {item.priced}
                        </Text>
                        <Text style={styles.txt_decol}>{item.priceout}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          </View>
          <View style={styles.v_title_2}>
            <Text style={styles.txt_khaiydee}>Most popular</Text>
            <Text style={styles.txt_most}>Shoose Female</Text>
            <View style={styles.v30top}>
              <View style={styles.v_btndf}>
                <Image style={styles.img_bolt} source={icons.bolt} />
                <Text style={styles.txt_baseTo}>Bestsellers in 30 days</Text>
              </View>
              <View style={styles.v_btndf}>
                <Image style={styles.img_bolt} source={icons.time_days} />
                <Text style={styles.txt_baseTo}>Products updated daily.</Text>
              </View>
            </View>
          </View>
          <View style={styles.v_item_most}>
            <TouchableOpacity style={styles.item_most}>
              <View style={styles.v_imgMost}>
                <Image
                  style={styles.imgMost}
                  source={{
                    uri:
                      "https://www.skolyx.se/1073-thickbox_kronan/shoe-tree-for-womens-shoes-with-heels.jpg"
                  }}
                />
                <View style={styles.v_appsoutJust}>
                  <View style={styles.styleJust}>
                    <Text style={styles.txt_justfo}>Just for you</Text>
                  </View>
                </View>
              </View>
              <View style={styles.v_detailProTop}>
                <Text style={styles.txt_detail}>
                  Korkokenkien lestimme antavat parasta mahdollista tukea
                  naisten korkokengille.
                </Text>
                <View style={styles.v_price_cart}>
                  <Text style={styles.txt_price}>LAK 125,000</Text>
                  <Text style={styles.txt_price_io}>LAK 170,000</Text>
                  <View style={{ flex: 1, alignItems: "flex-end" }}>
                    <TouchableOpacity>
                      <Image
                        style={[styles.img_add_cart, { tintColor: "#3f51b5" }]}
                        source={icons.add_cart}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
        <Animated.View style={[styles._header_, { backgroundColor: headerbg }]}>
          <TouchableOpacity
            style={[styles.btn_back, { width: 108, alignItems: "flex-start" }]}
            onPress={() => goBack()}
          >
            <Animated.Image
              resizeMode={"contain"}
              style={[styles.iconBackq, { tintColor: iconColor }]}
              source={icons.back_dark}
            />
          </TouchableOpacity>
          <View style={styles.view_header}>
            <Animated.Text style={[styles.header_txt, { color: headerText }]}>
              Most popular
            </Animated.Text>
          </View>
          <View style={styles.v_3item}>
            <TouchableOpacity style={styles.btn_back}>
              <Animated.Image
                resizeMode={"contain"}
                style={[styles.search, { tintColor: iconColor }]}
                source={icons.search_white_outline_42}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_sare}>
              <Animated.Image
                resizeMode={"contain"}
                style={[styles.search, { tintColor: iconColor }]}
                source={icons.share_org_outline_50}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn_menu}>
              <Animated.Image
                resizeMode={"contain"}
                style={[styles.search, { tintColor: iconColor }]}
                source={icons.menu_black_outline_48}
              />
            </TouchableOpacity>
          </View>
        </Animated.View>
      </Container>
    );
  }
}
