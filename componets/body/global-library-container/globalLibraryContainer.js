import React from "react";
import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import GlobalLibraryItem from "./global-library-item/globalLibraryItem";

const GlobalLibraryContainer = ({ data }) => {
  const dataF = [
    {
      image: require("../../../assets/comics/ComicsPosterV2.png"),
      name: "Кроличья нора",
      author: "Автор",
    },
    {
      image: require("../../../assets/comics/ComicsPosterV2.png"),
      name: "Кроличья нора",
      author: "Автор",
    },
    {
      image: require("../../../assets/comics/ComicsPosterV2.png"),
      name: "Кроличья нора",
      author: "Автор",
    },
    {
      image: require("../../../assets/comics/ComicsPosterV2.png"),
      name: "Кроличья нора",
      author: "Автор",
    },
    {
      image: require("../../../assets/comics/ComicsPosterV2.png"),
      name: "Кроличья нора",
      author: "Автор",
    },
    {
      image: require("../../../assets/comics/ComicsPosterV2.png"),
      name: "Кроличья нора",
      author: "Автор",
    },
    {
      image: require("../../../assets/comics/ComicsPosterV2.png"),
      name: "Кроличья нора",
      author: "Автор",
    },
    {
      image: require("../../../assets/comics/ComicsPosterV2.png"),
      name: "Кроличья нора",
      author: "Автор",
    },
  ];

  return (
    <FlatList
      style = {{marginBottom: 50}}
      numColumns={2}
      data={dataF}
      keyExtractor={(item, index) => index}
      columnWrapperStyle={styles.wrapper}
      showsVerticalScrollIndicator = {false}
      renderItem={({ item }) => (
        <GlobalLibraryItem data={item}></GlobalLibraryItem>
      )}
    />
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  pair: {
    justifyContent: "space-between",
    marginBottom: 19,
  },
});

export default GlobalLibraryContainer;
