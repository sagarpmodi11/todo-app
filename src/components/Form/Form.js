import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  Pressable,
  Switch,
  Text,
  TextInput,
  View,
} from "react-native";
import styles from "./Styles";

export default function Form(props) {
  const [isEnabled, setIsEnabled] = useState(false);
  const [taskText, setTask] = useState("");
  const [error, setError] = useState("Please input your task!!");
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter your task."
          onChangeText={taskTextChange}
          defaultValue={taskText}
        ></TextInput>
      </View>

      <View style={styles.switchContainer}>
        <View>
          <Text>Completed : </Text>
        </View>
        <View>
          <Switch
            trackColor={"orange"}
            thumbColor={"orange"}
            value={isEnabled}
            onValueChange={toggleSwitch}
          />
        </View>
      </View>
      <Pressable style={styles.pressableContainer} onPress={callOnPress}>
        <Text>Add Task</Text>
      </Pressable>
    </View>
  );
  function callOnPress() {
    if (taskText) {
      props.onAddTask(taskText, isEnabled);
      setTask("");
      setError(null);
      setIsEnabled(false);
      Keyboard.dismiss();
    } else {
      setError("Please input your task!!");
      Alert.alert(error);
    }
  }
  function taskTextChange(value) {
    setTask(value);
  }
  function toggleSwitch(value) {
    setIsEnabled(value);
  }
}
