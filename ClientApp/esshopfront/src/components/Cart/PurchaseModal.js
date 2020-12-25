import React, { Component } from "react";
import { Form, Input, Button, Typography } from "antd";
import { BiPurchaseTagAlt } from "react-icons/bi";
import Axios from "axios";
const { Text } = Typography;
export default class PurchaseModal extends Component {
  state = {
    hover: false,
    purchase: {
      userId: "",
      orderShipName: "",
      orderAdress: "",
      orderAmount: 0,
      product: [],
    },
  };
  componentDidMount() {
    this.setState({
      ...this.state,
      purchase: {
        ...this.state.purchase,
        orderAmount: this.props.total,
        product: this.props.cart,
        userId: this.props.userId,
      },
    });
    console.log("this.state", this.props);
  }
  componentDidUpdate() {}
  handleMouseEnter = () => {
    this.setState({ hover: true });
    console.log("This.state", this.state);
  };
  handleMouseLeave = () => {
    this.setState({ hover: false });
  };
  handleChange = (e) => {
    this.setState({
      ...this.state,
      purchase: {
        ...this.state.purchase,
        [e.target.name]: e.target.value,
      },
    });
  };
  purchase = (product) => {
    Axios.post("/orders/addorder", product).then((res) => {
      console.log("res.data", res.data);
    });
  };
  render() {
    const { hover } = this.state;
    const { orderAdress, orderAmount, orderShipName } = this.state.purchase;
    return (
      <div style={{ marginTop: "5%", width: "auto", height: "auto" }}>
        <Form name="basic" initialValues={{ remember: true }}>
          <Form.Item
            name="orderAdress"
            style={{ marginLeft: "20%", width: "296px", height: "42px" }}
          >
            <Input
              name="orderAdress"
              placeholder="Order Adress"
              value={orderAdress}
              onChange={this.handleChange}
            />
          </Form.Item>
          <Form.Item
            name="orderShipName"
            style={{ marginLeft: "20%", width: "296px", height: "42px" }}
          >
            <Input
              name="orderShipName"
              value={orderShipName}
              onChange={this.handleChange}
              placeholder="Adress Name"
            />
          </Form.Item>
          <Form.Item
            name="orderAmount"
            style={{ marginLeft: "20%", width: "296px", height: "42px" }}
          >
            <Text type="success">
              Total Price:{this.state.purchase.orderAmount}$
            </Text>
          </Form.Item>

          <Form.Item>
            <Button
              icon={<BiPurchaseTagAlt />}
              style={{
                marginLeft: "20%",
                color: "white",
                backgroundColor: "black",
                borderColor: "black",
                width: "296px",
                height: "42px",
                ...(hover && {
                  backgroundColor: "white",
                  color: "black",
                }),
              }}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              onClick={() => this.purchase(this.state.purchase)}
              type="primary"
              htmlType="submit"
            >
              Purchase
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}
