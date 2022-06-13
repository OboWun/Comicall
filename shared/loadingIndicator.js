import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingIndicator = () => {
    return (
        <View style ={styles.wrapper}> 
            <ActivityIndicator color = '#363636'></ActivityIndicator>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default LoadingIndicator;