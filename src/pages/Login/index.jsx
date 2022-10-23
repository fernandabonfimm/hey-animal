import React, { useState } from "react";
import BaseAuth from "../../components/BaseAuth";
import { useNavigate } from "react-router-dom";
import { Card, Input } from "antd";
import LogoHA from "../../logoHA.png";
import { AiOutlineKey, AiOutlineUserAdd } from "react-icons/ai";
import "./styles.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

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
        <span className="label-input">E-mail:</span>
        <Input
          type="email"
          placeholder="example@example.com"
          id="email"
          className="input-login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="label-input">Senha:</span>
        <Input.Password
          placeholder="Digite sua senha..."
          id="password"
          className="input-login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="forgot-password">
          <AiOutlineKey style={{ marginRight: 5 }} />
          Esqueceu sua senha?
        </span>
        <button className="button-login" onClick={() => navigate("/dashboard")}>Fazer Login</button>
        <span className="forgot-password">
          <AiOutlineUserAdd style={{ marginRight: 5 }} />
          Ainda não possui uma conta?{" "}
          <a onClick={() => navigate("/register")} className="link-register">Criar conta</a>
        </span>
      </Card>
    </BaseAuth>
  );
};
export default Login;
