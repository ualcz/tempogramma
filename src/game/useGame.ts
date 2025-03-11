/**
 * Hook principal que orquestra toda a lógica do jogo.
 * Combina os hooks especializados (timer, gerenciamento de palavras, estado)
 * e fornece uma interface unificada para o jogo.
 * 
 * @returns {Object} Um objeto contendo:
 * - gameState: Estado atual do jogo
 * - actions: Ações disponíveis para interagir com o jogo
 * - INITIAL_TIME: Tempo inicial do jogo
 */
import { useCallback } from 'react';
import { useGameTimer } from './useGameTimer';
import { useWordManagement } from './useWordManagement';
import { useGameState } from './useGameState';
import { INITIAL_TIME, INITIAL_SKIPS, TOAST_MESSAGES } from '../constants/game';
import { Theme } from '@/types/game';

export const useGame = () => {
  const gameState = useGameState();
  const {
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
    loadNewWord,
    correctWordsCount,
    setCorrectWordsCount,
    checkLevelProgress,
    setTheme,
    setScrambledLetters,
    setSelectedLetters,
    setWordsCount,
    setLevel,
    setTimeLeft,
    setIsPlaying,
    setSkipsLeft,
    setLastWord,
    toast
  } = gameState;

  useGameTimer({
    isPlaying,
    timeLeft,
    currentWord,
    setTimeLeft,
    setIsPlaying,
    setLastWord,
    toast
  });

  const wordManagement = useWordManagement({
    currentWord,
    theme,
    level,
    selectedLetters,
    scrambledLetters,
    skipsLeft,
    correctWordsCount,
    setWordsCount,
    setTimeLeft,
    setCorrectWordsCount,
    checkLevelProgress,
    loadNewWord,
    setScrambledLetters,
    setSelectedLetters,
    setSkipsLeft,
    toast
  });

  const startGame = useCallback((selectedTheme: Theme) => {
    setTheme(selectedTheme);
    setLevel(1);
    setWordsCount(0);
    setTimeLeft(INITIAL_TIME);
    setIsPlaying(true);
    setSkipsLeft(INITIAL_SKIPS);
    loadNewWord(selectedTheme, 1);
  }, [setTheme, setLevel, setWordsCount, setTimeLeft, setIsPlaying, setSkipsLeft, loadNewWord]);

  const handleGiveUp = useCallback(() => {
    if (currentWord) {
      setLastWord(currentWord.word);
    }
    setIsPlaying(false);
    setTimeLeft(0);
    toast({
      variant: "destructive",
      ...TOAST_MESSAGES.GIVE_UP
    });
  }, [currentWord, setLastWord, setIsPlaying, setTimeLeft, toast]);

  const resetGame = useCallback(() => {
    setTimeLeft(INITIAL_TIME);
    setLastWord(null);
  }, [setTimeLeft, setLastWord]);

  return {
    gameState: {
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
    },
    actions: {
      startGame,
      ...wordManagement,
      handleGiveUp,
      resetGame,
    },
    INITIAL_TIME,
  };
};