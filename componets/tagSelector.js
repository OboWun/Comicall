import React from "react";
import { StyleSheet, View, Text, Animated } from "react-native";
import { useSelector } from "../hooks/useSelector";
import Title from "../shared/title";
import SelectorBtn from "./selectorButton";
import SelectorItem from "./selectorItem";

const TagSelector = ({ genres, addGenre }) => {

  const { handler, height, angle } = useSelector();

  return (
    <View style={styles.container}>
      <Title name='Жанры'></Title>
      <SelectorBtn setIsShown={handler} angle={angle}></SelectorBtn>
      <View style={styles.wrapper}>
        <Animated.FlatList
          style={[styles.list, { height: height }]}
          data={genres}
          ItemSeparatorComponent={() => ( <View style={{ height: 1, backgroundColor: "#000000" }}/>)}
          keyExtractor={(item) => item}
          renderItem={({ item }) => ( <SelectorItem genre={item} addGenre = {() => addGenre(item)}/>)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "relative",
  },
  wrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
  },
  list: {
    position: "absolute",
    zIndex: 10,
    top: 0,
    left: 0,
    width: "100%",
  },
});

export default TagSelector;
