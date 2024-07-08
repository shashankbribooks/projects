import React, { useState, useRef, useEffect } from "react";
import { CirclePicker } from "react-color";
import styles from "./toolsbar.module.css";
import { Button, Dropdown } from "react-bootstrap";
import SearchIcon from "@mui/icons-material/Search";
import PrintIcon from "@mui/icons-material/Print";
import ImagesearchRollerIcon from "@mui/icons-material/ImagesearchRoller";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import FormatColorTextIcon from "@mui/icons-material/FormatColorText";
import ColorizeIcon from "@mui/icons-material/Colorize";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import AddCommentIcon from "@mui/icons-material/AddComment";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import SpellcheckIcon from "@mui/icons-material/Spellcheck";
import { Input } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import TextIncreaseIcon from "@mui/icons-material/TextIncrease";
import Btnbold from "../buttons/Btnbold";

const Toolsbar = () => {
  const [text, setText] = useState("");
  const textAreaRef = useRef(null);
  // ------------------------ Heading  sub heading -----------------
  const [selectedHeading, setSelectedHeading] = useState("normal");
  const handleHeadingChange = (event) => {
    setSelectedHeading(event.target.value);
  };
  const getHeadingStyle = () => {
    switch (selectedHeading) {
      case "subtitle":
        return { fontSize: "1.2em", fontWeight: "bold" };
      case "heading":
        return { fontSize: "1.5em", fontWeight: "bold" };
      case "title":
        return { fontSize: "2em", fontWeight: "bold" };
      case "Heading 1":
        return { fontSize: "2em", fontWeight: "bolder" };
      case "Heading 2":
        return { fontSize: "1.5em", fontWeight: "bold" };
      case "Heading 3":
        return { fontSize: "1.17em", fontWeight: "bold" };
      case "Heading 4":
        return { fontSize: "1em", fontWeight: "bold" };
      default:
        return {};
    }
  };
  // ------------------------ Heading  sub heading -----------------

  // ------------------------ text area zoom -----------------
  const [zoomLevel, setZoomLevel] = useState(100);
  const handleZoomChange = (event) => {
    setZoomLevel(parseInt(event.target.value));
  };
  const calculateSize = (baseSize, zoom) => {
    return Math.round((baseSize * zoom) / 100);
  };
  // ------------------------ text area zoom -----------------

  // ------------------------ undo & redo -----------------
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const handleChange = (event) => {
    const newText = event.target.value;
    setUndoStack([...undoStack, text]);
    setText(newText);
    setRedoStack([]);
  };
  const handleUndo = () => {
    if (undoStack.length > 0) {
      const prevText = undoStack.pop();
      setRedoStack([...redoStack, text]);
      setText(prevText);
      setUndoStack(undoStack);
    }
  };
  const handleRedo = () => {
    if (redoStack.length > 0) {
      const nextText = redoStack.pop();
      setUndoStack([...undoStack, text]);
      setText(nextText);
      setRedoStack(redoStack);
    }
  };
  // ------------------------ undo & redo -----------------

  // ------------------ font size ---------------------------
  const [fontSize, setFontSize] = useState(16);
  const increaseFontSize = () => {
    setFontSize(fontSize + 2); // Increase font size by 2px
  };
  const decreaseFontSize = () => {
    setFontSize(fontSize - 2); // Decrease font size by 2px
  };
  // ------------------ font bold ---------------------------
  const [isBold, setIsBold] = useState(false);
  const toggleBold = () => {
    setIsBold(!isBold);
  };
  // ------------------ font italic ---------------------------
  const [isItalic, setIsItalic] = useState(false);
  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };

  // ------------------ fontfamily  ---------------------------
  const [fontFamily, setFontFamily] = useState("Arial, sans-serif");
  const handleFontFamilyChange = (event) => {
    setFontFamily(event.target.value);
  };
  // ------------------ font underline  ---------------------------
  const [isUnderline, setIsUnderline] = useState(false);
  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
    const textarea = textareaRef.current;
    const selectionStart = textarea.selectionStart;
    const selectionEnd = textarea.selectionEnd;
    const selectedText = text.substring(selectionStart, selectionEnd);
    const newText = isUnderline
      ? text.replace(selectedText, selectedText)
      : text.replace(selectedText, `${selectedText}`);
    setText(newText);
  };

  const [selectedColor, setSelectedColor] = useState("#000000"); // Default text color black
  const [showColorPicker, setShowColorPicker] = useState(false);
  const handleColorButtonClick = () => {
    setShowColorPicker(!showColorPicker);
  };
  const handleColorChange = (color) => {
    setSelectedColor(color.hex);
    setShowColorPicker(false);
  };
  const white = "public/assets/images/BriBooks.png";
  return (
    // <div className="editor my-1 ">
    //   <div
    //     className={`${styles.editornav} mx-3 rounded rounded-5 px-1 py-2 d-flex`}
    //   >
    //     {/* <div className={`${styles.iconhover} mx-2`}>
    //       <button className="border-0 ">
    //         <span>
    //           <SearchIcon />
    //         </span>
    //       </button>
    //     </div> */}

    //     {/* <div className={`${styles.iconhover} mx-2`}>
    //       <button className="border-0" onClick={handleUndo}>
    //         <span>
    //           <UndoIcon />
    //         </span>
    //       </button>
    //     </div> */}

    //     {/* <div className={`${styles.iconhover} mx-2`}>
    //       <button className="border-0" onClick={handleRedo}>
    //         <span>
    //           <RedoIcon />
    //         </span>
    //       </button>
    //     </div> */}

    //     {/* <div className={`${styles.iconhover} mx-2`}>
    //       <button className="border-0">
    //         <span>
    //           <PrintIcon />
    //         </span>
    //       </button>
    //     </div> */}

    //     {/* --------------------- zoom level size----------------------- */}
    //     {/* <div className={`${styles.dropdown} mx-2`}>
    //       <span>
    //         <select
    //           id="zoomLevel"
    //           value={zoomLevel}
    //           onChange={handleZoomChange}
    //         >
    //           <option value="100">100%</option>
    //           <option value="150">150%</option>
    //           <option value="200">200%</option>
    //           <option value="250">250%</option>
    //           <option value="300">300%</option>
    //           <option value="350">350%</option>
    //           <option value="400">400%</option>
    //         </select>
    //       </span>
    //     </div>
    //     <div class={styles.vl}></div> */}

    //     {/* --------------------- Heading ----------------------- */}
    //     {/* <div className={`${styles.dropdown} mx-2`}>
    //       <span className="">
    //         <select
    //           id="heading"
    //           value={selectedHeading}
    //           onChange={handleHeadingChange}
    //         >
    //           <option value="normal">Normal</option>
    //           <option value="subtitle">Subtitle</option>
    //           <option value="title">Title</option>
    //           <option value="Heading 1">Heading 1</option>
    //           <option value="Heading 2">Heading 2</option>
    //           <option value="Heading 3">Heading 3</option>
    //           <option value="Heading 4">Heading 4</option>
    //         </select>
    //       </span>
    //     </div> */}

    //     {/* --------------------- Font-family ----------------------- */}
    //     {/* <div className={`${styles.iconhover} mx-2`}>
    //       <span className="">
    //         <select
    //           id="fontFamily"
    //           value={fontFamily}
    //           onChange={handleFontFamilyChange}
    //         >
    //           <option value="Arial, sans-serif">Arial</option>
    //           <option value="Open Sans">Open Sans</option>
    //           <option value="Roboto Mono">Roboto Mono</option>
    //           <option value="Courier New, monospace">Cursive</option>
    //           <option value="Georgia">Georgia</option>
    //           <option value="Verdana, sans-serif">Verdana</option>
    //           <option value="system-ui">System-ui</option>
    //         </select>
    //       </span>
    //     </div>
    //     <div class={styles.vl}></div> */}

    //     {/* --------------------- Font-size ----------------------- */}
    //     {/* <div className="div mx-2">
    //       <div className="hstack">
    //         <Button
    //           className={`${styles.fontbtn} me-1 `}
    //           onClick={decreaseFontSize}
    //         >
    //           -
    //         </Button>
    //         <span> {fontSize}px</span>
    //         <Button
    //           className={`${styles.fontbtn} ms-1 `}
    //           onClick={increaseFontSize}
    //         >
    //           +
    //         </Button>
    //       </div>
    //     </div>
    //     <div class={styles.vl}></div> */}

    //     {/* --------------------- bold ----------------------- */}
    //     {/* <div className={`${styles.iconhover}  mx-2`}>
    //       <button className="border-0" onClick={toggleBold}>
    //         <FormatBoldIcon />
    //       </button>
    //     </div> */}

    //     {/* <Btnbold /> */}

    //     {/* --------------------- italic  ----------------------- */}
    //     {/* <div className={`${styles.iconhover}  mx-2`}>
    //       <button className="border-0 " onClick={toggleItalic}>
    //         <FormatItalicIcon />
    //       </button>
    //     </div> */}

    //     {/* --------------------- underline ----------------------- */}
    //     {/* <div className={`${styles.iconhover}  mx-2`}>
    //       <button className="border-0 " onClick={toggleUnderline}>
    //         <span>
    //           <FormatUnderlinedIcon />
    //         </span>
    //       </button>
    //     </div> */}

    //     {/* <div className={`${styles.iconhover}  mx-2`}>
    //       <button
    //         onClick={handleColorButtonClick}
    //         // onClick={() => setShowColorPicker(!showColorPicker)}
    //         style={{ cursor: "pointer", border: "none" }}
    //       >
    //         <FormatColorTextIcon />
    //       </button>
    //     </div> */}

    //     {/* <div className={`${styles.iconhover} mx-2`}>
    //       <button className="border-0 ">
    //         <span>
    //           <ColorizeIcon />
    //         </span>
    //       </button>
    //     </div> */}

    //     {/* <div class={styles.vl}></div>
    //     <div className={`${styles.iconhover} text-black mx-2`}>
    //       <button className="border-0 ">
    //         <InsertLinkIcon />
    //       </button>
    //     </div> */}

    //     {/* <div className={`${styles.iconhover} text-black mx-2`}>
    //       <AddCommentIcon />
    //     </div>
    //     <div className={`${styles.iconhover} text-black mx-2`}>
    //       <InsertPhotoIcon />
    //     </div>
    //     <div class={styles.vl}></div>
    //     <div className={`${styles.iconhover} text-black mx-2`}>
    //       <MoreVertIcon />
    //     </div>
    //     <div className={`${styles.iconhover} text-black ms-auto mx-2`}>
    //       <EditIcon />
    //     </div>
    //     <div class={styles.vl}></div>
    //     <div className={`${styles.iconhover} text-black  mx-2`}>
    //       <KeyboardArrowUpIcon />
    //     </div> */}
    //   </div>

    //   {/* <div
    //     className="my-2 mx-4"
    //     style={{
    //       width: `${calculateSize(300, zoomLevel)}px`,
    //       height: `${calculateSize(150, zoomLevel)}px`,
    //     }}
    //   >
    //     {showColorPicker && (
    //       <div
    //         style={{ position: "absolute", zIndex: 9999, right: 20 }}
    //         className="border border-2 p-2"
    //       >
    //         <CirclePicker color={selectedColor} onChange={handleColorChange} />
    //       </div>
    //     )}
    //     <textarea
    //       value={text}
    //       onChange={handleChange}
    //       style={{
    //         fontSize: `${fontSize}px`,
    //         fontFamily: fontFamily,
    //         color: selectedColor,
    //         fontWeight: isBold ? "bold" : "normal",
    //         fontStyle: isItalic ? "italic" : "normal",
    //         textDecoration: isUnderline ? "underline" : "none",
    //         width: "1200px",
    //         height: "100%",
    //         resize: "none",
    //         ...getHeadingStyle(),
    //       }}
    //       ref={textAreaRef}
    //     />
    //   </div> */}

    // </div>
    <Btnbold white={white} />
  );
};

export default Toolsbar;
