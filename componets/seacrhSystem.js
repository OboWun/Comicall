import React, { useEffect, useReducer, useState } from "react";
import { StyleSheet, View } from "react-native";
import Search from "./search";
import SearchOptions from "./searchOptions";
import { useDispatch, useSelector } from "react-redux";
import { filterComics, getGenres } from "../store/library/asyncActions";
import TagContainer from "./tagContainer";
import TagSelector from "./tagSelector";

const SearchSystem = () => {
  const { genres } = useSelector(state => state.library)
  const { token } = useSelector(state => state.user)
  const dispatch = useDispatch();

  const [filter, setFilter] = useState({
    prefix: '',
    genres: [],
    isSearchByName: true
  })

  useEffect(() => {
    dispatch(getGenres(token));
  }, [])

  useEffect(() => {
    dispatch(filterComics({ ...filter, token: token }));
  }, [filter])

  const setIsSearchByName = (value) => {
    setFilter({ ...filter, isSearchByName: value })
  }

  const setPrefix = (value) => {
    setFilter({ ...filter, prefix: value })
  }

  const addGenre = (genre) => {
    const tempGenres = [...new Set(filter.genres).add(genre)];
    setFilter({ ...filter, genres: tempGenres })
  }
  const removeGenre = (genre) => {
    const genreIndex = filter.genres.indexOf(genre);
    const tempGenres = [...filter.genres.slice(0, genreIndex), ...filter.genres.slice(genreIndex + 1, filter.genres.length)];
    setFilter({ ...filter, genres: tempGenres })
  }

  return (
    <View style={styles.container}>
      <Search prefix={filter.prefix} setPrefix={setPrefix}></Search>
      {
        Boolean(filter.prefix)
          ? <SearchOptions
            isSearchByName={filter.isSearchByName}
            setIsSearchByName={setIsSearchByName} />
          : null
      }
      <TagSelector genres={genres} addGenre={addGenre}></TagSelector>
      <TagContainer genres={filter.genres} removeGenre={removeGenre}></TagContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default SearchSystem;
