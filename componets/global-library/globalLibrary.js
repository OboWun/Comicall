import React, { useContext, useMemo, useReducer, useState } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
  FlatList,
} from "react-native";

import Header from "../header/header";
import Search from "../search/search";
import GlobalLibraryContainer from "../body/global-library-container/globalLibraryContainer";
import Footer from "../footer/footer";
import { AppContex } from "../appContex";
import Body from "../body/body";
import SearchSystem from "../body/search-system/seacrhSystem";
import { searchOptionsReducer } from "../../reducers/searchOptionsReducer";

const Library = ({ navigation }) => {
  const { data, window } = useContext(AppContex);
  //const [dataFound, setDataFound] = useState({ ...data });

  const [dataMuteded, dispatch] = useReducer(searchOptionsReducer, {
    data: {...data},
    options: {
      tags: [],
      request: '',
      isTitleSearch: true
    }
  }) 

  return (
    <View style={{ flexDirection: "column", height: window.height }}>
      <Header BackBtn={null}></Header>
      <Body
        children={() => (
          <>
            <SearchSystem constantData = {data} dataMuteded = {dataMuteded} dispatch = {dispatch}></SearchSystem>
            <View style={styles.container}>
              <GlobalLibraryContainer 
                dataFound={dataMuteded.data.comics} 
                navigation={navigation} />
            </View>
          </>
        )}
      ></Body>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Library;
