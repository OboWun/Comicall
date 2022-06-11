import React, { useContext, useMemo, useReducer, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { AppContex } from "../componets/appContex";
import SearchSystem from "../componets/body/search-system/seacrhSystem";
import { searchOptionsReducer } from "../reducers/searchOptionsReducer";
import Background from "../shared/background";
import EmptyListComponent from "../componets/body/global-library-container/empty-list-component/emptyList";
import GlobalLibraryItem from "../componets/body/global-library-container/global-library-item/globalLibraryItem";
import { LOADING } from "../constants";


const GlobalLibrary = ({ navigation }) => {
  const { data } = useContext(AppContex);

  const [dataMuteded, dispatch] = useReducer(searchOptionsReducer, {
    data: { ...data },
    options: {
      tags: [],
      request: '',
      isTitleSearch: true
    }
  })

  // const dispatch = useDispatch();
  const { comics, comicsFetchingState } = useSelector(state => state.library)

  //Добавление удаление комикса, делаю через RTK Query;
  //Заметки -RTL Query

  //Добавить Refresh

  return (
    <Background>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <SearchSystem constantData={data} dataMuteded={dataMuteded} dispatch={dispatch}></SearchSystem>
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
