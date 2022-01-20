import React, { useEffect, useReducer } from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { searchOptionsReducer } from "../../../reducers/searchOptionsReducer";
import Search from "../../search/search";
import SearchOptions from "./searchOptions/searchOptions";
import TagSelector from "./tag-system/tag-selector/tagSelector";

const SearchSystem = ({ dataMuteded, dispatch, constantData }) => {
  const { data, options } = dataMuteded;
  const { request, isTitleSearch } = options;

  const search = () => {
    const tempDataFound = constantData.comics.filter((item) =>{
      if(isTitleSearch)
        return item.title.includes(request)
      return item.author.includes(request);
    });
    dispatch({ type: "mutateData", payload: { comics: tempDataFound } });
  };

  useEffect(() => {
    search();
  }, [request]);

  const setRequest = (request) => {
    dispatch({ type: "changeRequest", payload: request });
  };

  const setOption = () => {
    console.log('Смена поиска');
    dispatch({type: 'switchOption'});
  }

  const searchTypePanel = Boolean(request) 
  ? <SearchOptions isTitleSearch = {isTitleSearch} setOption = {setOption}></SearchOptions> 
  : null;

  //SearchSystem занимается setDataFound
  return (
    <View style={styles.container}>
      <Search request={request} setRequest={setRequest}></Search>
      {searchTypePanel}
      <TagSelector></TagSelector>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default SearchSystem;
