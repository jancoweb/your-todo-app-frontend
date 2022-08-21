import React, { useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { getLocalItem, setLocalItem } from "../../services/functions";
import './styles.css'

function Login() {

  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [warning, setWarning] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    if (!email || !password) {
      setWarning('Todos os campos são obrigatórios');
      return
    }
    try {
      const res = await api.post('/login', {
        email: email,
        password: password
      })

      const { token, user } = res.data;

      setLocalItem('token', token);
      setLocalItem('user', user.name);
      setLocalItem('userId', user.id);

      navigate('/main');
    } catch (e) {
      setWarning(e.response.data.message)
    }
  }

  useEffect(function () {
    const token = getLocalItem('token');
    if (token) {
      navigate('/main')
    }
  })

  return (
    <>
      <div className="app_wrapper">
        <div className="login content_wrapper">
          <h1>You To-Do App</h1>
          <p>Lista de tarefas Online</p>
          <br></br>
          <h3>Faça seu login</h3>
          <div className="login_input_container">
            <form id='login_form' onSubmit={handleLogin}>
              <div className="input_container">
                <input type='text' placeholder="Digite seu email" required name="email" onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="input_container">
                <input type='password' placeholder="Digite sua senha" required name="pw" onChange={(e) => setPassword(e.target.value)} />
              </div>
              {warning && <span style={{ color: 'red' }}>Email ou senha incorretos</span>}
              <button className="loginBtn" type="submit">Login</button>
              <div>
                <p>Se ainda não possui uma conta</p>
                <Link to='/signup'>Cadastre-se</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login;