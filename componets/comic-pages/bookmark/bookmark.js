import React, { useContext } from "react";
import useData from "../../../hooks/useData";
import { Image, View } from "react-native";
import { DataContext } from "../dataContext";

const Bookmark = ({page }) => {
  let bookmarkIcon = (
    <Image source={require("../../../assets/modal/Bookmark.png")} />
  );

  const [data, addMarkbook] = useContext(DataContext);
  const {initialPage, id} = data

  if (initialPage == page)
    bookmarkIcon = (<Image source={require("../../../assets/modal/activeBookmark.png")} /> );

  const setMarkbook = (id, page) => {
    if (initialPage == page) return () => addMarkbook(id, 0);
    return () => addMarkbook(id, page);
  };

  return (
    <View style={{ zIndex: 1000 }} onTouchEnd = {setMarkbook(id, page)}>
      {bookmarkIcon}
    </View>
  );
};

export default Bookmark;
