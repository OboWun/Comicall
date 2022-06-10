import React from 'react'
import { StyleSheet, Text, TextInput, View } from "react-native";

const TextField = ({ label, secureText, valueHandler, value }) => {
    return (
        <View style={styles.fieldGroup}>
            <Text style = {styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                value={value}
                secureTextEntry = {secureText}
                onChangeText={valueHandler}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    fieldGroup: {
        marginBottom: 12
    },

    label: {
        color: '#363636',
        fontSize: 18,
        fontFamily: 'caveat-bold'
    },

    input: {
        paddingHorizontal: 9,
        paddingVertical: 7,
        borderWidth: 2,
        borderColor: '#363636',
        borderRadius: 11,
        backgroundColor: '#F7F7F7',
        width: 285,
        fontWeight: '500',
        fontSize: 15,
        color: 'rgba(54, 54, 54, 0.75)',
        fontFamily: 'caveat-medium'
    },
})

export default TextField;