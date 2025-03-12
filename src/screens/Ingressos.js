import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Button,
} from "react-native";
import api from "../axios/axios";

export default function Ingresso({ navigation }) {
  const [ingresso, setUser] = useState({
    preco: "",
    tipo: "",
    fk_id_evento: "",
  });

  async function handleIngresso() {
    await api.postIngresso(ingresso).then(
      (response) => {
        Alert.alert("OK", response.data.message);
      },
      (error) => {
        Alert.alert("Erro", error.response.data.error);
      }
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Cadastre seu ingresso!</Text>
      <TextInput
        style={styles.input}
        placeholder="Preço"
        value={ingresso.preco}
        onChangeText={(value) => {
          setUser({ ...ingresso, preco: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Tipo"
        value={ingresso.tipo}
        onChangeText={(value) => {
          setUser({ ...ingresso, tipo: value });
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Id_evento"
        value={ingresso.fk_id_evento}
        onChangeText={(value) => {
          setUser({ ...ingresso, fk_id_evento: value });
        }}
      />
      <TouchableOpacity onPress={handleIngresso} style={styles.button}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
      <Button
        title="Voltar para Home"
        onPress={() => navigation.navigate("Home")}
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
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
  },
  input: {
    width: "100%",
    height: 40,
    borderBottomWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "#C77FFF",
    padding: 10,
    borderRadius: 5,
  },
});
