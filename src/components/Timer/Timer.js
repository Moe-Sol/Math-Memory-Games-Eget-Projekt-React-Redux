import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setTimer } from '../../actions/action'






function Timer() {
    const dispatch = useDispatch()
    const [timerSeconds, setTimerSeconds] = useState(0)
    const [timerMinutes, setTimerMinutes] = useState(0)
    const [timerHours, setTimerHours] = useState(0)
    const [gameTime, setGameTime] = useState('')
    const [intervalId, setIntervalId] = useState('')

    const finishState = useSelector(state => state.firstReducer.gameFinished);

    function overTen(x) {
        return (x < 10) ? '0' + x.toString() : x.toString();
    }



    function FunTest() {
        setTimerSeconds((timerS) => timerS + 1)

    }


    useEffect(() => {
        let intervalId = setInterval(FunTest, 1000);
        setIntervalId(intervalId)

    }, []);


    useEffect(() => {
        if (timerSeconds === 60) {
            setTimerSeconds(0)
            setTimerMinutes((timerM) => timerM + 1)
        }

        if (timerMinutes === 60) {
            setTimerSeconds(0)
            setTimerMinutes(0)
            setTimerHours((timerH) => timerH + 1)
        }


        if (finishState) {
            let currentTime = new Date().toLocaleString('en-US', { hour12: true });
            clearInterval(intervalId)
            dispatch(setTimer(gameTime, currentTime))

        }

        setGameTime(overTen(timerHours) + ':' + overTen(timerMinutes) + ':' + overTen(timerSeconds))

        return function cleanup() {
            setIntervalId('')
        }

    }, [timerSeconds]);

    return (
        <div>
            <h1>{gameTime}</h1>
        </div>
    );
}

export default Timer;