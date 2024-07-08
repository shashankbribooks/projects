// components/TextToSpeech.js

import { useState, useRef, useEffect } from 'react';

const TextToSpeech = ({ text }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(-1);
  const words = text.split(' ');
  const utteranceRef = useRef(null);

  useEffect(() => {
    const handleBoundary = (event) => {
      if (event.name === 'word') {
        setCurrentWordIndex(event.charIndex);
      }
    };

    if (utteranceRef.current) {
      utteranceRef.current.addEventListener('boundary', handleBoundary);
    }

    return () => {
      if (utteranceRef.current) {
        utteranceRef.current.removeEventListener('boundary', handleBoundary);
      }
    };
  }, []);

  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(text);
    utteranceRef.current = utterance;
    utterance.addEventListener('boundary', (event) => {
      if (event.name === 'word') {
        const wordIndex = text.slice(0, event.charIndex).split(' ').length - 1;
        setCurrentWordIndex(wordIndex);
      }
    });

    window.speechSynthesis.speak(utterance);
  };

  return (
    <div >
      <button onClick={handleSpeak}>Speak</button>
      <p>
        {words.map((word, index) => (
          <span key={index} style={{ backgroundColor: index === currentWordIndex ? 'yellow' : 'transparent' }}>
            {word}
          </span>
        ))}
      </p>
    </div>
  );
};

export default TextToSpeech;
