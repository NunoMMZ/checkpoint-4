import './App.css';
import {useState} from 'react';
import {GameStateContext} from './context/context'
import Navbar from './components/navbar/navbar';
import Menu from './components/menu/menu';


export default function App() {
  const [gameState, setGameState] = useState("")

  return (
    <div className="App">
      <Navbar />
      <GameStateContext.Provider value={{gameState, setGameState}}>
      {gameState === "menu" && <Menu />}
      </GameStateContext.Provider>
    </div>
  );
}


