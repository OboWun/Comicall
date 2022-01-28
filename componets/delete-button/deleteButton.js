import React from "react";
import { StyleSheet, Image, TouchableWithoutFeedback } from "react-native";

const DeleteButton = ({ action }) => {
  return (
    <TouchableWithoutFeedback onPressIn={action} style = {{zIndex: 10}}>
      <Image
        source={require("../../assets/search/delete.png")}
        style={styles.deleteIcon}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  deleteIcon: {
    width: 12,
    height: 12,
  },
});

export default DeleteButton;
