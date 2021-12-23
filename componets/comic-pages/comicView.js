import React, { useContext, useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import ComicPagesList from "./comic-pages-list/comicPagesList";
import { useWindowDimensions } from "react-native";
import Header from "../header/header";
import PageModal from "./page-modal/pageModal";
import BackButton from "../back-button/backButton";
import Information from "./info/info";
import { DataContext } from "./dataContext";
import { AppContex } from "../appContex";
import { pageReducer } from "../../reducers/pageReducer";

const ComicView = ({ navigation, route }) => {
  const window = useWindowDimensions();

  const [visiable, setVisiable] = useState(false);

  const {data, addMarkbook} = useContext(AppContex)
  console.log("data contex: " + data.comics[0].initialPage)
  //Мерзкое прокидывание ref
  const scrollView = useRef();
  
  const {id} = route.params;
  const { author, pages, initialPage } = data.comics[id];

  //const [page, setPage] = useState(initialPage);

  const [page, dispatch] = useReducer(pageReducer, {pages: pages.length, page: initialPage});

  console.log(page.page)

  useLayoutEffect(() => {
    const event  = navigation.addListener('focus', () => {
      scrollView.current.scrollTo({x: window.width * initialPage, y: 0, animated: false});
    });

    return event;
    
  }, [navigation])


  //Обернуть это в хук
  // const toNext = () => {
  //   if (page + 1 < pages.length) {
  //     scrollView.current.scrollTo({
  //       x: window.width * (page + 1),
  //       y: 0,
  //       animated: true,
  //     });
  //     setPage(page + 1);
  //   }
  // };

  // const toPrevious = () => {
  //   if (page - 1 >= 0) {
  //     scrollView.current.scrollTo({
  //       x: window.width * (page - 1),
  //       y: 0,
  //       animated: true,
  //     });
  //     setPage(page - 1);
  //   }
  // };

  // useEffect(() => {
  //   scrollView.current.scrollTo({
  //     x: window.width * page,
  //     y: 0,
  //     animated: true
  //   })
  // }, [page])

  return (
    <DataContext.Provider value = {[data.comics[id], addMarkbook]}>
      <View style={{ height: window.height }} >
        <Header BackBtn={<BackButton navigation={navigation} />} />
        <View style={styles.wrapper}>
          <View onTouchEnd={() => setVisiable(!visiable)}>
            <Information
              information={{
                page: page.page,
                pages: page.pages,
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
                setPage={/*(action) => {
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
                }*/
                dispatch
              }
              />
            </View>
            <View style={{ flex: 1 }}></View>
          </View>
          <PageModal visiable={visiable} toPage={dispatch} id={id} page={page.page} />
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

export default ComicView;
