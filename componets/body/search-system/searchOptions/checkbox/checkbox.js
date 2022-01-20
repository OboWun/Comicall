import React from "react";
import { Image, StyleSheet, TouchableHighlight, View } from "react-native";

const Checkbox = ({isChecked, setOption}) => {

let checked = null;

if(isChecked){
    checked = <Image source = {require('../../../../../assets/checkbox/checked.png')}></Image>
}

  return (
        <View style = {styles.checkbox} onTouchEnd = {setOption}>
            {checked}
        </View>
   )
}

const styles = StyleSheet.create({
    checkbox: {
        zIndex: 100,
        borderColor: '#363636',
        borderRadius: 6,
        borderWidth: 2,
        borderStyle: 'solid',
        height: 20,
        width: 20, 
        alignItems: 'center',
        justifyContent: 'center'
    }
})

export default Checkbox;