import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TextInput, Image, Pressable, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import EmptyListComponent from "../componets/emptyList";
import Note from "../componets/note";
import { LOADING } from "../constants";
import { createNote } from "../store/comics/asyncActions";
import LoadingIndicator from "../shared/loadingIndicator";
import { NOTES_EDIT } from "../routes/libraryNavigator";

const NotesScreen = () => {

    const route = useRoute();

    const { token } = useSelector(state => state.user);
    const { notes, comics, noteCreateState } = useSelector(state => state.comics);
    const dispatch = useDispatch();

    const { pageIndex } = route.params;

    const [note, setNote] = useState('');

    const createNoteHandler = () => {
        Keyboard.dismiss();
        dispatch(createNote(token, comics.pages[pageIndex].id, pageIndex, note));
    }
    //индекс страницы в массив

    return (
        <View style={styles.container}>
            <View style={styles.textField}>
                <Pressable
                    disabled={noteCreateState == LOADING}
                    style={{ paddingHorizontal: 9 }}
                    hitSlop={10}
                    onPress={createNoteHandler}>
                    {
                        noteCreateState == LOADING
                            ? <LoadingIndicator />
                            : <Image style={{ height: 20, width: 20 }} source={require('../assets/icons/addNote.png')} />
                    }

                </Pressable>
                <TextInput
                    onSubmitEditing={createNoteHandler}
                    onChangeText={e => setNote(e)}
                    value={note}
                    style={styles.input}
                    multiline 
                    placeholder ='Настрочи заметку)'
                    placeholderTextColor = '#363636'/>
            </View>

            <FlatList
                data={notes}
                style={{ flex: 1 }}
                keyExtractor={(item) => item.id}
                contentContainerStyle={notes.length == 0 && { flex: 1 }}
                renderItem={({ item }) => <Note
                    pageNumber={item.pageNumber}
                    pageId={item.pageId}
                    note={item.note}
                    id={item.id}
                />}
                ListEmptyComponent={<EmptyListComponent
                    tittle='Пока здесь ничего нет, оставь свою первую заметку...'
                    source={require('../assets/emptyNotes.png')} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 9,
        paddingVertical: 12
    },
    textField: {
        padding: 6,
        backgroundColor: '#F7F7F7',
        borderRadius: 11,
        borderWidth: 2,
        borderColor: '#363636',
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        fontFamily: 'caveat-bold',
        color: '#363636',
        flex: 1,
        fontSize: 18,
        lineHeight: 23
    }
})

export default NotesScreen;