import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Easing,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SelectorItem from "../selector-item/selectorItem";

const SelectorList = ({ data, height }) => {

  //Анимацию на FlatList

  return (
    <Animated.FlatList
      style={[styles.list, { height: height }]}
      data={data}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "#000000" }}></View>
      )}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <SelectorItem tag = {item}></SelectorItem>
      )}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    left: 0,
    width: "100%",
  },
});

export default SelectorList;
