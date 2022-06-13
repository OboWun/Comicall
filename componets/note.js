import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity, ActivityIndicator } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { LOADING } from "../constants";
import { NOTES_EDIT } from "../routes/libraryNavigator";
import Icon from "../shared/icon";
import { deleteNote } from "../store/comics/asyncActions";

const Note = ({ note, pageNumber, id }) => {

    const navigation = useNavigation();

    const { token } = useSelector(state => state.user);
    const { noteDeleteState } = useSelector(state => state.comics);
    const [isDeleted, setIsDeleted] = useState(false);
    const dispatch = useDispatch();

    const handleRemove = () => {
        setIsDeleted(true);
        dispatch(deleteNote(token, id))
    };

    const handleEdit = () => navigation.navigate(NOTES_EDIT, {note: note, id: id})

    const isDeleting = (noteDeleteState == LOADING) && isDeleted;

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.text, styles.page]}>{`Стр. ${pageNumber + 1}`}</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity
                        hitSlop={10}
                        style={{ marginRight: 20 }}
                        onPress={handleEdit}
                    >
                        <Icon iconImg={require('../assets/icons/edit.png')}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity
                        hitSlop={10}
                        onPress={handleRemove}
                        disabled={isDeleted}
                    >
                        {
                            isDeleting
                                ? <ActivityIndicator></ActivityIndicator>
                                : <Icon iconImg={require('../assets/icons/remove.png')}></Icon>
                        }

                    </TouchableOpacity>
                </View>
            </View>
            <Text style={[styles.text, styles.note]}>{note}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F7F7',
        borderWidth: 1,
        borderColor: '363636',
        borderRadius: 25,
        height: 130,
        overflow: 'scroll',
        flexDirection: 'column',
        alignItems: 'stretch',
        padding: 10,
        marginTop: 21
    },
    text: {
        fontSize: 24,
        lineHeight: 30,

        fontFamily: 'caveat-medium'
    },
    note: {
        color: 'rgba(54, 54, 54, 0.8)',
    },
    page: {
        color: '#363636'
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    icon: {
        height: 20,
        width: 20,
        resizeMode: 'contain'
    }

})

export default Note;