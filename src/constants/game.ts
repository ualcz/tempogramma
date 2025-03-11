export const INITIAL_TIME = 30;
export const TIME_BONUS = 2;
export const INITIAL_SKIPS = 3;
export const WORDS_PER_LEVEL = 5;
export const MAX_LEVEL = 5;

export const TOAST_MESSAGES = {
  INCOMPLETE_WORD: {
    title: 'Palavra Incompleta',
    description: 'Use todas as letras antes de verificar!'
  },
  INCORRECT_WORD: {
    title: 'Palavra Incorreta',
    description: 'Tente novamente!'
  },
  TIME_UP: {
    title: 'Tempo Esgotado!',
    description: (word: string) => `A palavra correta era: ${word}`
  },
  SKIPPED_WORD: {
    title: 'Palavra Pulada',
    description: (skipsLeft: number) => `Você tem ${skipsLeft} pulos restantes`
  },
  NO_SKIPS: {
    title: 'Sem Pulos',
    description: 'Você não tem mais pulos disponíveis!'
  },
  GIVE_UP: {
    title: 'Desistência',
    description: 'Você desistiu do jogo!'
  }
} as const; 