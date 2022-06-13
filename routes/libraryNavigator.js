import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GlobalLibrary from "../screens/globalLibrary";
import Header from "../componets/header";
import BackButton from "../componets/backButton";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserLibrary from "../screens/userLibrary";
import ComicsInfo from "../screens/comicsInformation";
import LibrarySwitchBar from "../componets/librarySwitchBar";
import ComicsScreen from "../screens/comics";
import NotesScreen from "../screens/notesScreen";
import LibraryTabNavigator from "./libraryTabNavigator";


export const COMICS_DESCRIPTION = 'cDesc';
export const READ_COMICS = 'readComics'
export const TAB_LIBRARY = 'tablibrary'
export const NOTES = 'notes'

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
            <LibraryStack.Screen name={TAB_LIBRARY} component={LibraryTabNavigator} />
            <LibraryStack.Screen name={COMICS_DESCRIPTION} component={ComicsInfo} />
            <LibraryStack.Screen name={READ_COMICS} component={ComicsScreen} />
            <LibraryStack.Screen name ={NOTES} component = {NotesScreen}/>
        </LibraryStack.Navigator>
    )
}

export default LibraryNavigator;