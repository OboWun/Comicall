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
import { TouchableOpacity, Image } from "react-native";
import { useDispatch } from "react-redux";
import { userSlice } from "../store/user/slice";
import NoteEditScreen from "../screens/noteEditScreen";

export const COMICS_DESCRIPTION = 'cDesc';
export const READ_COMICS = 'readComics'
export const TAB_LIBRARY = 'tablibrary'
export const NOTES = 'notes'
export const NOTES_EDIT = 'notesEdit'

const LibraryStack = createNativeStackNavigator();
const LibraryNavigator = () => {
    return (
        <LibraryStack.Navigator
            screenOptions={{
                animation: 'none',
                presentation: 'card',
                header: ({ navigation, back }) => <Header backButton={back
                    ? <BackButton navigation={navigation} />
                    : <ExitButton></ExitButton>
                } />,
            }}
        >
            <LibraryStack.Screen name={TAB_LIBRARY} component={LibraryTabNavigator} />
            <LibraryStack.Screen name={COMICS_DESCRIPTION} component={ComicsInfo} />
            <LibraryStack.Screen name={READ_COMICS} component={ComicsScreen} />
            <LibraryStack.Screen name={NOTES} component={NotesScreen} />
            <LibraryStack.Screen name = {NOTES_EDIT} component = {NoteEditScreen} />
        </LibraryStack.Navigator>
    )
}

const ExitButton = () => {

    const dispatch = useDispatch();

    return (
        <TouchableOpacity onPress={() => dispatch(userSlice.actions.logout())}>
            <Image
                source={require('../assets/icons/exit.png')}
                style={{ marginRight: 12 }} />
        </TouchableOpacity>
    )
}

export default LibraryNavigator;