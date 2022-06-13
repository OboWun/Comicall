import React, { useContext, useMemo, useReducer, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import SearchSystem from "../componets/seacrhSystem";
import Background from "../shared/background";
import GlobalLibraryItem from "../componets/globalLibraryItem";
import EmptyListComponent from '../componets/emptyList'
import { LOADING } from "../constants";
import LoadingIndicator from "../shared/loadingIndicator";


const GlobalLibrary = () => {
  const { comics, comicsFetchingState } = useSelector(state => state.library)

  //Заметки -RTL Query

  //Добавить Refresh

  return (
    <Background>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <SearchSystem></SearchSystem>
        {
          comicsFetchingState == LOADING
            ? <LoadingIndicator></LoadingIndicator>
            : <FlatList
              numColumns={2}
              contentContainerStyle = {comics.length == 0 && styles.emptyStyle}
              data={comics}
              columnWrapperStyle={styles.wrapper}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<EmptyListComponent
                 source = {require('../assets/empty-result/emptyResult.png')}
                 tittle = 'Упс... Кажется такого комикса нет в нашей библиотеке'/>}
              renderItem={({ item }) => (
                <GlobalLibraryItem comics={item}></GlobalLibraryItem>
              )} />
        }
      </View>
    </Background>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  wrapper: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: 14,
    marginBottom: 19,
  },
  emptyStyle:{
    flex: 1
  }
});

export default GlobalLibrary;
