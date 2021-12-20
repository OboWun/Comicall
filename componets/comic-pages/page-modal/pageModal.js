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

const PageModal = ({ visiable, toPage }) => {
  //Где image, можно заменить компонентов и прокидывать туда action
  //Найти способ автоматически вычислять значени -120(размер блока)
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
        <View onTouchEnd = {() => toPage('prev')}>
          <Image
            source={require("../../../assets/modal/arrow.png")}
            style={{ transform: [{ rotateY: "180deg" }] }}
          ></Image>
        </View>
        <View onTouchEnd = {() => console.log('Создал комментарий')}>
          <Image source={require("../../../assets/modal/notes.png")}></Image>
        </View>
        <View>
          <Image source={require("../../../assets/modal/Bookmark.png")}></Image>
        </View>
        <View onTouchEnd={() => toPage("next")}>
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
});

export default PageModal;
