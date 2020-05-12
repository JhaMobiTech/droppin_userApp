import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { Container, Content, Header, Card } from "native-base";
import LinearGradient from "react-native-linear-gradient";
import { styles } from "../../styles/emptySceneStyle";
import { icons } from "../../assets/icons/IconsConfig";

// const emptyAddress = () => {
//   return (
//     <Content contentContainerStyle={styles.empty_container}>
//       <StatusBar backgroundColor="#fff" barStyle="dark-content" />
//       <View style={styles.empty_container}>
//         <View style={styles._view_icon_cicle}>
//           <Image style={styles._iconCicle} source={icons.emty_address} />
//         </View>
//         <Text style={styles._text_NoAdd}>No Addresses found!</Text>
//         <Text style={styles._text_notify}>Looks like you haven’t added a</Text>
//         <Text style={styles._text_notify}>default shipping address.</Text>
//         <TouchableOpacity activeOpacity={1} style={styles._btn_save_Addr}>
//           <Text style={styles._text_save_Addr}>Add a new address</Text>
//         </TouchableOpacity>
//       </View>
//     </Content>
//   );
// };
const emptySubcate = () => {
  return (
    <View style={styles.sub_view}>
      <Image style={styles.sub_img} source={icons.empty_bag} />
      <Text style={styles.sub_txt}>Empty subcategory</Text>
    </View>
  );
};
export { emptySubcate };
