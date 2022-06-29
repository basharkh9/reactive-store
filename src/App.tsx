import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Product, { ProductWithCoupon } from "./models/product";
import productService from "./services/products";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  const [search, setSearch] = useState("");
  const onSetSearch = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) => setSearch(evt.target.value),
    []
  );

  useEffect(() => {
    loadProducts(search);
  }, [search]);

  const loadProducts = async (search: string) => {
    const prods = (await productService.loadProductsByName(
      search
    )) as Product[];
    setProducts(prods);
  };

  const productWithCopoun: ProductWithCoupon[] = useMemo(
    () =>
      products.map((p) => ({
        ...p,
        discount_price: p.price - (p.price * 30) / 100,
      })),
    [products]
  );

  const [threshold, setThreshold] = useState(0);
  const onSetThreshold = useCallback(
    (evt: React.ChangeEvent<HTMLInputElement>) =>
      setThreshold(parseInt(evt.target.value, 10) | 0),
    []
  );

  const countOverPricePoint = useMemo(
    () => productWithCopoun.filter((p) => p.price > threshold).length,
    [productWithCopoun, threshold]
  );

  const min = useMemo(
    () => Math.min(...productWithCopoun.map((p) => p.price)),
    [productWithCopoun]
  );
  const max = useMemo(
    () => Math.max(...productWithCopoun.map((p) => p.price)),
    [productWithCopoun]
  );

  return (
    <div>
      <div className="top-bar container-sm">
        <div>Search</div>
        <input type="text" value={search} onChange={onSetSearch}></input>
        <div>Price threshold</div>
        <input type="text" value={threshold} onChange={onSetThreshold}></input>
        <div>Count over threshold: {countOverPricePoint}</div>
      </div>
      <div className=" container-sm two-column">
        <ProductList items={productWithCopoun} />
        <div>
          <div>Min: {min}</div>
          <div>Max: {max}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
