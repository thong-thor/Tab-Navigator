// HomeScreen.js
import React from "react";
import { View, Text,Image} from "react-native";

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#3AAFA9",
      }}
    >
      {/* <Text style={{fontSize: 24, color: "white"}}>Home Screen</Text> */}
      <Image source={require('./image/mountain.jpg')} style={{height:670, width:426}} />
    </View>
  );
};

export default HomeScreen;
