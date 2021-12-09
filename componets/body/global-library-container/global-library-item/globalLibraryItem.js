import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {Font} from 'expo';

// const fonts = () => Font.loadAsync({
//   'Caveat-bold': require('../../../../assets/fonts/Caveat-Bold.ttf'),
//   'Caveat-regular': require('../../../../assets/fonts/Caveat-Regular.ttf')
// })


const GlobalLibraryItem = ({ data }) => {
  return (
    <View style={styles.container}>
      <View style = {styles.wrapper}>
        <Image
          style={{ width: "100%", resizeMode: "contain" }}
          source={data.image}
        ></Image>
      </View>
      <Text style={styles.name}>{data.name}</Text>
      <Text style={styles.author}>{data.author}</Text>
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
    // fontFamily: 'Caveat-bold'
  },
  author: {
    fontSize: 13,
    lineHeight: 16,
    // color: rgba(54, 54, 54, 0.75),
    textAlign: "left",
  },
});

export default GlobalLibraryItem;
