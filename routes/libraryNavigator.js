import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GlobalLibrary from "../screens/globalLibrary";
import ComicRead from "../pages/comicsRead";
import Header from "../componets/header/header";
import BackButton from "../componets/backButton";

export const GLOBAL_LIBRARY = 'glLibrary';
export const USER_LIBRARY = 'uLibrary';
export const COMICS_DESCRIPTION = 'cDesc';
export const READ_COMICS = 'readComics'

const LibraryStack = createNativeStackNavigator();

const LibraryNavigator = () => {
    return (
        <LibraryStack.Navigator
            screenOptions={{
                animation: 'slide_from_left',
                presentation: 'card',
                header: ({ navigation, back }) => <Header backButton={back ? <BackButton navigation={navigation} /> : null}></Header>,
            }}
        >
            <LibraryStack.Screen name={GLOBAL_LIBRARY} component={GlobalLibrary} />
            <LibraryStack.Screen name={READ_COMICS} component={ComicRead} />
        </LibraryStack.Navigator>
    )
}

export default LibraryNavigator;