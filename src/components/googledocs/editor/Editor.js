import dynamic from "next/dynamic";
import { useState } from "react";
import styles from "./editor.module.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState } from "draft-js";
import CommentIcon from "@mui/icons-material/Comment";
import UpdateIcon from "@mui/icons-material/Update";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import VideocamIcon from "@mui/icons-material/Videocam";
import DriveFileMoveIcon from "@mui/icons-material/DriveFileMove";
import CloudDoneIcon from "@mui/icons-material/CloudDone";
import { Button, Dropdown } from "react-bootstrap";
export default function TextEditor() {
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div className={styles.container}>
      <div className="main d-flex">
        <div>
          <img
            src="/assets/images/googledocs/Google_Docs_Logo.svg"
            className={`${styles.logo} mx-2 mt-2`}
          />
        </div>
        <div class="col-2 col-md-6 col-lg-8 mt-3">
          <div className="d-flex">
            <input
              type="text"
              placeholder="Untitled document"
              className="mx-2 border-0 bg-white"
            />
            <span className={`${styles.btn} mx-2`}>☆</span>
            <span className={`${styles.btn} mx-2`}>
              <DriveFileMoveIcon />
            </span>
            <span className={`${styles.btn} mx-2`}>
              <CloudDoneIcon />
            </span>
          </div>
          <div className="d-flex ">
            <p className={`${styles.btn} mx-2`}>File</p>
            <p className={`${styles.btn} mx-2`}>Edit </p>
            <p className={`${styles.btn} mx-2`}>View </p>
            <p className={`${styles.btn} mx-2`}>Insert </p>
            <p className={`${styles.btn} mx-2`}>Format </p>
            <p className={`${styles.btn} mx-2`}>Tools </p>
            <p className={`${styles.btn} mx-2`}>Extension </p>
            <p className={`${styles.btn} mx-2`}>Help </p>
          </div>
        </div>
        <div className={`${styles.icons} col-8 col-md-6 col-4 p-3 d-flex`}>
          <div className={`${styles.update} mx-4`}>
            <UpdateIcon />
          </div>
          <div className={`${styles.update} mx-4`}>
            <CommentIcon />
          </div>
          <div className={`${styles.update} mx-4`}>
            <VideocamIcon />
          </div>
          <div className={`${styles.update} mx-4`}>
            <AccountCircleIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
