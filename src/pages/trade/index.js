import RichTextEditor from "@/components/googledocs/buttons/Btnbold";
import MyComponent from "@/components/trade/MyComponent";
import TextEditor from "@/components/trade/One";
import Two from "@/components/trade/Two";
import { useState, useRef, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

const index = () => {
  const [show, setShow] = useState(true);
  const [content, setContent] = useState("");
  const [fontSize, setFontSize] = useState(16);
  const editorRef = useRef(null);
  const fontSizeInputRef = useRef(null);

  const handleContentChange = () => {
    setContent(editorRef.current.innerHTML);
  };
  const applyFormat = (format) => {
    document.execCommand(format, true);
    handleContentChange();
  };
  const getCurrentFontSize = () => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;
    const range = selection.getRangeAt(0);
    const parentNode = range.startContainer.parentNode;
    const currentFontSize = window.getComputedStyle(parentNode).fontSize;
    setFontSize(parseInt(currentFontSize));
  };
  const changeFontSize = (increase) => {
    const selection = window.getSelection();
    if (!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const span = document.createElement("span");
    const parentNode = range.startContainer.parentNode;
    const currentFontSize = window.getComputedStyle(parentNode).fontSize;
    const newFontSize = increase
      ? parseInt(currentFontSize) + 1
      : parseInt(currentFontSize) - 1;

    span.style.fontSize = `${newFontSize}px`;
    span.appendChild(range.extractContents());
    range.insertNode(span);

    selection.removeAllRanges();
    const newRange = document.createRange();
    newRange.selectNodeContents(span);
    selection.addRange(newRange);

    setFontSize(newFontSize);
    handleContentChange();
  };

  useEffect(() => {
    document.addEventListener("selectionchange", getCurrentFontSize);
    return () => {
      document.removeEventListener("selectionchange", getCurrentFontSize);
    };
  }, []);

  const white = "/assets/images/BriBooks.png";
  const green = "/assets/images/dashboard/bribooks-logo.png";
  return (
    <div>
      <button onClick={() => applyFormat("bold")}> Bold </button>
      <button onClick={() => applyFormat("italic")}> italic </button>
      <button onClick={() => applyFormat("underline")}> underline </button>
      <button onClick={() => applyFormat("superscript")}> superscript </button>
      <button onClick={() => applyFormat("subscript")}> subscript </button>
      <input
        type="number"
        ref={fontSizeInputRef}
        style={{ width: "60px", marginRight: "10px" }}
        defaultValue={fontSize}
      />
      <button onClick={() => changeFontSize()}>Apply Font Size</button>
      <div> FS: {fontSize}px</div>
      <button onClick={() => changeFontSize(true)}>Increase Font Size</button>
      <button onClick={() => changeFontSize(false)}>Decrease Font Size</button>
      <div
        contentEditable
        style={{
          width: "100%",
          height: "auto",
          minHeight: "800px",
          border: "1px solid #ccc",
          padding: "10px",
        }}
        ref={editorRef}
        onInput={handleContentChange}
      ></div>
      {/* <button onClick={() => setShow(true)}>show data</button>
      <button onClick={() => alert("hello ")}>click </button> */}

      <div>
        <MyComponent green>
          <img src={green} alt="" />
        </MyComponent>
        <MyComponent white>
          <p>
            <img src={white} alt="" />
          </p>
        </MyComponent>
      </div>
    </div>
  );
};

export default index;
