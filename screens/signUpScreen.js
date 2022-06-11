import React, { useEffect, useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import Background from "../shared/background";
import TextField from "../shared/textField";
import { useDispatch, useSelector } from "react-redux";
import Title from "../shared/title";
import PrimaryButton from "../shared/primaryButton";
import { signUp, signIn } from "../store/user/asyncActions";
import { LOADING, SUCCESSFUL, ERROR } from "../constants";

const SignUpScreen = () => {

    const dispatch = useDispatch()
    const { signUpState, signInState } = useSelector(state => state.user);

    const isLoading = signInState === LOADING || signUpState === LOADING;

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

    useEffect(() => {
        if(signUpState === SUCCESSFUL){
            dispatch(signIn({
                username: username,
                password: password
            }));
        }
    }, [signUpState])


    return (
        <View style={styles.container}>
            <Background>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.formPanel}>
                            <Title name='Регистрация'></Title>
                            {
                                signUpState == ERROR
                                    ? <Text style={styles.errorText}>Это имя занято.</Text>
                                    : null
                            }
                            <TextField value={username} valueHandler={usernameHandler} secureText={false} label='Логин:' />
                            <View style={{ marginBottom: 50 }}>
                                <TextField value={password} valueHandler={passwordHandler} secureText={true} label='Пароль:' />
                            </View>
                            <PrimaryButton
                                isLoading={isLoading}
                                title='Зарегистрироваться'
                                eventHandlet={signUpHandler}
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
    errorText: {
        color: '#D22323',
        fontSize: 18,
        lineHeight: 23,
        fontFamily: 'caveat-medium',
        marginBottom: 7
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