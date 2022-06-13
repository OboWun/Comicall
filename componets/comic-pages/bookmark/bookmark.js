import React, { useContext } from "react";
import useData from "../../../hooks/useData";
import { ActivityIndicator, Image, Pressable, View } from "react-native";
import { DataContext } from "../dataContext";
import { useSelector } from "react-redux";
import { LOADING } from "../../../constants";

const Bookmark = ({ page, setBookmark }) => {


  const { updatingMarkState, comics } = useSelector(state => state.comics);

  const bookmark = comics.bookmark;

  const bookmarkHandler = () => {
    if (bookmark == page) setBookmark(0);
    else setBookmark(page);
  };

  const buildBookmark = () => {
    if (updatingMarkState == LOADING) return <ActivityIndicator size='small' />;
    if (bookmark == page) return <Image source={require("../../../assets/modal/activeBookmark.png")} />;
    return <Image source={require("../../../assets/modal/Bookmark.png")} />;
  }

  return (
    <Pressable onPressOut = {bookmarkHandler} hitSlop ={4}>
      <View style={{ zIndex: 1000 }}>
        {buildBookmark()}
      </View>
    </Pressable>

  );
};

export default Bookmark;
