import React from "react";
import Base from "../../components/BaseLayout";
import { MdOutlineDashboard } from "react-icons/md";
import { Row, Col, Card } from "antd";
import ChartDualAxes from "./components/ChartDualAxes";
import ChartMoreAxes from "./components/ChartMoreAxes";
import DataTable from "./components/DataTable";
import "./styles.css";

const Home = () => {
  return (
    <>
      <Base
        goTo={"/"}
        Icon={<MdOutlineDashboard />}
        goToName={"Dashboard"}
        titlepage={"à Dashboard"}
        nameofuser={"Fernanda Bonfim"}
        children={
          <>
            <Row gutter={[32, 22]}>
              <Col xs={24} xl={12}>
                <Card className="card-charts">
                  <Row gutter={[32, 22]}>
                    <Col xs={24} xl={24}>
                      <span className="title-chart">
                        Gráfico esperado pelo professor:
                      </span>
                    </Col>
                    <Col xs={24} xl={24}>
                      <ChartDualAxes />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} xl={12}>
                <Card className="card-charts">
                  <Row gutter={[32, 22]}>
                    <Col xs={24} xl={24}>
                      <span className="title-chart">
                        Gráfico representado pelo aluno:
                      </span>
                    </Col>
                    <Col xs={24} xl={24}>
                      <ChartMoreAxes />
                    </Col>
                  </Row>
                </Card>
              </Col>
              <Col xs={24} xl={24}>
                <Card className="card-charts">
                  <DataTable />
                </Card>
              </Col>
            </Row>
          </>
        }
      />
    </>
  );
};

export default Home;
