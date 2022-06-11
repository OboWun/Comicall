import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
  View,
} from "react-native";

const Header = ({ backButton }) => {
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar
        backgroundColor={styles.header.backgroundColor}
        barStyle="dark-content"
      />
      <Image source={require("../assets/header/Logo.png")} />
      <View style = {styles.buttonsGroup}>
        {backButton}
        <TouchableHighlight>
          <Image source={require("../assets/header/ThemeBtn.png")} />
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#FFC204",
    padding: 9,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  statusBar: {
    backgroundColor: "#FFC204",
  },
  buttonsGroup:{
    flexDirection: 'row',
    alignItems: 'center'
  }
});

export default Header;
