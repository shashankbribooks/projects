import { useState, useRef, useEffect } from "react";
import { ResizableBox } from "react-resizable";
import "react-resizable/css/styles.css"; // Import styles for react-resizable
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import { ClassNames } from "@emotion/react";
import axios from "axios";
import { HiBattery100 } from "react-icons/hi2";

export default function RichTextEditor(props) {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);
  const [fontSize, setFontSize] = useState(10);

  const handleContentChange = () => {
    setContent(editorRef.current.innerHTML);
  };

  const applyFormat = (format) => {
    document.execCommand(format, true);
    handleContentChange();
  };

  const applyHeading = (e) => {
    const selectedHeading = e.target.value;
    if (selectedHeading !== "") {
      document.execCommand("formatBlock", false, `<${selectedHeading}>`);
    }
  };

  const applyFontStyle = (style) => {
    document.execCommand("fontName", false, style);
  };

  const changeFontSize = (size) => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const parentElement = range.commonAncestorContainer.parentElement;
      const currentFontSize = parseFloat(
        getComputedStyle(parentElement).fontSize
      );
      const newFontSize = currentFontSize + size;
      parentElement.style.fontSize = newFontSize + "px";
      setFontSize(newFontSize);
    }
  };

  const changeFontColor = (color) => {
    document.execCommand("foreColor", false, color);
    handleContentChange();
  };

  const changeHighlightColor = (color) => {
    document.execCommand("hiliteColor", false, color);
    handleContentChange();
  };
  const insertImage = (url) => {
    const imgElement = document.createElement("img");
    imgElement.src = url;
    imgElement.style.maxWidth = "100%"; // Ensure the image doesn't overflow
    imgElement.style.height = "auto"; // Maintain aspect ratio
    imgElement.className = "resizable-image";
    const resizableWrapper = document.createElement("div");
    resizableWrapper.appendChild(imgElement);
    editorRef.current.appendChild(resizableWrapper);
    handleContentChange();
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imgURL = event.target.result;
        insertImage(imgURL);
      };
      reader.readAsDataURL(file);
    }
  };

  const insertLink = () => {
    const url = prompt("Enter the URL");
    if (url) {
      document.execCommand("createLink", false, url);
      handleContentChange();
    }
  };

  const insertComment = () => {
    const comment = prompt("Enter your comment");
    if (comment) {
      const span = document.createElement("span");
      span.className = "comment";
      span.style.backgroundColor = "yellow";
      span.textContent = comment;
      const range = window.getSelection().getRangeAt(0);
      range.insertNode(span);
      handleContentChange();
    }
  };

  useEffect(() => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const parentElement = range.commonAncestorContainer.parentElement;
      const currentFontSize = parseFloat(
        getComputedStyle(parentElement).fontSize
      );
      setFontSize(currentFontSize);
    }
  }, []);

  useEffect(() => {
    const editor = editorRef.current;
    const resizableImages = editor.querySelectorAll(".resizable-image");
    resizableImages.forEach((img) => {
      const wrapper = img.parentElement;
      if (!wrapper.classList.contains("resizable-wrapper")) {
        const resizableBox = document.createElement("div");
        resizableBox.style.display = "inline-block";
        resizableBox.classList.add("resizable-wrapper");
        resizableBox.innerHTML = `<ResizableBox width={200} height={200} lockAspectRatio={true}><img src=${img.src} style="max-width: 100%; height: auto;" /></ResizableBox>`;
        wrapper.replaceWith(resizableBox);
      }
    });
  }, [content]);

  const applyAlignment = (alignment) => {
    document.execCommand(alignment, false);
    handleContentChange();
  };

  const applyLineSpacing = (spacing) => {
    document.execCommand("formatBlock", false, "p");
    const paragraphs = editorRef.current.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.style.lineHeight = spacing;
    });
    handleContentChange();
  };

  const applyParagraphSpacing = (spacing) => {
    document.execCommand("formatBlock", false, "p");
    const paragraphs = editorRef.current.querySelectorAll("p");
    paragraphs.forEach((paragraph) => {
      paragraph.style.marginBottom = spacing;
    });
    handleContentChange();
  };

  const insertChecklist = () => {
    document.execCommand("insertUnorderedList", false);
    const lists = editorRef.current.querySelectorAll("ul");
    lists.forEach((list) => {
      list.classList.add("checklist");
      list.querySelectorAll("li").forEach((item) => {
        if (!item.querySelector("input[type='checkbox']")) {
          const checkbox = document.createElement("input");
          checkbox.type = "checkbox";
          checkbox.style.marginRight = "10px";
          item.insertBefore(checkbox, item.firstChild);
        }
      });
    });
    handleContentChange();
  };

  return (
    <div className=" px-4">
      <div className="hstack gap-2 border border-2 rounded-5 px-4 py-1 my-2">
        <button
          onClick={() => applyFormat("bold")}
          className="border-0 bg-transparent fs-4 fw-bold"
        >
          <i>B</i>
        </button>
        <button
          onClick={() => applyFormat("italic")}
          className="border-0 bg-transparent fs-4 fw-bold"
        >
          <i>I</i>
        </button>
        <button
          onClick={() => applyFormat("underline")}
          className="border-0 bg-transparent fs-4 fw-bold text-decoration-underline"
        >
          U
        </button>
        <button
          onClick={() => document.execCommand("undo")}
          className="border-0 bg-transparent fs-4 fw-bold"
        >
          <UndoIcon />
        </button>
        <button
          onClick={() => document.execCommand("redo")}
          className="border-0 bg-transparent fs-4 fw-bold"
        >
          <RedoIcon />
        </button>
        <select
          onChange={(e) => applyFontStyle(e.target.value)}
          className="py-2 fs-5"
        >
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Courier New">Courier New</option>
          <option value="Roboto Mono">Roboto Mono</option>
          <option value="Monospace">Monospace</option>
          <option value="Georgia">Georgia</option>
          <option value="system-ui">System-ui</option>
          <option value="Noto Sans">Noto Sans</option>
          <option value="DauphinPlain">DauphinPlain</option>
        </select>
        <div className="my-auto border border-2 fw-bold hstack gap-1 text-center">
          <button
            onClick={() => changeFontSize(-1)}
            className="border-0 fs-3 fw-bold px-1"
          >
            -
          </button>
          <p className="my-auto">{fontSize} px</p>
          <button
            onClick={() => changeFontSize(1)}
            className="border-0 fs-3 fw-bold px-1"
          >
            +
          </button>
        </div>
        <input
          type="color"
          onChange={(e) => changeFontColor(e.target.value)}
          className="border-0 bg-transparent"
        />
        <input
          type="color"
          onChange={(e) => changeHighlightColor(e.target.value)}
          className="border-0 bg-transparent"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
          id="imageUpload"
        />
        <button
          onClick={() => document.getElementById("imageUpload").click()}
          className="border-1 bg-transparent fs-4 fw-bold"
        >
          Image
        </button>
        <button
          onClick={insertLink}
          className="border-1 bg-transparent fs-4 fw-bold"
        >
          Link 
        </button>

        <select onChange={(e) => applyAlignment(e.target.value)}>
          <option value="justifyLeft">Align Left</option>
          <option value="justifyCenter">Align Center</option>
          <option value="justifyRight">Align Right</option>
          <option value="justifyFull">Justify</option>
        </select>

        <select onChange={(e) => applyLineSpacing(e.target.value)}>
          <option value="1">Single Line</option>
          <option value="1.5">1.5 Lines</option>
          <option value="2">Double Line</option>
        </select>
        <select onChange={(e) => applyParagraphSpacing(e.target.value)}>
          <option value="0">No Spacing</option>
          <option value="10px">Small Spacing</option>
          <option value="20px">Medium Spacing</option>
          <option value="30px">Large Spacing</option>
        </select>

        <button
          onClick={insertChecklist}
          className="border-1 bg-transparent fs-6 "
        >
          Checklist
        </button>
      </div>
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
    </div>
  );
}
