import { Link } from "react-router-dom";
import "./AboutPage.css";

export default function AboutPage() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <h1>About Food Studio</h1>
        <p>
          A modern British-Indian food spot serving flavourful meals, quick
          bites, and student-friendly deals in Birmingham.
        </p>
      </section>

      <section className="about-content">
        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            Food Studio brings together the comfort of British takeaway food and
            the bold flavours of Indian cooking. From biryanis and curries to
            wraps, street food, and package deals, the goal is simple: tasty food
            that is quick, filling, and affordable.
          </p>
        </div>

        <div className="about-card">
          <h2>Why Customers Love Us</h2>
          <ul>
            <li>Fresh British-Indian fusion meals</li>
            <li>Affordable student-friendly options</li>
            <li>Quick ordering and delivery experience</li>
            <li>Popular comfort dishes and meal deals</li>
          </ul>
        </div>

        <div className="about-card">
          <h2>Our Demo Vision</h2>
          <p>
            This website demo shows how Food Studio could offer its own online
            ordering system, helping customers order directly from the restaurant
            instead of depending only on third-party delivery platforms.
          </p>
        </div>
      </section>

      <section className="about-cta">
        <h2>Hungry?</h2>
        <p>Explore the menu and build your perfect order.</p>
        <Link to="/menu" className="about-btn">
          View Menu
        </Link>
      </section>
    </div>
  );
}