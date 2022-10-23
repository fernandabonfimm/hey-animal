import React from "react";
import { Row, Col, Layout, Avatar } from "antd";
import { RiUserHeartLine } from "react-icons/ri";
import "./styles.css";
import { MdOutlineDashboard, MdOutlineBiotech } from "react-icons/md";
import LogoHA from "../../logoHA.png";
import { useNavigate } from "react-router-dom";
const { Header } = Layout;

const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header className="header-content">
        <img
          src={LogoHA}
          name="logo"
          className="logo-header"
          onClick={() => navigate("/")}
        />
        <button className="buttonDashboard" onClick={() => navigate("/")}>
          <MdOutlineDashboard style={{ marginRight: 10, fontSize: 20 }} />
          Dashboard
        </button>
        <button className="buttonDashboard" onClick={() => navigate("/forms")}>
          <MdOutlineBiotech style={{ marginRight: 10, fontSize: 20 }} />
          Formulário
        </button>
        <Avatar
          onClick={() => navigate("/profile")}
          size={40}
          className="Avatar-header"
          icon={<RiUserHeartLine />}
        />
      </Header>
    </>
  );
};

export default HeaderComponent;
