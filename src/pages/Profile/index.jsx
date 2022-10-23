import React, { useState } from "react";
import Base from "../../components/BaseLayout";
import { MdOutlineBiotech } from "react-icons/md";
import "./styles.css";
import { Card, Row, Col, Divider, Avatar } from "antd";

const UserList = ["Fernanda", "Pedro", "Barbara", "Jean"];
const ColorList = ["#f56a00", "#7265e6", "#ffbf00", "#00a2ae"];
const GapList = [4, 3, 2, 1];

const Profile = () => {
  const [user, setUser] = useState(UserList[0]);
  const [color, setColor] = useState(ColorList[0]);
  const [gap, setGap] = useState(GapList[0]);

  return (
    <Base
      goTo={"/profile"}
      Icon={<MdOutlineBiotech />}
      goToName={"Perfil do Usuário"}
      titlepage={"ao seu perfil"}
      nameofuser={"Fernanda Bonfim"}
      children={
        <>
          <Card className="card-profile">
            <Row gutter={[32, 22]}>
              <Col xs={24} xl={12}>
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
              </Col>
              <Col xs={24} xl={12}>
                <input type="name" id="name" className="input-profile" />
              </Col>
            </Row>
          </Card>
        </>
      }
    />
  );
};
export default Profile;
