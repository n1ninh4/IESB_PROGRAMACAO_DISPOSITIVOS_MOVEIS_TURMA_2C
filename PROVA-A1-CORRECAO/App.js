import React from "react";
import { PaperProvider } from 'react-native-paper'
import { NavigationContainer } from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {Ionicons} from '@expo/vector-icons'

import ModalidadesScreen from "./screens/ModalidadesScreen";
import ArenasScreen from "./screens/ArenasScreen";
import OlimpiadasScreen from "./screens/OlimpiadasScreen";
import EstatisticasScreen from "./screens/EstatisticasScreen";

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Tab.Navigator>
          {/* Modalidades */}
          <Tab.Screen
            name="ModalidadesScreen"
            component={ModalidadesScreen}
            options={{
              title: 'Modalidades',
              headerTitleAlign: 'center',
              tabBarIcon: ({color, size}) => <Ionicons name='home' color={color} size={size} />
            }}
           />

          {/* Arenas */}
          <Tab.Screen
            name="ArenasScreen"
            component={ArenasScreen}
            options={{
              title: 'Arenas',
              headerTitleAlign: 'center',
              tabBarIcon: ({ color, size }) => <Ionicons name='ticket' color={color} size={size} />
            }}
          />

          {/* Olimpíadas */}
          <Tab.Screen
            name="OlimpiadasScreen"
            component={OlimpiadasScreen}
            options={{
              title: 'Olimpíadas',
              headerTitleAlign: 'center',
              tabBarIcon: ({ color, size }) => <Ionicons name='football' color={color} size={size} />
            }}
          />

          {/* Estatísticas */}
          <Tab.Screen
            name="EstatisticasScreen"
            component={EstatisticasScreen}
            options={{
              title: 'Estatísticas',
              headerTitleAlign: 'center',
              tabBarIcon: ({ color, size }) => <Ionicons name='stats-chart' color={color} size={size} />
            }}
          />




        </Tab.Navigator>
      </NavigationContainer>
    </PaperProvider>
   
  );
}
