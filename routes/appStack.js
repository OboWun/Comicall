import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { SUCCESSFUL } from "../constants";
import AuthenticationNavigator from "./authenticationNavigator";
import LibraryNavigator from "./libraryNavigator";
import { useSelector } from "react-redux";

const AppNavigator = () => {

    const signInStatus = useSelector(state => state.user.signInState)

    return (
        <NavigationContainer documentTitle={{ enabled: false }}>
            {
                signInStatus === SUCCESSFUL
                    ? <LibraryNavigator></LibraryNavigator>
                    : <AuthenticationNavigator></AuthenticationNavigator>
            }
        </NavigationContainer>
    )
}

export default AppNavigator;