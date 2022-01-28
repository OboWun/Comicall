import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { useState } from "react/cjs/react.development";
import { useSelector } from "../../../../../hooks/useSelector";
import SelectorBtn from "../../../selector-button/selectorButton";
import SelectorList from "../../../selector-list/selectorList";

const TagSelector = ({tags}) => {

  const { handler, height, angle } = useSelector();

  return (
    <View style={styles.container}>
      <View style = {styles.title}>
        <Text style = {styles.text}>Жанры</Text>
        <View style = {styles.underline}></View> 
      </View>
      <SelectorBtn setIsShown={handler} angle={angle}></SelectorBtn>
      <View style={styles.wrapper}>
        <SelectorList data = {tags} height={height}></SelectorList>
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
  title: {
    position: 'relative'
  },
  text:{
    fontSize: 36,
    lineHeight: 45,
    textAlign:'center',
    color: '#363636',
    fontFamily: 'caveat-bold',
    paddingHorizontal: 9,
    zIndex:5
  },
  underline:{
    position: 'absolute',
    left: 0,
    bottom: 10,
    height: 5,
    width: 179,
    backgroundColor: 'rgba(255, 194, 4, 0.5)'
  }
});

export default TagSelector;
