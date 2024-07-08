import React from "react";
import styles from "./cssfile.module.css";
import Testprop from "./Testprop";

const Cssfile = () => {
  const names = ["anil", "kamo", "rasid", "javed"];
  return (
    <div>
      <h1 className="test-h1">hello </h1>
      <p className={styles.paratext}>testing css</p>
      <span style={{ backgroundColor: "red" }}>
        <i>hell- word</i>
      </span>
      <h2 className="text-center">testing props</h2>
      <Testprop name={names} />
    </div>
  );
};

export default Cssfile;
