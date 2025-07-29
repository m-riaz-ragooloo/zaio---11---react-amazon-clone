import "./NotFound.css";
import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="img-top">
        <Link to="/home">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/01/error/title._TTD_.png"
            alt=""
          />
        </Link>
      </div>
      <div className="img-bottom">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/01/error/19._TTD_.jpg"
          alt="Lola"
        />
      </div>
    </div>
  );
}
