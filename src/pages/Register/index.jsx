import React, { useState } from "react";
import BaseAuth from "../../components/BaseAuth";
import { useNavigate } from "react-router-dom";
import { Card, Input, message } from "antd";
import LogoHA from "../../logoHA.png";
import { RiUserHeartLine } from "react-icons/ri";
import "./styles.css";

const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [user, setUser] = useState({});

  const profile = [
    { label: "Estudante", value: "student" },
    { label: "Professor", value: "teacher" },
  ];

  const course = [
    { label: "Médicina Veterinária", value: "vet-med" },
    { label: "Ciência da Computação", value: "computer-science" },
  ];

  const saveUser = (e) => {
    if (!user.name == "null" || "") {
      message.error("Por favor, insira seu nome completo!");
    } else if (
      !user.email.match(`^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$`)
    ) {
      message.error(
        "Por favor, verifique o campo de e-mail se ele está correto, insira o @ e endereço!"
      );
    } else if (
      !user.password.match(
        `^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&#])[A-Za-z\\d@$!%*?&#]{8,}$`
      )
    ) {
      message.error(
        "Por favor, verifique o campo de senha, insira uma letra maiúscula, minúscula e caracter especial!"
      );
    } else if (!user.password != confirmPassword) {
      message.error("As senhas não se coincidem, por favor verifique!");
    } else if (profile.values == null || "") {
      message.error("Escolha um tipo de perfil");
    } else if (course.values == null || "") {
      message.error("Escolha um tipo de curso");
    } else {
      e.preventDefault()
        .then((result) => {
          message
            .error("Usuário criado com sucesso!")
            .then(() => navigate("/"));
        })
        .catch(() => {
          message.error(
            "Já existe um usuário cadastrado na plataforma com esse e-mail!"
          );
        });
    }
  };
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
        <Input
          type="name"
          placeholder="Digite seu nome completo..."
          id="name"
          className="input-login"
          value={user.name}
          onChange={(e) => setName({...user, name:e.target.value})}
        />
        <span className="label-input">E-mail:</span>
        <Input
          type="email"
          placeholder="example@example.com"
          id="email"
          className="input-login"
          value={email}
          onChange={(e) => setEmail({...user, email:e.target.value})}
        />
        <span className="label-input">Tipo de Perfil:</span>
        <select id="profile-type" className="input-login">
          <option value="">Selecione</option>
          {profile.map((data) => {
            return <option value={data.value}>{data.label}</option>;
          })}
        </select>
        <span className="label-input">Curso:</span>
        <select id="profile-type" className="input-login">
          <option value="">Selecione</option>
          {course.map((data) => {
            return <option value={data.value}>{data.label}</option>;
          })}
        </select>
        <span className="label-input">Senha:</span>
        <Input.Password
          placeholder="Crie uma senha..."
          id="password"
          className="input-login"
          value={user.password}
          onChange={(e) => setPassword({...user, passowrd:e.target.value})}
        />
        <span className="label-input">Confirme a Senha:</span>
        <Input.Password
          placeholder="Confirme sua senha..."
          id="confirmPassword"
          className="input-login"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button className="button-login" onClick={saveUser}>
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
