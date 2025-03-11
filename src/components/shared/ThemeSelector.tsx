import React from "react";
import { Button } from "../ui/button";
import { 
  PawPrint, 
  Building, 
  UtensilsCrossed,
  Play,
  Package
} from "lucide-react";
import type { Theme } from "../../data/words";

interface ThemeSelectorProps {
  onSelect: (theme: Theme) => void;
  selectedTheme: Theme | null;
}

export const ThemeSelector: React.FC<ThemeSelectorProps> = ({ onSelect, selectedTheme }) => {
  const themes: { id: Theme; icon: React.ReactNode; label: string; color: string; }[] = [
    { id: "animals", icon: <PawPrint className="w-8 h-8" />, label: "Animais", color: "green" },
    { id: "cities", icon: <Building className="w-8 h-8" />, label: "Cidades", color: "blue" },
    { id: "food", icon: <UtensilsCrossed className="w-8 h-8" />, label: "Comida", color: "orange" },
    { id: "verbs", icon: <Play className="w-8 h-8" />, label: "Verbos", color: "sky" },
    { id: "objects", icon: <Package className="w-8 h-8" />, label: "Objetos", color: "purple" },
  ];

  const getThemeColor = (color: string, isSelected: boolean) => {
    const baseColor = {
      green: "bg-green-500 border-green-600",
      blue: "bg-blue-500 border-blue-600",
      orange: "bg-orange-500 border-orange-600",
      sky: "bg-sky-500 border-sky-600",
      purple: "bg-purple-500 border-purple-600"
    }[color] || "bg-gray-500 border-gray-600";

    return isSelected ? `${baseColor} text-white` : "bg-white text-gray-800 border-gray-200 hover:bg-gray-100";
  };

  return (
    <div className="flex flex-col items-center space-y-6 p-6 w-full">
      <h2 className="text-2xl font-bold text-gray-700">Escolha um tema</h2>
      
      {/* Flex container para manter tudo na mesma linha */}
      <div className="flex justify-center items-center gap-4 flex-wrap w-full max-w-5xl">
        {themes.map(({ id, icon, label, color }) => {
          const isSelected = selectedTheme === id;
          return (
            <Button
              key={id}
              onClick={() => onSelect(id)}
              className={`
                flex flex-col items-center justify-center p-5 h-full min-w-[150px] flex-1
                rounded-xl shadow-md transition-all duration-300
                transform hover:scale-105 hover:shadow-lg
                border-2 ${getThemeColor(color, isSelected)}
              `}
            >
              <div className={`p-3 rounded-full text-white ${isSelected ? "bg-white/20" : getThemeColor(color, true)}`}>
                {icon}
              </div>
              <span className="text-lg font-semibold mt-2">{label}</span>
            </Button>
          );
        })}
      </div>
    </div>
  );
};
