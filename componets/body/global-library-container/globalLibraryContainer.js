import React, { useState } from "react";
import { FlatList, View, Text, StyleSheet, ScrollView, Image } from "react-native";
import useData from "../../../hooks/useData";
import Search from "../../search/search";
import EmptyListComponent from "./empty-list-component/emptyList";
import GlobalLibraryItem from "./global-library-item/globalLibraryItem";


const GlobalLibraryContainer = ({navigation, dataFound}) => {

  return (
    <FlatList
      numColumns={2}
      style ={{flex: 1}}
      data={dataFound}
      columnWrapperStyle={styles.wrapper}
      showsVerticalScrollIndicator = {false}
      ListEmptyComponent = {<EmptyListComponent></EmptyListComponent>}
      renderItem={({ item }) => (
        <GlobalLibraryItem data={item}  navigation = {navigation}></GlobalLibraryItem>
      )}/>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 14,
    marginBottom: 19,
  }
});

export default GlobalLibraryContainer;
