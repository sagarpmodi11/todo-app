import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import uuid from "react-uuid";
import Header from "./src/components/Header/Header";
import Tasks from "./src/components/Tasks/Tasks";
import Form from "./src/components/Form/Form";
import styles from "./src/Styles/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Header />
      <Tasks />
      <Form />
    </View>
  );
}
