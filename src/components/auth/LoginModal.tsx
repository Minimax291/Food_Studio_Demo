import { useAuth } from "../../context/AuthContext";
import "./LoginModal.css";

type LoginModalProps = {
  onClose: () => void;
};

export default function LoginModal({ onClose }: LoginModalProps) {
  const { login } = useAuth();

  const handleGoogleLogin = () => {
    login();
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="login-modal">
        <button className="close-btn" onClick={onClose}>
          ×
        </button>

        <h2>Sign in to Food Studio</h2>
        <p>Use your Google account to continue.</p>

        <button className="google-login-btn" onClick={handleGoogleLogin}>
          Continue with Google
        </button>
      </div>
    </div>
  );
}