import React from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { Text, View } from "react-native";
import styles from "./Styles";

export default function Header() {
  return (
    <View style={styles.container}>
      <FontAwesome5 name="list" size={24} />
      <Text style={styles.textcontainer}>Todo App</Text>
      <Text style={styles.textcontainer}>By Sagar Modi</Text>
    </View>
  );
}
