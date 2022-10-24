import React, { useState } from "react";
import Base from "../../components/BaseLayout";
import { MdOutlineBiotech } from "react-icons/md";
import "./styles.css";
import { Card, Row, Col, Input, Avatar } from "antd";

const UserList = ["Fernanda", "Pedro", "Barbara", "Jean"];
const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
const GapList = [4, 3, 2, 1];

const Profile = () => {
  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const [gap, setGap] = useState(GapList[0]);
  const [name, setName] = useState("Fernanda Bonfim");
  const [email, setEmail] = useState("bonfimfernanda12@gmail.com");
  const [profile, setProfile] = useState("Estudante");
  const [course, setCourse] = useState("Ciência da computação");
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);

  return (
    <Base
      goTo={"/profile"}
      Icon={<MdOutlineBiotech />}
      goToName={"Perfil do Usuário"}
      titlepage={"ao seu perfil"}
      nameofuser={"Fernanda Bonfim"}
      children={
        <>
          <Row gutter={[32, 22]}>
            <Col xs={24} xl={8}>
              <Card className="card-profile">
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Avatar
                    style={{ backgroundColor: color, verticalAlign: "middle" }}
                    size="large"
                    gap={gap}
                    className="avatar-profile"
                  >
                    {user}
                  </Avatar>
                </div>
                <span className="name-profile">Fernanda Bonfim</span>
                <span className="ocupation">Estudante</span>
                <span className="course">Ciência da Computação</span>
              </Card>
            </Col>
            <Col xs={24} xl={16}>
              <Card className="card-profile">
                <Row gutter={[32, 22]}>
                  <Col xs={24} xl={12}>
                    <span className="label-profile">Nome Completo:</span>
                    <Input
                      type="name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-profile"
                    />
                  </Col>
                  <Col xs={24} xl={12}>
                    <span className="label-profile">E-mail:</span>
                    <Input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input-profile"
                    />
                  </Col>
                  <Col xs={24} xl={12}>
                    <span className="label-profile">Tipo de perfil:</span>
                    <Input
                      type="email"
                      id="email"
                      value={profile}
                      onChange={(e) => setProfile(e.target.value)}
                      className="input-profile"
                    />
                  </Col>
                  <Col xs={24} xl={12}>
                    <span className="label-profile">Curso:</span>
                    <Input
                      type="email"
                      id="email"
                      value={course}
                      onChange={(e) => setCourse(e.target.value)}
                      className="input-profile"
                    />
                  </Col>
                  {showPassword && (
                    <>
                      <Col xs={24} xl={12}>
                        <span className="label-profile">Nova Senha:</span>
                        <Input.Password
                          id="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          className="input-profile"
                        />
                      </Col>
                      <Col xs={24} xl={12}>
                        <span className="label-profile">
                          Confirmar nova Senha:
                        </span>
                        <Input.Password
                          id="password"
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                          className="input-profile"
                        />
                      </Col>
                    </>
                  )}
                  <Col xs={24} xl={12}>
                    {!showPassword && (
                      <button
                        className="green change-password"
                        onClick={() => setShowPassword(true)}
                      >
                        Mudar a Senha
                      </button>
                    )}
                    {showPassword && (
                      <button
                        className="green change-password"
                        onClick={() => setShowPassword(false)}
                      >
                        Salvar a nova Senha
                      </button>
                    )}
                  </Col>
                  <Col xs={24} xl={12}>
                    <button className="blue change-password">
                      Salvar Alterações
                    </button>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </>
      }
    />
  );
};
export default Profile;
