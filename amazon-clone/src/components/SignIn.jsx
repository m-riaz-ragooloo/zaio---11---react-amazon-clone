import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState } from "react"
import Modal from "./Modal";
import "./SignIn.css"

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <main>
      <div className="signup">
        <Link to="/home">
          <img src="https://wp.logos-download.com/wp-content/uploads/2016/03/Amazon_Logo_2000.png?dl" alt="Logo" />
        </Link>
        <div className="login-container">
            <h1>Sign-in</h1>
            <form action="">
                <h5>Email</h5>
                <input type="text" />
                <h5>Password</h5>
                <input type="password" />
                <button type="submit" className="login-signInBtn">Sign In</button>
            </form>
            <p>By signing-in you agree to the Amazon Clone Conditions of Use & Sale</p>
            <button className="login-registerBtn">Create your Amazon Account</button>
        </div>
        <Outlet />
      </div>
    </main>
  );
}
