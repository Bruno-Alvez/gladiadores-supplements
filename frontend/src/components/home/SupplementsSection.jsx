'use client'

import { Zap } from 'lucide-react'

export default function SupplementsSection() {
  return (
    <section className="relative bg-purple-500/9 text-white py-16 px-6 text-center mt-12 overflow-hidden">
      {/* Raio esquerdo (desktop) */}
      <div className="hidden md:flex absolute left-0 top-0 h-full items-center">
        <Zap size={80} className="text-purple-600 opacity-30" />
      </div>

      {/* Raio direito (desktop) */}
      <div className="hidden md:flex absolute right-0 top-0 h-full items-center">
        <Zap size={80} className="text-purple-600 opacity-30 rotate-180" />
      </div>

      {/* Título com raios ao lado no mobile */}
      <div className="flex items-center justify-center gap-2 mb-6 z-10 relative">
        <Zap size={24} className="text-purple-500 md:hidden opacity-50" />
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
          <span className="text-purple-500">SUPLEMENTOS</span> GLADIADORES
        </h2>
        <Zap size={24} className="text-purple-500 md:hidden opacity-50 rotate-180" />
      </div>

      <div className="max-w-3xl mx-auto text-zinc-300 text-base sm:text-lg leading-relaxed relative z-10">
        <p>
          Na <strong>Gladiadores Suplementos</strong>, você encontra uma linha completa de produtos
          para elevar seu desempenho físico, acelerar resultados e manter o foco nos seus objetivos.
          Oferecemos opções de <strong>whey protein</strong>, <strong>creatina</strong>, <strong>pré-treinos</strong>,
          <strong> BCAA</strong> e muito mais, formuladas com tecnologia de ponta e matérias-primas selecionadas.
        </p>
        <br />
        <p>
          Seja para <strong>ganhar massa</strong>, <strong>emagrecer</strong>, <strong>recuperar</strong> após os treinos
          ou <strong>aumentar sua energia</strong>, nossos suplementos são pensados para quem exige resultados de verdade.
          Aqui, você encontra excelência, transparência e performance em cada dose.
        </p>
      </div>
    </section>
  )
}