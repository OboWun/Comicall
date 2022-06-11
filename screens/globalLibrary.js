import React, { useContext, useMemo, useReducer, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  FlatList,
} from "react-native";

import Header from "../componets/header/header";
import Search from "../componets/search/search";
import GlobalLibraryContainer from "../componets/body/global-library-container/globalLibraryContainer";
import Footer from "../componets/footer/footer";
import { AppContex } from "../componets/appContex";
import Body from "../componets/body/body";
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

  return (
    <Background>
      <View style={{ flexDirection: "column", flex: 1}}>
        <SearchSystem constantData={data} dataMuteded={dataMuteded} dispatch={dispatch}></SearchSystem>
        <View style={styles.container}>
          <GlobalLibraryContainer
            dataFound={dataMuteded.data.comics}
            navigation={navigation} />
        </View>
        <Footer/>
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
