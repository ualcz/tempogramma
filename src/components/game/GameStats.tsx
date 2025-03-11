
import React from "react";
import { Trophy, SkipForward, BrainCircuit } from "lucide-react";

interface GameStatsProps {
  level: number;
  wordsCount: number;
  skipsLeft: number;
}

export const GameStats: React.FC<GameStatsProps> = ({ level, wordsCount, skipsLeft }) => {
  return (
    <div className="flex justify-around items-center">
      <div className="flex flex-col items-center text-white">
        <BrainCircuit className="w-5 h-5 mb-1" />
        <div className="text-sm font-medium">Nível</div>
        <div className="text-2xl font-bold">{level}</div>
      </div>
      
      <div className="flex flex-col items-center text-white">
        <Trophy className="w-5 h-5 mb-1" />
        <div className="text-sm font-medium">Palavras</div>
        <div className="text-2xl font-bold">{wordsCount}</div>
      </div>
      
      <div className="flex flex-col items-center text-white">
        <SkipForward className="w-5 h-5 mb-1" />
        <div className="text-sm font-medium">Pulos</div>
        <div className="text-2xl font-bold">{skipsLeft}</div>
      </div>
    </div>
  );
};
