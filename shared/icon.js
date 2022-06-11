import React from "react";
import { Image, StyleSheet, View } from "react-native";

const Icon = ({iconImg}) =>{
    return(
    <View style = {styles.icon}>
        <Image style = {styles.image} source = {iconImg}/>
    </View>);
}

const styles = StyleSheet.create({
    icon:{
        height: 25
    },
   image:{
       height: '100%',
       resizeMode: 'contain'
   } 
})

export default Icon;