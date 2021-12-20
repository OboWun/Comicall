import React, { useState } from "react";
import { Image, Pressable, StyleSheet, View } from "react-native";
import ComicPagesList from "./comic-pages-list/comicPagesList";
import { useWindowDimensions } from "react-native";
import Header from "../header/header";
import PageModal from "./page-modal/pageModal";

const ComicPage = ({ data }) => {
  const window = useWindowDimensions();

  const [visiable, setVisiable] = useState(false);
  const [page, setPage] = useState(0)

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

  return (
    <View style={{ height: window.height }}>
      <Header BackBtn = {<Image source = {require('../../assets/header/back.png')} style ={{marginRight: 12}}></Image>}/>
        <View style={styles.wrapper} onTouchStart = {() => setVisiable(!visiable)}>
          <ComicPagesList 
          pages={pages}
          page = {page}
          setPage = {setPage}
          isModal = {visiable}/>
          <PageModal visiable={visiable}/>
        </View>
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
