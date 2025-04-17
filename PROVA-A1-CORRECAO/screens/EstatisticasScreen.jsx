import React from 'react';
import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function EstatisticasScreen() {

  // ABA - Estatísticas
  const estatisticas = {
    totalPaises: 206,
    totalModalidades: 32,
    totalMedalhas: 329,
    atletasFemininos: 5250,
    atletasMasculinos: 5250,
    totalArenas: 18,
    totalVoluntarios: 45000,
    orcamentoTotal: "8.8 bilhões de euros"
  };

  function mediaMedalhasPorPais() {
    return estatisticas.totalMedalhas / estatisticas.totalPaises;
  }

  function mediaVoluntariosPorArena() {
    return estatisticas.totalVoluntarios / estatisticas.totalArenas;
  }

  function mediaAtletaPorModalidade() {
    const totalAtletas = estatisticas.atletasFemininos + estatisticas.atletasMasculinos
    return totalAtletas / estatisticas.totalModalidades;
  }

  return (
    <View>
      <Card style={{ margin: 10, borderRadius: 10 }}>
        <Card.Content>
          <Text>Total de Atletas: {estatisticas.atletasFemininos + estatisticas.atletasMasculinos}</Text>
          <Text>Total de Países: {estatisticas.totalPaises}</Text>
          <Text>Total de Modalidades: {estatisticas.totalModalidades}</Text>
          <Text>Medalhas por País: {mediaMedalhasPorPais().toFixed(0)}</Text>
          <Text>Voluntários por Arena: {mediaVoluntariosPorArena().toFixed(0)}</Text>
          <Text>Atletas por Modalidade: {mediaAtletaPorModalidade().toFixed(0)}</Text>
        </Card.Content>
      </Card>
    </View>
  )
}