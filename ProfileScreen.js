// ProfileScreen.js
import React from "react";
import { View, Text, Image} from "react-native";

const ProfileScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#748D92",
      }}
    >
      {/* <Text style={{fontSize: 24,color: "white"}}>Profile Screen</Text> */}
      <Image source={require('./image/alps.jpg')} style={{height:670, width:426}} />
    </View>
  );
};

export default ProfileScreen;
