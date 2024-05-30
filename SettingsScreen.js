// SettingsScreen.js
import React from "react";
import { View, Text, Image } from "react-native";

const SettingsScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#AC8968",
      }}
    >
      {/* <Text style={{fontSize:24, color:"white"}}>Settings Screen</Text> */}
      <Image source={require('./image/snow.jpg')} style={{height:670, width:426}} />
    </View>
  );
};

export default SettingsScreen;
