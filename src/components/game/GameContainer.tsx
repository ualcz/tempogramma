import React from "react";
import { WordDisplay } from "./WordDisplay";
import { GameActions } from "./GameActions";

interface GameContainerProps {
  selectedLetters: string[];
  scrambledLetters: string[];
  onLetterClick: (index: number) => void;
  onCheck: () => void;
  onSkip: () => void;
  onReset: () => void;
  onGiveUp: () => void;
  onDelete: () => void;
  skipsLeft: number;
  isCheckDisabled: boolean;
}

export const GameContainer: React.FC<GameContainerProps> = ({
  selectedLetters,
  scrambledLetters,
  onLetterClick,
  onCheck,
  onSkip,
  onReset,
  onGiveUp,
  onDelete,
  skipsLeft,
  isCheckDisabled,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-xl p-8 mb-8 animate-fade-in">
      <div className="mb-6 text-gray-600 font-medium">
        <h3 className="mb-2 text-lg text-blue-800 font-semibold">Palavra:</h3>
        <WordDisplay
          letters={selectedLetters}
          onLetterClick={() => {}}
          isAnimating={false}
          onVerify={onCheck}
          onDelete={onDelete}
        />
      </div>

      <div className="mb-8">
        <WordDisplay
          letters={scrambledLetters}
          onLetterClick={onLetterClick}
          isAnimating={true}
          onVerify={onCheck}
          onDelete={onDelete}
        />
      </div>

      <GameActions
        onCheck={onCheck}
        onSkip={onSkip}
        onReset={onReset}
        onGiveUp={onGiveUp}
        skipsLeft={skipsLeft}
        isCheckDisabled={isCheckDisabled}
      />
    </div>
  );
};
