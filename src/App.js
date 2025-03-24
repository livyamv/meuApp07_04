import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../src/screens/Login";
import Cadastro from "../src/screens/Cadastro";
import Home from "../src/screens/Home";
import Evento from "../src/screens/Evento";
import Organizador from "../src/screens/Organizador";
import Ingresso from "../src/screens/Ingressos";
import Layout from "./components/Layout";
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Login" component={()=>(<Layout><Login/></Layout>)} />
        <Stack.Screen name="Cadastro" component={()=>(<Layout><Cadastro/></Layout>)} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Evento" component={Evento} />
        <Stack.Screen name="Organizador" component={Organizador} />
        <Stack.Screen name="Ingresso" component={Ingresso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
