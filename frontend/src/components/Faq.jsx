'use client'

import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    question: 'Como funciona a entrega dos suplementos?',
    answer: 'A entrega é feita via motoboy local ou Correios, dependendo da sua localização. O prazo é estimado entre 1 a 5 dias úteis.',
  },
  {
    question: 'Quais formas de pagamento são aceitas?',
    answer: 'Aceitamos Pix, cartão de crédito, débito e também parcelamentos via PagSeguro ou MercadoPago.',
  },
  {
    question: 'É necessário receita para comprar suplementos?',
    answer: 'Não. Todos os produtos são de venda livre e regulamentados pela Anvisa.',
  },
  {
    question: 'Posso retirar pessoalmente na loja?',
    answer: 'Sim! Temos opção de retirada na loja com horário agendado.',
  },
  {
    question: 'Vocês oferecem consultoria esportiva?',
    answer: 'Sim, temos parcerias com nutricionistas e treinadores. Consulte nossos pacotes especiais.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (index) => {
    setOpenIndex(index === openIndex ? null : index)
  }

  return (
    <section className="w-full bg-black py-16 px-4 text-white">
      {/* Título */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-extrabold tracking-tight">
          Dúvidas <span className="text-purple-500">Frequentes</span>
        </h2>
        <p className="text-zinc-400 text-sm mt-2">Tudo o que você precisa saber antes de comprar</p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index
          return (
            <div
              key={index}
              className="border border-zinc-700 rounded-xl overflow-hidden bg-zinc-900/60"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center px-6 py-4 hover:bg-purple-900/10 transition-colors"
              >
                <span className="text-left font-medium text-base sm:text-lg">
                  <span className="text-purple-500 mr-2">{index + 1}.</span>
                  {faq.question}
                </span>
                {isOpen ? (
                  <Minus size={20} className="text-purple-400" />
                ) : (
                  <Plus size={20} className="text-purple-400" />
                )}
              </button>
              {isOpen && (
                <div className="px-6 pb-4 text-sm text-zinc-300 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
