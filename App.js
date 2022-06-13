import React, { useEffect, useState } from "react";
import { ActivityIndicator, useWindowDimensions, View } from "react-native";
import * as Font from "expo-font";
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

  const window = useWindowDimensions();

  return (
    <Provider store={store}>
      {isLoaded ? (
        <View style={{ height: window.height }}>
          <AppNavigator></AppNavigator>
        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <ActivityIndicator size='large'></ActivityIndicator>
        </View>
      )}
    </Provider>
  )
}
