/**
 * Hook responsável por gerenciar todo o estado do jogo.
 * Mantém e atualiza o estado global do jogo, incluindo tema,
 * palavra atual, letras, nível, pontuação e tempo.
 * 
 * @returns {GameState & GameStateActions & { toast: typeof toast }} 
 * Retorna um objeto combinando o estado do jogo, ações para modificá-lo
 * e a função toast para feedback visual.
 */
import { useState, useCallback, useMemo } from "react";
import { Theme, WordData, getRandomWord, scrambleWord } from "../data/words";
import { toast } from "../hooks/use-toast";
import { INITIAL_TIME, TIME_BONUS, INITIAL_SKIPS, WORDS_PER_LEVEL } from "../constants/game";

interface GameState {
  theme: Theme | null;
  currentWord: WordData | null;
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

interface GameStateActions {
  setTheme: (theme: Theme | null) => void;
  setCurrentWord: (word: WordData | null) => void;
  setScrambledLetters: (letters: string[]) => void;
  setSelectedLetters: (letters: string[]) => void;
  setLevel: (level: number) => void;
  setWordsCount: (count: number) => void;
  setTimeLeft: (time: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  setSkipsLeft: (skips: number) => void;
  setLastWord: (word: string | null) => void;
  setCorrectWordsCount: (count: number) => void;
  loadNewWord: (theme: Theme, difficulty: number) => void;
  checkLevelProgress: (newCorrectWords: number) => boolean;
}

export const useGameState = (): GameState & GameStateActions & { toast: typeof toast } => {
  const [theme, setTheme] = useState<Theme | null>(null);
  const [currentWord, setCurrentWord] = useState<WordData | null>(null);
  const [scrambledLetters, setScrambledLetters] = useState<string[]>([]);
  const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
  const [level, setLevel] = useState(1);
  const [wordsCount, setWordsCount] = useState(0);
  const [timeLeft, setTimeLeft] = useState(INITIAL_TIME);
  const [isPlaying, setIsPlaying] = useState(false);
  const [skipsLeft, setSkipsLeft] = useState(INITIAL_SKIPS);
  const [usedWords, setUsedWords] = useState<string[]>([]);
  const [lastWord, setLastWord] = useState<string | null>(null);
  const [correctWordsCount, setCorrectWordsCount] = useState(0);

  const loadNewWord = useCallback((selectedTheme: Theme, difficulty: number) => {
    let newWord: WordData | null = null;
  
    while (!newWord || usedWords.includes(newWord.word)) {
      newWord = getRandomWord(selectedTheme, difficulty);
    }
  
    setCurrentWord(newWord);
    const scrambled = scrambleWord(newWord.word);
    setScrambledLetters(scrambled.split(""));
    setSelectedLetters([]);
  
    setUsedWords(prev => [...prev, newWord.word]);
  }, [usedWords]);

  const checkLevelProgress = useCallback((newCorrectWords: number) => {
    if (newCorrectWords >= WORDS_PER_LEVEL) {
      const newLevel = Math.min(5, level + 1);
      if (newLevel > level) {
        setLevel(newLevel);
        setCorrectWordsCount(0);
        toast({
          title: "Nível Aumentado!",
          description: `Você alcançou o nível ${newLevel}! As palavras serão mais difíceis agora.`,
        });
        return true;
      }
    }
    return false;
  }, [level]);

  const gameState = useMemo(() => ({
    // Estado do jogo
    theme,
    currentWord,
    scrambledLetters,
    selectedLetters,
    level,
    wordsCount,
    timeLeft,
    isPlaying,
    skipsLeft,
    lastWord,
    correctWordsCount,
    // Ações
    setTheme,
    setCurrentWord,
    setScrambledLetters,
    setSelectedLetters,
    setLevel,
    setWordsCount,
    setTimeLeft,
    setIsPlaying,
    setSkipsLeft,
    setLastWord,
    setCorrectWordsCount,
    loadNewWord,
    checkLevelProgress,
    toast
  }), [
    theme,
    currentWord,
    scrambledLetters,
    selectedLetters,
    level,
    wordsCount,
    timeLeft,
    isPlaying,
    skipsLeft,
    lastWord,
    correctWordsCount,
    loadNewWord,
    checkLevelProgress
  ]);

  return gameState;
}; 