import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE = 'carrinho';

async function getAll() {
  const dados = await AsyncStorage.getItem(CHAVE);
  return dados ? JSON.parse(dados) : [];
}

async function addItem(novoItem) {
  const carrinho = await getAll();
  const existente = carrinho.find(item => item.id === novoItem.id);

  if (existente) {
    existente.quantidade = (existente.quantidade || 1) + 1;
  } else {
    carrinho.push({ ...novoItem, quantidade: 1 });
  }

  await AsyncStorage.setItem(CHAVE, JSON.stringify(carrinho));
}

async function remove(id) {
  const carrinho = await getAll();
  const atualizado = carrinho.filter(item => item.id !== id);
  await AsyncStorage.setItem(CHAVE, JSON.stringify(atualizado));
}

async function update(id, novoItem) {
  const carrinho = await getAll();
  const atualizado = carrinho.map(item => (item.id === id ? novoItem : item));
  await AsyncStorage.setItem(CHAVE, JSON.stringify(atualizado));
}

async function saveAll(listaAtualizada) {
  await AsyncStorage.setItem(CHAVE, JSON.stringify(listaAtualizada));
}

async function clear() {
  await AsyncStorage.removeItem(CHAVE);
}

export default {
  getAll,
  addItem,
  remove,
  update,
  saveAll,
  clear,
};
