import React, { useState, useEffect } from 'react';
import {
  View,
  KeyboardAvoidingView,
  Platform,
  FlatList,
  StyleSheet
} from 'react-native';
import { TextInput, Button, Text, Divider, RadioButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Location from 'expo-location';
import CarrinhoService from '../services/CarrinhoService';


export default function ComprarScreen({ route, navigation }) {
  const itens = route.params?.itens || [];

  const [form, setForm] = useState({
    nome: '',
    telefone: '',
    endereco: '',
    pagamento: 'Pix'
  });

  const [bairro, setBairro] = useState(null);
  const [estimativa, setEstimativa] = useState(null);

  useEffect(() => {
    const carregarUsuario = async () => {
      const dados = await AsyncStorage.getItem('usuario');
      if (dados) {
        const user = JSON.parse(dados);
        setForm((prev) => ({
          ...prev,
          nome: user.nome || '',
          telefone: user.telefone || '',
          endereco: user.endereco || ''
        }));
      }
    };

    const obterLocalizacao = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setBairro('Localização não permitida');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      const endereco = await Location.reverseGeocodeAsync(location.coords);

      if (endereco.length > 0) {
        const local = endereco[0];
        setBairro(local.suburb || local.district || local.neighborhood || local.city);
        const minutos = Math.floor(Math.random() * 21) + 25;
        setEstimativa(minutos);
      }
    };

    carregarUsuario();
    obterLocalizacao();
  }, []);

  const handleChange = (campo, valor) => {
    setForm({ ...form, [campo]: valor });
  };

  const finalizarCompra = async () => {
    await CarrinhoService.clear();
    navigation.replace('Sucesso');
  };

  const renderItem = ({ item }) => (
    <Text style={{ color: '#333', marginBottom: 4 }}>
      • {item.nome} ({item.quantidade || 1}x) - R$ {(item.preco * (item.quantidade || 1)).toFixed(2)}
    </Text>
  );

  const total = itens.reduce((s, i) => s + (i.preco * (i.quantidade || 1)), 0).toFixed(2);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
      keyboardVerticalOffset={80}
    >
      <FlatList
        contentContainerStyle={styles.container}
        data={itens}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        ListHeaderComponent={
          <>
            {bairro && estimativa && (
              <View style={styles.entregaBox}>
                <Text style={styles.entregaTexto}>
                  📍 Entrega estimada: até {estimativa} min em {bairro}
                </Text>
              </View>
            )}
            <Text style={styles.titulo}>Resumo do Pedido</Text>
          </>
        }
        ListFooterComponent={
          <>
            <Divider style={styles.divisor} />
            <Text style={styles.total}>Total: R$ {total}</Text>

            <Divider style={styles.divisor} />

            <Text style={styles.subtitulo}>Dados do Cliente</Text>
            <TextInput
              label="Nome"
              value={form.nome}
              onChangeText={(v) => handleChange('nome', v)}
              style={styles.input}
            />
            <TextInput
              label="Telefone"
              value={form.telefone}
              onChangeText={(v) => handleChange('telefone', v)}
              keyboardType="phone-pad"
              style={styles.input}
            />
            <TextInput
              label="Endereço"
              value={form.endereco}
              onChangeText={(v) => handleChange('endereco', v)}
              style={styles.input}
            />

            <Text style={styles.subtitulo}>Forma de Pagamento</Text>
            <RadioButton.Group
              onValueChange={(value) => handleChange('pagamento', value)}
              value={form.pagamento}
            >
              <RadioButton.Item label="Pix" value="Pix" />
              <RadioButton.Item label="Dinheiro" value="Dinheiro" />
              <RadioButton.Item label="Cartão na entrega" value="Cartão" />
            </RadioButton.Group>

            <Button
              mode="contained"
              onPress={finalizarCompra}
              buttonColor="#0077B6"
              textColor="#fff"
              style={styles.botao}
            >
              Confirmar Pedido
            </Button>
          </>
        }
      />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#F8F8F8',
  },
  entregaBox: {
    marginBottom: 12,
    paddingVertical: 6,
    borderRadius: 6,
    backgroundColor: '#E9F6FB',
    paddingHorizontal: 10,
  },
  entregaTexto: {
    fontSize: 16,
    color: '#0077B6',
    fontWeight: '600',
  },
  titulo: {
    color: '#1A1A1A',
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    marginBottom: 12,
  },
  divisor: {
    marginVertical: 16,
    backgroundColor: '#CCC',
  },
  total: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  botao: {
    marginTop: 20,
    borderRadius: 8,
    paddingVertical: 6,
  },
});
