import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  ImageBackground,
  useWindowDimensions,
} from "react-native";

import Header from "../header/header";
import Search from "../search/search";
import GlobalLibraryContainer from "../body/global-library-container/globalLibraryContainer";
import Footer from "../footer/footer";
import { AppContex } from "../appContex";

const GlobalLibrary = ({ navigation }) => {
  const window = useWindowDimensions();

  const {data} = useContext(AppContex)

  return (
    <View style={{ flexDirection: "column", height: window.height }}>
      <Header BackBtn={null}></Header>
      <View style={styles.body}>
        <ImageBackground
          style={styles.background}
          resizeMode="cover"
          source={require("../../assets/background/background.png")}>
          <Search></Search>
          <View style={styles.conainer}>
            <GlobalLibraryContainer data = {data}  navigation = {navigation}></GlobalLibraryContainer>
          </View>
        </ImageBackground>
      </View>
      <Footer />
    </View>
  );
};

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

export default GlobalLibrary;
