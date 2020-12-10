import React, { Component } from "react";
import { Row, Col } from "antd";
import ProductCard from "../ProductCard/ProductCard";
import { fetchProducts } from "../../redux/actions/productActions";
import { connect } from "react-redux";
import { fetchCategory } from "../../redux/actions/categoryActions";

class Main extends Component {
  componentDidMount() {
    this.props.getProducts();
    this.props.getCategories();
  }
  handleCategory(categoryId) {
    console.log("id", categoryId);
    this.props.getProducts(parseInt(categoryId));
  }
  render() {
    return (
      <Row
        style={{
          width: "100%",
          height: "auto",
          minHeight: "100vh",
        }}
      >
        <Col span={4}>
          <div
            style={{
              marginTop: "15px",
              marginLeft: "15%",
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
                onClick={() => this.props.getProducts()}
              >
                Tüm Ürünler
              </li>
              {this.props.categoryData.map((category) => (
                <li
                  onClick={() => this.handleCategory(category.categoryID)}
                  key={category.categoryID}
                >
                  {category.categoryName}
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col
          style={{
            width: "auto",
            height: "100% !important",
          }}
          span={16}
        >
          <Row justify="center">
            {this.props.productData.products.map((products) => (
              <ProductCard
                key={products.productID}
                id={products.productID}
                name={products.productName}
                description={products.description}
                price={products.listPrice}
                categoryID={products.categoryID}
                loading={this.props.productData.loading}
              />
            ))}
          </Row>
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

const mapStateToProps = (state) => {
  return {
    productData: state.productReducer,
    categoryData: state.categoryReducer.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getProducts: (categoryID) => dispatch(fetchProducts(categoryID)),
    getCategories: () => dispatch(fetchCategory()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
