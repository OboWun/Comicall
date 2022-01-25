import React, { useEffect, useRef } from "react";
import { Animated, Easing, StyleSheet, Text, View } from "react-native";

const LINE_WIDTH = 4;

const SelectorBtn = ({ isShown, setIsShown }) => {

  const angle= useRef(new Animated.Value(0)).current

  const interpolatedAngle = angle.interpolate( {inputRange: [0, 180], outputRange: ['0deg', '180deg' ] } )
  
  const rotateAnim = (endValue) => {
    Animated.timing(angle, {
      toValue: endValue, 
      easing: Easing.ease,
      useNativeDriver: false,
      duration: 200
    }).start();
  }; 
 
  useEffect(() => {
    if(isShown) rotateAnim(180)
    else rotateAnim(0)
  }, [isShown])

  return (
    <Animated.View style={[styles.icon, {transform: [{ rotate: interpolatedAngle}]}]} onTouchStart={setIsShown}>
      <View style={[styles.line, styles.left]}></View>
      <View style={[styles.line, styles.right]}></View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  icon: {
    flexDirection: "row",
    width: 26,
    height: 26,
    alignItems: "center",
    justifyContent: "center",
  },
  line: {
    width: 18,
    height: LINE_WIDTH,
    backgroundColor: "#363636",
    borderRadius: 25,
  },
  left: {
    transform: [
      { rotate: "45deg" },
      { translateX: LINE_WIDTH / (Math.sqrt(2) / 2) },
    ],
  },
  right: {
    transform: [
      { rotate: "-45deg" },
      { translateX: -(LINE_WIDTH / (Math.sqrt(2) / 2)) },
    ],
  },
});

export default SelectorBtn;
