import './App.css';
import {useState} from 'react';
import {GameStateContext} from './context/context'
import Menu from './components/menu/menu';
import Quiz from './components/play/quiz';


export default function App() {
  const [gameState, setGameState] = useState("")
  const [username, setUsername] = useState("")

  return (
    <div className="App">
      
      <GameStateContext.Provider value={{gameState, setGameState, username, setUsername}}>
      {gameState === "menu" && <Menu />}
      {gameState === "playing" && <Quiz />}
      </GameStateContext.Provider>
    </div>
  );
}


