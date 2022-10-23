import React, { useState } from "react";
import BaseAuth from "../../components/BaseAuth";
import { useNavigate } from "react-router-dom";
import { Card } from "antd";
import LogoHA from "../../logoHA.png";
import { RiUserHeartLine } from "react-icons/ri";
import "./styles.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const profile = [
    { label: "Estudante", value: "student" },
    { label: "Professor", value: "teacher" },
  ];

  const course = [
    { label: "Médicina Veterinária", value: "vet-med" },
    { label: "Ciência da Computação", value: "computer-science" },
  ];
  return (
    <BaseAuth>
      <Card className="card-login">
        <div className="center">
          <img src={LogoHA} name="logo" className="logo-login" />
        </div>
        <h3 className="title-login">Seja bem-vindo à plataforma!</h3>
        <span className="subtitle-login">
          Preencha o formulário para criar uma conta na plataforma.
        </span>
        <span className="label-input">Nome Completo:</span>
        <input
          type="name"
          placeholder="Digite seu nome completo..."
          id="name"
          className="input-login"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span className="label-input">E-mail:</span>
        <input
          type="email"
          placeholder="example@example.com"
          id="email"
          className="input-login"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span className="label-input">Tipo de Perfil:</span>
        <select
          id="profile-type"
          className="input-login"
        >
          <option value="">Selecione</option>
          {profile.map((data) => {
            return <option value={data.value}>{data.label}</option>;
          })}
        </select>
        <span className="label-input">Curso:</span>
        <select
          id="profile-type"
          className="input-login"
        >
          <option value="">Selecione</option>
          {course.map((data) => {
             return <option value={data.value}>{data.label}</option>;
          })}
        </select>
        <span className="label-input">Senha:</span>
        <input
          type="password"
          placeholder="Crie uma senha..."
          id="password"
          className="input-login"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="label-input">Confirme a Senha:</span>
        <input
          type="password"
          placeholder="Confirme sua senha..."
          id="password"
          className="input-login"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="button-login" onClick={() => navigate("/")}>
          Criar conta
        </button>
        <span className="forgot-password">
          <RiUserHeartLine style={{ marginRight: 5 }} />
          Já possui uma conta?{" "}
          <a onClick={() => navigate("/")} className="link-register">
            Fazer Login
          </a>
        </span>
      </Card>
    </BaseAuth>
  );
};
export default Register;
