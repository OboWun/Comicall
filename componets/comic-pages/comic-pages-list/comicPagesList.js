import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  useWindowDimensions
} from "react-native";

const ComicPagesList = ({ pages, initialPage, isModal, inputRef, setPage }) => {
  //Потом делаем initialPage

  //Убрать потом это отсюда и пеедавать везде контекстом
  const window = useWindowDimensions();

  //Вынести в объект картинки
  let imageScale = useRef({
    height: 0,
    width: 0,
  });



  //Вынести в объект картинки
  useEffect(() => {
    const { width, height } = Image.resolveAssetSource(pages[0].page);

    imageScale.current.width = window.width;
    imageScale.current.height = (window.width / width) * height;
  }, []);

  


  const comicPages = pages.map((item, index) => (
    <Image
      key={index}
      style={{
        width: imageScale.current.width,
        height: imageScale.current.height,
      }}
      source={item.page}
      blurRadius={isModal ? 2 : 0} 
    />
  ));

  return (
    <ScrollView 
      ref = {inputRef}
      horizontal={true} 
      pagingEnabled={true} 
      contentContainerStyle = {{alignItems: 'center'}}
      scrollEnabled = {!isModal}
      onScrollEndDrag = {(e) =>{
        const type = e.nativeEvent.velocity.x > 0? 'back': 'next'
        setPage({type: type, payload: false})
      }}
      removeClippedSubviews = {true}
      >
      {comicPages}
    </ScrollView>

  );
};

export default ComicPagesList;
