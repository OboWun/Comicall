import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useContext } from "react/cjs/react.development";
import { SearchContex } from "../../searchContex";


//Переделать это в TagSelectorItem, который обертка над SelectorItem
const SelectorItem = ({tag, count}) => {

    const {addTag} =  useContext(SearchContex)

    return (
        <View style = {styles.item} onTouchEnd = {addTag({...tag})}> 
            <Text style = {styles.title}>{tag.title}</Text>
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