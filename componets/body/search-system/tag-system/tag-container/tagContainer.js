import React from "react";
import { StyleSheet, View } from "react-native";
import Tag from "./tag/tag";

const TagContainer = ({genres, removeGenre}) => {

    const removeHandler = (genre) => () => removeGenre(genre)

    return (
        <View style = {styles.container}>
            {genres.map( (item) => <Tag removeTag = {removeHandler(item)} title = {item}></Tag> )}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        paddingHorizontal: 15,
    }
})

export default TagContainer;