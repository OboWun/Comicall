import { useNavigation } from "@react-navigation/native";
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
import { NOTES } from "../routes/libraryNavigator";
import Bookmark from "./bookmark";

const PageModal = ({ visiable, handlePage, pageIndex, setBookmark }) => {
  const bottom = useRef(new Animated.Value(-120)).current;

  const navigation = useNavigation();

  useEffect(() => {
    const endValue = visiable ? 0 : -120;
    Animated.timing(bottom, {
      toValue: endValue,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [visiable]);

  const incrementPage = () => handlePage(-1);
  const decrementPage = () => handlePage(1);
  const navToNotes = () => navigation.navigate(NOTES, {pageIndex: pageIndex});

  return (
    <Animated.View style={[styles.modal, { bottom: bottom }]}>
      <View style={styles.wrapper}>
        <Pressable hitSlop = {15} onPress = {decrementPage}>
          <Image
            source={require("../assets/modal/arrow.png")}
            style={{ transform: [{ rotateY: "180deg" }] }}
          ></Image>
        </Pressable>
        <Pressable hitSlop = {15} onPress = {navToNotes}>
          <Image source={require("../assets/modal/notes.png")}></Image>
        </Pressable>
        <Bookmark page = {pageIndex} setBookmark = {setBookmark}/>
        <Pressable hitSlop ={15} onPress={incrementPage}>
          <Image source={require("../assets/modal/arrow.png")}></Image>
        </Pressable>
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
