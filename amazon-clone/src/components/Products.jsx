import { Link } from "react-router-dom";
import "./Products.css";
import Product from "./Product";

export default function Products() {
  return (
    <main>
      <div className="product-row">
        <Product
          id="1"
          title="Norden Portable Adjustable Laptop Stand – Aluminum Alloy Folding Computer Stand laptop stand"
          image="https://m.media-amazon.com/images/I/31XS32Ytx5L._SR480,440_.jpg"
          rating="4.3"
          price="R97.00"
        />
        <Product
          id="2"
          title="Logitech G502 Lightspeed Wireless Gaming Mouse, Black, One Size"
          image="https://m.media-amazon.com/images/I/61t-YGvswzL._AC_SY550_.jpg"
          rating="4.6"
          price="R1799.00"
        />
      </div>
      <div className="product-row">
        <Product
          id="1"
          title="Norden Portable Adjustable Laptop Stand – Aluminum Alloy Folding Computer Stand laptop stand"
          image="https://m.media-amazon.com/images/I/31XS32Ytx5L._SR480,440_.jpg"
          rating="4.3"
          price="R97.00"
        />
        <Product
          id="2"
          title="Logitech G502 Lightspeed Wireless Gaming Mouse, Black, One Size"
          image="https://m.media-amazon.com/images/I/61t-YGvswzL._AC_SY550_.jpg"
          rating="4.6"
          price="R1799.00"
        />
        <Product
          id="2"
          title="Logitech G502 Lightspeed Wireless Gaming Mouse, Black, One Size"
          image="https://m.media-amazon.com/images/I/61t-YGvswzL._AC_SY550_.jpg"
          rating="4.6"
          price="R1799.00"
        />
      </div>
      <div className="product-row">
        <Product
          id="1"
          title="Norden Portable Adjustable Laptop Stand – Aluminum Alloy Folding Computer Stand laptop stand"
          image="https://m.media-amazon.com/images/I/31XS32Ytx5L._SR480,440_.jpg"
          rating="4.3"
          price="R97.00"
        />
        </div>
    </main>
  );
}
