import React from "react";
import { Row, Col, Layout, Avatar } from "antd";
import { RiUserHeartLine } from "react-icons/ri";
import "./styles.css";
import { MdOutlineDashboard, MdOutlineBiotech } from "react-icons/md";
const { Header } = Layout;

const HeaderComponent = () => {
  return (
    <>
      <Header className="header-content">

        <button className="buttonDashboard">
          <MdOutlineDashboard style={{marginRight: 10, fontSize: 20}}/>
          Dashboard
        </button>
        <button className="buttonDashboard">
          <MdOutlineBiotech style={{marginRight: 10, fontSize: 20}} />
          Formúlario
        </button>
        <Avatar className="Avatar-header" icon={<RiUserHeartLine />} />
      </Header>
    </>
  );
};

export default HeaderComponent;
