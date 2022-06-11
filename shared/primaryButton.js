import React from 'react'
import { StyleSheet, TouchableHighlight, View, Text, ActivityIndicator } from 'react-native'
import { LOADING } from '../constants'

const PrimaryButton = ({ title, eventHandlet, isLoading }) => {
    return (
        <TouchableHighlight
            disabled={isLoading}
            activeOpacity={0.3}
            underlayColor="#DDDDDD"
            onPress={eventHandlet}>
            <View style={styles.submitButton}>
                {isLoading
                    ? <ActivityIndicator size='small'></ActivityIndicator>
                    : <Text style={styles.submitText}>{title}</Text>
                }
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    submitText: {
        fontSize: 24,
        lineHeight: 30,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'caveat-medium'
    },

    submitButton: {
        backgroundColor: '#FFC204',
        borderWidth: 1,
        borderColor: '#363636',
        borderRadius: 14,
        shadowColor: "rgba(255, 194, 4, 0.25)",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 3,
        shadowRadius: 1,
        elevation: 2,
        width: 175,
        color: '#363636',
        fontWeight: '700',
        height: 36
    },
})

export default PrimaryButton;