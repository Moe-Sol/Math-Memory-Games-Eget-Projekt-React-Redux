import React, { useState } from 'react';
import styles from './gameFinish.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { removeAccess, gameFinished } from '../../actions/action'
import CardsFactory from '../../reducer/cardsFactory'
import infoIcon from '../../businessman.svg'
import Info from '../Info/Info'
import audioClick from '../../sounds/click1.mp3'
import audioAccept from '../../sounds/Accept.mp3'
import audioWrong from '../../sounds/wrong2.mp3'


function GameFinished(props) {
    const [aktiv, setAktiv] = useState('')

    const stateSecondReducer = useSelector(state => {
        return state.secondReducer
    })

    const stateFirstReducer = useSelector(state => {
        return state.firstReducer
    })
    let history = useHistory()
    const dispatch = useDispatch()

    const [toggleInfo, setToggleInfo] = useState('')

    function saveResult() {
        let result = {
            timesTable: stateFirstReducer.MultiplicationNumber,
            gameTime: stateSecondReducer.gameTime,
            currentTime: stateSecondReducer.currentTime
        }

        let DataFromStorage = localStorage.getItem('Game Results');
        let oldData = JSON.parse(DataFromStorage);
        if (DataFromStorage) {
            if (oldData[oldData.length - 1].currentTime !== result.currentTime) {
                localStorage.setItem('Game Results', JSON.stringify([...oldData, result]));
                let audio = new Audio(audioAccept)
                audio.play();
                alert(' Your result is saved now')
         
            }
            else {
                let audio = new Audio(audioWrong);
                audio.play();
                alert(' Your result is already saved!')}
        } else localStorage.setItem('Game Results', JSON.stringify([result]));

    }


    function goToStart() {
        let audio = new Audio(audioAccept)
        audio.play();
        history.push('/start');
        dispatch(removeAccess());
        dispatch(gameFinished(false));

    }

    function tryAgain() {
        let audio = new Audio(audioAccept)
        audio.play();
        setAktiv(true);
        dispatch(removeAccess());
        dispatch(gameFinished(false));
        props.textMessage('')
    }

    function toggleInfoFun() {
        let audio = new Audio(audioClick)
        audio.play();
        setToggleInfo(true)
        props.textMessage('')
    }


    return (
        <>
            {aktiv ? <CardsFactory /> :
                <div className={styles.container}>
                    <header>
                        <div onClick={toggleInfoFun}>
                            <img src={infoIcon}></img>
                        </div>
                        <h1> Multiplication Memory Game For Kids</h1>
                    </header>
                    {toggleInfo ? <Info toggle={setToggleInfo} /> :

                        <main>
                            <div>
                                <h1> Well done, You win! and your time is  {stateSecondReducer.gameTime}</h1>
                            </div>

                            <div className={styles.buttonWrapper}>
                                <button onClick={saveResult}> Save my result for this game!</button>
                                <button onClick={tryAgain}> Try to get better result!</button>

                                <button onClick={goToStart}> Go to start page</button>
                            </div>
                        </main>

                    }
                </div>}
        </>
    );
}

export default GameFinished;