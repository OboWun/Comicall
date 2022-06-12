import React from "react";
import { StyleSheet, View, Text } from "react-native";

const CIRCLE_RADIUS = 16


const Genre = ({ name }) => {
    return (
        <View style ={{ overflow: 'hidden', marginRight: 5}}>
            <View style={styles.container}>
                <View style={[styles.circle, styles.left]}></View>
                <Text style={styles.text}>{name}</Text>
                <View style={[styles.circle, styles.right]}></View>
            </View>
        </View>

    )
}

const styles = StyleSheet.create({

    circle: {
        position: 'absolute',
        borderWidth: 2,
        borderColor: '#363636',
        backgroundColor: '#FFFFFF',
        borderRadius: 100,
        height: CIRCLE_RADIUS,
        width: CIRCLE_RADIUS
    },

    left: {
        left: -CIRCLE_RADIUS/2,
        zIndex: 10
    },
    right:{
        right: -CIRCLE_RADIUS/2,
        zIndex: 10
    },

    container: {
        backgroundColor: '#FFC204',
        borderWidth: 2,
        borderColor: '#363636',
        position: 'relative',
        paddingHorizontal: 13,
        height: 35,

        flexDirection: 'row',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#363636',
        fontFamily: 'caveat-medium'
    }
})

export default Genre;