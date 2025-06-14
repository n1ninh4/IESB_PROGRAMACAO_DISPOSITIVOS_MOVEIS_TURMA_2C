import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Text, Divider, IconButton, List } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../components/CustomHeader';

export default function PerfilScreen({ navigation }) {
  const [usuario, setUsuario] = useState(null);
  const [codigoEntrega, setCodigoEntrega] = useState('0000');

  useEffect(() => {
    const carregarDados = async () => {
      const dados = await AsyncStorage.getItem('usuario');
      if (dados) {
        setUsuario(JSON.parse(dados));
      }

      // Gerar código aleatório de entrega (simulado)
      const codigo = Math.floor(1000 + Math.random() * 9000).toString();
      setCodigoEntrega(codigo);
    };

    const unsubscribe = navigation.addListener('focus', carregarDados);
    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ padding: 20 }}>
      <CustomHeader navigation={navigation} title="Meu Perfil" />
      <Text style={styles.titulo}>MEU PERFIL</Text>

      <View style={styles.card}>
        <View style={styles.row}>
          <IconButton icon="account-circle-outline" size={40} />
          <View style={{ flex: 1 }}>
            <Text style={styles.nome}>Olá, {usuario?.nome || 'Cliente'}</Text>
            <Text style={styles.info}>{usuario?.telefone || '--'}</Text>
            <Text style={styles.info}>{usuario?.endereco || '--'}</Text>
          </View>
          <IconButton
            icon="pencil"
            onPress={() => navigation.navigate('Cadastro')}
            size={22}
          />
        </View>

        <View style={styles.codigoEntrega}>
          <Text style={styles.codigoTexto}>Código de entrega</Text>
          <View style={styles.blocos}>
            {codigoEntrega.split('').map((d, i) => (
              <View key={i} style={styles.bloco}>
                <Text style={styles.digito}>{d}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>

      <Divider style={styles.divisor} />

      <List.Section>
        <List.Item
          title="Notificações"
          titleStyle={styles.menuTitulo}            // título em branco
          left={props => <List.Icon {...props} icon="bell-outline" color="#fff" />} 
          onPress={() => {}}
        />
        <List.Item
          title="Termos e Privacidade"
          titleStyle={styles.menuTitulo}            // título em branco
          left={props => <List.Icon {...props} icon="shield-check-outline" color="#fff" />}
          onPress={() => {}}
        />
        <List.Item
          title="Sair"
          titleStyle={styles.menuTitulo}            // título em branco
          left={props => <List.Icon {...props} icon="logout" color="#fff" />}
          onPress={async () => {
            await AsyncStorage.removeItem('usuario');
            navigation.replace('Login');
          }}
        />
      </List.Section>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1A1A1A',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 2,
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  nome: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  info: {
    fontSize: 14,
    color: '#555',
  },
  codigoEntrega: {
    marginTop: 20,
  },
  codigoTexto: {
    fontSize: 14,
    marginBottom: 8,
    color: '#333',
  },
  blocos: {
    flexDirection: 'row',
    gap: 8,
  },
  bloco: {
    width: 40,
    height: 40,
    backgroundColor: '#1A1A1A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  digito: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  divisor: {
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  menuTitulo: {
    color: '#fff',       // cor branca para o título dos itens
    fontSize: 16,
    fontWeight: '500',
  },
});
