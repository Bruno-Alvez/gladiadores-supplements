const products = {
  proteinas: [
    {
      id: 'pro1',
      name: 'Whey High Protein 900g – Absolut Nutrition',
      description: 'Nosso WHEY HIGH PROTEIN da Absolut Nutrition é a escolha perfeita para quem busca uma proteína de alta qualidade, com ótimo custo benefício e que vai te auxiliar no seu aporte proteico diário. Com glutamina peptídio, um aminoácido que ajuda a nutrir e reparar tecidos como pele, unhas, músculos e órgãos, ele contribui para a absorção de nutrientes e serve como fonte energética para as células do sistema imune. Nosso WHEY HIGH PROTEIN não contém soja, e traz em sua porção 3,6 gramas de BCAA’s e 23 gramas de protéinas e está disponível nos sabores chocolate, morango e baunilha.',
      benefits: ['Alto teor de proteína', 'Baixo teor de carboidratos', 'Rápida absorção'],
      imageUrls: [
        '/images/proteinas/absolute/absolute-chocolate.jpeg',
        '/images/proteinas/absolute/absolute-morango.jpeg',
        '/images/proteinas/absolute/absolute-baunilha.jpeg',
        '/images/proteinas/absolute/absolute-nutrition.jpeg'
      ],
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o produto *Whey Protein Isolado 900g*.',
      success: true,
      goal: ['hipertrofia','ganhar-peso','perder-gordura','desempenho','energia'],
      brand: 'absolut',
    },
    {
      id: 'pro2',
      name: 'Whey Protein Crush 900g – Under Labs',
      description: 'Protein Crush libera maior quantidade de aminoácidos indispensáveis e essenciais que nosso organismo não consegue produzir, tornando-a um Whey Protein de altíssima qualidade com alto valor biológico, Protein Crush foi avaliada pelo método DIAAS (Digestible Indispensable Amino Acid Score) sendo considerada como fonte de proteínas que superam as necessidades do corpo, O método DIAAS mede a qualidade das proteínas com base na digestibilidade e na eficiência do corpo em utilizar os aminoácidos essenciais presentes no alimento, A numeração no gráfico DIAAS indica a qualidade da proteína com base na sua digestibilidade e na composição de aminoácidos',
      benefits: ['Alto teor de proteína', 'Baixo teor de carboidratos', 'Rápida absorção'],
      imageUrls: [
        '/images/proteinas/crush/crush-1.jpeg',
        '/images/proteinas/crush/crush-2.jpeg',
        '/images/proteinas/crush/crush-3.jpeg',
        '/images/proteinas/crush/crush-4.jpeg',
        '/images/proteinas/crush/crush-5.jpeg',
        '/images/proteinas/crush/crush-6.jpeg',
        '/images/proteinas/crush/crush-7.jpeg',
        '/images/proteinas/crush/crush-8.jpeg',
      ],
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o produto *Whey Protein Isolado 900g*.',
      success: true,
      goal: ['hipertrofia','ganhar-peso','perder-gordura','desempenho','energia'],
      brand: 'underlabs',
    },
    {
      id: 'pro3',
      name: '100% WHEY CRUSH – Under Labs',
      description: 'Whey Protein De Alto Valor Biológico Com Um Sabor Gourmet Estupidamente Delicioso Com Padrão De Qualidade Importado, a whey protein 100% WHEY CRUSH se diferencia por oferecer uma combinação inigualável de eficácia nutricional e prazer sensorial, Isso não só melhora os resultados físicos, como também torna a suplementação uma parte agradável e desejável da rotina diária.',
      benefits: ['Alto teor de proteína', 'Baixo teor de carboidratos', 'Rápida absorção'],
      imageUrls: [
        '/images/proteinas/crush/whey1.jpeg',
        '/images/proteinas/crush/whey2.jpeg',
        '/images/proteinas/crush/whey3.jpeg',
        '/images/proteinas/crush/whey4.jpeg',
        '/images/proteinas/crush/whey5.jpeg',
        '/images/proteinas/crush/whey6.jpeg',
      ],
      whatsappMessage: 'Olá! Gostaria de saber mais sobre o produto *Whey Protein Isolado 900g*.',
      success: true,
      goal: ['hipertrofia','ganhar-peso','perder-gordura','desempenho','energia'],
      brand: 'underlabs',
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
      goal: ['forca', 'massa-muscular'],
      brand: 'Growth Supplements',
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
      goal: ['energia', 'foco', 'forca'],
      brand: 'Gladiadores',
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
      goal: ['ganhar-peso', 'hipertrofia'],
      brand: 'Max Titanium',
    },
  ],
}

export default products