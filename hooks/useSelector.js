import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";

export const useSelector = (something) => {
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

    const inputRange = [animState.rotating.start, animState.rotating.end]
    const outputRange = ['0deg', '180deg']

    const interpolatedAngle = angle.interpolate({inputRange, outputRange})

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
            Animated.timing(angle, getAnimConfig(animState.interpolatedRotating),
            Animated.timing(height, getAnimConfig(animState.deployment)))
        ]).start()
    }, [isShown])



    return {
        handler: () => setIsShown(!isShown),
        angle: interpolatedAngle,
        height: height
    }
}