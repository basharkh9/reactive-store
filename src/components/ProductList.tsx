import React from "react";
import { Link } from "react-router-dom";
import { ProductWithCoupon } from "../models/product";

interface ProductListProps {
  items: ProductWithCoupon[];
}

function ProductList({ items }: ProductListProps) {
  return (
    <div className="container">
      <div
        className="d-grid gap-5"
        style={{ gridTemplateColumns: "repeat(auto-fill, 18rem)" }}
      >
        {items.map((item) => (
          <div key={item.id}>
            <div
              className="card"
              style={{
                height: "30rem",
              }}
            >
              <img
                style={{
                  width: "100%",
                  maxHeight: "17rem",
                  minHeight: "15rem",
                  objectFit: "cover",
                  padding: "2rem 1rem",
                  borderRadius: "10px",
                }}
                src={item.imag_url}
                className="card-img-top"
                alt="product image"
              />
              <div className="card-body">
                <div className="container mb-4">
                  <h3>{item.name}</h3>
                  <h4 className="card-text">{item.cpu}</h4>
                </div>
                <div className="container">
                  <h4 className="card-text">Original price: {item.price}</h4>
                  <h4 className="card-text">
                    Coupon Price: {item.discount_price}
                  </h4>
                </div>
              </div>
            </div>
            <Link
              className="btn btn-outline-warning"
              to={`/products/${item.id.toString()}`}
            >
              Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
