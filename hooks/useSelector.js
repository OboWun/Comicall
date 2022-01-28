import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Animated, Easing } from "react-native";

export const useSelector = () => {
    const [isShown, setIsShown] = useState(false);

    const animState = {
        rotating: {
            start: 0,
            end: 180
        },
        interpolatedRotating:{
            start: '0deg',
            end: '180deg'
        },
        deployment:{
            start: 0,
            end: 300
        }
    }

    const angle = useRef(new Animated.Value(0)).current;
    const height = useRef(new Animated.Value(0)).current;

    const inputRange = [0, 180]
    const outputRange = ['0deg', '180deg']

    const interpolatedAngle = angle.interpolate({inputRange: inputRange, outputRange: outputRange})

    const getAnimConfig = (animation) => {
        return {
            duration: 200,
            easing:Easing.ease,
            useNativeDriver: false,
            toValue: isShown? animation.end: animation.start
        }
    }

    useEffect(() => {
        Animated.parallel([
            Animated.timing(angle, getAnimConfig(animState.rotating)),
            Animated.timing(height, getAnimConfig(animState.deployment))
        ]).start()
    }, [isShown])

    return {
        handler: () => setIsShown(!isShown),
        angle: interpolatedAngle,
        height: height
    }
}