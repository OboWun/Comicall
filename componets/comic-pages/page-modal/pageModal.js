import React from "react";
import { Image, Modal, Pressable, StyleSheet, Text, View } from "react-native";

const PageModal = ({ visiable }) => {
  //Где image, можно заменить компонентов и прокидывать туда action
  return (
    <Modal visible={visiable} animationType="slide" transparent={true}>
      <View style={styles.modal} >
        <View style = {styles.wrapper}>
          <Image source = {require('../../../assets/modal/arrow.png')} style = {{transform: [{rotateY: '180deg'}]}}></Image>
          <Image source = {require('../../../assets/modal/notes.png')}></Image>
          <Image source = {require('../../../assets/modal/Bookmark.png')}></Image>
          <Image source = {require('../../../assets/modal/arrow.png')}></Image>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    height: 104,
    width: "100%",
    backgroundColor: "#BEBEBE",
    position: "absolute",
    zIndex: 10,
    bottom: 0,
  },
  wrapper:{
    marginTop: 19,
    paddingHorizontal: 26,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row'
  }
});

export default PageModal;
