import React, { Component } from "react";
import { Menu, Input } from "antd";
import {
  ShoppingCartOutlined,
  LoginOutlined,
  HomeOutlined,
  FormOutlined,
} from "@ant-design/icons";
import classes from "./Navbar.module.css";
import { Link } from "react-router-dom";
import RegisterForm from "../Auth/RegisterForm";

const { Search } = Input;
export default class Navbar extends Component {
  render() {
    const onSearch = (value) => console.log(value);
    return (
      <div>
        <div className={classes.field}>
          <Search placeholder="Ürün Ara" onSearch={onSearch} enterButton />
        </div>
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
            <Menu.Item icon={<LoginOutlined />} key="3">
              <Link to="login"> Giriş</Link>
            </Menu.Item>
            <Menu.Item icon={<FormOutlined />} key="4">
              Kaydol
              <Link to="/register" />
            </Menu.Item>
            <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
              <Link to="/cart">Sepet</Link>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    );
  }
}
