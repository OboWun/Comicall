import React from "react";
import { View } from "react-native";

const Body = ({children}) =>{
    const item = children();
    return (
        <View>
            {item}
        </View>
    )
}

export default Body;