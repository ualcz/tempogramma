
import React, { useEffect } from "react";

interface WordDisplayProps {
  letters: string[];
  onLetterClick: (index: number) => void;
  isAnimating?: boolean;
  onVerify?: () => void;
  onDelete?: () => void;
}

export const WordDisplay: React.FC<WordDisplayProps> = ({ 
  letters, 
  onLetterClick,
  isAnimating = false,
  onVerify,
  onDelete,
}) => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      const pressedKey = event.key.toUpperCase();
      const letterIndex = letters.findIndex(
        (letter, index) => letter.toUpperCase() === pressedKey && letter !== ""
      );
      
      if (letterIndex !== -1) {
        onLetterClick(letterIndex);
      }
    };

    const handleSpecialKeys = (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        onVerify?.();
      } else if (event.key === "Backspace" || event.key === "Delete") {
        event.preventDefault();
        onDelete?.();
      }
    };

    window.addEventListener("keypress", handleKeyPress);
    window.addEventListener("keydown", handleSpecialKeys);
    return () => {
      window.removeEventListener("keypress", handleKeyPress);
      window.removeEventListener("keydown", handleSpecialKeys);
    };
  }, [letters, onLetterClick, onVerify, onDelete]);

  return (
    <div className="flex flex-wrap justify-center gap-2 mb-4">
      {letters.map((letter, index) => (
        <button
          key={`${letter}-${index}`}
          onClick={() => onLetterClick(index)}
          disabled={letter === ""}
          className={`
            w-12 h-12 flex items-center justify-center
            text-2xl font-bold rounded-lg
            ${isAnimating 
              ? 'bg-blue-100 text-blue-800 hover:bg-blue-200' 
              : 'bg-blue-600 text-white'}
            shadow-md
            transition-all duration-300
            hover:scale-110
            active:scale-95
            ${isAnimating ? "animate-letter-bounce" : ""}
            ${letter === "" ? "opacity-0 cursor-default" : "opacity-100 cursor-pointer"}
          `}
        >
          {letter}
        </button>
      ))}
    </div>
  );
};
