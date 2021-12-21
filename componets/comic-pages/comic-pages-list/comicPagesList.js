import React, { useEffect, useRef, useState } from "react";
import {
  Image,
  ScrollView,
  useWindowDimensions
} from "react-native";

const ComicPagesList = ({ pages, page, isModal, inputRef, setPage }) => {
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
        const action = e.nativeEvent.velocity.x > 0? 'back': 'next'
        setPage(action)
      }}>
      {comicPages}
    </ScrollView>
  );
};

export default ComicPagesList;
