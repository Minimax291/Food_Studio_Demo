import { Link } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Food Studio</h1>
          <h2>British-Indian Fusion, Fresh and Affordable</h2>
          <p>
            Discover delicious curries, biryanis, wraps, street food, and
            student-friendly meal deals made for quick and satisfying orders.
          </p>

          <div className="hero-buttons">
            <Link to="/menu" className="primary-btn">
              View Menu
            </Link>
            <Link to="/cart" className="secondary-btn">
              Order Now
            </Link>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2>Special Offers</h2>
        <div className="card-grid">
          <div className="info-card">Lunch Deal</div>
          <div className="info-card">Student Saver</div>
          <div className="info-card">Free Drink Combo</div>
        </div>
      </section>

      <section className="home-section">
        <h2>Most Popular</h2>
        <div className="card-grid">
          <div className="food-card">
            <h3>Chicken Biryani</h3>
            <p>Classic rice dish packed with flavor.</p>
          </div>
          <div className="food-card">
            <h3>Chicken Balti</h3>
            <p>A rich and warming curry favorite.</p>
          </div>
          <div className="food-card">
            <h3>Choley Bhatura</h3>
            <p>A filling and popular street-food style meal.</p>
          </div>
        </div>
      </section>

      <section className="home-section">
        <h2>Package Deals</h2>
        <div className="card-grid">
          <div className="info-card">Wrap + Drink</div>
          <div className="info-card">Curry + Rice + Drink</div>
          <div className="info-card">Family Combo</div>
        </div>
      </section>

      <section className="home-section">
        <h2>Featured Menu</h2>
        <div className="card-grid">
          <div className="food-card">
            <h3>Paneer Wrap</h3>
            <p>Soft wrap filled with spiced paneer and fresh salad.</p>
          </div>
          <div className="food-card">
            <h3>Vegetable Biryani</h3>
            <p>Flavorful rice dish with mixed vegetables and spices.</p>
          </div>
          <div className="food-card">
            <h3>Masala Chips</h3>
            <p>Crispy chips with a bold masala twist.</p>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <h2>About Food Studio</h2>
        <p>
          Food Studio brings together British convenience and Indian flavor in
          a warm, affordable, and modern food experience for students, locals,
          and busy customers.
        </p>
      </section>

      <section className="cta-section">
        <h2>Ready to Order?</h2>
        <p>Browse the full menu and build your perfect meal.</p>
        <Link to="/menu" className="primary-btn">
          Explore Menu
        </Link>
      </section>
    </div>
  );
}