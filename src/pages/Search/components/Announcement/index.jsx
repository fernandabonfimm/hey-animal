import React from "react";
import { Row, Col, Card } from "antd";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Announcement = () => {
    const navigate = useNavigate();
  return (
    <Row>
      <Col xs={24} xl={24}>
        <Card className="announcement">
          <Row gutter={[32, 22]}>
            <Col xs={24} xl={14}>
              <span className="title-announcement">
                Após finalizar a sua nova pesquisa
              </span>
              <h3 className="title-announcement">
                Não esqueça de conferir a pesquisa no gráfico da Dashboard
              </h3>
              <button className="gotodash" onClick={() => navigate("/dashboard")}>Verificar Gráfico</button>
            </Col>
          </Row>
        </Card>
      </Col>
    </Row>
  );
};
export default Announcement;
