import React from 'react'
import { Card, Text } from 'react-native-paper'

export default function Modalidade(props) {

  const { nome, tipo, categoria, local, numeroAtletas, imagem } = props

  return (
    <Card style={{ margin: 10, borderRadius: 10 }}>
      <Card.Cover source={{ uri: imagem }} style={{height: 400}} />
      <Card.Content>
        <Text>nome: {nome}</Text>
        <Text>Tipo: {tipo}</Text>
        <Text>Categoria: {categoria}</Text>
        <Text>Local: {local}</Text>
        <Text>Quantidade de Atletas: {numeroAtletas}</Text>
      </Card.Content>
    </Card>
  )
}