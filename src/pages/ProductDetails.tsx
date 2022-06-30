import React, { useEffect, useState } from "react";
import productService from "../services/products";
import Product from "../models/product";
import { useParams } from "react-router-dom";

function ProductDetailsPage() {
  const [product, setProduct] = useState<Product>();
  const productId = useParams();
  useEffect(() => {
    if (productId.id) loadProduct(parseInt(productId.id));
  }, [productId.id]);

  const loadProduct = async (id: number) => {
    const prod = (await productService.getProduct(id)) as Product;
    setProduct(prod);
  };
  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="card w-50">
        <div className="card-header">
          <span className="badge bg-warning">Product Name</span> {product?.name}
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <span className="badge bg-primary">Processor </span> {product?.cpu}
          </li>
          <li className="list-group-item">
            <span className="badge bg-primary">Description</span>{" "}
            {product?.desc}
          </li>
          <li className="list-group-item">
            <span className="badge bg-primary">Price</span> {product?.price} $
          </li>
          <li className="list-group-item">
            <span className="badge bg-primary">RAM</span> {product?.ram}GB
          </li>
          <li className="list-group-item">
            <span className="badge bg-primary">SKU</span> {product?.sku}
          </li>
        </ul>
        <img
          src={product?.imag_url}
          className="rounded mx-auto d-block w-50"
          alt="..."
        ></img>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
