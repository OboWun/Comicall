import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, View, Text } from 'react-native';
import SignInScreen from '../screens/signInScreen';
import SignUpScreen from '../screens/signUpScreen';
import Header from '../componets/header';
import BackButton from '../componets/backButton';


export const SIGN_IN = 'signin'
export const SIGN_UP = 'signup'

const AuthenticationStack = createNativeStackNavigator();


const AuthenticationNavigator = () => {
    return (
        <>
            <AuthenticationStack.Navigator screenOptions={{
                animation: 'slide_from_left',
                presentation: 'card',
                header: ({ navigation, back }) => <Header backButton={back ? <BackButton navigation={navigation} /> : null}></Header>,

            }}>
                <AuthenticationStack.Screen name={SIGN_IN} component={SignInScreen} />
                <AuthenticationStack.Screen name={SIGN_UP} component={SignUpScreen} />
            </AuthenticationStack.Navigator>

            <View style={{ backgroundColor: '#FFC204', height: 60 }}></View>
        </>
    )

}

export default AuthenticationNavigator;