import { Link } from "react-router-dom";
import "./OrderSuccessPage.css";

export default function OrderSuccessPage() {
  return (
    <div className="order-success-page">
      <div className="success-card">
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for ordering from Food Studio.</p>
        <p>Your order number is <strong>#FS1024</strong></p>
        <p>Estimated delivery time: <strong>25–35 minutes</strong></p>

        <div className="success-buttons">
          <Link to="/" className="success-btn">
            Back to Home
          </Link>
          <Link to="/menu" className="success-btn secondary-success-btn">
            Order More
          </Link>
        </div>
      </div>
    </div>
  );
}