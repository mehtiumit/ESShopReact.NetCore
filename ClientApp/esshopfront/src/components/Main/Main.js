import React, { Component } from "react";
import { Row, Col } from "antd";
import ProductCard from "../ProductCard/ProductCard";

export default class Main extends Component {
  state = {
    collapsed: false,
  };

  render() {
    return (
      <Row
        style={{
          width: "100%",
          height: "100%",
          border: "1px solid red",
          marginTop: "0",
        }}
      >
        <Col span={4}>
          <div
            style={{
              marginTop: "15px",
              marginLeft: "15px",
            }}
          >
            <ul
              style={{
                listStyle: "none",
                margin: "0",
                padding: "0",
                letterSpacing: "1px",
              }}
            >
              <li
                style={{
                  fontFamily: "roboto",
                  color: "black",
                  fontWeight: "bold",
                }}
              >
                Tüm Kategoriler
              </li>
              <li style={{ fontFamily: "Montserrat" }}>Giyim</li>
              <li style={{ fontFamily: "Montserrat" }}>Tüm ürünler</li>
            </ul>
          </div>
        </Col>
        <Col
          style={{
            border: "1px solid red",
            width: "auto",
            height: "100%",
          }}
          span={16}
        >
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </Col>
        <Col
          style={{ border: "1px solid green", width: "auto", height: "100%" }}
          span={4}
        >
          Sort
        </Col>
      </Row>
    );
  }
}
