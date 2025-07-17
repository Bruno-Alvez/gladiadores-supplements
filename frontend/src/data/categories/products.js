const products = {
  proteinas: [
    {
      id: 'pro1',
      name: 'Whey Protein Isolado 900g',
      description: 'Alta concentração proteica para recuperação muscular rápida.',
      benefits: ['Alto teor de proteína', 'Baixo teor de carboidratos', 'Rápida absorção'],
      imageUrls: [
        '/images/products/whey-isolado-1.jpg',
        '/images/products/whey-isolado-2.jpg',
      ],
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o produto *Whey Protein Isolado 900g*.',
      success: true,
    },
    {
      id: 'pro2',
      name: 'Whey Concentrado 1kg',
      description: 'Suplemento ideal para crescimento muscular.',
      benefits: ['Melhora o ganho de massa', 'Rico em BCAA', 'Sabor delicioso'],
      imageUrls: ['/images/products/whey-concentrado.jpg'],
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o produto *Whey Concentrado 1kg*.',
      success: true,
    },
  ],

  creatinas: [
    {
      id: 'cre1',
      name: 'Creatina Monohidratada 300g',
      description: 'Aumenta a força e a performance nos treinos.',
      benefits: ['Mais força e explosão', 'Aumenta o desempenho', 'Sem sabor'],
      imageUrls: ['/images/products/creatina-monohidratada.jpg'],
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o produto *Creatina Monohidratada 300g*.',
      success: true,
    },
  ],

  'pre-treinos': [
    {
      id: 'pre1',
      name: 'GladShock Pré-Treino 300g',
      description: 'Pré-treino potente com foco, energia e vasodilatação.',
      benefits: ['Aumenta o foco', 'Explosão muscular', 'Fórmula avançada'],
      imageUrls: [
        '/images/products/gladshock-1.jpg',
        '/images/products/gladshock-2.jpg',
      ],
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o produto *GladShock Pré-Treino 300g*.',
      success: true,
    },
  ],

  hipercaloricos: [
    {
      id: 'hiper1',
      name: 'Hipercalórico 3kg Baunilha',
      description: 'Ideal para ganho de peso com qualidade.',
      benefits: ['Alto valor calórico', 'Ganho de massa', 'Sabor agradável'],
      imageUrls: ['/images/products/hipercalorico-baunilha.jpg'],
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o produto *Hipercalórico 3kg Baunilha*.',
      success: true,
    },
  ],
}

export default products