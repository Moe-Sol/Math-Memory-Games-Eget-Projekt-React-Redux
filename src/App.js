import './App.css';
import MemoryCard from './components/MemoryCard';
import GameFinished from './components/GameFinished';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

import React, { useEffect } from 'react';
import { sameCards, gameFinished, differentCards } from './actions/action';

function App() {
  const dispatch = useDispatch()

  const stateFirstReducer = useSelector(state => {
    // console.log(state)
    return state.firstReducer
  })

  useEffect(() => {
    let firstClassFrontNum = (stateFirstReducer.choosedCardsId[0] * 2)
    let firstClassBacktNum = ((stateFirstReducer.choosedCardsId[0] * 2) + 1)
    let secondClassFronttNum = (stateFirstReducer.choosedCardsId[1] * 2)
    let secondClassBacktNum = ((stateFirstReducer.choosedCardsId[1] * 2) + 1)
    let allSpan = document.querySelectorAll('span')

    if (stateFirstReducer.choosedCardsValue[0] !== stateFirstReducer.choosedCardsValue[1] && stateFirstReducer.choosedCardsValue[1] !== undefined) {
      setTimeout(() => {
        allSpan[firstClassFrontNum].className = 'front flip';
        allSpan[firstClassBacktNum].className = 'back';
        allSpan[secondClassFronttNum].className = 'front flip';
        allSpan[secondClassBacktNum].className = 'back';
        dispatch(differentCards())
      }, 1000);
    }
    else if (stateFirstReducer.choosedCardsValue[0] == stateFirstReducer.choosedCardsValue[1] && stateFirstReducer.choosedCardsValue[1] !== undefined) {
      let firstCardId = allSpan[firstClassFrontNum].parentElement;
      let secondCardId = allSpan[secondClassFronttNum].parentElement;

      firstCardId.style.pointerEvents = 'none'
      secondCardId.style.pointerEvents = 'none'


      dispatch(sameCards(firstCardId.id, secondCardId.id))

    }
  })


  useEffect(() => {
    if (stateFirstReducer.allSameCards.length === stateFirstReducer.allCards.length) {
      dispatch(gameFinished(true))
    }
  })

  return (
    <section className="memory-cards">
      {stateFirstReducer.gameFinished ? <GameFinished /> :
        stateFirstReducer.allCards.map((card, index) => (
          <MemoryCard allCard={card} key={index} id={index} />
        ))
      }
    </section>
  );
}

export default App;
