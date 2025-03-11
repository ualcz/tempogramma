import React from "react";
import { GameStats } from "../game/GameStats";
import { Timer } from "../game/Timer";
import { GameContainer } from "../game/GameContainer";

interface GameScreenProps {
  level: number;
  wordsCount: number;
  skipsLeft: number;
  timeLeft: number;
  maxTime: number;
  selectedLetters: string[];
  scrambledLetters: string[];
  onLetterClick: (index: number) => void;
  onCheck: () => void;
  onSkip: () => void;
  onReset: () => void;
  onGiveUp: () => void;
  onDelete: () => void;
  isCheckDisabled: boolean;
}

export const GameScreen: React.FC<GameScreenProps> = ({
  level,
  wordsCount,
  skipsLeft,
  timeLeft,
  maxTime,
  selectedLetters,
  scrambledLetters,
  onLetterClick,
  onCheck,
  onSkip,
  onReset,
  onGiveUp,
  onDelete,
  isCheckDisabled,
}) => {
  return (
    <div className="text-center">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-4 rounded-xl shadow-lg mb-6">
        <GameStats level={level} wordsCount={wordsCount} skipsLeft={skipsLeft} />
      </div>
      <Timer timeLeft={timeLeft} maxTime={maxTime} isFreeze={false} />
      <GameContainer
        selectedLetters={selectedLetters}
        scrambledLetters={scrambledLetters}
        onLetterClick={onLetterClick}
        onCheck={onCheck}
        onSkip={onSkip}
        onReset={onReset}
        onGiveUp={onGiveUp}
        onDelete={onDelete}
        skipsLeft={skipsLeft}
        isCheckDisabled={isCheckDisabled}
      />
    </div>
  );
};
