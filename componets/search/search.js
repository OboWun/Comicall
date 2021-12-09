import React from "react";
import { StyleSheet, TextInput } from "react-native";

const Search = (searchData) =>{
    return (
        <TextInput
            onLayout = {(e) => {
                console.log(e.nativeEvent.layout.height)
            }}
            style = {styles.search}/>
    )
}

const styles = StyleSheet.create({
    search:{
        backgroundColor: '#F7F7F7',
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#363636',
        marginTop: 11,
        marginHorizontal: 9

    },
    container:{
        borderWidth: 0
    }
})

export default Search;