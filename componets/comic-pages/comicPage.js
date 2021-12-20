import React, { useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import ComicPagesList from "./comic-pages-list/comicPagesList";
import { useWindowDimensions } from "react-native";
import Header from "../header/header";
import PageModal from "./page-modal/pageModal";

const ComicPage = ({ data }) => {
  const window = useWindowDimensions();

  const [visiable, setVisiable] = useState(false);
  const [page, setPage] = useState(0)

  const [gestureState, setGestureState] = useState(null)



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
        <View style={styles.wrapper} onTouchEnd = {() =>  setVisiable(!visiable)} >
          <ComicPagesList 
          pages={pages}
          isModal = {visiable}/>

          {/* <View style = {{
            height: 104,
            width: "100%",
            backgroundColor: "#BEBEBE",
            position: "absolute",
            zIndex: 10,
            bottom: 0,
          }}
          onTouchEnd = {() => console.log('modal')}>
            <Text>Improvised modal</Text>
          </View> */}
        </View>
        <PageModal visiable={visiable}/>
        
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#000000",
  },
});

export default ComicPage;
