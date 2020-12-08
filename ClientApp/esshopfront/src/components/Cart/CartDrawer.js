import React, { Component } from "react";
import { Row, Col, Drawer, Typography, Avatar } from "antd";
import { ShoppingOutlined } from "@ant-design/icons";

const { Title } = Typography;
export default class CartDrawer extends Component {
  render() {
    return (
      <Drawer
        placement="right"
        onClose={this.props.onShow}
        visible={this.props.onShow}
        key="right"
        width="448"
        bodyStyle={{ backgroundColor: "#000000" }}
      >
        <Row style={{ width: "100%", height: "100%" }} justify="center">
          <Row align="middle">
            <Col span={24}>
              <Avatar
                size={72}
                style={{
                  marginLeft: "35%",
                  marginBottom: "15px",
                  border: "1px solid white",
                  backgroundColor: "black",
                }}
                icon={<ShoppingOutlined />}
              />
              <Title style={{ color: "white" }} level={2}>
                Your cart is Empty
              </Title>
              <Title
                style={{ marginLeft: "25px", marginTop: "0px", color: "white" }}
                level={5}
              >
                Add product to your cart{" "}
              </Title>
            </Col>
          </Row>
        </Row>
      </Drawer>
    );
  }
}
