import React, { useState, useEffect } from 'react';
import styles from './multiplication.module.scss'
import { multiplicationNumber } from '../../actions/action';
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router';
import CardsFactory from '../../reducer/cardsFactory'
import StorageData from '../StorageData/StorageData';

import infoIcon from '../../businessman.svg'

import Info from '../Info/Info'


function Multiplication(props) {
    const [toggleCardsFactory, setToggleCardsFactory] = useState('')
    const [toggleStorageData, setToggleStorageData] = useState('')
    // const [oldDataLocalStorage, setOldDataLocalStorage] = useState('')
    const [toggleInfo, setToggleInfo] = useState('')


    const history = useHistory();

    const dispatch = useDispatch()

    const [allNumber, setAllNumber] = useState([])

    useEffect(() => {
        for (let i = 1; i < 13; i++) {
            setAllNumber(allNumber => [...allNumber, i])
        }
    }, [])




    const number = allNumber.map((number, index) => (
        <div key={index} className={styles.numberContiner} onClick={ () => {
            dispatch(multiplicationNumber(number))
       
            setToggleCardsFactory(true)



        }}>
            <h4>  &#215; {number} </h4>
        </div>))

    function previousResults() {
        // let DataFromStorage = localStorage.getItem('Game Results');
        // let oldData = JSON.parse(DataFromStorage)
        // // console.log('data i local storge ', data)
        // // console.log(data[data.length - 1])
        // if (DataFromStorage) {
        //     console.log(oldData)
        //     setOldDataLocalStorage(oldData)
        setToggleStorageData(true)
    }
    function toggleInfoFun() {
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
                            {/* <div>
                                <h1>Choose times table you want to play! </h1>
                            </div> */}
                            <section className={styles.numbersContainer}>
                                {number}
                            </section>
                            <div className={styles.buttonsWrapper}>
                                <button onClick={previousResults}> See your previous results for multiplication
                            </button>
                                <button onClick={() => history.push('/start')}> Go to start page
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