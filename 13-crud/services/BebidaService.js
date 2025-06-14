const bebidas = {
  cervejas: [
    {
      id: 1,
      nome: 'Heineken 600ml',
      tipo: 'Cerveja',
      volume: '600ml',
      preco: 8.99,
      fabricante: 'Heineken',
      imagem: 'https://i.pinimg.com/736x/46/be/45/46be45ff9645621c96b237f34b529703.jpg'
    },
    {
      id: 2,
      nome: 'Spaten 350ml',
      tipo: 'Cerveja',
      volume: '350ml',
      preco: 3.49,
      fabricante: 'Ambev',
      imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00012884_ba3d68e1-2657-47f9-92fa-8265af7ea630.jpg&w=1080&q=75'
    },
    {
      id: 3,
      nome: 'Brahma Duplo Malte 350ml',
      tipo: 'Cerveja',
      volume: '350ml',
      preco: 3.99,
      fabricante: 'Ambev',
      imagem: 'https://www.ze.delivery/_next/image?url=https%3A%2F%2Fcourier-images-prod.imgix.net%2Fproduc_variant%2F00010266_b3db367a-c484-49e1-bd70-e89ea677a394.jpg&w=1080&q=75'
    },
    {
      id: 4,
      nome: 'Corona 355ml',
      tipo: 'Cerveja',
      volume: '355ml',
      preco: 9.99,
      fabricante: 'Grupo Modelo',
      imagem: 'https://i.pinimg.com/736x/16/3f/2e/163f2eba5b5205843d7cb3292d3d893e.jpg'
    },
    {
      id: 5,
      nome: 'Budweiser 269ml',
      tipo: 'Cerveja',
      volume: '269ml',
      preco: 3.59,
      fabricante: 'AB InBev',
      imagem: 'https://i.pinimg.com/736x/a8/fa/1e/a8fa1e2258697ddd35a4a496a3777588.jpg'
    }
  ],

  refrigerantes: [
    {
      id: 6,
      nome: 'Guaraná Antarctica 2L',
      tipo: 'Refrigerante',
      volume: '2L',
      preco: 7.5,
      fabricante: 'Ambev',
      imagem: 'https://i.pinimg.com/736x/e3/c6/cb/e3c6cb254f49b2d692aed07a33e29f23.jpg'
    },
    {
      id: 7,
      nome: 'Pepsi 350ml',
      tipo: 'Refrigerante',
      volume: '350ml',
      preco: 4.5,
      fabricante: 'PepsiCo',
      imagem: 'https://i.pinimg.com/736x/c8/b8/d6/c8b8d653cf121867a44fc662789f22b1.jpg'
    },
    {
      id: 8,
      nome: 'Coca-Cola 350ml',
      tipo: 'Refrigerante',
      volume: '350ml',
      preco: 4.5,
      fabricante: 'Coca-Cola',
      imagem: 'https://i.pinimg.com/736x/c0/bc/a7/c0bca73f4e4392c62490f5391acf0746.jpg'
    },
    {
      id: 9,
      nome: 'Mineirinho',
      tipo: 'Refrigerante',
      volume: '250ml',
      preco: 4.5,
      fabricante: 'Grupo Petrópolis',
      imagem: 'https://i.pinimg.com/736x/8d/30/e2/8d30e2243cfd30299bdce2ed8d367052.jpg'
    },
    {
      id: 10,
      nome: 'Fanta Laranja 350ml',
      tipo: 'Refrigerante',
      volume: '350ml',
      preco: 4.5,
      fabricante: 'Coca-Cola',
      imagem: 'https://i.pinimg.com/736x/63/73/14/6373148d09e566b3cc40d80f5947e803.jpg'
    }
  ],

  sucos: [
    {
      id: 11,
      nome: 'Suco de Laranja Del Valle 1L',
      tipo: 'Suco',
      volume: '1L',
      preco: 6.5,
      fabricante: 'Del Valle',
      imagem: 'https://i.pinimg.com/736x/8a/d7/12/8ad7129f62fb9723daab8999460e41b5.jpg'
    },
    {
      id: 12,
      nome: 'Suco de Uva Integral',
      tipo: 'Suco',
      volume: '1L',
      preco: 7.99,
      fabricante: 'Aurora',
      imagem: 'https://i.pinimg.com/736x/41/75/5b/41755bb528ebbf11b7771598452d6cd2.jpg'
    }
  ],

  vinhos: [
    {
      id: 13,
      nome: 'Vinho Tinto Pérgola 1L',
      tipo: 'Vinho Tinto',
      volume: '1L',
      preco: 49.99,
      fabricante: 'Carmen',
      imagem: 'https://i.pinimg.com/736x/cd/c6/c1/cdc6c1ac6c7a5037debf69021e3d1188.jpg'
    },
    {
      id: 14,
      nome: 'Vinho Rosé Chilano 750ml',
      tipo: 'Vinho Rosé',
      volume: '750ml',
      preco: 39.99,
      fabricante: 'Casa Valduga',
      imagem: 'https://i.pinimg.com/736x/01/68/f5/0168f50c471b20f20074fcd11f10a910.jpg'
    },
    {
      id: 15,
      nome: 'Vinho Branco Concha y Toro 750ml',
      tipo: 'Vinho Branco',
      volume: '750ml',
      preco: 44.99,
      fabricante: 'Concha y Toro',
      imagem: 'https://i.pinimg.com/736x/92/35/5a/92355a231b2b47724bde39b4c353154c.jpg'
    }
  ],

  destilados: [
    {
      id: 16,
      nome: 'Vodka Absolut 1L',
      tipo: 'Vodka',
      volume: '1L',
      preco: 59.99,
      fabricante: 'Pernod Ricard',
      imagem: 'https://i.pinimg.com/736x/bf/1a/e5/bf1ae53de7fa5512862754f6955a022f.jpg'
    },
    {
      id: 17,
      nome: 'Whisky Red Label 1L',
      tipo: 'Whisky',
      volume: '1L',
      preco: 99.99,
      fabricante: 'JOHNNIE WALKER',
      imagem: 'https://i.pinimg.com/736x/13/7a/f3/137af30859a448c70c32b888ceb0a7ac.jpg'
    },
    {
      id: 18,
      nome: 'Gin Tanqueray 1L',
      tipo: 'Gin',
      volume: '1L',
      preco: 119.99,
      fabricante: 'Diageo',
      imagem: 'https://i.pinimg.com/736x/ae/d8/32/aed83271098493a2c8e5ed8ddf086b5c.jpg'
    },
    {
      id: 19,
      nome: 'Cachaça 51 1L',
      tipo: 'Cachaça',
      volume: '1L',
      preco: 39.99,
      fabricante: 'Cia Müller',
      imagem: 'https://i.pinimg.com/736x/0d/41/b4/0d41b43f4cb4824637f80ea916f7be44.jpg'
    },
    {
      id: 20,
      nome: 'Whisky Blue Label 1L',
      tipo: 'Whisky',
      volume: '1L',
      preco: 790.99,
      fabricante: 'JOHNNIE WALKER',
      imagem: 'https://i.pinimg.com/736x/bf/50/70/bf50701980ec2e8a715edd000f526ed7.jpg'
    }
  ],

  packs: [
    {
      id: 21,
      nome: 'Pack Antártica 12x269ml',
      volume: '12x269ml',
      preco: 39.99,
      imagem: 'https://i.pinimg.com/736x/64/ea/ce/64eace9a7de29faec42c61a1780d2aa7.jpg'
    },
    {
      id: 22,
      nome: 'Pack Brahma 12x269ml',
      volume: '12x269ml',
      preco: 42.0,
      imagem: 'https://i.pinimg.com/736x/49/24/27/492427a413475c9af7dbd07755fb774f.jpg'
    },
    {
      id: 23,
      nome: 'Pack Amstel 12x269ml',
      volume: '12x269ml',
      preco: 35.0,
      imagem: 'https://i.pinimg.com/736x/14/39/3d/14393de4a52846af934676f864b77e55.jpg'
    },
    {
      id: 24,
      nome: 'Pack Império 12x350ml',
      volume: '12x350ml',
      preco: 42.0,
      imagem: 'https://i.pinimg.com/736x/34/67/73/3467736e09ca767e3c748594a93e0a00.jpg'
    },
    {
      id: 25,
      nome: 'Pack Heineken 12x350ml',
      volume: '12x350ml',
      preco: 60.0,
      imagem: 'https://i.pinimg.com/736x/ce/01/e0/ce01e013356e3b789a85cf4bac25d1f6.jpg'
    }
  ]
};

export function getById(id) {
  const allBebidas = Object.values(bebidas).flat();
  return Promise.resolve(allBebidas.find(b => b.id === id));
}

export function getAllCategorias() {
  return Promise.resolve(bebidas);
}

export default {
  getAllCategorias,
  getById
};
