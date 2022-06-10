import React from "react";
import { StyleSheet, View, Text } from "react-native";

const Title = ({ name }) => {

    return (
        <View style={styles.title}>
            <Text style={styles.text}>{name}</Text>
            <View style={styles.underline}></View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        position: 'relative',
    },
    text: {
        fontSize: 36,
        lineHeight: 45,
        textAlign: 'center',
        color: '#363636',
        fontFamily: 'caveat-bold',
        paddingHorizontal: 9,
        zIndex: 5,
        paddingHorizontal: 5
    },
    underline: {
        position: 'absolute',
        left: 0,
        bottom: 10,
        height: 5,
        width: 179,
        backgroundColor: 'rgba(255, 194, 4, 0.5)'
    }
})

export default Title;