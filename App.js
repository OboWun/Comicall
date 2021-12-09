import React, { useLayoutEffect } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";
import Header from "./componets/header/header";
import Search from "./componets/search/search";
import GlobalLibraryContainer from "./componets/body/global-library-container/globalLibraryContainer";
import Footer from "./componets/footer/footer";
import * as Font from "expo-font";

export default function App() {
  const window = useWindowDimensions();

  let [isLoaded] = Font.useFonts({
    "caveat-bold": require("../Comicall/assets/fonts/Caveat-Bold.ttf"),
    "caveat-medium": require("../Comicall/assets/fonts/Caveat-Medium.ttf"),
    "caveat-regular": require("../Comicall/assets/fonts/Caveat-Regular.ttf"),
    "caveat-semibold": require("../Comicall/assets/fonts/Caveat-SemiBold.ttf"),
  });

  return (
    <View style={{ flexDirection: "column", height: window.height }}>
      <Header></Header>

      <View style={styles.body}>
        <ImageBackground
          style={styles.background}
          resizeMode="cover"
          source={require("../Comicall/assets/background/background.png")}
        >
          <Search></Search>
          <View style={styles.conainer}>
            <GlobalLibraryContainer></GlobalLibraryContainer>
          </View>
        </ImageBackground>
      </View>

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  conainer: {
    padding: 14,
  },
  background: {
    flex: 1,
  },
  body: {
    flex: 1,
  },
});
