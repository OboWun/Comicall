import React, { useMemo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { CONNECTION, LOADING } from "../constants";
import DeleteButton from "../shared/deleteButton";
import PrimaryButton from "../shared/primaryButton";
import { removeComics } from "../store/userLibrary/asyncActioncs";

const UserComics = ({ posterPath, name, authorName, id, pagesAll, pagesRead }) => {


    const { removeComicsState } = useSelector(state => state.userLibrary);
    const { token } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const clearPath = useMemo(() => posterPath
        .split('')
        .map(symbol => symbol === '\\' ? '/' : symbol)
        .join(''),
        [posterPath]);

    const buildTextButton = () => pagesRead != 1 ? 'Продолжить' : 'Начать';
    const removeComicsHandler = () => dispatch(removeComics({ token, id }))



    return (
        <View style={styles.card}>
            <Image
                loadingIndicatorSource={require('../assets/loadingSource.png')}
                style={{ width: 113, height: 172, resizeMode: 'contain' }}
                source={{ uri: `${CONNECTION}/storage/?path=${clearPath}` }}
            />
            <View style={styles.column}>
                <View>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={[styles.smallText, styles.author]}>{authorName}</Text>
                </View>
                <Text style={[styles.smallText, styles.pages]}>{`Прочитано ${pagesRead} стр. из ${pagesAll}`}</Text>
                <PrimaryButton
                    title={buildTextButton()}
                    eventHandlet={() => console.log('Читать')}
                    isLoading={removeComicsState == LOADING}
                />

                <View style ={styles.delete}>
                    <DeleteButton action = {removeComicsHandler}></DeleteButton>
                </View>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        flexGrow: 1
    },
    column: {
        marginLeft: 20,
        position: 'relative',
        flexDirection: 'column',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        paddingBottom: 20,
        flex: 1
    },
    author: {
        color: 'rgba(0, 0, 0, 0.75)'
    },
    pages: {
        color: '#000000'
    },
    title: {
        fontSize: 24,
        lineHeight: 30,
        color: '#000000',
        fontFamily: 'caveat-bold',
    },
    smallText: {
        fontSize: 16,
        lineHeight: 18,
        fontFamily: 'caveat-medium'
    },
    delete:{
        position: 'absolute',
        top: 0,
        right: 0
    }
})

export default UserComics;