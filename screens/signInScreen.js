import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { GLOBAL_LIBRARY, SIGN_UP } from "../routes/appStack";
import Background from "../shared/background";
import TextField from "../shared/textField";
import { useDispatch, useSelector } from "react-redux";
import Title from "../shared/title";
import PrimaryButton from "../shared/primaryButton";
import { signIn } from "../store/user/asyncActions";
import { IDLE } from "../constants";

const SignInScreen = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch()
    const userReducer = useSelector(state => state.user)

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

    console.log(userReducer);

    const usernameHandler = (value) => {
        setUsername(value);
    }

    const passwordHandler = (value) => {
        setPassword(value);
    }

    const signInEvent = () => {
        dispatch(signIn({
            username: username,
            password: password
        }
        ))
    }

    return (
        <View style={styles.container}>
            <Background>
                <View style={styles.container}>
                    <View style={styles.wrapper}>
                        <View style={styles.formPanel}>
                            <Title name='Вход'></Title>
                            <Text style={styles.errorText}>Неправильный логин или пароль. Попробуйте еще раз</Text>
                            <TextField value={username} valueHandler={usernameHandler} secureText={false} label='Логин:' />
                            <View style={{ marginBottom: 20 }}>
                                <TextField value={password} valueHandler={passwordHandler} secureText={true} label='Пароль:' />
                            </View>
                            <View style={{ marginBottom: 46 }}>
                                <PrimaryButton
                                    title='Войти'
                                    eventHandlet={signInEvent}
                                    status={IDLE} />
                            </View>
                            <Text style={styles.info}>Вы здесь первый раз? Давайте зарешистрируемся, чтобы ваши книги хранились в личной библиотеке</Text>
                            <TouchableHighlight
                                activeOpacity={0.3}
                                underlayColor="#DDDDDD"
                                onPress={() => navigation.navigate(SIGN_UP)}>
                                <View style={styles.switchButton}>
                                    <Text style={styles.switchText}>Зарегистрироваться</Text>
                                </View>
                            </TouchableHighlight>
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

    errorText: {
        color: '#D22323',
        fontSize: 18,
        lineHeight: 23,
        fontFamily: 'caveat-medium',
        marginBottom: 7
    },

    switchText: {
        fontSize: 18,
        lineHeight: 30,
        textAlignVertical: 'center',
        textAlign: 'center',
        fontFamily: 'caveat-medium'
    },

    switchButton: {
        padding: 5,
        backgroundColor: '#F7F7F7',
        borderColor: '#363636',
        borderWidth: 1,
        borderRadius: 14,
    },
    info: {
        fontWeight: '400',
        fontSize: 16,
        lineHeight: 16,
        textAlign: 'center',
        color: 'rgba(54, 54, 54, 0.75)',
        marginBottom: 10,
        fontFamily: 'caveat-medium'
    },
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
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

export default SignInScreen;