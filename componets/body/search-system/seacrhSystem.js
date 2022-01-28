import React, { useEffect, useReducer } from "react";
import { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { searchOptionsReducer } from "../../../reducers/searchOptionsReducer";
import Search from "../../search/search";
import SearchOptions from "./searchOptions/searchOptions";
import TagSystem from "./tag-system/tagSystem";
import { SearchContex } from "../../searchContex";

const SearchSystem = ({ dataMuteded, dispatch, constantData }) => {
  const { data, options } = dataMuteded;
  const { request, isTitleSearch, tags } = options;

  const search = () => {
    const tempDataFound = constantData.comics.filter((item) => {
      const tagsSet =  new Set( [...tags.map(tag => tag.id), ...item.tags]);  
      if(tagsSet.size !== item.tags.length)
        return false;
      
      if (isTitleSearch) return item.title.includes(request);
      return item.author.includes(request);
    });
    dispatch({ type: "mutateData", payload: { comics: tempDataFound } });
  };

  useEffect(() => {
    search();
  }, [options]);

  const setRequest = (request) => {
    dispatch({ type: "changeRequest", payload: request });
  };

  const setOption = () => {
    dispatch({ type: "switchOption" });
  };

  const removeTag = (id) => {
    return () => dispatch({type: 'removeTag', payload: id})
  }

  const addTag = (tag) => {
    return () => dispatch({type: 'addTag', payload: tag})
  }

  const searchTypePanel = Boolean(request) ? (
    <SearchOptions
      isTitleSearch={isTitleSearch}
      setOption={setOption}
    ></SearchOptions>
  ) : null;

  //SearchSystem занимается setDataFound
  return (
    <SearchContex.Provider value = {{removeTag: removeTag, addTag: addTag}}>
      <View style={styles.container}>
        <Search request={request} setRequest={setRequest}></Search>
        {searchTypePanel}
        <TagSystem
          searchTags={tags}
          constatTags={constantData.tags}
        ></TagSystem>
      </View>
    </SearchContex.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default SearchSystem;
