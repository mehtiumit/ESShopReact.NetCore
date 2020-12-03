import React, { Component, Fragment } from "react";
import { Menu, Input } from "antd";
import {
  ShoppingCartOutlined,
  LoginOutlined,
  HomeOutlined,
  FormOutlined,
} from "@ant-design/icons";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const { Search } = Input;
class Navbar extends Component {
  componentDidMount() {
    console.log("props", this.props);
  }

  render() {
    const onSearch = (value) => console.log(value);
    let profile = (
      <div className={classes.field}>
        <Search placeholder="Ürün Ara" onSearch={onSearch} enterButton />
      </div>
    );
    return (
      <div>
        {this.props.isAuth ? profile : null}
        <div className={classes.search}>
          <Menu theme="dark" mode="horizontal">
            <Menu
              style={{
                float: "left",
              }}
              theme="dark"
              mode="horizontal"
            >
              <Menu.Item icon={<HomeOutlined />} key="1">
                <Link to="/">Anasayfa</Link>
              </Menu.Item>
            </Menu>
            {this.props.isAuth ? null : (
              <Fragment>
                <Menu.Item icon={<LoginOutlined />} key="3">
                  <Link to="/login"> Giriş</Link>
                </Menu.Item>
                <Menu.Item icon={<FormOutlined />} key="4">
                  Kaydol
                  <Link to="/register" />
                </Menu.Item>
              </Fragment>
            )}

            <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
              <Link to="/cart">Sepet</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuthenticated,
  };
};

export default connect(mapStateToProps, null)(Navbar);
