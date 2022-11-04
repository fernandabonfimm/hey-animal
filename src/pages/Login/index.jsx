import React, { useState } from 'react';
import BaseAuth from '../../components/BaseAuth';
import { Redirect, useHistory, withRouter} from 'react-router-dom';
import { Card, Input } from 'antd';
import LogoHA from '../../logoHA.png';
import { AiOutlineKey, AiOutlineUserAdd } from 'react-icons/ai';
import './styles.css';
import Api from '../../Services/Firebase/FirebaseConfig';
import { useCallback } from 'react';
import { useContext } from 'react';
import {AuthContext} from '../../Services/Auth/AuthContext';

const Login = ({history}) => {

  const handleLogin = useCallback(async (event) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await Api.auth().createUserWithEmailAndPassword(
        email.value,
        password.value,
      );
      history.push('/dashboard');
    } catch (error) {
      alert(error);
    }
  });

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <BaseAuth>
      <Card className="card-login">
        <div className="center">
          <img src={LogoHA} name="logo" className="logo-login" />
        </div>
        <h3 className="title-login">Seja bem-vindo à plataforma!</h3>
        <span className="subtitle-login">
          Preencha o formulário para realizar seu login na plataforma.
        </span>
        <form onSubmit={handleLogin}>
          <label className="label-input">E-mail:</label>
          <Input
            name="email"
            type="email"
            placeholder="example@example.com"
            id="email"
            className="input-login"
          />
          <label className="label-input">Senha:</label>
          <Input.Password
            name="password"
            type="password"
            placeholder="Digite sua senha..."
            id="password"
            className="input-login"
          />
          <span
            className="forgot-password"
            onClick={() => history.push('/forgotpassword')}
          >
            <AiOutlineKey style={{ marginRight: 5 }} />
            Esqueceu sua senha?
          </span>
          <button className="button-login" type="submit">
            Fazer Login
          </button>
        </form>
        <span className="forgot-password">
          <AiOutlineUserAdd style={{ marginRight: 5 }} />
          Ainda não possui uma conta?{' '}
          <a onClick={() => history.push('/register')} className="link-register">
            Criar conta
          </a>
        </span>
      </Card>
    </BaseAuth>
  );
};
export default withRouter(Login);
