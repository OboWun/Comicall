import React, { useEffect, useMemo, useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import DeleteButton from "../delete-button/deleteButton";

const Search = ({setRequest, request }) => {
  const deleteIcon = useMemo(() => Boolean(request) 
    ?<DeleteButton action = {() => setRequest('')}></DeleteButton>
    :null, [request]);

  return (
    <>
      <View style={styles.wrapper}>
        <Image
          style={styles.searchIcon}
          source={require("../../assets/search/search.png")}/>
        <TextInput
          style={styles.search}
          placeholder="Ищите что-то"
          value={request}
          onChangeText={(e) => setRequest(e)}/>
        {deleteIcon}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 11,
    marginHorizontal: 9,
    flexDirection: "row",
    backgroundColor: "#F7F7F7",
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#363636",
    paddingHorizontal: 12,
    alignItems: "center",
  },
  searchIcon: {
    width: 23,
    height: 23,
    marginRight: 7,
  },
  search: {
    flex: 1,
    height: 34
  },
});

export default Search;
