export interface Word {
  word: string;
  hint?: string;
}

export interface GameState {
  theme: Theme | null;
  currentWord: Word | null;
  scrambledLetters: string[];
  selectedLetters: string[];
  level: number;
  wordsCount: number;
  timeLeft: number;
  isPlaying: boolean;
  skipsLeft: number;
  lastWord: string | null;
  correctWordsCount: number;
}

export type Theme = "animals" | "cities" | "food" | "verbs" | "objects";

export interface GameActions {
  startGame: (selectedTheme: Theme) => void;
  handleLetterClick: (index: number) => void;
  handleDelete: () => void;
  checkWord: () => void;
  skipWord: () => void;
  resetLetters: () => void;
  handleGiveUp: () => void;
  resetGame: () => void;
} 