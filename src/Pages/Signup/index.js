import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from "../../services/api";

export default function Signup() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  function changeValue(e) {
    setForm({ ...form, [e.name]: e.value });
  }

  async function handleSignUp(e) {
    e.preventDefault();

    if (!form.name || !form.email || !form.password) return

    try {
      await api.post('/signup', {
        name: form.name,
        email: form.email,
        password: form.password
      })

      navigate('/');

    } catch (error) {

    }
  }


  return (
    <div className="app_wrapper">
      <div className="login content_wrapper">
        <h1>Faça sua conta</h1>
        <div className="login">
          <div className="login_input_container">
            <form id="login_form" onSubmit={handleSignUp}>
              <div className="input_container">
                <input type='text' placeholder="Digite seu nome" name="name" value={form.name} onChange={(e) => changeValue(e.target)} />
              </div>
              <div className="input_container">
                <input type='email' placeholder="Digite seu email" name="email" value={form.email} onChange={(e) => changeValue(e.target)} />
              </div>
              <div className="input_container">
                <input type='password' placeholder="Digite sua senha" name="password" value={form.password} onChange={(e) => changeValue(e.target)} />
              </div>
              <button type='submit' className="signupBtn">Cadastre-se</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}