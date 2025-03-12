import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../src/screens/Login";
import Cadastro from "../src/screens/Cadastro";
import Home from "../src/screens/Home";
import Evento from "../src/screens/Evento";
import Organizador from "../src/screens/Organizador";
import Ingresso from "../src/screens/Ingressos";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Evento" component={Evento} />
        <Stack.Screen name="Organizador" component={Organizador} />
        <Stack.Screen name="Ingresso" component={Ingresso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
