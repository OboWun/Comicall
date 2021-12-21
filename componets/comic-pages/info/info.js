import React, { useRef, useState } from "react";

import { Image, StyleSheet, View, Text } from "react-native";

const Information = ({information}) => {

    const {page, pages, author} = information;
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.group}>
        <View>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.pages}>
            {pages - page - 1} стр. до конца комикса
          </Text>
        </View>
        <View>
          <Image source={require('../../../assets/modal/BookmarkBig.png')}></Image>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  group: {
    padding: 9,
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "flex-start",
  },
  author: {
    fontSize: 18,
    lineHeight: 23,
    textAlign: "left",
    color: "#F7F7F7",
    fontFamily: "caveat-regular",
  },
  pages: {
    fontSize: 12,
    lineHeight: 15,
    textAlign: "left",
    color: "#F7F7F7",
    fontFamily: "caveat-regular",
  },
});

export default Information;