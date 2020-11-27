import React, { Component } from "react";
import { Layout } from "antd";
import Navbar from "./components/Navbar/Navbar";
import CustomFooter from "./components/Footer/CustomFooter";
import Main from "./components/Main/Main";
import RegisterForm from "./components/Auth/RegisterForm";
import { Route, Switch } from "react-router";
import LoginForm from "./components/Auth/LoginForm";
import Cart from "./components/Cart/Cart";
import classes from "./App.module.css";
const { Header, Content, Footer } = Layout;
export default class App extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <Navbar />
          </Header>
          <Content className={classes.container}>
            <Switch>
              <Route path="/register" component={RegisterForm} />
              <Route path="/login" component={LoginForm} />
              <Route path="/cart" component={Cart} />
              <Route path="/" exact component={Main} />
            </Switch>
          </Content>
          <Footer style={{ backgroundColor: "#333333" }}>
            <CustomFooter></CustomFooter>
          </Footer>
        </Layout>
      </div>
    );
  }
}
