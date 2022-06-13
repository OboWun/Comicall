import { useRoute } from "@react-navigation/native";
import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import EmptyListComponent from "../componets/emptyList";
import Note from "../componets/note";

const NotesScreen = () => {

    const route = useRoute();
    const { notes } = useSelector(state => state.comics);

    //индекс страницы в массиве
    console.log(route.params);

    return (
        <View style={styles.container}>
            <Text>В разработке</Text>
            <FlatList
                data={notes}
                style ={{flex: 1}}
                keyExtractor={(item) => item.id}
                contentContainerStyle = {notes.length == 0 && {flex: 1}}
                renderItem={({ item }) => <Note
                    pageNumber={item.pageNumber}
                    pageId = {item.pageId}
                    note = {item.note}
                />}
                ItemSeparatorComponent ={() => <View style ={{height: 21}}/>}
                ListEmptyComponent = {<EmptyListComponent 
                    tittle ='Пока здесь ничего нет, оставь свою первую заметку...'
                    source = {require('../assets/emptyNotes.png')} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 9,
        paddingVertical: 12
    }
})

export default NotesScreen;