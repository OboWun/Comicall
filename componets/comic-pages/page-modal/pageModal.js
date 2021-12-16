import React from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const PageModal = ({ visiable, setUnvisiable }) => {
  return (
    <Modal visible={visiable} animationType="slide" transparent={true}>
        <View style={styles.modal}>
          <Text>Модал</Text>
        </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
container:{
    flex: 1,
    position: 'relative'
},


  modal: {
    height: 104,
    width: "100%",
    backgroundColor: "#BEBEBE",
    position: "absolute",
    zIndex: 10,
    bottom: 0,
  },
});

export default PageModal;
