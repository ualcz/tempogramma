import React from "react";
import { Button } from "../ui/button";

interface GameOverProps {
  score: number;
  lastWord: string | null;
  onPlayAgain: () => void;
}

export const GameOver: React.FC<GameOverProps> = ({ score, lastWord, onPlayAgain }) => {
  return (
    <div className="text-center animate-fade-in">
      <h1 className="text-4xl font-bold mb-4 text-blue-900">Fim de Jogo!</h1>
      <p className="text-xl mb-4 text-blue-800">Pontuação Final: {score}</p>
      {lastWord && (
        <p className="text-lg mb-8 text-red-600">
          A palavra era: <span className="font-bold">{lastWord}</span>
        </p>
      )}
      <Button 
        onClick={onPlayAgain}
        className="bg-blue-600 hover:bg-blue-700"
      >
        Jogar Novamente
      </Button>
    </div>
  );
};
