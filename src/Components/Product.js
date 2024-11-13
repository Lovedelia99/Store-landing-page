import React from "react";
import { useState } from "react";

import products from "./Array";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Store/cartState";

import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function Products() {
  //used selectedSize for the dropdown button
  let [selectedSize, setSelectedSize] = useState({});

  //used onButton to make sure the total price block only shows when buy is clicked
  let [onButton, setOnButton] = useState(false);

  // using redux
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  // size changes when selected
  const handleSizeChange = (productID, size) => {
    setSelectedSize({ ...selectedSize, [productID]: size });
  };

  const handleAddToCart = (product) => {
    dispatch(addItem({ ...product, size: selectedSize[product.id] }));
    setOnButton(true);
  };

  // used for total price in corner
  const totalPrice = cartItems.reduce(
    (total, product) => total + parseFloat(product.price),
    0
  );

  return (
    <div>
      <br />
      <h1>Products</h1>
      <br />
      <Container>
        <Row>
          {/* mapping through array */}
          {products.map((product) => (
            <Col key={product.id} xs={4}>
              <div>
                <img
                  alt="Image loading"
                  style={{
                    width: "200px",
                    height: "220px",
                    paddingBottom: "10px",
                    paddingTop: "10px",
                  }}
                  src={product.image}
                />
                <h5>{product.title}</h5>
                <p className="price">R{product.price}</p>

                {/* followed instructions for the dropdown button */}
                <Dropdown>
                  <Dropdown.Toggle variant="secondary">
                    {selectedSize[product.id] || "Choose size"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {/* only diffrent size options for item 11 */}
                    {product.id === 11 ? (
                      [5, 6, 7, 8, 9, 10, 11, 12].map((size) => (
                        <Dropdown.Item
                          key={size}
                          onClick={() =>
                            handleSizeChange(product.id, size.toString())
                          }
                        >
                          {size}
                        </Dropdown.Item>
                      ))
                    ) : (
                      // empty tag because need parent
                      <>
                        {/* sizes for everything else */}
                        <Dropdown.Item
                          onClick={() => handleSizeChange(product.id, "XSmall")}
                        >
                          X-Small
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleSizeChange(product.id, "Small")}
                        >
                          Small
                        </Dropdown.Item>

                        <Dropdown.Item
                          onClick={() => handleSizeChange(product.id, "Medium")}
                        >
                          Medium
                        </Dropdown.Item>

                        <Dropdown.Item
                          onClick={() => handleSizeChange(product.id, "Large")}
                        >
                          Large
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() => handleSizeChange(product.id, "XLarge")}
                        >
                          X-Large
                        </Dropdown.Item>
                      </>
                    )}
                  </Dropdown.Menu>
                </Dropdown>

                {/* add to cart button */}
                <Button
                  style={{
                    marginTop: "10px",
                  }}
                  variant="secondary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </Button>

                {/* price with link to cart */}
                {onButton && (
                  <Link to="/cart">
                    <p className="total">
                      Total Price: R{totalPrice.toFixed(2)}
                      <br />
                      Go to cart
                    </p>
                  </Link>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <hr />
    </div>
  );
}

export default Products;
