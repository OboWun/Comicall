import React, { useState } from "react";
import { Pressable, StyleSheet, View } from "react-native";
import ComicPagesList from "./comic-pages-list/comicPagesList";
import { useWindowDimensions } from "react-native";
import Header from "../header/header";
import PageModal from "./page-modal/pageModal";

const ComicPage = ({ data }) => {
  const window = useWindowDimensions();

  const [visiable, setVisiable] = useState(false);

  const pages = [
    { content: require("../../assets/pages/page.png") },
    { content: require("../../assets/pages/page.png") },
    { content: require("../../assets/pages/page.png") },
    { content: require("../../assets/pages/page.png") },
    { content: require("../../assets/pages/page.png") },
    { content: require("../../assets/pages/page.png") },
    { content: require("../../assets/pages/page.png") },
    { content: require("../../assets/pages/page.png") },
  ];

  console.log(visiable)

  return (
    <View style={{ height: window.height }}>
      <Header />
      <Pressable style={styles.wrapper} onPress = {() => setVisiable(!visiable)}>
        <View >
          <ComicPagesList pages={pages} />
          <PageModal visiable={visiable} setUnvisiable = {() => setVisiable(false)}/>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#000000",
    position: 'relative'
  },
});

export default ComicPage;
