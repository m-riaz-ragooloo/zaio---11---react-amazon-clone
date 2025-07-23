import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Welcome from "./components/Welcome"
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} >
            <Route path=":username" element={<Welcome />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
