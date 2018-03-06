import React, { Component } from "react";
import { Link } from "react-router-dom";
class Product extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    console.log("componentWillMount");
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.product.name === "prod1";
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    console.log("render");
    let { product, onAddToCartClick } = this.props;
    return (
      <div className="col-md-3">
        <div className="each-product">
          <div className="product-image-properties">
            <Link to={`product-detail/${product.name}/${product.price}`}>
              <img src="assets/images/Samsung1.jpeg" className="images" />
            </Link>
          </div>
          <h4 className="product-name">{product.name}</h4>
          <p className="product-price">{product.price}</p>
          <div className="number-input">
            <a href="#" className="decrement">
              –
            </a>
            <input type="number" className="value-result" defaultValue={1} />
            <a href="#" className="increment">
              +
            </a>
          </div>
          {new Date().toString()}
          <div className="product-button">
            <button
              type="button"
              className="cart-add-button"
              onClick={function() {
                onAddToCartClick(product);
              }}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
