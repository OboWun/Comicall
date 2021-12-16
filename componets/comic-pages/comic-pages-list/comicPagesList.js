import React, { useEffect, useRef, useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  useWindowDimensions,
  View,
} from "react-native";

const ComicPagesList = ({ pages }) => {
  //Потом делаем initialPage
  const [page, setPage] = useState(0);

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
      onPressIn={(evt) => (touch.start = evt.nativeEvent.locationX)}
      onPressOut={(evt) => {
        touch.end = evt.nativeEvent.locationX;
        onSwipe();
      }}
    >
      <View>
        <Image style = {{width: imageScale.current.width, height: imageScale.current.height}} source={pages[page].content} />
      </View>
    </Pressable>
  );
};

export default ComicPagesList;
