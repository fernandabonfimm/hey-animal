import React from "react";
import { Menu, Dropdown, Layout, Avatar, Space, message } from "antd";
import { RiUserHeartLine, RiLogoutCircleLine } from "react-icons/ri";
import "./styles.css";
import { MdOutlineDashboard, MdOutlineBiotech } from "react-icons/md";
import LogoHA from "../../logoHA.png";
import { useNavigate } from "react-router-dom";

const { Header } = Layout;

const HeaderComponent = () => {
  const navigate = useNavigate();
  const menu = (
    <Menu
      items={[
        {
          label: <a className="menu-item" onClick={() => navigate("/profile")}><RiUserHeartLine style={{marginRight: 10}}/>Perfil</a>,
          key: "1",
        },
        {
          label: <a className="menu-item" onClick={() => navigate("/")}><RiLogoutCircleLine style={{marginRight: 10}}/>Sair</a>,
          key: "2",
        },
      ]}
    />
  );
  return (
    <>
      <Header className="header-content">
        <img
          src={LogoHA}
          name="logo"
          className="logo-header"
          onClick={() => navigate("/dashboard")}
        />
        <button
          className="buttonDashboard"
          onClick={() => navigate("/dashboard")}
        >
          <MdOutlineDashboard style={{ marginRight: 10, fontSize: 20 }} />
          Dashboard
        </button>
        <button className="buttonDashboard" onClick={() => navigate("/forms")}>
          <MdOutlineBiotech style={{ marginRight: 10, fontSize: 20 }} />
          Formulário
        </button>
        <Dropdown overlay={menu} className="dropwdown">
            <Space>
              <Avatar
                size={40}
                className="Avatar-header"
                icon={<RiUserHeartLine />}
              />
            </Space>
        </Dropdown>
      </Header>
    </>
  );
};

export default HeaderComponent;
