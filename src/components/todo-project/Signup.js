// components/Signup.js
import { useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, namedQuery, setDoc } from "firebase/firestore";
import { Form, Button, Alert } from "react-bootstrap";
import Layout from "../layout/Layout";
import Tags from "../../constants/tags";

const getCustomErrorMessage = (errorCode) => {
  const errorMessages = {
    "auth/invalid-email": "The email address is not valid.",
    "auth/user-disabled":
      "The user account has been disabled by an administrator.",
    "auth/user-not-found":
      "There is no user record corresponding to this email.",
    "auth/wrong-password": "The password is incorrect.",
    "auth/weak-password": "The password is too weak.",
    "auth/email-already-in-use":
      "The email address is already in use by another account.",
    "auth/invalid-credential": "The provided credentials are not valid.",
    // Add more custom messages as needed
    default: "An unexpected error occurred. Please try again.",
  };

  return errorMessages[errorCode] || errorMessages.default;
};

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");

  const router = useRouter(); // Initialize useRouter
  const handleSignup = async (e) => {
    e.preventDefault();

    // Basic form validation
    if (!email || !password || !name || !mobile || !age) {
      alert("All fields are required");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        mobile,
        age,
      });
      //   alert("User created successfully!");
      router.push("/todo-project/login");
    } catch (error) {
      // console.error("Error signing up:", error);
      switch (error.code) {
        case "auth/email-already-in-use":
          alert("The email address is already in use by another account.");
          break;
        case "auth/invalid-email":
          alert("The email address is not valid.");
          break;
        case "auth/operation-not-allowed":
          alert("Email/password accounts are not enabled.");
          break;
        case "auth/weak-password":
          alert("The password is too weak.");
          break;
        default:
          alert("Error signing up: " + error.message);
          break;
      }
    }
  };
  const handleLogin = () => {
    router.push("/todo-project/login");
  };

  return (
    <Layout
      title={Tags.signup.title}
      description={Tags.signup.description}
      header={false}
      footer={false}
    >
      <div className="d-flex justify-content-center align-items-center ">
        <Form onSubmit={handleSignup} className="w-50">
          <Form.Group controlId="Name" className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          {/* <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          required
        /> */}
          <Form.Group controlId="formBasicEmail" className="mb-3">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>
          {/* <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        /> */}
          <Form.Group controlId="formBasicPassword" className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>
          {/* <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          required
        /> */}
          <Form.Group controlId="formBasicMobile" className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Mobile"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </Form.Group>
          {/* <input
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          placeholder="Mobile"
          required
        /> */}
          <Form.Group controlId="formBasicMobile" className="mb-3">
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="number"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </Form.Group>
          {/* <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Age"
          required
        /> */}
          {/* <button type="submit">Sign Up</button> */}
          <Button variant="primary" type="submit" className="w-100 mb-3">
            Sign Up
          </Button>
          <Button
            variant="secondary"
            onClick={handleLogin}
            className="w-100 mb-3"
          >
            Login
          </Button>
        </Form>
      </div>
    </Layout>
  );
};

export default Signup;
