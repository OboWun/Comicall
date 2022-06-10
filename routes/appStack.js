import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import SignInScreen from "../screens/signInScreen";
import SignUpScreen from "../screens/signUpScreen";
import GlobalLibrary from "../pages/globalLibrary";
import ComicRead from "../pages/comicsRead";
import { useSelector } from "../hooks/useSelector";
import { SUCCESSFUL } from "../constants";
import Header from "../componets/header/header";
import BackButton from "../componets/backButton";
import AuthenticationNavigator from "./authenticationNavigator";

export const AUTHENTICATION = 'auth';
export const LIBRARY = 'library';
const AppStack = createNativeStackNavigator();


export const GLOBAL_LIBRARY = 'glLibrary';
export const USER_LIBRARY = 'uLibrary';
export const COMICS_DESCRIPTION = 'cDesc';
export const READ_COMICS = 'readComics'
export const SIGN_IN = 'signin'
export const SIGN_UP = 'signup'

const AppNavigator = () => {

    const signInStatus = useSelector(state => state.user.sigInState)

    return (
        <NavigationContainer documentTitle ={{enabled: false}}>
            {/* <AppStack.Navigator initialRouteName={SIGN_IN}  screenOptions = {{
                headerShown: false,
                //headerTitle: () => null,
               // header: ({navigation, back}) => <Header BackBtn = {back ? <BackButton></BackButton>: null}></Header>
            }}>
                {
                    signInStatus == SUCCESSFUL 
                    ? (
                        <> */}
                        <AuthenticationNavigator></AuthenticationNavigator>
                            {/* <AppStack.Screen name={GLOBAL_LIBRARY} component={GlobalLibrary} />
                            <AppStack.Screen name={READ_COMICS} component={ComicRead} /> */}
                        {/* </>
                    )
                        : (
                            <>
                                <AppStack.Screen name={SIGN_IN} component={SignInScreen} />
                                <AppStack.Screen name={SIGN_UP} component={SignUpScreen} />
                            </>
                        )
                }
            </AppStack.Navigator> */}
        </NavigationContainer>
    )
}

export default AppNavigator;