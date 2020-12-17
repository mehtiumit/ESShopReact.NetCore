import React, { Component } from "react";
import { Row, Drawer, Typography, Tooltip, Divider, Button } from "antd";
import { VscClose } from "react-icons/vsc";
import { Layout } from "antd";
import CartWithProductBody from "./CartWithProductBody";
import { connect } from "react-redux";
import {
  addToCart,
  instaDeleteFromCart,
  removeFromCart,
} from "../../redux/actions/cartActions";
const { Title } = Typography;
const { Footer, Content } = Layout;
class CartWithProduct extends Component {
  componentDidMount() {
    console.log("this props cart with product", this.props);
  }
  state = {
    hover: false,
  };
  handleMouseEnter = () => {
    this.setState({ hover: true });
  };
  handleMouseLeave = () => {
    this.setState({ hover: false });
  };
  render() {
    const { hover } = this.state;
    return (
      <Drawer
        placement="right"
        onClose={this.props.onShow}
        visible={this.props.onShow}
        key="right"
        width="448"
        bodyStyle={{ backgroundColor: "#f2f2f2" }}
        closable={false}
      >
        <Row>
          <Tooltip title="Close">
            <VscClose
              style={{ color: "black", float: "left" }}
              onClick={() => this.props.onShow()}
              fontSize={24}
            ></VscClose>
          </Tooltip>
        </Row>
        <Row>
          <Title style={{ paddingTop: "15px" }} level={2}>
            My Cart
          </Title>
        </Row>
        <Layout>
          <Content
            style={{
              width: "100%",
              height: "auto",
              minHeight: "75vh",
            }}
          >
            <Divider style={{ backgroundColor: "black", margin: "0" }} />
            {this.props.cart.map((cartItem) => (
              <CartWithProductBody
                key={cartItem.productID}
                id={cartItem.productID}
                productName={cartItem.productName}
                price={cartItem.listPrice}
                quantity={cartItem.quantity}
                addQuantity={() => this.props.addToCart(cartItem)}
                subtractQuantity={() => this.props.subtractQuantity(cartItem)}
                instaDeleteFromCart={() =>this.props.instaDeleteFromCart(cartItem)}
              />
            ))}
          </Content>
          <Footer
            style={{
              width: "100%",
              height: "auto",
              padding: "0px 0px",
            }}
          >
            <Divider style={{ backgroundColor: "black", margin: "0" }} />
            <div style={{ margin: "6px 6px" }}>
              <Row justify="space-between" style={{ padding: "4px 0" }}>
                <span>Sub Total</span>
                <span>{this.props.total}</span>
              </Row>
              <Row justify="space-between" style={{ padding: "4px 0" }}>
                <span>Taxes</span>
                <span>Calculated at checkout</span>
              </Row>
              <Row justify="space-between" style={{ padding: "4px 0" }}>
                <span>Estimated Shipping</span>
                <span>
                  <strong style={{ fontSize: "16px" }}>FREE</strong>
                </span>
              </Row>
              <Divider style={{ backgroundColor: "black", margin: "0" }} />
              <Row
                justify="space-between"
                style={{ margin: "0 0 40px", padding: "12px 0" }}
              >
                <strong style={{ fontSize: "16px" }}> Total</strong>
                <strong style={{ fontSize: "16px" }}>
                  ${this.props.total}{" "}
                </strong>
              </Row>
            </div>
            <Button
              style={{
                color: "white",
                backgroundColor: "black",
                borderColor: "black",
                width: "100%",
                padding: "16px 40px",
                height: "58px",
                ...(hover && {
                  backgroundColor: "white",
                  color: "black",
                }),
              }}
              onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              type="primary"
            >
              PROCEED TO CHECKOUT
            </Button>
          </Footer>
        </Layout>
      </Drawer>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cartReducer.cart,
    total: state.cartReducer.cart.reduce(
      (total, cartItem) => total + cartItem.listPrice * cartItem.quantity,
      0
    ),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (product) => dispatch(addToCart(product)),
    subtractQuantity: (product) => dispatch(removeFromCart(product)),
    instaDeleteFromCart: (product) => dispatch(instaDeleteFromCart(product)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartWithProduct);
