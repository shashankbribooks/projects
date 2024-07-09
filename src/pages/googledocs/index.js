import Editor from "../../components/googledocs/editor/Editor";
import Toolsbar from "../../components/googledocs/Toolsbar/Toolsbar";
import React from "react";
// import Quill from "quill";
// import 'quill/dist/quill.snow.css';

const index = () => {
  return (
    <>
      <Editor />
      <Toolsbar />
    </>
  );
};

export default index;
