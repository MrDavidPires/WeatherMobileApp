import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  Button,
} from "react-native";
import React, { useState } from "react";
import { EvilIcons } from "@expo/vector-icons";

export default function WeatherSearch(props) {
  const [innerSearch, setInnerSearch] = useState("");

  return (
    <View style={styles.searchBar}>
      <TextInput
        placeholder="Search City"
        type="search"
        value={innerSearch}
        onChangeText={(e) => setInnerSearch(e)}
      />
      <EvilIcons
        name="search"
        size={28}
        color="black"
        onPress={() => props.onSubmit(innerSearch)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: Dimensions.get("screen").width - 20,
    borderWidth: 1.5,
    paddingVertical: 10,
    borderRadius: 25,
    margin: 10,
    padding: 10,
    backgroundColor: "lightgray",
  },
});
