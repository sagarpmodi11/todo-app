import React from "react";
import { Text, View } from "react-native";
import styles from "./Styles";
import Task from "./Task/Task";

export default function Tasks() {
  return (
    <View style={styles.container}>
      <Text>Tasks</Text>
      <Task />
    </View>
  );
}
