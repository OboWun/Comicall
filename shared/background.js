import React from "react";
import { ImageBackground, StyleSheet } from "react-native";


const Background = (props) => {
    return (
        <ImageBackground
            style = {styles.background}
            resizeMode = "cover" 
            source = {require('../assets/background/background.png')}
        >
            {props.children}
        </ImageBackground>
    )
    
}
const styles = StyleSheet.create({
    background:{
        flex: 1
    }
})

export default Background;