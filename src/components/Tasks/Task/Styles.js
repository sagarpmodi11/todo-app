import { Dimensions, StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container: {
    alignSelf: "stretch",
    width: Dimensions.get("window").width - 20,
    backgroundColor: "white",
    padding: 10,
    shadowColor: "orange",
    shadowOpacity: 1,
    elevation: 20,
    borderRadius: 5,
    marginLeft: 5,
    marginBottom: 5,
    marginTop: 5,
    marginRight: 5,
  },
  completeTask: {
    fontWeight: "bold",
    fontSize: 15,
  },
  pressableContainer: {
    backgroundColor: "orange",
    flex: 1,
    padding: 10,
    alignSelf: "center",
    marginTop: 5,
    marginBottom: 5,
    justifyContent: "center",
    shadowColor: "orange",
    shadowOpacity: 1,
    elevation: 20,
  },
});

export default styles;
