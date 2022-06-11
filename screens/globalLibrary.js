import React, { useContext, useMemo, useReducer, useState } from "react";
import {
  View,
  StyleSheet,
} from "react-native";

import GlobalLibraryContainer from "../componets/body/global-library-container/globalLibraryContainer";
import { AppContex } from "../componets/appContex";
import SearchSystem from "../componets/body/search-system/seacrhSystem";
import { searchOptionsReducer } from "../reducers/searchOptionsReducer";
import Background from "../shared/background";

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

  //Получаем данные через dispatch;
  //Добавление удаление комикса, делаю через RTK Query;
  //Заметки -RTL Query

  return (
    <Background>
      <View style={{ flexDirection: "column", flex: 1 }}>
        <SearchSystem constantData={data} dataMuteded={dataMuteded} dispatch={dispatch}></SearchSystem>
        <GlobalLibraryContainer
          dataFound={dataMuteded.data.comics}
          navigation={navigation} />
      </View>
    </Background>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default GlobalLibrary;
