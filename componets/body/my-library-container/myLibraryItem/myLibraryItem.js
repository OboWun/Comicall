import React from "react"; 
import { Image, StyleSheet, View } from "react-native";

const MyLibraryItem = ({data}) =>{
    return (
        <View style = {styles.card}> 
            <View style = {styles.leftFlex}>
                <Image
                    style = {styles.image}
                    source = {require('../../../../assets/comics/ComicsPoster.png')}/>
            </View>
            <View style = {styles.rightFlex}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        paddingVertical: 8,
        paddingLeft: 20,
        paddingRight: 5,
        
    },
    image:{
        width: '100%'
    },
    leftFlex:{
        width: 113,
        height: 160,
        marginRight: 39
    },
    rightFlex:{
        flex: 1,
        maxHeight: 150,
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        textAlign: "left"
    }
})