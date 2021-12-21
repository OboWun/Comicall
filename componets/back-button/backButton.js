import React from "react";
import { Image, View } from "react-native";
const BackButton = ({ navigation }) => {
  return (
    <View onTouchEnd={() => navigation.goBack()}>
      <Image
        source={require("../../assets/header/back.png")}
        style={{ marginRight: 12 }}/>
    </View>
  );
}

export default BackButton;
