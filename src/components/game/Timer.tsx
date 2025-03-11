
import React from "react";
import { Clock } from "lucide-react";

interface TimerProps {
  timeLeft: number;
  maxTime: number;
  isFreeze: boolean;
}

export const Timer: React.FC<TimerProps> = ({ timeLeft, maxTime, isFreeze }) => {
  const percentage = (timeLeft / maxTime) * 100;

  // Determinar a cor com base no tempo restante
  const getTimerColor = () => {
    if (isFreeze) return "bg-blue-400";
    if (percentage > 60) return "bg-green-500";
    if (percentage > 30) return "bg-yellow-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full max-w-md mx-auto mb-8">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium text-gray-600">Tempo Restante</span>
        <div className="flex items-center">
          <Clock className="w-4 h-4 mr-1 text-gray-600" />
          <span className="text-sm font-bold">
            {isFreeze ? "Congelado!" : `${Math.ceil(timeLeft)}s`}
          </span>
        </div>
      </div>

      {/* Customizando a barra de progresso */}
      <div className="relative w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`absolute left-0 top-0 h-full rounded-full transition-all duration-300 ${getTimerColor()}`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};
