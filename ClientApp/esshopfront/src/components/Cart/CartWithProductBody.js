import React, { Component } from "react";
import { DeleteOutlined, PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { Row, Col, Avatar, Input, Typography } from "antd";
const { Title } = Typography;
export default class CartWithProductBody extends Component {
  render() {
    return (
      <Row style={{ minHeight: "135px" }}>
        <Col span={4}>
          <Avatar
            style={{ width: "75%", height: "75%", margin: "15px 5px" }}
            shape="square"
          ></Avatar>
        </Col>
        <Col span={16}>
          <div
            style={{
              margin: "15px 5px",
            }}
          >
            <div style={{ display: "inline", marginBottom: "5px" }}>
              <Title level={4}>{this.props.productName}</Title>
            </div>
            <div>
              <MinusOutlined
                onClick={() => this.props.subtractFromCart()}
                style={{ fontSize: "18px" }}
              />
              <Input
                style={{
                  width: "32px",
                  height: "23px",
                  margin: "0 12px",
                  padding: "0 0",
                  textAlign: "center",
                }}
                value={this.props.quantity}
              />
              <PlusOutlined
                onClick={() => this.props.addQuantity()}
                size={18}
                style={{ fontSize: "18px" }}
              />
            </div>
          </div>
        </Col>
        <Col span={4}>
          <div style={{ padding: "18px 24px" }}>
            <Row justify="end">
              <div>
                <span style={{ fontFamily: "monserrat" }}>
                  {this.props.price * this.props.quantity}
                </span>
              </div>
            </Row>
            <Row justify="end">
              <div style={{ margin: "8px 0 0", float: "left" }}>
                <DeleteOutlined
                  onClick={() => this.props.instaDeleteFromCart()}
                  style={{ fontSize: "24px" }}
                />
              </div>
            </Row>
          </div>
        </Col>
      </Row>
    );
  }
}
