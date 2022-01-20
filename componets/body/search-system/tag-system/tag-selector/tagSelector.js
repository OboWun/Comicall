import React from "react";
import { StyleSheet, View } from "react-native";
import Selector from "./selector/selector";

const TagSelector = () => {
    return (
        <View style = {styles.contaner}> 
            <Selector></Selector>
        </View>
    )
}

const styles = StyleSheet.create({ 
    contaner: {
        height: 40
    }
})

export default TagSelector;