import { useEffect } from 'react';
import { TOAST_MESSAGES } from '@/constants/game';
import { Word } from '@/types/game';

interface UseGameTimerProps {
  isPlaying: boolean;
  timeLeft: number;
  currentWord: Word | null;
  setTimeLeft: (value: number | ((prev: number) => number)) => void;
  setIsPlaying: (value: boolean) => void;
  setLastWord: (value: string | null) => void;
  toast: (props: any) => void;
}

export const useGameTimer = ({
  isPlaying,
  timeLeft,
  currentWord,
  setTimeLeft,
  setIsPlaying,
  setLastWord,
  toast
}: UseGameTimerProps) => {
  useEffect(() => {
    let timer: number | undefined;
  
    if (isPlaying) {
      timer = window.setInterval(() => {
        setTimeLeft(prevTime => {
          if (prevTime <= 0.1) {
            clearInterval(timer);
            setIsPlaying(false);
            setTimeLeft(0);
  
            if (currentWord) {
              setLastWord(currentWord.word);
              toast({
                variant: "destructive",
                ...TOAST_MESSAGES.TIME_UP,
                description: TOAST_MESSAGES.TIME_UP.description(currentWord.word)
              });
            }
  
            return 0;
          }
          return prevTime - 0.1;
        });
      }, 100);
    }
  
    return () => {
      if (timer) clearInterval(timer);
    };
  }, [isPlaying, timeLeft, setTimeLeft, setIsPlaying, currentWord, setLastWord, toast]);
}; 