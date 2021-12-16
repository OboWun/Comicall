import React from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableHighlight,
} from "react-native";

const Header = ({BackBtn}) => {
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar
        backgroundColor={styles.header.backgroundColor}
        barStyle="dark-content"
      />
      <Image
        source={require("../../assets/header/Logo.png")}
      />
      {BackBtn}
      <TouchableHighlight>
        <Image
          source={require("../../assets/header/ThemeBtn.png")}
        />
      </TouchableHighlight>
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
});

export default Header;
