import React, { useState, useRef } from "react";

const TextEditor = () => {
  const [show, setShow] = useState(true);
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  const handleContentChange = () => {
    setContent(editorRef.current.innerHTML);
  };

  const applyFormat = (format) => {
    document.execCommand(format, false);
    handleContentChange();
  };

  return (
    <div>
      {show && (
        <div>
          <div
            contentEditable
            ref={editorRef}
            onInput={handleContentChange}
            style={{
              border: "1px solid black",
              padding: "10px",
              minHeight: "200px",
            }}
          >
            {content}
          </div>
          <button onClick={() => applyFormat("bold")}>Bold</button>
          <button onClick={() => applyFormat("italic")}>Italic</button>
          <button onClick={() => setShow(false)}>Hide Editor</button>
        </div>
      )}
      {!show && <button onClick={() => setShow(true)}>Show Editor</button>}
      <div>
        <h3>Content:</h3>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
};

export default TextEditor;
