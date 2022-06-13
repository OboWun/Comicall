import { useRoute } from "@react-navigation/core";
import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, View, Image, TextInput, TouchableOpacity, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LOADING } from "../constants";
import LoadingIndicator from "../shared/loadingIndicator";
import { editNote } from "../store/comics/asyncActions";

const NoteEditScreen = () => {

    const route = useRoute();
    const inputRef = useRef();
    const { note, id } = route.params;

    const { token } = useSelector(state => state.user);
    const { noteEditState } = useSelector(state => state.comics);

    const dispatch = useDispatch();
    const [noteText, setNoteText] = useState(note)

    const handleNote = (value) => setNoteText(value);

    const updateNote = () => {
        Keyboard.dismiss();
        dispatch(editNote({
            token: token,
            noteId: id,
            note: noteText
        }))
    };

    useEffect(() => {
        inputRef.current.focus();
    }, [id])

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <TouchableOpacity onPress={updateNote} style={styles.icon}>
                    {
                        noteEditState == LOADING
                            ? <LoadingIndicator />
                            : <Image style={styles.icon} source={require('../assets/icons/save.png')} />
                    }

                </TouchableOpacity>
            </View>
            <View style={styles.wrapper}>
                <TextInput
                    ref = {inputRef}
                    multiline
                    value={noteText}
                    style={styles.noteField}
                    onChangeText={handleNote}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 12,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-end'
    },
    icon: {
        height: 32,
        width: 32
    },
    wrapper: {
        padding: 8
    },
    noteField: {
        paddingHorizontal: 12,
        paddingVertical: 16,
        borderRadius: 24,
        backgroundColor: '#F7F7F7',
        shadowColor: "rgba(0, 0, 0, 0.25)",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowRadius: 3,
        elevation: 5,
        color: 'rgba(54, 54, 54, 0.8)',
        fontSize: 24,
        lineHeight: 30,
        fontFamily: 'caveat-medium'
    }
})

export default NoteEditScreen;