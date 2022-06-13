import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { Text, Button, View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import UserComics from "../componets/userComics";
import { LOADING } from "../constants";
import { COMICS_DESCRIPTION } from "../routes/libraryNavigator";
import Background from "../shared/background";
import { getUserComics } from "../store/userLibrary/asyncActioncs";
import EmptyListComponent from "../componets/emptyList";
import { LoadingIndicator } from "../shared/loadingIndicator";

const UserLibrary = () => {

    const { getComicsState, userComics } = useSelector(state => state.userLibrary)


    return (
        <View style={{ flex: 1 }}>
            <Background>
                <View style={styles.container}>
                    {
                        getUserComics == LOADING
                            ? <LoadingIndicator></LoadingIndicator>
                            : <FlatList
                                data={userComics}
                                keyExtractor={item => item.id}
                                contentContainerStyle={userComics.length == 0 && styles.emptyContainer}
                                showsVerticalScrollIndicator={false}
                                renderItem={({ item }) => <UserComics {...item} />}
                                ListEmptyComponent={<EmptyListComponent
                                    source={require('../assets/emptyLibrary.png')}
                                    tittle='Пока твоя библиотека пуста...'
                                />}
                                ItemSeparatorComponent={() => <View style={{ height: 17 }}></View>}
                            />}
                </View>
            </Background>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 18,
    },
    emptyContainer: {
        flex: 1
    }
})

export default UserLibrary;