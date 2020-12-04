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
import { authCheckState } from "./redux/actions/authActions";
import { connect } from "react-redux";
import PrivateNotLoginRoute from "./components/routes/PrivateNotLoginRoute";
const { Header, Content, Footer } = Layout;
class App extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <Navbar />
          </Header>
          <Content className={classes.container}>
            <Switch>
              <PrivateNotLoginRoute path="/register" component={RegisterForm} />
              <PrivateNotLoginRoute path="/login" component={LoginForm} />
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
const mapDispatchToProps = (dispatch) => {
  return {
    checkAuth: () => dispatch(authCheckState()),
  };
};

export default connect(null, mapDispatchToProps)(App);
