import React from "react";
import HeaderComponent from "../Header";
import FooterComponent from "../Footer";
import { Layout, Row, Col, Breadcrumb, Card } from "antd";
import { useNavigate } from "react-router-dom";
import { RiHomeHeartLine } from "react-icons/ri";
import "./styles.css";

const { Content } = Layout;

const Base = ({ children, goTo, Icon, goToName, titlepage, nameofuser }) => {
  const navigate = useNavigate();
  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <HeaderComponent />
        <Content className="content-pages">
          <Card className="page-card-title">
            <Row>
              <Col xs={24} xl={24}>
                <Breadcrumb>
                  <Breadcrumb.Item onClick={() => navigate("/dashboard")}>
                    <RiHomeHeartLine />
                  </Breadcrumb.Item>
                  <Breadcrumb.Item onClick={() => navigate(goTo)}>
                    {Icon}
                    <span>{goToName}</span>
                  </Breadcrumb.Item>
                </Breadcrumb>
              </Col>
              <Col xs={24} xl={24}>
                <h3 className="titlepage">
                  Bem vindo {titlepage}, {nameofuser}
                </h3>
              </Col>
            </Row>
          </Card>
              {children}
        </Content>
        <FooterComponent />
      </Layout>
    </>
  );
};
export default Base;
