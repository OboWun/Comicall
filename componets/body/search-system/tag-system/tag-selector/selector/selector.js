import React, { useRef, useState } from "react";
import { Animated, Easing, FlatList, StyleSheet, Text, View } from "react-native";
import SelectorItem from "../selectorItem";

const LINE_WIDTH = 4;

const Selector = () => {
  const [isShown, setIsShown] = useState(false);

  const listHeight = useRef(new Animated.Value(0)).current;

  let shownStyle = {};

  const moveListAnim = (finalValue) => {
    Animated.timing(listHeight, {
      toValue: finalValue,
      duration: 500,
      useNativeDriver: false,
      easing: Easing.ease
    }).start();
  };

  const showEvent = () => {
    const isShownTemp = !isShown;

    return () => {
      if (isShownTemp) moveListAnim(300);
      else moveListAnim(0);
      setIsShown(isShownTemp);
    };
  };

  const tags = [
    { title: "Детектив" },
    { title: "Супергероика" },
    { title: "Триллер" },
    { title: "Драма" },
    { title: "Приключение" },
    { title: "Ужасы" },
  ];

  if (isShown) {
    shownStyle = {
      transform: [{ rotate: "180deg" }],
    };
  }

  //Анимацию на FlatList

  return (
    <View style={styles.container}>
      <View
        style={[styles.icon, shownStyle]}
        onTouchStart={showEvent()}
      >
        <View style={[styles.line, styles.left]}></View>
        <View style={[styles.line, styles.right]}></View>
      </View>
      {isShown ? (
        <Animated.FlatList
          style={{ height: listHeight, zIndex: 10 }}
          data={tags}
          ItemSeparatorComponent={() => (
            <View style={{ height: 1, backgroundColor: "#000000" }}></View>
          )}
          renderItem={({ item, index }) => (
            <SelectorItem title={item.title} id={index}></SelectorItem>
          )}
        />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
  },
  icon: {
    flexDirection: "row",
    width: 26,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 18,
    height: LINE_WIDTH,
    backgroundColor: "#363636",
    borderRadius: 25,
  },
  left: {
    transform: [
      { rotate: "45deg" },
      { translateX: LINE_WIDTH / (Math.sqrt(2) / 2) },
    ],
  },
  right: {
    transform: [
      { rotate: "-45deg" },
      { translateX: -(LINE_WIDTH / (Math.sqrt(2) / 2)) },
    ],
  },
});

export default Selector;
