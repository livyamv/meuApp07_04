import { useEffect, useState } from "react";
import {
  View,
  Text,
  FletList,
  TouchableOpacity,
  Modal,
  StyleSheet,
  ActivityIndicator,
} from "react-native";

export default function EventosScreen() {
  const [eventos, setEventos] = useState([]);
  const [ingressos, setIngressos] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const [eventoSelecionado, setEventoSelecionado] = useState(null);

  useEffect(() => {
    getEventos();
  });
  async function getEventos() {
    try {
      const response = await api.getEventos();
      setEventos(response.data.events);
    } catch (error) {
      console.log(error.response.data.error);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Eventos Disponiveis </Text>
      {loading ? (
        <ActivityIndicator size="large" color="pink" />
      ) : (
        <FletList
          data={eventos}
          keyExtractor={(item) => item.id_evento.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.eventCard}
              onPress={() => console.log("Abrir o Modal")}
            >
              <Text styles={styles.eventName}>{item.nome}</Text>
              <Text>{item.local}</Text>
              <Text>{new Date(item.data_hora).toLocaleDateString}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  eventCard: {
    padding: 15,
    backgroundColor: "#f1f1f1",
    marginBottom: 10,
    borderRadius: 8,
  },
  eventName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  ingressoItem: {
    padding: 10,
    backgroundColor: "#e6e6e6",
    marginBottom: 10,
    borderRadius: 6,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "blue",
    padding: 10,
    alignItems: "center",
    borderRadius: 6,
  },
});
