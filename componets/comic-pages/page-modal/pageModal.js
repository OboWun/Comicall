import React, { useEffect, useRef } from "react";
import {
  Animated,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import Bookmark from "../bookmark/bookmark";

const PageModal = ({ visiable, handlePage, pageIndex, setBookmark }) => {
  const bottom = useRef(new Animated.Value(-120)).current;

  useEffect(() => {
    const endValue = visiable ? 0 : -120;
    Animated.timing(bottom, {
      toValue: endValue,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [visiable]);

  return (
    <Animated.View style={[styles.modal, { bottom: bottom }]}>
      <View style={styles.wrapper}>
        <View onTouchEnd = {() => handlePage(1)}>
          <Image
            source={require("../../../assets/modal/arrow.png")}
            style={{ transform: [{ rotateY: "180deg" }] }}
          ></Image>
        </View>
        <View onTouchEnd = {() => console.log('Создал комментарий')}>
          <Image source={require("../../../assets/modal/notes.png")}></Image>
        </View>
        <Bookmark page = {pageIndex} setBookmark = {setBookmark}/>
        <View onTouchEnd={() => handlePage(-1)}>
          <Image source={require("../../../assets/modal/arrow.png")}></Image>
        </View>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: 104,
    width: "100%",
    backgroundColor: "#BEBEBE",
    position: "absolute",
    zIndex: 10,
  },
  wrapper: {
    marginTop: 19,
    paddingHorizontal: 26,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  actionButtons: {
    padding: 5
  }

});

export default PageModal;
