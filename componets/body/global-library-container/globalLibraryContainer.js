import React from "react";
import { FlatList, View, Text, StyleSheet, ScrollView } from "react-native";
import useData from "../../../hooks/useData";
import GlobalLibraryItem from "./global-library-item/globalLibraryItem";

const GlobalLibraryContainer = ({navigation}) => {

  const {data} = useData()



  return (
    <FlatList
      style = {{marginBottom: 30}}
      numColumns={2}
      data={data.comics}
      columnWrapperStyle={styles.wrapper}
      showsVerticalScrollIndicator = {false}
      renderItem={({ item }) => (
        <GlobalLibraryItem data={item} navigation = {navigation}></GlobalLibraryItem>
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
