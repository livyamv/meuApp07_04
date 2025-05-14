import React from "react";
import { View, Button, StyleSheet } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Cadastre seu evento!!"
        onPress={() => navigation.navigate("Evento")}
        color="#C77FFF"
      />
      <Button
        title="Organizadores"
        onPress={() => navigation.navigate("Organizador")}
        color="#C77FFF"
      />
      <Button
        title="Ingresso"
        onPress={() => navigation.navigate("Ingresso")}
        color="#C77FFF"
      />
      <Button
        title="Eventos"
        onPress={() => navigation.navigate("EventosScreens")}
        color="#C77FFF"
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
export default Home;
