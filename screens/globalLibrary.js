import React, { useContext, useMemo, useReducer, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppContex } from "../componets/appContex";
import SearchSystem from "../componets/seacrhSystem";
import Background from "../shared/background";
import GlobalLibraryItem from "../componets/globalLibraryItem";
import EmptyListComponent from '../componets/emptyList'
import { LOADING } from "../constants";


const GlobalLibrary = () => {
  const { comics, comicsFetchingState } = useSelector(state => state.library)

  //Добавление удаление комикса, делаю через RTK Query;
  //Заметки -RTL Query

  //Добавить Refresh

  return (
    <Background>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <SearchSystem></SearchSystem>
        {
          comicsFetchingState == LOADING
            ? <ActivityIndicator size='large'></ActivityIndicator>
            : <FlatList
              numColumns={2}
              style={{ flex: 1 }}
              data={comics}
              columnWrapperStyle={styles.wrapper}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={<EmptyListComponent></EmptyListComponent>}
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
  }
});

export default GlobalLibrary;
