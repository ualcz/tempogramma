import { useCallback } from 'react';
import { scrambleWord } from '@/data/words';
import { TOAST_MESSAGES, TIME_BONUS } from '@/constants/game';
import { Theme, Word } from '@/types/game';

interface UseWordManagementProps {
  currentWord: Word | null;
  theme: Theme | null;
  level: number;
  selectedLetters: string[];
  scrambledLetters: string[];
  skipsLeft: number;
  correctWordsCount: number;
  setWordsCount: (value: number | ((prev: number) => number)) => void;
  setTimeLeft: (value: number | ((prev: number) => number)) => void;
  setCorrectWordsCount: (value: number) => void;
  checkLevelProgress: (correctWords: number) => void;
  loadNewWord: (theme: Theme, level: number) => void;
  setScrambledLetters: (value: string[]) => void;
  setSelectedLetters: (value: string[]) => void;
  setSkipsLeft: (value: number | ((prev: number) => number)) => void;
  toast: (props: any) => void;
}

export const useWordManagement = ({
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
}: UseWordManagementProps) => {
  const handleLetterClick = useCallback((index: number) => {
    const letter = scrambledLetters[index];
    const newScrambled = [...scrambledLetters];
    newScrambled[index] = "";
    setScrambledLetters(newScrambled);
    setSelectedLetters([...selectedLetters, letter]);
  }, [scrambledLetters, setScrambledLetters, selectedLetters, setSelectedLetters]);

  const handleDelete = useCallback(() => {
    if (selectedLetters.length > 0) {
      const lastLetter = selectedLetters[selectedLetters.length - 1];
      const newSelected = selectedLetters.slice(0, -1);
      setSelectedLetters(newSelected);
      
      const emptyIndex = scrambledLetters.indexOf("");
      const newScrambled = [...scrambledLetters];
      if (emptyIndex !== -1) {
        newScrambled[emptyIndex] = lastLetter;
      } else {
        newScrambled.push(lastLetter);
      }
      setScrambledLetters(newScrambled);
    }
  }, [selectedLetters, scrambledLetters, setSelectedLetters, setScrambledLetters]);

  const checkWord = useCallback(() => {
    if (!currentWord) return;
    
    if (selectedLetters.length !== currentWord.word.length) {
      toast({
        variant: "destructive",
        ...TOAST_MESSAGES.INCOMPLETE_WORD
      });
      return;
    }
    
    const attempt = selectedLetters.join("");
    if (attempt === currentWord.word) {
      setWordsCount(count => count + 1);
      setTimeLeft(time => time + TIME_BONUS);
      
      const newCorrectWords = correctWordsCount + 1;
      setCorrectWordsCount(newCorrectWords);
      checkLevelProgress(newCorrectWords);
      
      if (theme) {
        loadNewWord(theme, level);
      }
    } else {
      toast({
        variant: "destructive",
        ...TOAST_MESSAGES.INCORRECT_WORD
      });
      if (currentWord) {
        const scrambled = scrambleWord(currentWord.word);
        setScrambledLetters(scrambled.split(""));
        setSelectedLetters([]);
      }
    }
  }, [
    currentWord,
    selectedLetters,
    correctWordsCount,
    theme,
    level,
    toast,
    setWordsCount,
    setTimeLeft,
    setCorrectWordsCount,
    checkLevelProgress,
    loadNewWord,
    setScrambledLetters,
    setSelectedLetters
  ]);

  const skipWord = useCallback(() => {
    if (skipsLeft > 0 && theme) {
      setSkipsLeft(prev => prev - 1);
      loadNewWord(theme, level);
      toast({
        ...TOAST_MESSAGES.SKIPPED_WORD,
        description: TOAST_MESSAGES.SKIPPED_WORD.description(skipsLeft - 1)
      });
    } else {
      toast({
        variant: "destructive",
        ...TOAST_MESSAGES.NO_SKIPS
      });
    }
  }, [skipsLeft, theme, level, toast, setSkipsLeft, loadNewWord]);

  const resetLetters = useCallback(() => {
    if (currentWord) {
      const scrambled = scrambleWord(currentWord.word);
      setScrambledLetters(scrambled.split(""));
      setSelectedLetters([]);
    }
  }, [currentWord, setScrambledLetters, setSelectedLetters]);

  return {
    handleLetterClick,
    handleDelete,
    checkWord,
    skipWord,
    resetLetters
  };
}; 