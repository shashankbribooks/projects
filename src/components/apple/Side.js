import React from "react";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import styles from './side.module.css';

const Side = () => {
  const [user, setUser] = useState([]);
  const getUsers = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUser(data);
    console.log(name);
  };
  return (
    <div>
      <button onClick={getUsers}>get data </button>
      <div className="bg-success w-100 border h-50  ">
        <ul>
          {user.map((e) => (
            <>
              <div class="hstack gap-1 row" key={e.id}>
                <div class="bg-light border col-2">{e.name}</div>
                <div class="bg-light border col-2">{e.username}</div>
                <div class="bg-light border col-3">{e.email}</div>
                <div className="row col-5">
                  <div class="bg-light border  col-4">{e.address.street}</div>
                  <div class="bg-light border col-4">{e.address.city}</div>
                  <div class="bg-light border col-3">{e.address.zipcode}</div>
                </div>
              </div>
            </>
          ))}
        </ul>
      </div>

      <div className={styles.test}>
      </div>
    </div>
  );
};

export default Side;
