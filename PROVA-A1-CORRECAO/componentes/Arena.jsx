import React from 'react'
import { Card, Text } from 'react-native-paper'

export default function Arena(props) {

  const { nome, cidade, capacidade, imagem } = props

  return (
    <Card style={{ margin: 10, borderRadius: 10 }}>
      <Card.Cover source={{ uri: imagem }} />
      <Card.Content>
        <Text>nome: {nome}</Text>
        <Text>Cidade: {cidade}</Text>
        <Text>Capacidade: {capacidade}</Text>
      </Card.Content>
    </Card>
  )
}