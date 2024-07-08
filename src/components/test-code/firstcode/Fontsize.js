import React, { useState, useRef } from "react";

const Fontsize = () => {
  //   const [fontSize, setFontSize] = useState(10);
  //   const handleChange = (e) => {
  //     setFontSize(parseInt(e.target.value));
  //   };

  const [text, setText] = useState("");
  const [fontSize, setFontSize] = useState(20);
  const [fontFamily, setFontFamily] = useState("Arial");
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [textColor, setTextColor] = useState("#000000");
  const [highlightColor, setHighlightColor] = useState("#FFFFFF");
  const [textAlign, setTextAlign] = useState("left");
  const [lineHeight, setLineHeight] = useState(1.5);
  const [paragraphSpacing, setParagraphSpacing] = useState(10);
  // const [bulletType, setBulletType] = useState("circle");
  // const [numberedListType, setNumberedListType] = useState("1");
  // const textareaRef = useRef(null);

  const handleChange = (event) => {
    const newText = event.target.value;
    setText(newText);
  };
  const handleFontSizeChange = (event) => {
    const selectedFontSize = parseInt(event.target.value);
    setFontSize(selectedFontSize);
  };
  const handleFontFamilyChange = (event) => {
    const selectedFontFamily = event.target.value;
    setFontFamily(selectedFontFamily);
  };
  const toggleBold = () => {
    setIsBold(!isBold);
  };
  const toggleItalic = () => {
    setIsItalic(!isItalic);
  };
  const toggleUnderline = () => {
    setIsUnderline(!isUnderline);
  };
  const handleTextColorChange = (event) => {
    const selectedColor = event.target.value;
    setTextColor(selectedColor);
  };
  const handleHighlightColorChange = (event) => {
    const selectedColor = event.target.value;
    setHighlightColor(selectedColor);
  };
  const handleTextAlignChange = (event) => {
    const selectedTextAlign = event.target.value;
    setTextAlign(selectedTextAlign);
  };
  const handleLineHeightChange = (event) => {
    const newLineHeight = parseFloat(event.target.value);
    setLineHeight(newLineHeight);
  };

  const handleParagraphSpacingChange = (event) => {
    const newParagraphSpacing = parseInt(event.target.value);
    setParagraphSpacing(newParagraphSpacing);
  };

  // const handleBulletTypeChange = (event) => {
  //   const selectedBulletType = event.target.value;
  //   setBulletType(selectedBulletType);
  // };
  // const insertBullet = () => {
  //   const bulletMap = {
  //     circle: "\u25E6",
  //     square: "\u25A0",
  //     disc: "\u2022",
  //     // Add more bullet types here as needed
  //   };
  //   const bullet = bulletMap[bulletType];
  //   if (!bullet) return;

  //   const startPosition = textareaRef.current.selectionStart;
  //   const endPosition = textareaRef.current.selectionEnd;
  //   const newText =
  //     text.substring(0, startPosition) +
  //     `${bullet} ` +
  //     text.substring(startPosition, endPosition) +
  //     text.substring(endPosition);
  //   setText(newText);
  //   textareaRef.current.focus();
  //   textareaRef.current.setSelectionRange(startPosition + 2, startPosition + 2);
  // };
  // const handleNumberedListTypeChange = (event) => {
  //   const selectedNumberedListType = event.target.value;
  //   setNumberedListType(selectedNumberedListType);
  // };
  // const insertNumberedList = () => {
  //   const listTypes = {
  //     1: "1",
  //     a: "a",
  //     A: "A",
  //     i: "i",
  //     I: "I",
  //   };

  //   const listType = listTypes[numberedListType];
  //   if (!listType) return;

  //   const startPosition = textareaRef.current.selectionStart;
  //   const endPosition = textareaRef.current.selectionEnd;
  //   const lines = text.substring(0, startPosition).split("\n").length;

  //   let newText = "";
  //   for (let i = 0; i < lines; i++) {
  //     newText += `${i + 1}. `;
  //   }
  //   newText += "\n";

  //   setText(
  //     text.substring(0, startPosition) +
  //       newText +
  //       text.substring(startPosition, endPosition) +
  //       text.substring(endPosition)
  //   );

  //   textareaRef.current.focus();
  //   textareaRef.current.setSelectionRange(
  //     startPosition + newText.length,
  //     startPosition + newText.length
  //   );
  // };

  return (
    <>
      <div className="border">
        <div className="border border-2 text-center">
          <select onChange={handleFontSizeChange}>
            <option value={16}>16</option>
            <option value={20}>20</option>
            <option value={24}>24</option>
            <option value={30}>30</option>
            <option value={40}>40</option>
            <option value={50}>50</option>
            <option value={100}>100</option>
          </select>
          <select onChange={handleFontFamilyChange}>
            <option value="Arial">Arial</option>
            <option value="Times New Roman">Times New Roman</option>
            <option value="Sans-serif">Sans-serif</option>
            <option value="Cursive">Cursive</option>
            <option value="Monospace">Monospace</option>
            <option value="Fantasy">fantasy</option>
            <option value="Source Sans Pro">Source Sans Pro</option>
            <option value="Georgia">Georgia</option>
          </select>
          <button onClick={toggleBold}>{isBold ? "Unbold" : "Bold"}</button>
          <button onClick={toggleItalic}>
            {isItalic ? "Unitalic" : "Italic"}
          </button>
          <button onClick={toggleUnderline}>
            {isUnderline ? "Ununderline" : "Underline"}
          </button>
          <input
            className=""
            type="color"
            value={textColor}
            onChange={handleTextColorChange}
          />
          <input
            type="color"
            value={highlightColor}
            onChange={handleHighlightColorChange}
          />
          <select onChange={handleTextAlignChange} value={textAlign}>
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
            <option value="justify">Justify</option>
          </select>
          <label>Line Height:</label>
          <input
            type="number"
            value={lineHeight}
            onChange={handleLineHeightChange}
            step={0.1}
            min={1}
            max={3}
          />
          <label>Paragraph Spacing (px):</label>
          <input
            type="number"
            value={paragraphSpacing}
            onChange={handleParagraphSpacingChange}
            step={5}
            min={0}
            max={50}
          />
          {/* <select onChange={handleBulletTypeChange} value={bulletType}>
          <option value="circle">Circle</option>
          <option value="square">Square</option>
          <option value="disc">Disc</option>

        </select>
        <button onClick={insertBullet}>Bulleted List</button>

        <select
          onChange={handleNumberedListTypeChange}
          value={numberedListType}
        >
          <option value="1">1, 2, 3, ...</option>
          <option value="a">a, b, c, ...</option>
          <option value="A">A, B, C, ...</option>
          <option value="i">i, ii, iii, ...</option>
          <option value="I">I, II, III, ...</option>
        </select> */}
          {/* <button onClick={insertNumberedList}>Numbered List</button> */}
          <br />
        </div>

        <div className="border border-2 text-center">
          <textarea
            // ref={textareaRef}
            style={{
              fontSize: `${fontSize}px`,
              fontFamily: `${fontFamily}`,
              fontWeight: isBold ? "bold" : "normal",
              fontStyle: isItalic ? "italic" : "normal",
              textDecoration: isUnderline ? "underline" : "none",
              color: textColor,
              backgroundColor: highlightColor,
              textAlign: textAlign,
              lineHeight: lineHeight,
              marginBottom: `${paragraphSpacing}px`,
            }}
            value={text}
            onChange={handleChange}
            rows={10}
            cols={80}
            placeholder="Enter your text here..."
          />
        </div>
      </div>
    </>
  );
};

export default Fontsize;
