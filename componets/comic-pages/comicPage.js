import React, { useRef, useState } from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import ComicPagesList from "./comic-pages-list/comicPagesList";
import { useWindowDimensions } from "react-native";
import Header from "../header/header";
import PageModal from "./page-modal/pageModal";

const ComicPage = ({ data }) => {
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
  const toNext = () =>{
    if(page + 1 < pages.length){
      scrollView.current.scrollTo({x:window.width * (page+1), y:0, animated: true })
      setPage(page+1)
    }
  }

  const toPrevious = () =>{
    
    if(page -1 >= 0){
      scrollView.current.scrollTo({x:window.width * (page-1), y:0, animated: true })
      setPage(page-1)
    }
  }

  const toPage = (action) =>{
    switch (action){
      case 'prev':
        toPrevious();
        break;
      case 'next':
        toNext();
        break;
      default:
        break;
    }
  }
  return (
    <View style={{ height: window.height }}>
      <Header
        BackBtn={
          <Image
            source={require("../../assets/header/back.png")}
            style={{ marginRight: 12 }}
          ></Image>
        }
      />
      <View style={styles.wrapper} >
        <View onTouchEnd={() => setVisiable(!visiable)}>
          <View style = {{flex: 1}}>
            <View style= {styles.group}>
              <View>
                <Text style = {styles.author}>Автор</Text>
                <Text style = {styles.pages}>{pages.length - page -1} стр. до конца комикса</Text>
              </View>
              <View>
                <Image source = {require('../../assets/modal/BookmarkBig.png')}></Image>
              </View>
            </View>
          </View>
          <View style = {{flex: 10}}>
            <ComicPagesList pages={pages} isModal={visiable} inputRef = {scrollView} page = {page} setPage = {(action) => {
              switch(action){
                case 'next':
                  if(page + 1< pages.length)
                    setPage(page + 1)
                  break;
                case 'back':
                  if(page -1 >= 0)
                    setPage(page -1)
                  break;
                default:
                  break;
              }
            } }/>
          </View>
          <View style ={{flex: 1}}></View>
        </View>
        
        <PageModal visiable={visiable} toPage = {toPage}/>
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
    position: 'relative'
  },
  group:{
    padding: 9,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  author:{
    fontSize: 18,
    lineHeight: 23,
    textAlign: 'left',
    color: '#F7F7F7'
  },
  pages:{
    fontSize: 12,
    lineHeight: 15,
    textAlign: 'left',
    color: '#F7F7F7'
  }
});

export default ComicPage;
