import React from "react";
import { Menu, Dropdown, Layout, Avatar, Space, message } from "antd";
import { RiUserHeartLine, RiLogoutCircleLine } from "react-icons/ri";
import "./styles.css";
import { MdOutlineDashboard, MdOutlineBiotech } from "react-icons/md";
import {AiOutlineMenu} from 'react-icons/ai';
import LogoHA from "../../logoHA.png";
import { useHistory } from "react-router-dom";
import Api from '../../Services/Firebase/FirebaseConfig'

const { Header } = Layout;

const HeaderComponent = () => {
  const history = useHistory();
  const menu = (
    <Menu
      items={[
        {
          label: <a className="menu-item" onClick={() => history.push("/profile")}><RiUserHeartLine style={{marginRight: 10}}/>Perfil</a>,
          key: "1",
        },
        {
          label: <a className="menu-item" onClick={() => Api.auth().singOut()}><RiLogoutCircleLine style={{marginRight: 10}}/>Sair</a>,
          key: "2",
        },
      ]}
    />
  );

  const menuresponsive = (
    <Menu
      items={[
        {
          label: <a className="menu-item" onClick={() => history.push("/dashboard")}><MdOutlineDashboard style={{marginRight: 10}}/>Dashboard</a>,
          key: "1",
        },
        {
          label: <a className="menu-item" onClick={() => history.push("/search")}><MdOutlineBiotech style={{marginRight: 10}}/>Nova Pesquisa</a>,
          key: "2",
        },
        {
          label: <a className="menu-item" onClick={() => history.push("/profile")}><RiUserHeartLine style={{marginRight: 10}}/>Perfil</a>,
          key: "3",
        },
        {
          label: <a className="menu-item" onClick={() => history.push("/")}><RiLogoutCircleLine style={{marginRight: 10}}/>Sair</a>,
          key: "4",
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
          onClick={() => history.push("/dashboard")}
        />
        <button
          className="buttonDashboard"
          onClick={() => history.push("/dashboard")}
        >
          <MdOutlineDashboard style={{ marginRight: 10, fontSize: 20 }} />
          Dashboard
        </button>
        <button className="buttonDashboard" onClick={() => history.push("/search")}>
          <MdOutlineBiotech style={{ marginRight: 10, fontSize: 20 }} />
          Nova Pesquisa
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
        <Dropdown overlay={menuresponsive} className="dropwdown-responsive">
            <Space>
              <AiOutlineMenu/>
            </Space>
        </Dropdown>
      </Header>
    </>
  );
};

export default HeaderComponent;
