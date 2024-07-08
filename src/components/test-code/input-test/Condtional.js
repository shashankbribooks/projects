import React, { useState } from "react";

const Condtional = () => {
  const [loggedIn, setLoggedIn] = useState(2);
  return (
    <div>
      //if else
      {loggedIn ? <h1>good moring</h1> : <h1>good afternone</h1>}
      {loggedIn == 1 ? ( //if else if condtion
        <h1>good moring</h1>
      ) : loggedIn == 2 ? (
        <h2>good afternoon</h2>
      ) : (
        <h2>good night</h2>
      )}
    </div>
  );
};

export default Condtional;
