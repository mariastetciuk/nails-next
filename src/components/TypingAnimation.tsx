'use client'
import { useState, useEffect } from 'react';
type TypingAnimationProp = {
    words: Array<string>
}

const TypingAnimation = ({ words }: TypingAnimationProp) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentWord, setCurrentWord] = useState('');

  useEffect(() => {
    const typeAndErase = async () => {
      const word = words[currentWordIndex];

      for (let i = 0; i <= word.length; i++) {
        setCurrentWord(word.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      await new Promise((resolve) => setTimeout(resolve, 2000));

      for (let i = word.length; i >= 0; i--) {
        setCurrentWord(word.substring(0, i));
        await new Promise((resolve) => setTimeout(resolve, 100));
      }

      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    };

    typeAndErase();
  }, [currentWordIndex, words]);

  return <div>{currentWord}</div>;
  };

  export default TypingAnimation;
  