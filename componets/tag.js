import React from "react";
import { StyleSheet, Text, View } from "react-native";
import DeleteButton from "../shared/deleteButton";

const Tag = ({title, removeTag}) => {

    return (
        <View style = {styles.tag}>
            <Text style = {styles.text}>{title}</Text>
            <DeleteButton action = {removeTag}></DeleteButton>
        </View>
    )
}

const styles = StyleSheet.create({
    tag:{
        marginRight: 12,
        marginBottom: 12,
        paddingHorizontal: 10,
        paddingVertical: 7,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 7,
        backgroundColor: 'rgba(255, 194, 4, 0.25)',
        borderRadius: 15,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {width: 1, height: 1},
        shadowRadius: 1
    },
    text: {
        fontFamily: 'caveat-regular',
        lineHeight: 23,
        fontSize: 18,
        textAlign: 'center',
        marginRight: 12,
        color: '#363636'
    }
})

export default Tag;