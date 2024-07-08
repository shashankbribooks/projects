import React from "react";
import styles from "./login.module.css";

const Login = () => {
  return (
    <>
      <div className={`${styles.login} container-fluid border `}>
        <div className="container mt-3">
          <div className="row hstack">
            <div className="col-6 text-start">
              <span >
                <img src="./assets/images/bristore/LOGO (1).svg" href="/bristore" alt="" />
              </span>
            </div>
            <div className="col-6  text-end">
              <span>
                <img src="./assets/images/bristore/close.svg" alt="" />
              </span>
            </div>
          </div>
          <div className="row my-5 ">
            <div className="col-6 ">
              <div>
                <div className="pop pt-5 text-end">
                  <div className={styles.pop}>
                    <img
                      src="./assets/images/bristore/LoginBallon.png"
                      width={180}
                      alt="Login Ballon"
                    />
                    <p className={styles.para}>Hello Author</p>
                  </div>
                </div>
                <div className="gif text-center">
                  <img
                    src="./assets/images/bristore/login page .gif"
                    width={280}
                    height={300}
                    alt="robot"
                  />
                </div>
              </div>
            </div>
            <div className="col-6 py-5">
              <div className="loginbtn hstack gap-3">
                <h3>Login with</h3>
                <button type="button" class="btn btn-primary">
                  Phone Number
                </button>
                <button type="button" class="btn btn-primary">
                  Email
                </button>
                <button type="button" class="btn btn-primary">
                  Username
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
