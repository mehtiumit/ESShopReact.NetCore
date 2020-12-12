import React, { Component } from "react";
import { Layout } from "antd";
import Navbar from "./components/Navbar/Navbar";
import CustomFooter from "./components/Footer/CustomFooter";
import Main from "./components/Main/Main";
import { Route, Switch } from "react-router";
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
      <Layout>
        <Header
          style={{
            height: "auto",
            padding: "0 10px",
            marginBottom: "5px",
            lineHeight: "64px",
            background: "#FFFFFF",
            border: "1px gray",
            boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <Navbar />
        </Header>
        <Content className={classes.containerBody}>
          <Switch>
            <Route path="/about" component={InfoPage} />
            <Route path="/" exact component={Main} />
          </Switch>
        </Content>
        <Footer style={{ margin: "0", padding: "0" }}>
          <CustomFooter></CustomFooter>
        </Footer>
      </Layout>
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
