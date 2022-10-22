import React from "react";
import Base from "../../components/BaseLayout";
import { RiDashboard3Line } from "react-icons/ri";
import {Row, Col} from 'antd';

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
              <Col xs={24} xl={24}>
                <h3>hello world</h3>
              </Col>
            </Row>
          </>
        }
      />
    </>
  );
};

export default Home;
