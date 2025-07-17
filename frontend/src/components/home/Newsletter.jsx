'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState('')

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validateEmail(email)) {
      setEmailError('Por favor, digite um e-mail válido.')
      return
    }

    setEmailError('')
    console.log({ name, email })
  }

  return (
    <section className="w-full bg-purple-700 text-white py-10 px-4 mt-14">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
        {/* Texto à esquerda */}
        <div className="text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Receba novidades por e-mail
          </h2>
          <p className="text-sm text-zinc-200 mt-1">Assine nossa newsletter</p>
        </div>

        {/* Formulário à direita */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto"
        >
          <input
            type="text"
            placeholder="Seu nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 w-full sm:w-52"
          />

          <div className="flex flex-col w-full sm:w-60">
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() =>
                setEmailError(validateEmail(email) ? '' : 'Por favor, digite um e-mail válido.')
              }
              className="px-4 py-2 rounded-md bg-white text-black placeholder-gray-500 w-full"
            />
            {emailError && (
              <span className="text-red-300 text-sm mt-1">{emailError}</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-black hover:bg-purple-950 text-white px-5 py-2 rounded-md font-semibold transition"
          >
            Inscrever-se
          </button>
        </form>
      </div>
    </section>
  )
}