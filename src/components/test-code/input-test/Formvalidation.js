import React, { useState } from "react";

const Formvalidation = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  function loginhandle(e) {
    if (user.length < 3 || password.length < 3) {
      alert("type correct values");
    } else {
      alert("all good :)");
    }
    e.preventDefault();
  }
  function userhandle(e) {
    const item = e.target.value;
    if (item.length < 3) {
      setUserErr(true);
    } else {
      setUserErr(false);
    }
    setUser(item);
  }
  function passwordhandle(e) {
    const item = e.target.value;
    if (item.length < 3) {
      setPassErr(true);
    } else {
      setPassErr(false);
    }
    setPassword(item);
  }
  return (
    <div className="text-center">
      <h1>Sign </h1>
      <form action="" onSubmit={loginhandle}>
        <input
          type="text"
          placeholder="enter your name "
          onChange={userhandle}
        />
        {userErr ? <span>User Not valid </span> : ""}
        <br /> <br />
        <input
          type="text"
          placeholder="enter your password "
          onChange={passwordhandle}
        />
        {passErr ? <span>Password Not valid </span> : ""}
        <br /> <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Formvalidation;
