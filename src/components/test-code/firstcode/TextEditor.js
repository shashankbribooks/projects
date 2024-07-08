import { useState, useRef } from 'react';
import Typo from 'typo-js';

const TextEditor = () => {
  const [content, setContent] = useState('');
  const textareaRef = useRef(null);
  const [fontSize, setFontSize] = useState(16);
  const [fontFamily, setFontFamily] = useState('Arial');
  const [fontColor, setFontColor] = useState('#000000');
  const [backgroundColor, setBackgroundColor] = useState('#ffffff');
  const [undoStack, setUndoStack] = useState([]);
  const [redoStack, setRedoStack] = useState([]);
  const [spellingErrors, setSpellingErrors] = useState([]);
  const typo = new Typo('en_US');

  const handleFormat = (format) => {
    const selectionStart = textareaRef.current.selectionStart;
    const selectionEnd = textareaRef.current.selectionEnd;
    const selectedText = content.substring(selectionStart, selectionEnd);

    let newText = content;
    switch (format) {
      // Existing formatting cases
      case 'bold':
      case 'italic':
      case 'underline':
      case 'left-align':
      case 'center-align':
      case 'right-align':
      case 'justify':
      case 'bulleted-list':
      case 'numbered-list':
        // Handle existing formatting options
        break;
      case 'font-color':
        newText =
          `<span style="color: ${fontColor};">${selectedText}</span>`;
        break;
      case 'background-color':
        newText =
          `<span style="background-color: ${backgroundColor};">${selectedText}</span>`;
        break;
      default:
        break;
    }

    setContent(
      content.substring(0, selectionStart) +
      newText +
      content.substring(selectionEnd)
    );

    // Push current state to undo stack
    setUndoStack([...undoStack, content]);
    // Clear redo stack
    setRedoStack([]);
    // Check spelling errors
    checkSpellingErrors();
  };

  const checkSpellingErrors = () => {
    const text = textareaRef.current.value;
    const words = text.split(/\s+/);
    const errors = [];
    words.forEach(word => {
      if (!typo.check(word)) {
        errors.push(word);
      }
    });
    setSpellingErrors(errors);
  };

  const handleUndo = () => {
    if (undoStack.length === 0) return;

    const currentContent = content;
    const previousContent = undoStack.pop();
    setContent(previousContent);
    // Push current state to redo stack
    setRedoStack([...redoStack, currentContent]);
    // Check spelling errors
    checkSpellingErrors();
  };

  const handleRedo = () => {
    if (redoStack.length === 0) return;

    const currentContent = content;
    const nextContent = redoStack.pop();
    setContent(nextContent);
    // Push current state to undo stack
    setUndoStack([...undoStack, currentContent]);
    // Check spelling errors
    checkSpellingErrors();
  };

  const handleFontSizeChange = (e) => {
    setFontSize(parseInt(e.target.value));
  };

  const handleFontFamilyChange = (e) => {
    setFontFamily(e.target.value);
  };

  const handleFontColorChange = (e) => {
    setFontColor(e.target.value);
  };

  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  };

  return (
    <div>
      <div>
        <button onClick={() => handleFormat('bold')}>Bold</button>
        <button onClick={() => handleFormat('italic')}>Italic</button>
        <button onClick={() => handleFormat('underline')}>Underline</button>
      </div>
      <div>
        <button onClick={() => handleFormat('left-align')}>Left Align</button>
        <button onClick={() => handleFormat('center-align')}>Center Align</button>
        <button onClick={() => handleFormat('right-align')}>Right Align</button>
        <button onClick={() => handleFormat('justify')}>Justify</button>
      </div>
      <div>
        <button onClick={() => handleFormat('bulleted-list')}>Bulleted List</button>
        <button onClick={() => handleFormat('numbered-list')}>Numbered List</button>
      </div>
      <div>
        <label htmlFor="fontSize">Font Size:</label>
        <input type="number" id="fontSize" value={fontSize} onChange={handleFontSizeChange} />
      </div>
      <div>
        <label htmlFor="fontFamily">Font Family:</label>
        <select id="fontFamily" value={fontFamily} onChange={handleFontFamilyChange}>
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      <div>
        <label htmlFor="fontColor">Font Color:</label>
        <input type="color" id="fontColor" value={fontColor} onChange={handleFontColorChange} />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input type="color" id="backgroundColor" value={backgroundColor} onChange={handleBackgroundColorChange} />
      </div>
      <button onClick={handleUndo} disabled={undoStack.length === 0}>Undo</button>
      <button onClick={handleRedo} disabled={redoStack.length === 0}>Redo</button>
      <br />
      <textarea
        ref={textareaRef}
        rows="10"
        cols="50"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ fontSize: `${fontSize}px`, fontFamily: fontFamily }}
        placeholder="Start typing..."
      />
      <div>
        <h3>Spelling Errors:</h3>
        <ul>
          {spellingErrors.map((error, index) => (
            <li key={index}>{error}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TextEditor;
