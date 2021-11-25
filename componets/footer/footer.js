import React from "react";
import { StyleSheet, View, Text, KeyboardAvoidingView } from "react-native";

const Footer = ({libraryHandler}) =>{
    return (
        <View style = {styles.footer}>
            <Text>Switch</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer:{
        backgroundColor: '#FFC204',
        height: 74
    }
})

export default Footer