import React from "react";
import { PRODUCTS } from "../../products";
import Product from "./product";
import "./shop.css";

const Shop = () => {
  return (
    <div className="shop">
      <div className="shopTitle">
        <h2>Shopping Center</h2>
      </div>

      <div className="products">
        {PRODUCTS.map((product, id) => (
          <Product data={product} key={id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
