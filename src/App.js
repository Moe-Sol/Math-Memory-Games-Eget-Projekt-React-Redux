import './App.css';
import FormulasCards from './components/FormulasCards';
import ResultsCards from './components/ResultsCards';
import GameFinished from './components/GameFinished';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'

import React, { useEffect, useState } from 'react';
import { sameCards, gameFinished, differentCards } from './actions/action';

function App() {
  const dispatch = useDispatch()

  const [formulaOrResult, setFormulaOrResult] = useState('')

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
    console.log(allSpan)
    if (stateFirstReducer.choosedCardsValue[0] !== stateFirstReducer.choosedCardsValue[1] && stateFirstReducer.choosedCardsValue[1] !== undefined) {
      setTimeout(() => {
        allSpan[firstClassFrontNum].className = 'front flip';
        allSpan[firstClassBacktNum].className = 'back';
        allSpan[secondClassFronttNum].className = 'front flip';
        allSpan[secondClassBacktNum].className = 'back';
        dispatch(differentCards())
        setFormulaOrResult('')

      }, 1000);
    }
    else if (stateFirstReducer.choosedCardsValue[0] == stateFirstReducer.choosedCardsValue[1] && stateFirstReducer.choosedCardsValue[1] !== undefined) {
      let firstCardId = allSpan[firstClassFrontNum].parentElement;
      let secondCardId = allSpan[secondClassFronttNum].parentElement;

      firstCardId.style.pointerEvents = 'none'
      secondCardId.style.pointerEvents = 'none'

      setFormulaOrResult('')
      dispatch(sameCards(firstCardId.id, secondCardId.id))

    }
  })


  useEffect(() => {
    if (stateFirstReducer.allSameCards.length === stateFirstReducer.allCards.length) {
      dispatch(gameFinished(true))
    }
  })
  return (
    <div className='allCardsContainer'>
      <section className="memory-cards">
        {stateFirstReducer.gameFinished ? <GameFinished /> :
          stateFirstReducer.allCards.map((card, index) => {
            if (index < 10) {
              return (
                <FormulasCards theCard={card} key={index} id={index} className='class-Formulas' cartText='Formula' setFormulaOrResult={setFormulaOrResult} formulaOrResult={formulaOrResult} />
              )
            }
          })
        }
      </section>
      <section className="memory-cards">
        {stateFirstReducer.gameFinished ? <GameFinished /> :
          stateFirstReducer.allCards.map((card, index) => {
            if (index > 9) {
              return (
                <ResultsCards theCard={card} key={index} id={index} className='class-Results' cartText='Result'
                  setFormulaOrResult={setFormulaOrResult} formulaOrResult={formulaOrResult} />
              )
            }
          })
        }
      </section>

    </div>
  );
}

export default App;
