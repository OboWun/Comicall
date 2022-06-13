import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
const BackButton = ({ navigation }) => {
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require("../assets/header/back.png")}
        style={{ marginRight: 12 }}/>
    </TouchableOpacity>
  );
}

export default BackButton;
