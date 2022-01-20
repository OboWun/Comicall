import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Checkbox from "./checkbox/checkbox";

const SearchOptions = ({isTitleSearch, setOption}) => {
  return (
    <View style = {styles.container}>
      <Text> Поиск по: </Text>
      <View style = {styles.wrapper}>
        <View style = {styles.group}>
          <Checkbox isChecked = {!isTitleSearch} setOption = {setOption}></Checkbox>
          <Text style = {styles.title}>автор</Text>
        </View>
        <View style = {styles.group}>
          <Checkbox isChecked = {isTitleSearch} setOption = {setOption}></Checkbox>
          <Text style = {styles.title}>названию</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 36,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 7
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1
  },
  group: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  title: {
    marginLeft: 3
  }
});

export default SearchOptions
