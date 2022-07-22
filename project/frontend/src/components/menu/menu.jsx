import {useContext} from 'react'
import { GameStateContext } from '../../context/context'

function Menu () {
    const {GameState, setGameState, userName, setUserName} = useContext(GameStateContext)
    
    return (
        <div className="Menu">
        <label>Enter your name:</label>
        <input type='text' placeholder="Ex. John Smith" onChange={(event) => {
            setUserName(event.target.value);
        }}
        />
         <button 
         onClick={()=> {
             setGameState('playing');
             }}
             >
                Start Quiz
            </button>
         </div>
    );
}

export default Menu;