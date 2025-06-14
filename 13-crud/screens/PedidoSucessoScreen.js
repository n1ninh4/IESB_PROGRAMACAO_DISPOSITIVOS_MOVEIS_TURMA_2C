import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';




export default function PedidoSucessoScreen({ navigation }) {
  const anim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(anim, {
      toValue: 1,
      useNativeDriver: true,
      friction: 4,
    }).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={{ transform: [{ scale: anim }] }}>
        <Icon name="check-circle" size={120} color="#38B000" />
      </Animated.View>
      <Text style={styles.titulo}>Pedido realizado com sucesso!</Text>
      <Button
        mode="contained"
        onPress={() => navigation.replace('Home')}
        style={styles.botao}
        buttonColor="#0077B6"
      >
        Voltar ao Início
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    marginVertical: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1A1A1A',
  },
  botao: {
    marginTop: 20,
    borderRadius: 8,
  },
});
