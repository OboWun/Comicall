import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  useWindowDimensions,
  View,
} from "react-native";

const ComicPagesList = ({ pages, page, setPage, isModal}) => {
  //Потом делаем initialPage

  //Убрать потом это отсюда и пеедавать везде контекстом
  const window = useWindowDimensions();

  //Вынести в объект картинки
  let imageScale = useRef({
    height: 0,
    width: 0,
  });

  const touch = useRef({
    start: null,
    end: null,
  }).current;

  //Вынести в объект картинки
  useEffect(() => {
    const { width, height } = Image.resolveAssetSource(pages[0].content);

    imageScale.current.width = window.width;
    imageScale.current.height = (window.width / width) * height;
  }, []);


  //Грязно, сделать либо хук, либо компонент обертку
  const onSwipe = () => {
    if (touch.start - touch.end > 0 && page + 1 < pages.length)
      setPage(page + 1);
    else if (touch.start - touch.end < 0 && page - 1 >= 0) setPage(page - 1);
  };

  return (
    <Pressable
      style ={{zIndex: 10}}
      onPressIn={(evt) => (touch.start = evt.nativeEvent.locationX)}
      onPressOut={(evt) => {
        touch.end = evt.nativeEvent.locationX;
        onSwipe();
      }}
    >
      <View >
          <Image style = {{width: imageScale.current.width, height: imageScale.current.height}} source={pages[page].content} blurRadius = {isModal?2:0}/>
      </View>
    </Pressable>
  );
};

export default ComicPagesList;
