import React, { useRef, useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import ComicPagesList from "./comic-pages-list/comicPagesList";
import { useWindowDimensions } from "react-native";
import Header from "../header/header";
import PageModal from "./page-modal/pageModal";
import BackButton from "../back-button/backButton";
import Information from "./info/info";

const ComicView = ({ navigation, data }) => {
  const window = useWindowDimensions();

  const [visiable, setVisiable] = useState(false);
  //Мерзкое прокидывание ref
  const scrollView = useRef();

  const [page, setPage] = useState(0);

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

  //Обернуть это в хук
  const toNext = () => {
    if (page + 1 < pages.length) {
      scrollView.current.scrollTo({
        x: window.width * (page + 1),
        y: 0,
        animated: true,
      });
      setPage(page + 1);
    }
  };

  const toPrevious = () => {
    if (page - 1 >= 0) {
      scrollView.current.scrollTo({
        x: window.width * (page - 1),
        y: 0,
        animated: true,
      });
      setPage(page - 1);
    }
  };

  const toPage = (action) => {
    switch (action) {
      case "prev":
        toPrevious();
        break;
      case "next":
        toNext();
        break;
      default:
        break;
    }
  };
  return (
    <View style={{ height: window.height }}>
      <Header BackBtn={ <BackButton navigation = {navigation}/>}/>
      <View style={styles.wrapper}>
        <View onTouchEnd={() => setVisiable(!visiable)}>
          <Information information = {{page: page, pages: pages.length, author: 'Автор'}}></Information>
          <View style={{ flex: 10 }}>
            <ComicPagesList
              pages={pages}
              isModal={visiable}
              inputRef={scrollView}
              page={page}
              setPage={(action) => {
                switch (action) {
                  case "next":
                    if (page + 1 < pages.length) setPage(page + 1);
                    break;
                  case "back":
                    if (page - 1 >= 0) setPage(page - 1);
                    break;
                  default:
                    break;
                }
              }}
            />
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <PageModal visiable={visiable} toPage={toPage} />
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
    position: "relative",
  },
});

export default ComicView;
