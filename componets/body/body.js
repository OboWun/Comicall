import React from "react";
import { ImageBackground, StyleSheet, View } from "react-native";

const Body = ({children}) =>{
    const item = children();
    return (
        <View style = {styles.body}>
            <ImageBackground 
                style = {styles.background} 
                resizeMode = "cover" 
                source = {require('../../assets/background/background.png')}>
               {item} 
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1
    },
    background:{
        flex: 1
    }
})

export default Body;