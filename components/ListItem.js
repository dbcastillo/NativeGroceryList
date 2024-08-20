import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";

const ListItem = ({ item }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}></View>
      <Text>{item.text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    backgroundColor: "darkturquoise",
    borderBottomWidth: 1,
    borderColor: "darkblue",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
});

export default ListItem;
