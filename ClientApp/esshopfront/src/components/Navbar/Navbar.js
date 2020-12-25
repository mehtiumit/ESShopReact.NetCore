import React, { Component, Fragment } from "react";
import { Menu, Row, Col, Input, Avatar, Modal } from "antd";
import {
  SearchOutlined,
  MenuFoldOutlined,
  HeartFilled,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import ProfileDrawer from "../Profile/ProfileDrawers/ProfileDrawer";
import { getUserData } from "../../redux/actions/authActions";
import ProfileForNotLoginDrawer from "../Profile/ProfileDrawers/ProfileForNotLoginDrawer";
import { isLogin } from "../../utils/Utils";
import LoginForm from "../Auth/LoginForm";
import RegisterForm from "../Auth/RegisterForm";
import CartDrawer from "../Cart/CartDrawer";
import CartWithProduct from "../Cart/CartWithProduct";
import { DiEnvato } from "react-icons/di";
import { fetchProducts } from "../../redux/actions/productActions";

class Navbar extends Component {
  state = {
    showProfile: false,
    loginModal: false,
    isUser: false,
    showCart: false,
  };
  onShow = () => {
    this.setState({ showProfile: !this.state.showProfile });
  };
  showCart = () => {
    this.setState({ showCart: !this.state.showCart });
  };

  onShowModal = () => {
    this.setState({ loginModal: !this.state.loginModal });
  };
  render() {
    let profileForShow = (
      <Fragment>
        {isLogin() ? (
          <ProfileDrawer onShow={this.onShow}></ProfileDrawer>
        ) : (
          <ProfileForNotLoginDrawer
            onShow={this.onShow}
          ></ProfileForNotLoginDrawer>
        )}
      </Fragment>
    );
    let profile = (
      <div className={classes.field}>
        <MenuFoldOutlined
          onClick={this.onShow}
          style={{ fontSize: "20px", color: "#000000" }}
        />
        {this.state.showProfile ? profileForShow : null}
      </div>
    );

    let userText = (
      <div style={{ marginLeft: "28%" }}>
        <span>
          Don't have an account?<strong>Sign Up</strong>
        </span>
      </div>
    );
    let notUserText = (
      <div style={{ marginLeft: "28%" }}>
        <span>
          Do you have an account?<strong>Sign in</strong>
        </span>
      </div>
    );

    let cartForShow = (
      <Fragment>
        {this.props.cart.length > 0 ? (
          <CartWithProduct onShow={this.showCart}></CartWithProduct>
        ) : (
          <CartDrawer onShow={this.showCart}></CartDrawer>
        )}
      </Fragment>
    );
    let cart = (
      <div className={classes.field}>
        <ShoppingOutlined
          onClick={this.showCart}
          style={{ fontSize: "20px", color: "#000000" }}
        ></ShoppingOutlined>
        {this.state.showCart ? cartForShow : null}
      </div>
    );

    return (
      <Row>
        <Col span={8}>
          <Row>
            <Col span={2}>
              <Row justify="center">
                <DiEnvato size={32} style={{ marginTop: "1rem" }} />
              </Row>
            </Col>
            <Col span={22}>
              <Menu theme="light" mode="horizontal">
                <Menu.Item
                  key="1"
                  onClick={() => this.props.getProductsByCategory()}
                >
                  <Link to="/">Home Page</Link>
                </Menu.Item>
                <Menu.Item
                  key="2"
                  onClick={() => this.props.getProductsByCategory(3)}
                >
                  <Link to="/">Computers</Link>
                </Menu.Item>
                <Menu.Item
                  key="3"
                  onClick={() => this.props.getProductsByCategory(1)}
                >
                  <Link to="/">Gaming & Console</Link>
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <Input
            style={{ marginTop: "14px" }}
            placeholder="Search for products..."
            suffix={
              <SearchOutlined style={{ fontSize: "16px", color: "black" }} />
            }
            allowClear={true}
          />
        </Col>
        <Col span={8}>
          <div style={{ marginTop: "0", marginBottom: "0" }}>{profile}</div>
          <UserOutlined
            onClick={() => this.setState({ loginModal: true })}
            className={classes.icon}
          />
          <div style={{ paddingLeft: "5px" }}>{cart}</div>
          <HeartFilled className={classes.icon}></HeartFilled>
          <Modal
            onCancel={() => this.setState({ loginModal: false })}
            centered
            footer={null}
            visible={this.state.loginModal}
          >
            <Avatar
              size={64}
              style={{
                backgroundColor: "black",
                marginLeft: "45%",
                marginTop: "20%",
              }}
              icon={<UserOutlined style={{ color: "white" }} />}
            />
            {this.state.isUser ? (
              <LoginForm onShowModal={this.onShowModal} />
            ) : (
              <RegisterForm onShowModal={this.onShowModal} />
            )}
            <div onClick={() => this.setState({ isUser: !this.state.isUser })}>
              {this.state.isUser ? userText : notUserText}
            </div>
          </Modal>

          {this.state.showCart ? cart : null}
        </Col>
      </Row>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuthenticated,
    userId: state.authReducer.userId,
    cart: state.cartReducer.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (userId) => dispatch(getUserData(userId)),
    getProductsByCategory: (categoryID) => dispatch(fetchProducts(categoryID)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
