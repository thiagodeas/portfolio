"use client";

import { useState } from "react";

interface FormProps {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {

  const [formValues, setFormValues] = useState <FormProps>({name: '', email: '', message: ''})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setFormValues({...formValues, [name]: value});
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formValues);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-start gap-y-5">
      <div className="flex items-center border-2 border-turq-blue h-10 w-[380px] rounded-lg p-2">
        <label htmlFor="name" />
        <input
        className="w-full outline-none bg-sec-white"
        type="text" 
        name="name" 
        id="name"
        placeholder="Seu nome"
        value={formValues.name} 
        onChange={handleChange}
        required
        />
      </div>
      <div className="flex items-center border-2 border-turq-blue h-10 w-[380px] rounded-lg p-2">
        <label htmlFor="email" />
        <input
        className="w-full outline-none bg-sec-white"
        type="email"
        name="email"
        id="email"
        placeholder="Seu email"
        value={formValues.email}
        onChange={handleChange}
        required
        />
      </div>
      <div className="flex items-center border-2 border-turq-blue h-[230px] w-[380px] rounded-sm">
        <label htmlFor="message" />
        <textarea
        className="w-full h-full flex p-2 outline-none bg-sec-white"
        name="message" 
        id="message"
        placeholder="Digite sua mensagem aqui"
        value={formValues.message}
        onChange={handleChange}
        required
        />
      </div>
      <button type="submit" className="flex items-center justify-center text-center border-[1px] font-semibold text-primary-blue h-10 w-[130px] rounded-lg p-2 bg-med-gray hover:bg-primary-blue hover:text-light-coral transition-all ease-in-out duration-700">Enviar</button>
    </form>
  )
}