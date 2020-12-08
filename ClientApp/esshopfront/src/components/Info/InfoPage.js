import React, { Component } from "react";
import { Row, Col, Divider, Tabs, Typography, Collapse } from "antd";
import { GithubOutlined } from "@ant-design/icons";
const { Title, Link } = Typography;

const { Panel } = Collapse;
const { TabPane } = Tabs;

export default class InfoPage extends Component {
  state = {
    key: 1,
  };
  callback = (key) => {
    this.setState({ key: parseInt(key) });
  };

  render() {
    const text = `
    A dog is a type of domesticated animal.
    Known for its loyalty and faithfulness,
    it can be found as a welcome guest in many households across the world.
  `;

    let about = (
      <Collapse defaultActiveKey={[1]} accordion>
        <Panel header="Hakkında" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="Şartlar ve Koşullar" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="Gizlilik Politikası" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="Proje Hakkında" key="4">
          <p>{text}</p>
        </Panel>
      </Collapse>
    );

    let userAgreement = (
      <Collapse defaultActiveKey={[1]} accordion>
        <Panel header="Kullanıcı Sözleşmesi" key="1">
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
          <p>{text}</p>
        </Panel>
      </Collapse>
    );

    let questionAndanswer = (
      <Collapse defaultActiveKey={[1]} accordion>
        <Panel header="Soru 1-)" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="Soru 2-)" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="Soru 3-)" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="Soru 4-)" key="4">
          <p>{text}</p>
        </Panel>
      </Collapse>
    );

    let payment = (
      <Collapse defaultActiveKey={[1]} accordion>
        <Panel header="Kredi Kartı" key="1">
          <p>{text}</p>
        </Panel>
        <Panel header="Havale" key="2">
          <p>{text}</p>
        </Panel>
        <Panel header="Bitcoin" key="3">
          <p>{text}</p>
        </Panel>
        <Panel header="Ethereum" key="4">
          <p>{text}</p>
        </Panel>
      </Collapse>
    );
    const { key } = this.state;
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "white",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <Divider orientation="center">Yardım</Divider>
        <Row justify="center">
          <Col style={{ margin: "0", padding: "0" }}>
            <Title style={{ margin: "0", padding: "2px" }} level={2}>
              Sıkça Sorulan Sorular
            </Title>
            <Title style={{ margin: "0", padding: "2px" }} level={4}>
              <Link
                editable={{
                  icon: (
                    <GithubOutlined
                      style={{ color: "#006d75", fontSize: "24px" }}
                    />
                  ),
                }}
                style={{ color: "#006d75" }}
                href="https://github.com/mehtiumit"
                target="_blank"
              >
                Destek ve Diğer Sorularınız İçin
              </Link>
            </Title>
          </Col>
        </Row>
        <div
          style={{
            margin: "auto",
            height: "auto",
            width: "100%",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Row style={{ height: "100%" }} align="center" justify="center">
            <Col
              style={{
                margin: "auto",
                padding: "auto",
                width: "auto",
                height: "auto",
              }}
              span={8}
            >
              <Tabs
                tabPosition="left"
                defaultActiveKey="1"
                type="card"
                size="large"
                tabBarGutter={0}
                tabBarStyle={{
                  width: "100%",
                  height: "100%",
                }}
                style={{
                  border: "1px gray",
                  boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
                  borderRadius: "5px",
                }}
                onChange={this.callback}
              >
                <TabPane tab="Hakkında" key="1"></TabPane>
                <TabPane tab="Kullanıcı Sözleşmesi" key="2"></TabPane>
                <TabPane tab="Başka bir Soru ve cevabı" key="3"></TabPane>
                <TabPane tab="Ödeme" key="4"></TabPane>
              </Tabs>
            </Col>
            <Col
              style={{
                height: "auto",
                margin: "auto",
                border: "1px gray",
                boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.4)",
                borderRadius: "5px",
              }}
              span={12}
            >
              {key === 1
                ? about
                : key === 2
                ? userAgreement
                : key === 3
                ? questionAndanswer
                : key === 4
                ? payment
                : key}
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
