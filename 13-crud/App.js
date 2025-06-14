import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider as PaperProvider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Telas principais
import BebidaLista from './screens/BebidaLista';
import CarrinhoScreen from './screens/CarrinhoScreen';
import PerfilScreen from './screens/PerfilScreen';
import BuscarScreen from './screens/BuscarScreen';
import BebidaDetalhes from './screens/BebidaDetalhes';
import ComprarScreen from './screens/ComprarScreen';
import SucessoScreen from './screens/SucessoScreen';

// Telas de acesso
import LoginScreen from './screens/LoginScreen';
import CadastroScreen from './screens/CadastroScreen';

const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Navegação das abas principais
function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Bebidas"
      barStyle={{ backgroundColor: '#000' }}
      activeColor="#0077B6"
      inactiveColor="#aaa"
      labeled={true}
      shifting={false}
    >
      <Tab.Screen
        name="Bebidas"
        component={BebidaLista}
        options={{
          tabBarLabel: 'Bebidas',
          tabBarIcon: ({ color }) => <Icon name="glass-cocktail" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Buscar"
        component={BuscarScreen}
        options={{
          tabBarLabel: 'Buscar',
          tabBarIcon: ({ color }) => <Icon name="magnify" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Carrinho"
        component={CarrinhoScreen}
        options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color }) => <Icon name="cart" color={color} size={24} />,
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PerfilScreen}
        options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color }) => <Icon name="account" color={color} size={24} />,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Login"
          screenOptions={{
            headerStyle: { backgroundColor: '#ffzzzzzf' },
            headerTintColor: '#0077B6',
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Cadastro' }} />
          <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen name="Detalhes" component={BebidaDetalhes} options={{ title: 'Detalhes' }} />
          <Stack.Screen name="Comprar" component={ComprarScreen} options={{ title: 'Finalizar Pedido' }} />
          <Stack.Screen name="Sucesso" component={SucessoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}
