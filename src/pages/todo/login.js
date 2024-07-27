// pages/login.js
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../utils/firebase";
import dynamic from "next/dynamic";
import Link from "next/link";

const FirebaseUI = dynamic(
  () => import("../../components/todo-list/FirebaseUI"),
  { ssr: false }
);

export default function Login() {
  const [isClient, setIsClient] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isReset, setIsReset] = useState(false);
  const [isOtp, setIsOtp] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setMessage("Login successful.");
      router.push("/todo");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  const handleReset = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      setMessage("Password reset email sent.");
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <div>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </label>
        <button onClick={handleLogin}>Login</button>
        <button onClick={() => setIsReset(!isReset)}>Forgot Password?</button>
        {/* <button onClick={() => setIsOtp(!isOtp)}>Login with OTP</button> */}
        <Link href="/todo/signup">
          <button>Signup</button>
        </Link>
      </div>
      
      {isReset && (
        <div>
          <h2>Reset Password</h2>
          <input
            type="email"
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <button onClick={handleReset}>Send Reset Email</button>
        </div>
      )}

      {isOtp && (
        <div>
          <h2>OTP Login</h2>
          <FirebaseUI />
        </div>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}
