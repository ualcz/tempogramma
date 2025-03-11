
import React from "react";
import { Theme } from "../../data/words";
import { AnimatedTitle } from "../shared/AnimatedTitle";
import { ThemeSelector } from "../shared/ThemeSelector";

interface WelcomeScreenProps {
  onStartGame: (theme: Theme) => void;
  selectedTheme: Theme | null;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({
  onStartGame,
  selectedTheme,
}) => {
  return (
    <div className="text-center">
      <AnimatedTitle />
      <div className="mt-8">
        <ThemeSelector onSelect={onStartGame} selectedTheme={selectedTheme} />
      </div>
    </div>
  );
};
