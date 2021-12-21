import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import useData from "../../../../hooks/useData";

const GlobalLibraryItem = ({ data, navigation,  }) => {
  
  const{title, author, id} = data

  return (
    <View style={styles.container} key = {id} onTouchEnd = {() => navigation.navigate('Comic', {
      data: data
    })}>
      <View style = {styles.wrapper}>
        <Image
          style={{ width: "100%", resizeMode: "contain" }}
          source = {data.pages[0].page}
        ></Image>
      </View>
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.author}>{author}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 160,
  },
  wrapper:{
    height: 202
  },
  name: {
    fontSize: 18,
    lineHeight: 23,
    color: "#363636",
    textAlign: "left",
    fontFamily: 'caveat-bold'
  },
  author: {
    fontSize: 13,
    lineHeight: 16,
    color: 'rgba(54, 54, 54, 0.75)',
    textAlign: "left",
    fontFamily: 'caveat-regular'
  },
});

export default GlobalLibraryItem;
