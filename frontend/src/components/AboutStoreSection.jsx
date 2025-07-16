'use client'

import Image from 'next/image'

export default function AboutStoreSection() {
  return (
    <section className="w-full bg-black px-4 py-20 mt-22">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-3xl font-extrabold text-white">
          SOBRE <span className="text-purple-500">A LOJA</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-2">
          Conheça a história, os valores e o propósito por trás da Gladiadores Suplementos
        </p>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image */}
        <div className="w-full md:w-5/12">
          <Image
            src="/images/about-store.jpg"
            alt="Foto da loja Gladiadores"
            width={450}
            height={50}
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>

        {/* Text */}
        <div className="w-full md:w-7/12 text-zinc-300 text-justify">
          <p className="text-base leading-relaxed">
            A Gladiadores Suplementos nasceu com o propósito de transformar vidas por meio da saúde, performance e disciplina.
            Mais do que uma loja, somos uma comunidade que acredita no poder da consistência e no impacto que uma boa suplementação pode ter na jornada de cada guerreiro.
          </p>

          <p className="mt-4 text-base leading-relaxed">
            Fundada por apaixonados por treino e bem-estar, nossa missão vai além da venda de produtos.
            Trabalhamos diariamente para oferecer um atendimento próximo, humano e com orientação de verdade.
            Aqui, cada cliente é tratado como parte do time — como um verdadeiro Gladiador.
          </p>

          <p className="mt-4 text-base leading-relaxed">
            Estamos localizados no coração da cidade, com uma estrutura moderna, equipe qualificada e uma seleção criteriosa dos melhores suplementos do mercado.
            Venha nos visitar e sinta a energia que move quem vive para evoluir todos os dias.
          </p>

          <p className="mt-4 text-base leading-relaxed">
            Buscamos constantemente inovação e qualidade, trazendo as últimas novidades em suplementos nacionais e importados. Cada produto em nossa prateleira é selecionado com critério, responsabilidade e compromisso com a sua saúde e seus resultados.
          </p>

          <p className="mt-4 text-base leading-relaxed">
            Seja você um iniciante na academia, um atleta de alto rendimento ou alguém em busca de mais disposição no dia a dia, aqui é o seu lugar. Nosso objetivo é caminhar com você em cada fase, oferecendo não só produtos, mas suporte, confiança e motivação para ir além.
        </p>
        
        </div>
      </div>
    </section>
  )
}