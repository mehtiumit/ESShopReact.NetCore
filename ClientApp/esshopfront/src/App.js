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
import { authCheckState, getUserData } from "./redux/actions/authActions";
import { connect } from "react-redux";
import PrivateNotLoginRoute from "./components/routes/PrivateNotLoginRoute";
import { isLogin } from "./utils/Utils";
import InfoPage from "./components/Info/InfoPage";

const { Header, Content, Footer } = Layout;

class App extends Component {
  componentDidMount() {
    this.props.checkAuth();
  }
  componentDidUpdate() {
    if (isLogin()) {
      this.props.getUserData(this.props.userId);
    }
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
              <PrivateNotLoginRoute
                path="/register"
                component={RegisterForm}
                exact
              />
              <PrivateNotLoginRoute path="/login" component={LoginForm} exact />
              <Route path="/cart" component={Cart} />
              <Route path="/about" component={InfoPage} />
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
    getUserData: (userId) => dispatch(getUserData(userId)),
  };
};

const mapStateToProps = (state) => {
  return {
    userId: state.authReducer.userId,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
