import React, { Component } from "react";
import { Row, Col } from "antd";

export default class Main extends Component {
  state = {
    collapsed: false,
  };

  render() {
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
