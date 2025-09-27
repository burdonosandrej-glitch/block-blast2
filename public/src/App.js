import React, { useState, useEffect } from "react";
import "./App.css";
import MainMenu from "./components/MainMenu";
import GameScreen from "./components/GameScreen";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [currentScreen, setCurrentScreen] = useState('menu'); // 'menu' | 'game'
  const [bestScore, setBestScore] = useState(() => {
    return parseInt(localStorage.getItem('blockBlastBestScore') || '0');
  });

  const handleStartGame = () => {
    setCurrentScreen('game');
  };

  const handleBackToMenu = () => {
    setCurrentScreen('menu');
  };

  const handleUpdateBestScore = (newScore) => {
    if (newScore > bestScore) {
      setBestScore(newScore);
      localStorage.setItem('blockBlastBestScore', newScore.toString());
    }
  };

  return (
    <div className="App min-h-screen">
      {currentScreen === 'menu' ? (
        <MainMenu 
          onStartGame={handleStartGame}
          bestScore={bestScore}
        />
      ) : (
        <GameScreen 
          onBackToMenu={handleBackToMenu}
          bestScore={bestScore}
          onUpdateBestScore={handleUpdateBestScore}
        />
      )}
      <Toaster />
    </div>
  );
}

export default App;
