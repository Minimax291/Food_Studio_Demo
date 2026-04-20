import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import "./CheckoutPage.css";

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const navigate = useNavigate();

  const deliveryFee = cartItems.length > 0 ? 2.5 : 0;
  const finalTotal = getTotalPrice() + deliveryFee;

  const handlePlaceOrder = () => {
    clearCart();
    navigate("/order-success");
  };

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <h1>Checkout</h1>
        <p>Review your delivery details and place your order.</p>
      </div>

      <div className="checkout-layout">
        <div className="checkout-form-box">
          <h2>Delivery Details</h2>

          <form className="checkout-form">
            <label>
              Full Name
              <input type="text" defaultValue="Joy Demo" />
            </label>

            <label>
              Email
              <input type="email" defaultValue="joydemo@gmail.com" />
            </label>

            <label>
              Phone Number
              <input type="text" defaultValue="07123 456789" />
            </label>

            <label>
              Address
              <input type="text" defaultValue="123 Student Street" />
            </label>

            <label>
              City
              <input type="text" defaultValue="Birmingham" />
            </label>

            <label>
              Postcode
              <input type="text" defaultValue="B1 1AA" />
            </label>

            <label>
              Payment Method
              <select defaultValue="card">
                <option value="card">Card</option>
                <option value="cash">Cash on Delivery</option>
              </select>
            </label>
          </form>
        </div>

        <div className="checkout-summary-box">
          <h2>Order Summary</h2>

          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <>
              <div className="summary-list">
                {cartItems.map((item) => (
                  <div className="summary-item" key={item.id}>
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span>£{(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>

              <div className="summary-row">
                <span>Subtotal</span>
                <span>£{getTotalPrice().toFixed(2)}</span>
              </div>

              <div className="summary-row">
                <span>Delivery Fee</span>
                <span>£{deliveryFee.toFixed(2)}</span>
              </div>

              <div className="summary-row total-row">
                <span>Total</span>
                <span>£{finalTotal.toFixed(2)}</span>
              </div>

              <button className="place-order-btn" onClick={handlePlaceOrder}>
                Place Order
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}