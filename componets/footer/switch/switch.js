import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Handler from "./handler/handler";
import Icon from "./Icon/icon";

const Switch = () => {
  const [toggle, onToggle] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={() => onToggle(!toggle)}>
      <View style={styles.switch}>
        <View style={styles.background}>
          <View style={styles.container}>
            <Icon iconImg={require("../../../assets/switch/MyLibrary.png")}></Icon>
            <Icon iconImg={require("../../../assets/switch/GlobalLibrary.png")}></Icon>
          </View>
        </View>
        <Handler toggle={toggle} />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#BEBEBE",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 21,
    borderColor: "#363636",
    height: "100%"
    //box-shadow нужно добавить
  },
  switch: {
    width: 147,
    height: 37,
    position: "relative",
  },
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 13,
    paddingTop: 6,
  }
});

export default Switch;
