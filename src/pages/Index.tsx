import React from "react";
import { GameScreen } from "../components/screens/GameScreen";
import { WelcomeScreen } from "../components/screens/WelcomeScreen";
import { GameOver } from "../components/screens/GameOver";
import { useGame } from "../game/useGame";

const Index = () => {
  const { gameState, actions, INITIAL_TIME } = useGame();
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
  } = gameState;

  const {
    startGame,
    handleLetterClick,
    handleDelete,
    checkWord,
    skipWord,
    resetLetters,
    handleGiveUp,
    resetGame,
  } = actions;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-4">
      {!isPlaying ? (
        <div className="max-w-5xl w-full">
          {timeLeft === 0 ? (
            <GameOver
              score={wordsCount}
              lastWord={lastWord}
              onPlayAgain={resetGame}
            />
          ) : (
            <WelcomeScreen 
              onStartGame={startGame} 
              selectedTheme={theme}
            />
          )}
        </div>
      ) : (
        <div className="max-w-4xl w-full space-y-8">
          <GameScreen
            level={level}
            wordsCount={wordsCount}
            skipsLeft={skipsLeft}
            timeLeft={timeLeft}
            maxTime={INITIAL_TIME}
            selectedLetters={selectedLetters}
            scrambledLetters={scrambledLetters}
            onLetterClick={handleLetterClick}
            onCheck={checkWord}
            onSkip={skipWord}
            onReset={resetLetters}
            onGiveUp={handleGiveUp}
            onDelete={handleDelete}
            isCheckDisabled={currentWord && selectedLetters.length !== currentWord.word.length}
          />
        </div>
      )}
    </div>
  );
};

export default Index;
