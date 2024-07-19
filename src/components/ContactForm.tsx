"use client";

import { useState } from "react";

interface FormProps {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {

  const [formValues, setFormValues] = useState <FormProps>({name: '', email: '', message: ''})

  return (
    <form>
      <div>
        <label htmlFor="name">Nome:</label>
        <input
        type="text" 
        name="name" 
        id="name"
        placeholder="Seu nome"
        value={formValues.name} 
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
        type="email"
        name="email"
        id="email"
        placeholder="Seu email"
        value={formValues.email}
        />
      </div>
      <div>
        <label htmlFor="message">Mensagem:</label>
        <textarea
        name="message" 
        id="message"
        placeholder="Digite sua mensagem aqui"
        value={formValues.message}
        />
      </div>
    </form>
  )
}