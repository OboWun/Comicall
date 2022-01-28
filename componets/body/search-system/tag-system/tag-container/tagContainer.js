import React from "react";
import { StyleSheet, View } from "react-native";
import Tag from "./tag/tag";

const TagContainer = ({tags}) => {

    const tagsComponents = tags.map( (item) => <Tag id = {item.id} title = {item.title}></Tag> )

    return (
        <View style = {styles.container}>
            {tagsComponents}
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