import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, StyleSheet, View } from "react-native";

const Handler = ({toggle}) =>{ 


    const transformAnim = useRef(new Animated.Value(0)).current;
    useEffect(() =>{
        onToggle()
    }, [toggle])

    const onToggle = () => {
            Animated.timing(transformAnim, {
                toValue: toggle? 0: 75,
                duration: 100,
                easing: Easing.ease,
                useNativeDriver: false
            }).start();
    }

    return (
        <Animated.View style = {[
            styles.handler,
            {
                left: transformAnim 
            }
        ]}>
            <Image source = {require('../../../../assets/switch/Books.png')}/>
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    handler:{
        backgroundColor: "#363636",
        borderRadius: 29,
        height: '100%',
        width: 71,
        justifyContent: 'center',
        alignItems:'center',
        position: 'absolute',

    }
})

export default Handler;