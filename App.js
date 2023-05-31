import { StatusBar } from "expo-status-bar";
import { View, SafeAreaView, Platform, NativeModules } from "react-native";
import uuid from "react-uuid";
import Header from "./src/components/Header/Header";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import styles from "./src/Styles/Main";
import { useState } from "react";

export default function App() {
  const { StatusBarManager } = NativeModules;
  const handleAddTask = (task, isCompleted) => {
    const newTask = [...tasks];
    newTask.push({
      id: uuid(),
      task: task,
      completed: isCompleted,
    });
    setTasks(newTask);
  };
  const [tasks, setTasks] = useState([
    { id: uuid(), task: "Walk the dog", done: true },
    { id: uuid(), task: "Wash the car", done: false },
    { id: uuid(), task: "Walk the dog", done: true },
    { id: uuid(), task: "Wash the car", done: false },
    { id: uuid(), task: "Walk the dog", done: true },
    { id: uuid(), task: "Wash the car", done: false },
    { id: uuid(), task: "Walk the dog", done: true },
    { id: uuid(), task: "Wash the car", done: false },
  ]);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "orange",
        paddingTop: Platform.OS === "android" ? StatusBarManager.HEIGHT : 0,
      }}
    >
      <View style={styles.container}>
        <StatusBar />
        <Header />
        <Tasks tasks={tasks} />
        <Form onAddTask={handleAddTask} />
      </View>
    </SafeAreaView>
  );
}
