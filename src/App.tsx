import React, { useState } from 'react';
import './App.css';
import initGame from './tools/initGame';
import { Calculous } from './components/Calculous';
import { Progress } from './components/Progress';

function App() {
  const [gameList, setGameList] = useState<Array<Array<number>>>([]);
  const [gameResultList, setGameResultList] = useState<number[]>([]);
  const [gameStep, setGameStep] = useState<number>(0);

  const beginQuizz = () => {
    setGameList(initGame(5));
  }

  const onCalculousResult = (calculousResult: number) => {
    const _gameResultList = [...gameResultList]
    _gameResultList.push(calculousResult);

    setGameResultList(_gameResultList);
    setGameStep(gameStep => gameStep + 1);  
  }

  return (
    <div className="App">
      {gameList.length === 0 ? <div className="Table-init">
        <h1>
          Coucou Cécile !
        </h1>
        <p>
          Voici ton quizz du jour
        </p>
        <div style={{ height: 50 }}></div>
        <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end' }}>
          <button
            onClick={beginQuizz}
          >
            Commence
          </button>
        </div>
      </div> : gameResultList.length === gameList.length ? <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div>
          Ton score
          <h1>
            {gameResultList.map((result, i) => gameList[i][0] * gameList[i][1] === result).filter((value) => value === true).length}/{gameList.length}
          </h1>
        </div>
        {gameList.map((calculousTuple, i) => (<div>
          <p>
            <span>{calculousTuple[0]}</span>
            <span> x </span>
            <span>{calculousTuple[1]}</span>
            <span> = </span>
            <span style={{ textDecoration: `${gameResultList[i] !== (calculousTuple[0] * calculousTuple[1]) ? 'line-through' : ''}`, color: `${gameResultList[i] !== (calculousTuple[0] * calculousTuple[1]) ? 'red' : ''}` }}>{gameResultList[i]}</span>
            {gameResultList[i] !== (calculousTuple[0] * calculousTuple[1]) && <span> ({calculousTuple[0] * calculousTuple[1]})</span>}
          </p>
        </div>))}
      </div> : <div>
        <Progress totalSteps={gameList.length} step={gameStep} />
        <Calculous 
          randomNumberTuple={gameList[gameStep]}
          onCalculousResult={onCalculousResult} 
        />
      </div>}
    </div>
  );
}

export default App;
