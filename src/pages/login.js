import React, { useState } from "react";
import styles from "./main.module.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  const _profile = () => (
    <div className={styles.main_div}>
      <div className="w-75 h-100 mx-auto bg-success text-white p-2 m-4">
        <h2>Title </h2>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Distinctio
          recusandae natus consequuntur ipsam consequatur molestias illo
          consectetur, quae sunt temporibus alias optio voluptas dolorem libero
          beatae vitae a perferendis quis!
        </p>
      </div>
    </div>
  );

  const _sidebar = () => (
    <div className={`${styles.sidebar} bg-success`}>
      <div className="text-center d-flex flex-column p-4 gap-4">
        <button>Dashboard</button>
        <button>Dashboard</button>
        <button>Dashboard</button>
        <button>Dashboard</button>
        <button>Dashboard</button>
        <button>Dashboard</button>
      </div>
    </div>
  );
  return (
    ////condtion isLoggedIn ? expression first true and : second expression false
    <div className="">
      {isLoggedIn ? (
        <div className="">
          {/* <h1>Welcome back, User!</h1> */}
          {/* <div className=""> {_profile()}</div> */}
          {_sidebar()}
          <button onClick={handleLogout} className="btn btn-dark">
            Logout
          </button>
        </div>
      ) : (
        <div className="text-center mt-5 ">
          <div className="w-25 h-100 bg-info mx-auto p-5 border border-2 ">
            <h1 className="mb-5">Please log in</h1>
            <button onClick={handleLogin} className="btn btn-dark">
              Login
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
