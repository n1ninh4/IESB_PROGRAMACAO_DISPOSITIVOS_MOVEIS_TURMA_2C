import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import Arena from '../componentes/Arena';

export default function ArenasScreen() {

  // ABA - Arenas
  const arenas = [
    {
      id: 1,
      nome: "Stade de France",
      cidade: "Saint-Denis",
      capacidade: 80000,
      imagem: "https://i.pinimg.com/236x/28/ae/8e/28ae8e00707d5c93b968ac95eeed29b7.jpg"
    },
    {
      id: 2,
      nome: "Paris La Défense Arena",
      cidade: "Nanterre",
      capacidade: 30000,
      imagem: "https://i.pinimg.com/236x/9d/cf/dd/9dcfdde58e9f70176b7d78d942729277.jpg"
    },
    {
      id: 3,
      nome: "Arena Bercy",
      cidade: "Paris",
      capacidade: 15000,
      imagem: "https://i.pinimg.com/736x/6c/6d/87/6c6d87ebac2c188a6f7bda2e008181f8.jpg"
    },
    {
      id: 4,
      nome: "Stade Pierre-Mauroy",
      cidade: "Lille",
      capacidade: 50000,
      imagem: "https://i.pinimg.com/236x/36/0d/43/360d4366292e0104ad5bb209252b98ab.jpg"
    },
    {
      id: 5,
      nome: "Grand Palais",
      cidade: "Paris",
      capacidade: 8000,
      imagem: "https://i.pinimg.com/236x/be/c0/76/bec076408b146e16bc9bcdf58978405d.jpg"
    }
  ];


  return (
    <View>
      <FlatList
        data={arenas}
        renderItem={
          ({ item }) => (
            <Arena
              nome={item.nome}
              cidade={item.cidade}
              capacidade={item.capacidade}
              imagem={item.imagem}
            />
          )
        }
      />
    </View>
  )
}
