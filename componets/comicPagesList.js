import React from "react";
import {ScrollView} from "react-native";
import Page from "./page";

const ComicPagesList = ({ pages, isModal, inputRef, setPage }) => {

  const swipeEvent = (e) => {
    const sign = Math.sign(e.nativeEvent.velocity.x);
    setPage(sign);
  }

  return (
    <ScrollView 
      ref = {inputRef}
      horizontal={true} 
      pagingEnabled={true} 
      contentContainerStyle = {{alignItems: 'center'}}
      scrollEnabled = {!isModal}
      onScrollEndDrag = {swipeEvent}
      removeClippedSubviews = {true}
      >
        {pages.map(page => <Page key ={page.id} path = {page.imagePath} isModal = {isModal}></Page>)}
    </ScrollView>

  );
};

export default ComicPagesList;
