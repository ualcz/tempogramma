
import React from "react";
import { Button } from "../ui/button";
import { SkipForward, Flag, Check, RefreshCw } from "lucide-react";

interface GameActionsProps {
  onCheck: () => void;
  onSkip: () => void;
  onReset: () => void;
  onGiveUp: () => void;
  skipsLeft: number;
  isCheckDisabled: boolean;
}

export const GameActions: React.FC<GameActionsProps> = ({
  onCheck,
  onSkip,
  onReset,
  onGiveUp,
  skipsLeft,
  isCheckDisabled
}) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 mt-8">
      <Button 
        onClick={onCheck} 
        className="bg-blue-600 hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
        disabled={isCheckDisabled}
        size="lg"
      >
        <Check className="w-5 h-5 mr-2" />
        Verificar
      </Button>
      <Button 
        onClick={onSkip} 
        className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 transform hover:scale-105"
        disabled={skipsLeft === 0}
        size="lg"
      >
        <SkipForward className="w-5 h-5 mr-2" />
        Pular ({skipsLeft})
      </Button>
      <Button 
        onClick={onReset} 
        variant="outline" 
        className="border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 transform hover:scale-105"
        size="lg"
      >
        <RefreshCw className="w-5 h-5 mr-2" />
        Reiniciar
      </Button>
      <Button 
        onClick={onGiveUp} 
        variant="destructive"
        className="bg-red-500 hover:bg-red-600 transition-all duration-300 transform hover:scale-105"
        size="lg"
      >
        <Flag className="w-5 h-5 mr-2" />
        Desistir
      </Button>
    </div>
  );
};
