import { useNavigation } from "@react-navigation/native";
import React, { useMemo } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { CONNECTION } from "../../../../constants";
import { COMICS_DESCRIPTION } from "../../../../routes/libraryNavigator";

const GlobalLibraryItem = ({ comics }) => {

  const navigation = useNavigation();

  const { name, authorName, id, posterPath } = comics

  const clearPath = useMemo(() => posterPath
    .split('')
    .map(symbol => symbol === '\\' ? '/' : symbol)
    .join(''), [posterPath]);

  return (
    <View style={styles.container} key={id} onTouchEnd={() => navigation.navigate(COMICS_DESCRIPTION)}>
      <View style={styles.wrapper}>
        <Image
          style={{ width: 160, height: 202, resizeMode: "contain" }}
          source={{ uri: `${CONNECTION}/storage/?path=${clearPath}` }}
        ></Image>
      </View>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.author}>{authorName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: 160,
  },
  wrapper: {
    height: 202
  },
  name: {
    fontSize: 18,
    lineHeight: 23,
    color: "#363636",
    textAlign: "center",
    fontFamily: 'caveat-bold'
  },
  author: {
    fontSize: 13,
    lineHeight: 16,
    color: 'rgba(54, 54, 54, 0.75)',
    textAlign: "center",
    fontFamily: 'caveat-regular'
  },
});

export default GlobalLibraryItem;
