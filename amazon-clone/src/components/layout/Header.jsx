import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import "./Header.css";

export default function Header() {
  return (
    <div className="header-container">
      <header className="header">
        <img
          className="header-logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt="Amazon logo"
        />
      </header>
      <div className="header-search">
        <input className="header-input" type="text" />
        <SearchIcon className="search-icon" />
      </div>
      <div className="header-nav">
        <Link to="/signin">
          <div className="header-option">
            <span className="header-optionOne">Hello Guest</span>
            <span className="header-optionTwo">Sign In</span>
          </div>
        </Link>
        <div className="header-option">
          <span className="header-optionOne">Returns</span>
          <span className="header-optionTwo">Orders</span>
        </div>
        <div className="header-option">
          <span className="header-optionOne">Your</span>
          <span className="header-optionTwo">Prime</span>
        </div>
        <div className="header-optionBasket">
          <ShoppingBasketIcon className="basket-icon" />
          <span className="header-optionTwo header-basketCount">0</span>
        </div>
      </div>
    </div>
  );
}
