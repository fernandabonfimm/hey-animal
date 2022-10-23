import React from "react";
import Base from "../../components/BaseLayout";
import { RiDashboard3Line } from "react-icons/ri";
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
        Icon={<RiDashboard3Line />}
        goToName={"Dashboard"}
        titlepage={"à Dashboard"}
        nameofuser={"Fernanda Bonfim"}
        children={
          <>
            <Row gutter={[32, 22]}>
              <Col xs={24} xl={12}>
                <Card className="card-charts">
                  <ChartDualAxes />
                </Card>
              </Col>
              <Col xs={24} xl={12}>
                <Card className="card-charts">
                  <ChartMoreAxes />
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
