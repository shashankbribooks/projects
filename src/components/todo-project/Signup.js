// components/Signup.js
import { useState } from "react";
import { useRouter } from "next/router";
import { auth, db } from "../../lib/firebase";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, namedQuery, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { Form, Button, Alert } from "react-bootstrap";
import Layout from "../layout/Layout";
import Tags from "../../constants/tags";
import { app } from "../../../firebaseConfig";
import styles from "../../pages/todo-project/todo.module.css";
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
  const [image, setImage] = useState(null);
  const [message, setMessage] = useState("");
  const auth = getAuth(app);
  const router = useRouter(); // Initialize useRouter

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      let imageURL = "";
      if (image) {
        // Upload image to Firebase Storage
        const storage = getStorage(app);
        const imageRef = ref(storage, `profilePictures/${user.uid}`);
        await uploadBytes(imageRef, image);
        imageURL = await getDownloadURL(imageRef);
      }
      // Save additional user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: name,
        mobile: mobile,
        age: age,
        email: email,
        profilePicture: imageURL, // Save image URL
      });

      console.log("User signed up and additional data saved");
      router.push("/todo-project/login"); // Redirect to login after successful signup
    } catch (error) {
      console.error("Error signing up:", error);
      if (error.code) {
        // Specific Firebase Auth error code
        alert(`Error signing up: ${error.code} - ${error.message}`);
      } else {
        // General error
        alert(`Error signing up: ${error.message}`);
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
      <div className={`  d-flex justify-content-center align-items-center `}>
        <Form onSubmit={handleSignup} className="w-25">
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
          <Form.Group controlId="formBasicImage" className="mb-3">
            <Form.Label>Profile Picture</Form.Label>
            <Form.Control
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </Form.Group>
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
        {message && <p>{message}</p>}
      </div>
    </Layout>
  );
};

export default Signup;
