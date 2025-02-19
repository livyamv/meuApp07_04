import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import Login from "./screens/Login"

export default function App() {
  return (
    <View style={styles.container}>
      <Login></Login>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems:"center"
  },
  box1: {
    width: "50",
    height: "50",
    backgroundColor: "#C7B2C5",
  },
  box2: {
    width: "50",
    height: "50",
    backgroundColor: "#C4CDDF",
  },
  box3: {
    width: "50",
    height: "50",
    backgroundColor: "#C0E8F9",
  },
  box4: {
    width: "50",
    height: "50",
    backgroundColor: "#BCDEE5",
  },
  row:{
    flexDirection:"row",
  },
});
