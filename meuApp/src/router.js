import React from "react";
//import { NavigationContainer } from "@react-navigation/native";
//import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Casaco_F from "./pages/Casaco_F";
import Macacao from "./pages/Macacao";
import Jeans_F from "./pages/Jeans_F";
import Jeans_M from "./pages/Jeans_M";
import Casaco_M from "./pages/Casaco_M";
import Calca_M from "./pages/Calca_M";
import Camisa_M from "./pages/Camisa_M";


const Stack = createStackNavigator();

function Routers() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Detail"
                    component={Detail}
                />
                <Stack.Screen
                    name="Macacao"
                    component={Macacao}
                />
                <Stack.Screen
                    name="Casaco_F"
                    component={Casaco_F}
                />
                <Stack.Screen
                    name="Jeans_F"
                    component={Jeans_F}
                />
                <Stack.Screen
                    name="Jeans_M"
                    component={Jeans_M}
                />
                <Stack.Screen
                    name="Casaco_M"
                    component={Casaco_M}
                />
                     <Stack.Screen
                    name="Calca_M"
                    component={Calca_M}
                />
                     <Stack.Screen
                    name="Camisa_M"
                    component={Camisa_M}
                />

            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routers;