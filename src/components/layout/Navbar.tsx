import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
import LoginModal from "../auth/LoginModal";
import "./Navbar.css";

export default function Navbar() {
  const { getTotalItems } = useCart();
  const { user, isLoggedIn, logout } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const totalItems = getTotalItems();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">Food Studio</Link>
        </div>

        <div className="navbar-links">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/cart">Cart ({totalItems})</Link>

          {isLoggedIn ? (
            <div className="user-section">
              <span className="welcome-text">Hi, {user?.name}</span>
              <button className="logout-btn" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <button
              className="login-btn"
              onClick={() => setShowLoginModal(true)}
            >
              Login
            </button>
          )}
        </div>
      </nav>

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </>
  );
}