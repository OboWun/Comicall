import React, { useEffect, useState } from "react";
import { ActivityIndicator, useWindowDimensions, View } from "react-native";
import * as Font from "expo-font";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import useData from "./hooks/useData";
import Library from './pages/globalLibrary'
import ComicRead from "./pages/comicsRead";
import { AppContex } from "./componets/appContex";
import { Provider } from "react-redux";
import { store } from "./store/store";
import AppNavigator from "./routes/appStack";

export default function App() {
  let [isLoaded] = Font.useFonts({
    "caveat-bold": require("../Comicall/assets/fonts/Caveat-Bold.ttf"),
    "caveat-medium": require("../Comicall/assets/fonts/Caveat-Medium.ttf"),
    "caveat-regular": require("../Comicall/assets/fonts/Caveat-Regular.ttf"),
    "caveat-semibold": require("../Comicall/assets/fonts/Caveat-SemiBold.ttf"),
  });
  //Массив комиксов сожержит страницы комикса, название, автора, краткое описание, закладку(initialState = 0, начинаем всегда  с закладки)

  //route/params не может быть callback так как он ломает управлением стэйтом
  //Сделать стратегию в качестве undo(back btn)

  const { data, addMarkbook } = useData();
  const window = useWindowDimensions();

  return (
    <Provider store={store}>
      {isLoaded ? (
        <AppContex.Provider value={{ data, addMarkbook, window }}>
          <AppNavigator></AppNavigator>
        </AppContex.Provider>
      ) : (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size='large'></ActivityIndicator>
        </View>
      )}
    </Provider>
  )
}
