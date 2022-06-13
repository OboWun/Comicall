import React from "react";
import { Pressable, StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import Icon from "../shared/icon";

const Note = ({ note, pageNumber }) => {


    const dispatch = useDispatch();


    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={[styles.text, styles.page]}>{`Стр. ${pageNumber + 1}`}</Text>
                <View style ={{flexDirection: 'row'}}>
                    <TouchableOpacity
                        hitSlop={10}
                        style={{ marginRight: 20 }}
                        onPress={() => console.log('ред')}
                    >
                        <Icon iconImg={require('../assets/icons/edit.png')}></Icon>
                    </TouchableOpacity>
                    <TouchableOpacity
                        hitSlop={10}
                        onPress = {() => console.log('удаление')}
                    >
                        <Icon iconImg={require('../assets/icons/remove.png')}></Icon>
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
        padding: 10
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