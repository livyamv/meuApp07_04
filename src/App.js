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
import Tasklist from "./screens/TaskList";
import TaskDetail from "./screens/TaskDetail";
import EventosScreen from "./screens/EventosScreens";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown:false}}>
      {/* <Stack.Screen name="Tasklist" component={Tasklist}/>
        <Stack.Screen name="TaskDetail" component={TaskDetail}/> */}
        <Stack.Screen name="Login" component={()=>(<Layout><Login/></Layout>)} />
        <Stack.Screen name="Cadastro" component={()=>(<Layout><Cadastro/></Layout>)} />
        <Stack.Screen name="EventosScreen">{()=>(<Layout><EventosScreen/></Layout>)}</Stack.Screen>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Evento" component={Evento} />
        <Stack.Screen name="Organizador" component={Organizador} />
        <Stack.Screen name="Ingresso" component={Ingresso} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
