import React from "react";
import { Text, View, ScrollView, Pressable } from "react-native";
import styles from "./Styles";

export default function Task(props) {
  return (
    <ScrollView horizontal={true} directionalLockEnabled={true}>
      <View style={styles.container}>
        <Text>{props.task.id}</Text>
        <Text>{props.task.task}</Text>
        <Text style={styles.completeTask}>
          {props.task.completed ? "True" : "False"}
        </Text>
      </View>
      <View>
        <Pressable style={styles.pressableContainer}>
          <Text>Delete</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}
