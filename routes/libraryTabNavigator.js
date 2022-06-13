import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import UserLibrary from "../screens/userLibrary";
import GlobalLibrary from "../screens/globalLibrary";
import LibrarySwitchBar from "../componets/librarySwitchBar";
import { useDispatch, useSelector } from "react-redux";
import { getUserComics } from "../store/userLibrary/asyncActioncs";

export const GLOBAL_LIBRARY = 'glLibrary';
export const USER_LIBRARY = 'uLibrary';

const LibraryTab = createBottomTabNavigator();

const LibraryTabNavigator = () => {

    const {token} = useSelector(state => state.user)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUserComics(token))
    }, [])

    return (
        <LibraryTab.Navigator
            screenOptions={{
                headerShown: false
            }}
            tabBar={props => <LibrarySwitchBar {...props} />}>
            <LibraryTab.Screen name={GLOBAL_LIBRARY} component={GlobalLibrary} />
            <LibraryTab.Screen name={USER_LIBRARY} component={UserLibrary} />
        </LibraryTab.Navigator>
    )
}

export default LibraryTabNavigator;