import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/layout/Header";
import Home from "./components/Home";
import Products from "./components/Products";
import ProductDetails from "./components/ProductDetails";
import Welcome from "./components/Welcome"
import SignIn from "./components/SignIn"
import NotFound from './components/NotFound'
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />}/>
          <Route path="/home" element={<Home />} >
            <Route path=":username" element={<Welcome />} />
          </Route>
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </main>
    </div>
  );
}

export default App;
