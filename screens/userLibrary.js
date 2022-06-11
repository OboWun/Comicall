import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Text, Button } from 'react-native';
import { COMICS_DESCRIPTION } from "../routes/libraryNavigator";

const UserLibrary = () => {

    const navigation = useNavigation();
    
    const handlePress = () => navigation.navigate(COMICS_DESCRIPTION);

    return (
        <>
            <Button title ='Читать' onPress ={handlePress}></Button>
            <Text>Библиотека</Text>
        </>

    )
}

export default UserLibrary;