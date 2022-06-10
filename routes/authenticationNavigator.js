import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, View, Text } from 'react-native';
import SignInScreen from '../screens/signInScreen';
import SignUpScreen from '../screens/signUpScreen';
import { SIGN_IN, SIGN_UP } from './appStack';
import Header from '../componets/header/header';
import BackButton from '../componets/backButton';
import { useWindowDimensions } from 'react-native';


const AuthenticationStack = createNativeStackNavigator();


const AuthenticationNavigator = () => {

    const window = useWindowDimensions();


    return (
        <View style={{ height: window.height }}>
            <AuthenticationStack.Navigator screenOptions={{
                animation: 'slide_from_left',
                presentation: 'card',
                header: ({ navigation, back }) => <Header backButton={back ? <BackButton navigation={navigation} /> : null}></Header>,

            }}>
                <AuthenticationStack.Screen name={SIGN_IN} component={SignInScreen} />
                <AuthenticationStack.Screen name={SIGN_UP} component={SignUpScreen} />
            </AuthenticationStack.Navigator>
            <View style={{ backgroundColor: '#FFC204', height: 60 }}></View>
        </View>
    )

}

export default AuthenticationNavigator;