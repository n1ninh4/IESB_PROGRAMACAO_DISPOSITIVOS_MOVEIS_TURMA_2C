import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import BebidaService from '../services/BebidaService';


export default function BebidaForm({ navigation, route }) {
  const [bebida, setBebida] = useState({
    nome: '',
    tipo: '',
    volume: '',
    preco: '',
    fabricante: ''
  });

  useEffect(() => {
    if (route.params) {
      setBebida(route.params);
    }
  }, [route]);

  const handleChange = (name, value) => {
    setBebida({ ...bebida, [name]: value });
  };

  const salvar = () => {
    if (bebida.id) {
      BebidaService.update(bebida.id, bebida);
    } else {
      BebidaService.create(bebida);
    }
    navigation.goBack();
  };

  return (
    <View style={{ padding: 10 }}>
        
      <TextInput label="Nome da Bebida" value={bebida.nome} onChangeText={value => handleChange('nome', value)} />
      <TextInput label="Tipo (cerveja, suco...)" value={bebida.tipo} onChangeText={value => handleChange('tipo', value)} />
      <TextInput label="Volume (ex: 600ml)" value={bebida.volume} onChangeText={value => handleChange('volume', value)} />
      <TextInput label="Preço" keyboardType="numeric" value={bebida.preco} onChangeText={value => handleChange('preco', value)} />
      <TextInput label="Fabricante" value={bebida.fabricante} onChangeText={value => handleChange('fabricante', value)} />
      <Button mode="contained" onPress={salvar} style={{ marginTop: 10 }}>
        Salvar
      </Button>
    </View>
  );
}
