import { useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { db, storage } from "../../lib/firebase"; // Ensure storage is imported
import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"; // Ensure correct imports
import Layout from "../layout/Layout";
import Tags from "../../constants/tags";
import { Image, Spinner, Button, Form, Alert } from "react-bootstrap";
import styles from "../../pages/todo-project/todo.module.css";
import { useRouter } from "next/router";

const TaskList = ({ tasks }) => (
  <ul className={`${styles.taskList} list-group-numbered mt-3 ms-1`}>
    {tasks.map((task) => (
      <li
        key={task.id}
        className={`${styles.taskItem} list-group-item`}
        style={{ color: task.completed ? "red" : "green" }}
      >
        <span
          style={{
            borderBottom: task.completed ? "0.005px solid red" : "none",
            textDecoration: task.completed ? "line-through" : "none",
          }}
        >
          {task.text}
        </span>
      </li>
    ))}
  </ul>
);

const Profile = () => {
  const [userData, setUserData] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showTasks, setShowTasks] = useState(true);
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [age, setAge] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [message, setMessage] = useState(null);
  const auth = getAuth();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const user = auth.currentUser;
      if (user) {
        // Fetch user data
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUserData(userData);
          setName(userData.name || "");
          setMobile(userData.mobile || "");
          setAge(userData.age || "");
          setProfilePicture(userData.profilePicture || null);
        }

        // Fetch user's tasks
        const q = query(
          collection(db, "tasks"),
          where("userId", "==", user.uid)
        );
        const querySnapshot = await getDocs(q);
        const tasksData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTasks(tasksData);
      }
      setLoading(false);
    };

    fetchData();
  }, [auth]);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage(null);
      }, 1000); // 10 seconds

      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleGoBack = () => {
    setLoading(true); // Set loading state before navigation
    router.push("/todo-project");
  };

  const toggleTasksVisibility = () => {
    setShowTasks((prevShowTasks) => !prevShowTasks);
  };

  const handleEditToggle = () => {
    setEditing((prevEditing) => !prevEditing);
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    const user = auth.currentUser;
    if (user) {
      try {
        const userRef = doc(db, "users", user.uid);
        const updatedData = { name, mobile, age };

        if (profilePicture) {
          const storageRef = ref(storage, `profilePictures/${user.uid}`);
          await uploadBytes(storageRef, profilePicture);
          const profilePictureUrl = await getDownloadURL(storageRef);
          updatedData.profilePicture = profilePictureUrl;
        }

        await updateDoc(userRef, updatedData);
        setMessage("Profile updated successfully!");
        setUserData({ ...userData, ...updatedData });
        setEditing(false);
      } catch (error) {
        setMessage(`Error updating profile: ${error.message}`);
      }
    }
    setLoading(false);
  };
  const handleLogout = async () => {
    try {
      await signOut(auth);
      router.push("/todo-project/login"); // redirect to the login page
    } catch (error) {
      console.error("Error logging out: ", error);
    }
  };

  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "100vh" }}
      >
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <Layout
      title={Tags.todoprofile.title}
      description={Tags.todoprofile.description}
      header={false}
      footer={false}
    >
      <div className={styles.container}>
        <div className={styles.main}>
          <h1 className="fw-bold text-center">Profile</h1>

          {userData ? (
            <div className="text-center">
              <h2>{userData.name}</h2>
              {userData.profilePicture && (
                <Image
                  src={userData.profilePicture}
                  alt="Profile"
                  className="rounded-circle border border-2"
                  width={200}
                  height={200}
                />
              )}
              {message && <Alert variant="info">{message}</Alert>}

              {editing ? (
                <Form onSubmit={handleProfileUpdate} className="mt-3">
                  <Form.Group controlId="formName" className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formMobile" className="mb-3">
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Mobile"
                      value={mobile}
                      onChange={(e) => setMobile(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formAge" className="mb-3">
                    <Form.Label>Age</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Age"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formProfilePicture" className="mb-3">
                    <Form.Label>Profile Picture</Form.Label>
                    <Form.Control
                      type="file"
                      onChange={(e) => setProfilePicture(e.target.files[0])}
                    />
                  </Form.Group>
                  <Button variant="primary" type="submit" className="w-100">
                    Update Profile
                  </Button>
                </Form>
              ) : (
                <>
                  <p>Email: {userData.email}</p>
                  <p>Mobile: {userData.mobile}</p>
                  <p>Age: {userData.age}</p>
                </>
              )}
              <Button
                variant="secondary"
                onClick={handleGoBack}
                className="mt-4 me-2"
              >
                Go Back
              </Button>
              <Button onClick={toggleTasksVisibility} className="mt-4 me-2">
                {showTasks ? "Hide Tasks" : "Show Tasks"}
              </Button>
              <Button onClick={handleEditToggle} className="mt-4 me-2">
                {editing ? "Cancel" : "Edit Profile"}
              </Button>
              <Button onClick={handleLogout} className="mt-4 ">
                Logout
              </Button>
              <div className="mt-2 ">
                <h3>Tasks</h3>
                {showTasks && (
                  <>
                    <TaskList tasks={tasks} />
                  </>
                )}
              </div>
            </div>
          ) : (
            <p className="text-center">No user data found</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
