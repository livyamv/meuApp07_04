import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "./screens/Home";
import Evento from "./screens/Evento";
import Organizador from "./screens/Organizador";
import Ingresso from "./screens/Ingressos";
import Login from "./screens/Login";
import Cadastro from "./screens/Cadastro";
import Layout from "./components/Layout";
//import TaskList from "./screens/TaskList";
//import TaskDetail from "./screens/TaskDetail";
import EventosScreens from "./screens/EventosScreens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen
          name="Login"
          component={() => (
            <Layout>
              <Login />
            </Layout>
          )}
        />
        <Stack.Screen
          name="Cadastro"
          component={() => (
            <Layout>
              <Cadastro />
            </Layout>
          )}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Evento" component={Evento} />
        <Stack.Screen name="Organizador"component={Organizador}/>
        <Stack.Screen name="Ingresso" component={Ingresso} />
        <Stack.Screen name="EventosScreens">{()=>(
          <Layout>
            <EventosScreens/>
          </Layout>
        )}</Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
