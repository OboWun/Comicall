import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { GLOBAL_LIBRARY, SIGN_UP } from "../routes/appStack";
import Background from "../shared/background";
import TextField from "../shared/textField";
import { useDispatch, useSelector } from "react-redux";
import Title from "../shared/title";
import PrimaryButton from "../shared/primaryButton";
import { signUp } from "../store/user/asyncActions";

const SignUpScreen = () => {

    const navigation = useNavigation();

    const dispatch = useDispatch()

    const { sighUpState } = useSelector(state => state.user);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    const usernameHandler = (value) => {
        setUsername(value);
    }

    const passwordHandler = (value) => {
        setPassword(value);
    }

    const signUpHandler = () => {
        dispatch(signUp({
            username: username,
            password: password
        }))
    }

    return (
        <View style={styles.container}>
            <Background>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.formPanel}>
                            <Title name='Регистрация'></Title>
                            <TextField value={username} valueHandler={usernameHandler} secureText={false} label='Логин:' />
                            <View style={{ marginBottom: 50 }}>
                                <TextField value={password} valueHandler={passwordHandler} secureText={true} label='Пароль:' />
                            </View>
                            <PrimaryButton
                                status={sighUpState}
                                title='Зарегистрироваться' 
                                eventHandlet = {signUpHandler}
                                />
                        </View>
                    </View>
                </View>
            </Background>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },


    submitText: {
        fontSize: 24,
        lineHeight: 30,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'caveat-medium'
    },

    submitButton: {
        backgroundColor: '#FFC204',
        borderWidth: 1,
        borderColor: '#363636',
        borderRadius: 14,
        shadowColor: "rgba(255, 194, 4, 0.25)",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 3,
        shadowRadius: 1,
        elevation: 2,
        width: 175,
        color: '#363636',
        fontWeight: '700',
        height: 36
    },

    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    background: {
        flex: 1
    },
    formPanel: {
        backgroundColor: ' rgba(196, 196, 196, 0.01)',
        alignItems: 'center',
        // backdrop- filter: blur(6px);
        padding: 20,
        borderRadius: 37,
        borderWidth: 2,
        borderColor: '#363636',
    }
});

export default SignUpScreen;