import React from "react";
import {
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Switch,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const Header = () => {
  // const children = <>
  //     <Image/>
  //     <Button></Button>
  // </>;
  // if(Platform.OS == 'ios'){
  //     return (
  //         <SafeAreaView style = {styles.header}>

  //         </SafeAreaView>
  //     )
  // }
  return (
    <SafeAreaView style={styles.header}>
      <StatusBar
        backgroundColor={styles.header.backgroundColor}
        barStyle="dark-content"
      />
      <Image
        source={require("../../assets/header/Logo.png")}
        style={styles.logo}
      />
      <TouchableHighlight>
        <Image
          source={require("../../assets/header/ThemeBtn.png")}
          style={styles.logo}
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
