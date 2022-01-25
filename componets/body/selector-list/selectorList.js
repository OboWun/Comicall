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

const SelectorList = ({ data, isShown, wrapperStyle }) => {
  const listHeight = useRef(new Animated.Value(0)).current;

  const moveListAnim = (finalValue) => {
    Animated.timing(listHeight, {
      toValue: finalValue,
      duration: 200,
      useNativeDriver: false,
      easing: Easing.ease,
    }).start();
  };

  useEffect(() => {
    if (isShown) moveListAnim(300);
    else moveListAnim(0);
  }, [isShown]);

  const tags = [
    { title: "Детектив" },
    { title: "Супергероика" },
    { title: "Триллер" },
    { title: "Драма" },
    { title: "Приключение" },
    { title: "Ужасы" },
  ];

  //Анимацию на FlatList

  return (
    <Animated.FlatList
      style={[styles.list, { height: listHeight }]}
      data={tags}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "#000000" }}></View>
      )}
      keyExtractor={(item, index) => index}
      renderItem={({ item }) => (
        <SelectorItem title={item.title}></SelectorItem>
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
