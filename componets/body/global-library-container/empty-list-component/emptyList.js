import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

const EmptyListComponent = () => {
    return (
        <View style = {styles.container}>
            <View style = {styles.wrapper}> 
                <Text style = {styles.text}>Упс... Кажется такого комикса нет в нашей библиотеке</Text>
                <Image style = {styles.image} source = {require('../../../../assets/empty-result/emptyResult.png')}></Image>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 33,
    },
    wrapper: {
        marginTop: 52,
        alignItems: 'center'
    },
    text: {
        fontFamily: 'caveat-regular',
        fontSize: 24,
        lineHeight: 30,
        textAlign: 'center',
        color: 'rgba(54, 54, 54, 0.6)'
    },
    image:{
        marginTop: 100
    }
})

export default EmptyListComponent;