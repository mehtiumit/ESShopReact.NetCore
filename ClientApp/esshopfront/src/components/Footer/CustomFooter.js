import React, { Component } from "react";
import { Row, Col } from "antd";
import { DiEnvato } from "react-icons/di";
import classes from "./CustomFooter.module.css";
import { GoMarkGithub } from "react-icons/go";
export default class CustomFooter extends Component {
  render() {
    return (
      <div className={classes.footerContainer}>
        <Row >
          <Col xs={22} sm={20} md={18} lg={12} xl={12}>
            <Row>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <div className={classes.icon}>
                  <DiEnvato size={32} />
                  <div>ES Shop</div>
                </div>
              </Col>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <ul className={classes.footerListStyle}>
                  <li>Home</li>
                  <li>About</li>
                  <li>Careers</li>
                  <li>Blog</li>
                </ul>
              </Col>
              <Col xs={8} sm={8} md={8} lg={8} xl={8}>
                <ul className={classes.footerListStyle}>
                  <li>Terms of use</li>
                  <li>Shipping & Returns</li>
                  <li>Privacy Policy</li>
                </ul>
              </Col>
            </Row>
          </Col>
          <Col xs={2} sm={4} md={6} lg={12} xl={12}>
            <Row justify="end">
              <GoMarkGithub size={32} />
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}
