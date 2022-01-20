import React from "react";
import { StyleSheet, Text, View } from "react-native";

const SelectorItem = ({title, act, count, id}) => {
    return (
        <View style = {styles.item} key = {id}> 
            <Text style = {styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    item: {
        paddingHorizontal: 9,
        paddingVertical: 12,
        backgroundColor: '#F7F7F7',
        shadowColor: 'rgba(0, 0, 0, 0.5)',
        shadowRadius: 5
    }, 
    title: {
        color: '#000000',
        fontSize: 24,
        lineHeight: 30,
        textAlign: 'center',
        fontFamily: 'caveat-regular'
    }
})

export default SelectorItem