import React from "react";
import { StyleSheet, Image, TouchableOpacity } from "react-native";

const DeleteButton = ({ action }) => {
  return (
    <TouchableOpacity onPressIn={action} style = {{zIndex: 10}}>
      <Image
        source={require('../assets/search/delete.png')}
        style={styles.deleteIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deleteIcon: {
    width: 14,
    height: 14,
  },
});

export default DeleteButton;
