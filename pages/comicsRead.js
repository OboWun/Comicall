import React, { useContext, useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import ComicPagesList from "../componets/comic-pages/comic-pages-list/comicPagesList";
import { useWindowDimensions } from "react-native";
import Header from "../componets/header/header";
import PageModal from "../componets/comic-pages/page-modal/pageModal";
import BackButton from "../componets/backButton";
import Information from "../componets/comic-pages/info/info";
import { DataContext } from "../componets/comic-pages/dataContext";
import { AppContex } from "../componets/appContex";
import { pageReducer } from "../reducers/pageReducer";

const ComicRead = ({ navigation, route }) => {
  const window = useWindowDimensions();

  const [visiable, setVisiable] = useState(false);

  const {data, addMarkbook} = useContext(AppContex)
  //Мерзкое прокидывание ref
  const scrollView = useRef();
  
  const {id} = route.params;
  const { author, pages, initialPage } = data.comics[id];

  const [state, dispatch] = useReducer(pageReducer, {pages: pages.length, page: initialPage, animated: false});

  useLayoutEffect(() => {
    const event  = navigation.addListener('focus', () => {
      scrollView.current.scrollTo({x: window.width * initialPage, y: 0, animated: false});
    });
    return event;
  }, [navigation])

  useEffect(() => {
    scrollView.current.scrollTo({
      x: window.width * state.page,
      y: 0,
      animated: state.animated
    })
  }, [state.page])

  return (
    <DataContext.Provider value = {[data.comics[id], addMarkbook]}>
      <View style={{ height: window.height }} >
        <View style={styles.wrapper}>
          <View onTouchEnd={() => setVisiable(!visiable)}>
            <Information
              information={{
                page: state.page,
                pages: state.pages,
                author: author,
                id: id,
              }}
            ></Information>
            <View style={{ flex: 10 }}>
              <ComicPagesList
                pages={pages}
                isModal={visiable}
                inputRef={scrollView}
                initialPage={data.comics[id].initialPage}
                setPage={ dispatch}/>
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <PageModal visiable={visiable} toPage={dispatch} id={id} page={state.page} />
        </View>
      </View>
    </DataContext.Provider>
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

export default ComicRead;
