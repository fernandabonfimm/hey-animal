import React, { useState } from "react";
import Base from "../../components/BaseLayout";
import { MdOutlineBiotech } from "react-icons/md";
import { Card, Row, Col, Tag, Checkbox } from "antd";
import "./styles.css";
import Announcement from "./components/Announcement";

const Search = () => {
  const [searchName, setSearchName] = useState();
  const [valueInitial, setValueInitial] = useState();
  const [type, setType] = useState();
  const [valueVariant, setValueVariant] = useState();
  const [variant, setVariant] = useState();
  const [valueVariantNo, setValueVariantNo] = useState();
  const [variantNo, setVariantNo] = useState();
  const [weight, setWeight] = useState();
  const [weight2, setWeight2] = useState();
  const [weight3, setWeight3] = useState();
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  return (
    <Base
      goTo={"/search"}
      Icon={<MdOutlineBiotech />}
      goToName={"Nova Pesquisa"}
      titlepage={"à Nova Pesquisa"}
      nameofuser={"Fernanda Bonfim"}
      children={
        <>
          <Row>
            <Col xs={24} xl={24}>
              <Card className="card-forms">
                <h4 className="center forms-title">
                  Vamos iniciar mais uma pesquisa?
                </h4>
                <span className="center forms-description">
                  Preencha o formulário abaixo para realizar a sua nova pesquisa
                </span>
                <span className="start label-input-forms">
                  Título da pesquisa:
                </span>
                <input
                  id="search-name"
                  name="search-name"
                  className="start input-forms"
                  placeholder="Ex: Variação de água corporal"
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                />
                <Row gutter={[32, 22]}>
                  <Col xs={24} xl={8}>
                    <span className="start label-input-forms">
                      Valor inicial do parâmetro:
                    </span>
                    <Row>
                      <Col xs={24} xl={12}>
                        <input
                          id="value"
                          type="number"
                          name="value"
                          className="start input-forms"
                          placeholder="Ex: 1200"
                          value={valueInitial}
                          onChange={(e) => setValueInitial(e.target.value)}
                        />
                      </Col>
                      <Col xs={24} xl={12}>
                        <input
                          id="type"
                          name="type"
                          className="start input-forms"
                          placeholder="Ex: ml"
                          style={{ marginLeft: 10 }}
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} xl={8}>
                    <span className="start label-input-forms">
                      Variação experada:
                    </span>
                    <Row>
                      <Col xs={24} xl={12}>
                        <input
                          id="value"
                          type="number"
                          name="value"
                          className="start input-forms"
                          placeholder="Ex: 15"
                          value={valueVariant}
                          onChange={(e) => setValueVariant(e.target.value)}
                        />
                      </Col>
                      <Col xs={24} xl={12}>
                        <input
                          id="type"
                          name="type"
                          className="start input-forms"
                          placeholder="Ex: ml/h"
                          style={{ marginLeft: 10 }}
                          value={variant}
                          onChange={(e) => setVariant(e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Col>
                  <Col xs={24} xl={8}>
                    <span className="start label-input-forms">
                      Variação sem intervalo:
                    </span>
                    <Row>
                      <Col xs={24} xl={12}>
                        <input
                          id="value"
                          type="number"
                          name="value"
                          className="start input-forms"
                          placeholder="Ex: 15"
                          value={valueVariantNo}
                          onChange={(e) => setValueVariantNo(e.target.value)}
                        />
                      </Col>
                      <Col xs={24} xl={12}>
                        <input
                          id="type"
                          name="type"
                          className="start input-forms"
                          placeholder="Ex: ml/h"
                          style={{ marginLeft: 10 }}
                          value={variantNo}
                          onChange={(e) => setVariantNo(e.target.value)}
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
                <span className="start label-input-forms">Interações:</span>
                <Row gutter={[32, 22]}>
                  <Col xs={24} xl={8}>
                    {!checked1 && (
                      <>
                        <Tag className="hormonio">
                          <Checkbox
                            style={{ marginRight: 10 }}
                            onClick={() => setChecked1(true)}
                          />
                          Hormônio X
                        </Tag>
                      </>
                    )}
                    {checked1 && (
                      <>
                        <Tag className="hormonio">
                          <Checkbox
                            style={{ marginRight: 10 }}
                            onClick={() => setChecked1(false)}
                          />
                          Hormônio X
                        </Tag>
                        <Card className="card-hormonio">
                          <span className="start label-input-hormonio">
                            Peso:
                          </span>
                          <input
                            id="weight"
                            name="weight"
                            type="number"
                            className="start input-forms"
                            placeholder="Ex: 0.8"
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
                          />
                          <span
                            style={{ marginTop: 10 }}
                            className="start label-input-hormonio"
                          >
                            <Checkbox style={{ marginRight: 10 }} /> Solução
                            esperada?
                          </span>
                        </Card>
                      </>
                    )}
                  </Col>
                  <Col xs={24} xl={8}>
                    {!checked2 && (
                      <Tag className="hormonio">
                        <Checkbox
                          style={{ marginRight: 10 }}
                          onClick={() => setChecked2(true)}
                        />
                        Hormônio Y
                      </Tag>
                    )}
                    {checked2 && (
                      <>
                        {" "}
                        <Tag className="hormonio">
                          <Checkbox
                            style={{ marginRight: 10 }}
                            onClick={() => setChecked2(false)}
                          />
                          Hormônio Y
                        </Tag>
                        <Card className="card-hormonio">
                          <span className="start label-input-hormonio">
                            Peso:
                          </span>
                          <input
                            id="weight"
                            name="weight"
                            type="number"
                            className="start input-forms"
                            placeholder="Ex: 0.8"
                            value={weight2}
                            onChange={(e) => setWeight2(e.target.value)}
                          />
                          <span
                            style={{ marginTop: 10 }}
                            className="start label-input-hormonio"
                          >
                            <Checkbox style={{ marginRight: 10 }} /> Solução
                            esperada?
                          </span>
                        </Card>
                      </>
                    )}
                  </Col>
                  <Col xs={24} xl={8}>
                    {!checked3 && (
                      <Tag className="hormonio">
                        <Checkbox
                          style={{ marginRight: 10 }}
                          onClick={() => setChecked3(true)}
                        />
                        Hormônio Z
                      </Tag>
                    )}
                    {checked3 && (
                      <>
                        {" "}
                        <Tag className="hormonio">
                          <Checkbox
                            style={{ marginRight: 10 }}
                            onClick={() => setChecked3(false)}
                          />
                          Hormônio Z
                        </Tag>
                        <Card className="card-hormonio">
                          <span className="start label-input-hormonio">
                            Peso:
                          </span>
                          <input
                            id="weight"
                            name="weight"
                            type="number"
                            className="start input-forms"
                            placeholder="Ex: 0.8"
                            value={weight3}
                            onChange={(e) => setWeight3(e.target.value)}
                          />
                          <span
                            style={{ marginTop: 10 }}
                            className="start label-input-hormonio"
                          >
                            <Checkbox style={{ marginRight: 10 }} /> Solução
                            esperada?
                          </span>
                        </Card>
                      </>
                    )}
                  </Col>
                </Row>
                <Announcement />
              </Card>
            </Col>
          </Row>
        </>
      }
    />
  );
};
export default Search;
