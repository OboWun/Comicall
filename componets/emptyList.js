import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const EmptyListComponent = ({tittle, source}) => {
    return (
        <View style = {styles.container}>
            <View style = {styles.wrapper}> 
                <Text style = {styles.text}>{tittle}</Text>
                <Image style = {styles.image} source = {source}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 33,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'

    },
    wrapper: {
        alignItems: 'center',
    },
    text: {
        fontFamily: 'caveat-regular',
        fontSize: 24,
        lineHeight: 30,
        textAlign: 'center',
        color: 'rgba(54, 54, 54, 0.6)'
    },
    image:{
        marginTop: 50
    }
})

export default EmptyListComponent;