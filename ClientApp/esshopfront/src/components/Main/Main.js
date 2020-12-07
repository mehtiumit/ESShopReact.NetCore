import React, { Component } from "react";
import { Layout, Menu, Row, Col } from "antd";
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import ProductCard from "../ProductCard/ProductCard";
import classes from "./Main.module.css";
const { Content, Sider } = Layout;
const { SubMenu } = Menu;
export default class Main extends Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <div style={{ height: "100%", border: "1px solid black" }}>
        <Row justify="center" align="middle">
          <Col
            style={{ border: "1px solid red", width: "auto", height: "auto" }}
            span={4}
          >
            col-4
          </Col>
          <Col
            style={{
              border: "1px solid red",
              width: "auto",
              height: "inherit",
            }}
            span={16}
          >
            col 16
          </Col>
          <Col
            style={{ border: "1px solid red", width: "auto", height: "auto" }}
            span={4}
          >
            col-4
          </Col>
        </Row>
      </div>
    );
  }
}
