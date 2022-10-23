import React, { useState } from "react";
import BaseAuth from "../../components/BaseAuth";
import { useNavigate } from "react-router-dom";
import { Card, Input } from "antd";
import LogoHA from "../../logoHA.png";
import { AiOutlineKey, AiOutlineUserAdd } from "react-icons/ai";
import "./styles.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();

  return (
    <BaseAuth>
      <Card className="card-login">
        <div className="center">
          <img src={LogoHA} name="logo" className="logo-login" />
        </div>
        <h3 className="title-login">Você esqueceu a sua senha?</h3>
        <span className="subtitle-login">
          Não se preocupe com isso, basta confirmar seu e-mail abaixo e iremos
          enviar um link em seu e-mail para redefinir sua senha.
        </span>
        <span className="label-input">Confirme o seu E-mail:</span>
        <Input
          type="email"
          placeholder="example@example.com"
          id="email"
          className="input-login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button className="button-login" onClick={() => navigate("/")}>
          Recuperar minha senha
        </button>
      </Card>
    </BaseAuth>
  );
};
export default ForgotPassword;
