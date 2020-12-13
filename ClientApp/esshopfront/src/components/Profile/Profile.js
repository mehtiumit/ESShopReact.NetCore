import React, { Component } from "react";
import { Row, Col, Menu } from "antd";
import { ProfileOutlined } from "@ant-design/icons";
import { BiCartAlt } from "react-icons/bi";

export default class Profile extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <Row>
          <Row style={{ margin: "auto" }}>
            <Menu mode="horizontal">
              <Menu.Item key="mail" icon={<ProfileOutlined />}>
                Profile
              </Menu.Item>
              <Menu.Item key="app" icon={<BiCartAlt />}>
                My Orders
              </Menu.Item>
            </Menu>
          </Row>
        </Row>
        <Row
          style={{
            border: "1px solid red",
            width: "100%",
            minHeight: "100vh",
            height: "auto",
          }}
        >
          <Col span={4}>Boşluk</Col>
          <Col style={{ border: "1px solid red" }} span={16}>
            <Row justify="center">
              <Col>Profil</Col>
            </Row>
          </Col>
          <Col span={4}>Boşluk</Col>
        </Row>
      </div>
    );
  }
}
