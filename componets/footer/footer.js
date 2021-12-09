import React from "react";
import { StyleSheet, View} from "react-native";
import Switch from "./switch/switch";

const Footer = ({libraryHandler}) =>{
    return (
        <View style = {styles.footer}>
            <Switch></Switch>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor: '#FFC204',
        height: 74,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Footer