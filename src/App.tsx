import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";
import ProductDetailsPage from "./pages/ProductDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
