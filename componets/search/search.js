import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";

const Search = (searchData) => {
  const [request, setRequest] = useState();

  return (
    <View>
      <View style={styles.wrapper}>
        <View style = {styles.flexGroup}>
          <Image
            style={[styles.searchIcon, styles.icon]}
            source={require("../../assets/search/search.png")}
          />
          <TouchableWithoutFeedback>
            <Image
              source={require("../../assets/search/delete.png")}
              style={[styles.deleteIcon, styles.icon]}
            />
          </TouchableWithoutFeedback>
        </View>
        <TextInput style={styles.search} placeholder="Ищите что-то" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    marginTop: 11,
    marginHorizontal: 9,
  },
  search: {
    backgroundColor: "#F7F7F7",
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#363636",

    paddingLeft: 42,
  },
  container: {
    borderWidth: 0,
  },
  icon: {
    position: "absolute",
    zIndex: 10,
  },
  searchIcon: {
    zIndex: 10,
  },
  deleteIcon: {
    right: 0,
  },
  flexGroup:{
      alignItems: 'flex-start',
      justifyContent: 'space-between',
      flexDirection:'row'
  }
});

export default Search;
