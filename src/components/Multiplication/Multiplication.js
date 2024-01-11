import React, { useState, useEffect } from 'react';
import styles from './multiplication.module.scss'
import { multiplicationNumber } from '../../actions/action';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import CardsFactory from '../../reducer/cardsFactory'
import StorageData from '../StorageData/StorageData';
import infoIcon from '../../businessman.svg'
import Info from '../Info/Info'
import audioClick from '../../sounds/click1.mp3'
import audioAccept from '../../sounds/Accept.mp3'


function Multiplication(props) {
    const [toggleCardsFactory, setToggleCardsFactory] = useState('')
    const [toggleStorageData, setToggleStorageData] = useState('')
    const [toggleInfo, setToggleInfo] = useState('')
    const [allNumber, setAllNumber] = useState([])

    const history = useHistory();
    const dispatch = useDispatch()

    useEffect(() => {
        for (let i = 1; i < 13; i++) {
            setAllNumber(allNumber => [...allNumber, i])
        }
    }, [])




    const number = allNumber.map((number, index) => (
        <div key={index} className={styles.numberContiner} onClick={() => {
            let audio = new Audio(audioAccept)
            audio.play();
            dispatch(multiplicationNumber(number));
            setToggleCardsFactory(true);
        }}>
            <h4>  &#215; {number} </h4>
        </div>))

    function previousResults() {
        let audio = new Audio(audioAccept)
        audio.play();
        setToggleStorageData(true)

    }
    function toggleInfoFun() {
        let audio = new Audio(audioClick)
        audio.play();
        setToggleInfo(true)
    }
    return (
        <div>
            { toggleCardsFactory ? <CardsFactory /> :
                <div className={styles.multiplicationContainer} >
                    <header>
                        <div onClick={toggleInfoFun}>
                            <img src={infoIcon}></img>
                        </div>
                        <h1> Multiplication Memory Game For Kids</h1>
                    </header>


                    {toggleStorageData ? <StorageData toggle={setToggleStorageData} /> : ''}

                    {toggleInfo && !toggleStorageData ? <Info toggle={setToggleInfo} /> :
                        <main>
                            <section className={styles.numbersContainer}>
                                {number}
                            </section>
                            <div className={styles.buttonsWrapper}>
                                <button onClick={previousResults}> See your previous results for multiplication
                            </button>
                                <button onClick={() => {
                                    let audio = new Audio(audioClick)
                                    audio.play();
                                    history.push('/start');
                                }}> Go to start page
                            </button>

                            </div>
                        </main>

                    }
                </div>
            }

        </div>
    );
}

export default Multiplication;